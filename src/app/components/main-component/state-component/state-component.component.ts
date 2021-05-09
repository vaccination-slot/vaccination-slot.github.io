import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DistrictResponse, State, StateWithDistricts} from '../../../models/models';
import {VaccineApiService} from '../../../services/vaccine-api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-state-component',
  templateUrl: './state-component.component.html',
  styleUrls: ['./state-component.component.css']
})
export class StateComponentComponent implements OnInit {

  @Input() state: State;

  @Output() stateWithDistricts: EventEmitter<StateWithDistricts> = new EventEmitter<StateWithDistricts>();

  districtResponse: DistrictResponse;

  constructor(private vaccineApiService: VaccineApiService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getStateDistricts(this.state.state_id);
  }

  getStateDistricts(stateId: number): void {
    this.vaccineApiService.getStateDistricts(stateId).subscribe((res) => {
      res.districts.forEach(d => d.isSelected = false);
      this.districtResponse = res;
    });
  }

  showSelectedDistricts(): void {
    this.stateWithDistricts.emit({
      state : this.state,
      districts : this.districtResponse.districts.filter(d => d.isSelected)
    });
  }
}
