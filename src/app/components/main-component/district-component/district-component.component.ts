import {Component, Input, OnInit} from '@angular/core';
import {
  AvailableSlotDetails,
  Center, CenterResponse,
  Criteria,
  MinimumAge,
  Session,
  SlotType,
  StateWithDistricts,
  VaccineType
} from '../../../models/models';
import {getDateForNext30Days} from '../../../core/utils/dateUtils';
import {VaccineApiService} from '../../../services/vaccine-api.service';
import {forkJoin} from 'rxjs';

@Component({
  selector: 'app-district-component',
  templateUrl: './district-component.component.html',
  styleUrls: ['./district-component.component.css']
})
export class DistrictComponentComponent implements OnInit {

  @Input() selectedState: StateWithDistricts;
  populatingValues = true;
  districtResults: AvailableSlotDetails[] = [];
  criteria: Criteria = {
    vaccineType: VaccineType.COVAXIN,
    age: MinimumAge.EIGHTEENPLUS,
    slotType: SlotType.FREE
  };

  constructor(private vaccineApiService: VaccineApiService) {
  }

  ngOnInit(): void {
    this.populateData();
  }

  toggleVaccineType(vaccineType: VaccineType): void {
    this.criteria.vaccineType = vaccineType;
  }

  toggleAgeGroup(ageGroup: MinimumAge): void {
    this.criteria.age = ageGroup;
  }

  toggleSlotType(slot: SlotType): void {
    this.criteria.slotType = slot;
  }

  getFutureDate(): string[] {
    return getDateForNext30Days(new Date());
  }

  populateData(): void {
    this.populatingValues = true;
    const dataArray = this.getFutureDate();
    this.selectedState.districts.map(dis => {
      forkJoin(dataArray.map((dateStr) => {
        return this.vaccineApiService.getDistrictDetails(dis.district_id, dateStr);
      })).subscribe((centerResponses: CenterResponse[]) => {
        const allSessionsOfDistrict = centerResponses
          .map(cR => {
            return cR.centers;
          })
          .reduce((accumulator, value) => accumulator.concat(value), [])
          .map(x => x.sessions)
          .reduce((accumulator, value) => accumulator.concat(value), []);

        this.districtResults.push(this.analyzeDistrictSessions(allSessionsOfDistrict, dis.district_name));
      });
    });
  }

  analyzeDistrictSessions(districtSessions: Session[], districtName: string): AvailableSlotDetails {

    return districtSessions.reduce<AvailableSlotDetails>((x, y) => this.getUpdatedSlots(y, x), {
      districtName,
      covaxin18Plus: 0,
      coshield18Plus: 0,
      coshield45Plus: 0,
      covaxin45Plus: 0,
    });
  }

  getUpdatedSlots(y: Session, currentSlots: AvailableSlotDetails): AvailableSlotDetails {
    if (y.vaccine === 'COVISHIELD') {
      if (y.min_age_limit === 45) {
        currentSlots.coshield45Plus = currentSlots.coshield45Plus + y.available_capacity;
      }
      if (y.min_age_limit === 18) {
        currentSlots.coshield18Plus = currentSlots.coshield18Plus + y.available_capacity;
      }
    }
    if (y.vaccine === 'COVAXIN') {
      if (y.min_age_limit === 45) {
        currentSlots.covaxin45Plus = currentSlots.covaxin45Plus + y.available_capacity;
      }
      if (y.min_age_limit === 18) {
        currentSlots.covaxin18Plus = currentSlots.covaxin18Plus + y.available_capacity;
      }
    }
    return currentSlots;
  }

  // private populateDataAsPerCriteria(): void {
  //   this.selectedState.districts.map(dis => this.getDataWithCriteria())
  // }
}
