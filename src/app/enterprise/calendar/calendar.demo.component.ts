import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
    selector: 'calendar-demo',
    templateUrl: './calendar.demo.component.html'
})
export class CalendarDemoComponent implements OnInit {

    htmltemplate: string;

    tscode: any;

    events: any[];

    calendarDate = new Date();

    eventobject : any;

    constructor(private http: HttpClient) {
        this.events = [
            {
                "title": "All Day Event",
                "start": "2019-02-25"
            },
            {
                "title": "Microservice Workshop",
                "start": "2019-02-07",
                "end": "2019-02-09"
            },
            {
                "title": "Amexio Meetup",
                "start": "2019-02-28T04:00:00",
                "end": "2019-02-28T05:00:00"
            },
            {
                "title": "Amexio Meetup 2.1",
                "start": "2019-02-27T11:25:00",
                "end": "2019-02-27T12:25:00"
            },
            {
                "title": "Amexio Meetup 2.0",
                "start": "2019-02-26T17:00:00",
                "end": "2019-02-26T19:25:00"
            },
            {
                "title": "Amexio Meetup 3",
                "start": "2019-02-22T18:25:00",
                "end": "2019-02-22T21:25:00"
            },
            {
                "title": "121 Conference",
                "start": "2019-02-12",
                "end": "2019-02-13"
            },
            {
                "title": "122 Conference",
                "start": "2019-02-22",
                "end": "2019-02-24"
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

    
    onEventClicked(event: any) {
        this.eventobject = event.this;
        console.log(event);
    }

    setCalendarDate() {
        
        this.calendarDate = new Date(this.calendarDate.setMonth(this.calendarDate.getMonth() + 1));
    }
}