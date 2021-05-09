import {Component, OnInit} from '@angular/core';
import {VaccineApiService} from '../../services/vaccine-api.service';
import {State, StateResponse, StateWithDistricts} from '../../models/models';
import {getDateForNext30Days} from '../../core/utils/dateUtils';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {

  statesResponse: StateResponse;
  showStates = true;
  selectedState: State;
  showDistricts = false;
  stateWithDistricts: StateWithDistricts;


  constructor(private vaccineApiService: VaccineApiService) {
  }

  ngOnInit(): void {
    const savedStated = localStorage.getItem('states');
    if (savedStated) {
      this.statesResponse = JSON.parse(savedStated);
    } else {
      this.vaccineApiService.getStates().subscribe((res) => {
        this.statesResponse = res;
        localStorage.setItem('states', JSON.stringify(res));
      });
    }
  }

  stateSelected(state: State): void {
    this.showStates = false;
    this.showDistricts = true;
    this.selectedState = state;
  }

  districtsSelected(stateWithDistricts: StateWithDistricts): void {
    this.showDistricts = false;
    this.stateWithDistricts = stateWithDistricts;
  }


}
