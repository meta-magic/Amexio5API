import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {ComponentDataStructure} from "../../apimetadata/models/component.structure";

@Component({
  selector: 'calendar-demo1',
  templateUrl: './calendar.demo.component.html'
})
export class CalendarDemoComponent1 implements OnInit {

  htmltemplate: string;

  tscode: any;
  dataCustomSource: string;
  copyMsgArray: any[];
  calendarDate = new Date();
  title: string;
  eventobject: any;
  childPanel: boolean;
  customSourceData: ComponentDataStructure;

  constructor(private http: HttpClient) {
    this.calendarDate = new Date(1551697131284);
    this.customSourceData = new ComponentDataStructure();

  }

  ngOnInit(): void {
    this.createCustomSourceData();
  }

  createCustomSourceData() {
    this.customSourceData.title = 'Calendar With Appointment';
    this.customSourceData.description = 'Calendar component to show data Day, Week and Month wise.';
    this.customSourceData.sourceMetadata.htmlUrl = 'calendar1/calendar.html';
    this.customSourceData.sourceMetadata.tsUrl = 'calendar1/calendar.txt';

    this.customSourceData.sourceMetadata.componentHtmlUrl = 'calendar1/component.html';
    this.customSourceData.sourceMetadata.componentTsUrl = 'calendar1/component.txt';
    this.customSourceData.sourceMetadata.datasourceUrl = 'assets/data/componentdata/calendarAppointment.json';
    // this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v4-simple-tree?embed=1&file=app/tree/simpletree/simpletree.demo.html&view=editor';
  }


  //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
  onCopyClick() {
    if (this.copyMsgArray.length >= 1) {
      this.copyMsgArray = [];
      this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
    } else {
      this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
    }
  }

  setCalendarDate() {

    this.calendarDate = new Date(this.calendarDate.setMonth(this.calendarDate.getMonth() + 1));
  }
}