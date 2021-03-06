/**
 * Created by pratik on 18/1/18.
 */
import {Component, OnInit} from '@angular/core';
import { AvailableSlotsModel } from 'amexio-ng-extensions';

@Component({
  selector: 'ee-appointment', templateUrl: 'appointment.component.html'
})

export class EEAppointmentDemoComponent implements OnInit {
  date =  new Date();
  availableslots: AvailableSlotsModel[];
  multipleAvailableslots: AvailableSlotsModel[];
  singleSelectedData: any;
  singleSelectedData1: any;
  multiSelectedData: any;

  constructor() {
    const atr = [10,12];
    const atr_1 = [13,15];

    this.availableslots = [];
    this.availableslots.push(new AvailableSlotsModel(new Date(),atr));
    this.availableslots.push(new AvailableSlotsModel(new Date(this.date.getTime() + (24 * 60 * 60 * 1000)),atr_1));

    const atr1 = [12,14,15];
    const atr2 = [13,14,17];

    this.multipleAvailableslots = [];
    this.multipleAvailableslots.push(new AvailableSlotsModel(new Date(),atr1));
    this.multipleAvailableslots.push(new AvailableSlotsModel(new Date(this.date.getTime() + (24 * 60 * 60 * 1000)),atr2));
  }
  ngOnInit() {
  }

  onSingleSelect(event: any) {
    this.singleSelectedData = event;
  }
  onSingleSelect1(event: any) {
    this.singleSelectedData1 = event;
  }

  onMultiSelect(event: any) {
    this.multiSelectedData = event;
  }
}
