/**
 * Created by pratik on 18/1/18.
 */
import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { AvailableSlotsModel } from 'amexio-ng-extensions';

@Component({
  selector: 'ee-appointment', templateUrl: 'appointment.component.html'
})

export class EEAppointmentDemoComponent implements OnInit {
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  date =  new Date();
  availableslots: AvailableSlotsModel[];
  multipleAvailableslots: AvailableSlotsModel[];
  singleSelectedData: any;
  multiSelectedData: any;

  constructor(private http: HttpClient) {
    this.getHtmlAndTypeScriptCode();
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

  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;

    //HTML FILE
    this.http.get('assets/data/code/enterprise/appointment/ee.html',{responseType: 'text'}).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/enterprise/appointment/ee.text',{responseType: 'text'}).subscribe(data => {
      responseTs = data;
    }, error => {
    }, () => {
      this.typeScriptCode = responseTs;
    });

  }

  //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
  onCopyClick() {
    if (this.copyMsgArray.length >= 1) {
      this.copyMsgArray = [];
      this.copyMsgArray.push({'msg': 'Code Copied', 'type': 'info'});
    } else {
      this.copyMsgArray.push({'msg': 'Code Copied', 'type': 'info'});
    }
  }

  ngOnInit() {
  }

  onSingleSelect(event: any) {
    this.singleSelectedData = event;
  }

  onMultiSelect(event: any) {
    this.multiSelectedData = event;
  }
}
