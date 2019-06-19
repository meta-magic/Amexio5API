import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { debug } from "util";

@Component({
  selector: 'floating-panel-calendar',
  templateUrl: './floatingpanelcalendar.component.html'
})
export class floatingPanelCalendarComponent implements OnInit {

  htmltemplate: string;

  tscode: any;

  parentPanel: boolean;

  events: any[];

  rowRecord: string;

  calendarDate = new Date();
  title: string;
  eventobject: any;
  childPanel: boolean;
  constructor(private http: HttpClient) {
    this.parentPanel = false;
    this.calendarDate = new Date(1551697131284);
    this.events = [
      {
        "title": "Kubernetes Workshop",
        "start": "2019-02-25T11:00:00",
        "end": "2019-03-02T14:00:00"
      },
      {
        "title": "Microservice Workshop",
        "start": "2019-02-25T03:00:00",
        "end": "2019-03-03T06:00:00"
      },
      {
        "title": "Docker Workshop",
        "start": "2019-03-07",
        "end": "2019-03-09"
      },
      {
        "title": "Kubernetes Workshop",
        "start": "2019-03-11",
        "end": "2019-03-12"
      },
      {
        "title": "Microservice Workshop",
        "start": "2019-03-13",
        "end": "2019-03-14"
      },
      {
        "title": "Docker Workshop",
        "start": "2019-03-17",
        "end": "2019-03-18"
      },
      {
        "title": "Amexio Meetup",
        "start": "2019-03-25T18:00:00",
        "end": "2019-03-25T20:00:00"
      },
      {
        "title": "Angular Event",
        "start": "2019-03-27T11:25:00",
        "end": "2019-03-27T12:25:00"
      },
      {
        "title": "Amexio Meetup",
        "start": "2019-03-16T11:00:00",
        "end": "2019-03-16T12:30:00"
      },
      {
        "title": "Amexio Meetup ",
        "start": "2019-02-22T18:25:00",
        "end": "2019-02-22T21:25:00"
      },
      {
        "title": "121 Conference",
        "start": "2019-04-12",
        "end": "2019-04-13"
      },
      {
        "title": "122 Conference",
        "start": "2019-05-22",
        "end": "2019-05-24"
      },
      {
        "title": "All Hands Meeting",
        "start": "2019-02-28T09:15:00",
        "end": "2019-02-28T10:15:00"
      },
      {
        "title": "All Hands Meeting",
        "start": "2019-04-30T09:15:00",
        "end": "2019-04-30T10:15:00"
      },
      {
        "title": "All Hands Meeting",
        "start": "2019-05-31T09:15:00",
        "end": "2019-05-31T09:15:00"
      },
      {
        "title": "Angular Workshop",
        "start": "2019-06-03T13:15:00",
        "end": "2019-06-03T15:15:00"
      },
      {
        "title": "Technology Conference",
        "start": "2019-03-05"
      },
      {
        "title": "All Hands Meeting",
        "start": "2019-03-22T09:15:00",
        "end": "2019-03-22T10:15:00"
      }
    ];



  }



  ngOnInit() {
    this.http.get("assets/arc.json")
      .subscribe((resp: any) => {
        this.htmltemplate = resp.html;
        this.tscode = "";
      });
  }

  floattop: any;
  floatright: any;
  floatleft: any;
  showRelativePanel: boolean;

  onEventClicked(event: any) {
    this.title = event.this.title;
    this.eventobject = event.this;
    this.floattop = event.event.y + 'px';
    if (event.event.clientX + 330 > screen.width) {
      this.floatright = (event.event.offsetX) + 'px';
      this.floatleft = null;
    } else {
      this.floatleft = (event.event.offsetX + 150) + 'px';
      this.floatright = null;
    }
    this.parentPanel = true;
  }

  setSelectedOption(event: any) {
    this.eventobject = event.this;
    this.floattop = event.event.y + 'px';

    if (event.event.clientX + 780 > screen.width) {
      this.floatright = (event.event.offsetX) + 'px';
      this.floatleft = null;
    } else {
      this.floatleft = (event.event.offsetX) + 'px';
      this.floatright = null;
    }
    this.rowRecord = event.row.meeting;
    this.childPanel = true;

  }

  onParentClose(event: any) {
    this.parentPanel = false;
    this.onChildClose(event);
  }

  onChildClose(event: any) {
    this.childPanel = false;

  }

  setCalendarDate() {

    this.calendarDate = new Date(this.calendarDate.setMonth(this.calendarDate.getMonth() + 1));
  }
}