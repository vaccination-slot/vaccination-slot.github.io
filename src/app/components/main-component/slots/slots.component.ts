import {Component, Input, OnInit} from '@angular/core';
import {AvailableSlotDetails} from '../../../models/models';

@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.css']
})
export class SlotsComponent implements OnInit {

  @Input() availableSlotDetails: AvailableSlotDetails;

  constructor() {
  }

  ngOnInit(): void {
  }

}
