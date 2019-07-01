import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import {EventsPanelComponent} from '../floating-panel-calendar/events-panel/events-panel.component';
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
  constructor(private http: HttpClient, private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver) {
    this.parentPanel = false;
    this.calendarDate = new Date(1551697131284);
    this.events = [
      {
        "title": "Kubernetes Workshop",
        "start": "2019-06-25T11:00:00",
        "end": "2019-07-02T14:00:00",
        "url": "meet.google.com/izm-imal-gns",
        "phone": "020-78542123",
        "people": [
          {
          "personName": "Priyanka Gayakwad"
        },
          {
            "personName": "Nitish jain"
        }]
      },
      {
        "title": "Microservice Workshop",
        "start": "2019-06-25T03:00:00",
        "end": "2019-07-03T06:00:00",
        "url": "meet.google.com/izm-imal-gns",
        "phone": "020-78542123",
        "people": [
          {
          "personName": "Harish Sharma"
        },
          {
            "personName": "Prasoon Sharma"
        }]
      },
      {
        "title": "Docker Workshop",
        "start": "2019-07-03",
        "end": "2019-07-05",
        "url": "meet.google.com/izm-ppaa-gns",
        "phone": "020-41025896",
        "people": [
          {
          "personName": "Deepali Arvind"
        },
          {
            "personName": "Dattaram Gawas"
        }]
      },
      {
        "title": "Kubernetes Workshop",
        "start": "2019-07-11",
        "end": "2019-07-12",
        "url": "meet.google.com/izm-imal-gns",
        "phone": "020-78542123",
        "people": [
          {
          "personName": "Hardik Bhardwaj"
        },
          {
            "personName": "Sakshi Tanna"
        }]
      },
      {
        "title": "Microservice Workshop",
        "start": "2019-07-13",
        "end": "2019-07-14",
        "url": "meet.google.com/izm-imal-gns",
        "phone": "+91 9852367410",
        "people": [
          {
          "personName": "Poonam Jadhav"
        },
          {
            "personName": "Abhiruchi Patil"
        }]
      },
      {
        "title": "Docker Workshop",
        "start": "2019-07-17",
        "end": "2019-07-18",
        "url": "meet.google.com/izm-imal-gns",
        "phone": "9718542123",
        "people": [
          {
          "personName": "Vivek Mane"
        },
          {
            "personName": "Aboli Suryavanshi"
        }]
      },
      {
        "title": "Amexio Meetup",
        "start": "2019-07-25T18:00:00",
        "end": "2019-07-25T20:00:00",
        "url": "meet.google.com/izm-imal-gns",
        "phone": "022-852369220",
        "people": [
          {
          "personName": "Jignesh Bhandari"
        },
          {
            "personName": "Meena Gupta"
        }]
      },
      {
        "title": "Angular Event",
        "start": "2019-07-27T11:25:00",
        "end": "2019-07-27T12:25:00",
        "url": "meet.google.com/izm-imal-gns",
        "phone": "9822772686",
        "people": [
          {
          "personName": "Prattema Jadhav"
        },
          {
            "personName": "Ketan Gote"
        }]
      },
      {
        "title": "Amexio Meetup",
        "start": "2019-07-16T11:00:00",
        "end": "2019-07-16T12:30:00",
        "url": "meet.google.com/izm-imal-gns",
        "phone": "9953225562",
        "people": [
          {
          "personName": "Amruta Mulik"
        },
          {
            "personName": "Manjusha Shrimandil"
        }]
      },
      {
        "title": "Amexio Meetup ",
        "start": "2019-06-22T18:25:00",
        "end": "2019-06-22T21:25:00",
        "url": "meet.google.com/izm-ass-gns",
        "phone": "07896325000",
        "people": [
          {
          "personName": "Ganesh Kadam"
        },
          {
            "personName": "Vallabh Achutlla"
        }]
      },
      {
        "title": "121 Conference",
        "start": "2019-04-12",
        "end": "2019-04-13",
        "url": "meet.google.com/izm-imal-gns",
        "phone": "020-78521400",
        "people": [
          {
          "personName": "Toral Gattha"
        },
          {
            "personName": "Priyank Sharma"
        }]
      },
      {
        "title": "122 Conference",
        "start": "2019-05-22",
        "end": "2019-05-24",
        "url": "meet.google.com/izm-imal-gns",
        "phone": "020-78542123",
        "people": [
          {
          "personName": "Roshni Gupta"
        },
          {
            "personName": "Varun Varia"
        }]
      },
      {
        "title": "All Hands Meeting",
        "start": "2019-06-28T09:15:00",
        "end": "2019-06-28T10:15:00",
        "url": "meet.google.com/izm-uwnb-gns",
        "phone": "020-78542123",
        "people": [
          {
          "personName": "Elesh Lakhani"
        },
          {
            "personName": "Kojashree Jain"
        }]
      },
      {
        "title": "All Hands Meeting",
        "start": "2019-04-30T09:15:00",
        "end": "2019-04-30T10:15:00",
        "url": "meet.google.com/ium-imal-gns",
        "phone": "8521470032",
        "people": [
          {
          "personName": "Vijay Shinde"
        },
          {
            "personName": "Mangesh Ratnalikar"
        }]
      },
      {
        "title": "All Hands Meeting",
        "start": "2019-05-31T09:15:00",
        "end": "2019-05-31T09:15:00",
        "url": "meet.google.com/izm-imal-ios",
        "phone": "9888526235",
        "people": [
          {
          "personName": "Sagar Jadhav"
        },
          {
            "personName": "Kedar Kokil"
        }]
      },
      {
        "title": "Angular Workshop",
        "start": "2019-06-03T13:15:00",
        "end": "2019-06-03T15:15:00",
        "url": "meet.google.com/izm-imal-gns",
        "phone": "020-78542123",
        "people": [
          {
          "personName": "Rashmi Thakkar"
        },
          {
            "personName": "Anu Chandan"
        }]
      },
      {
        "title": "Technology Conference",
        "start": "2019-07-05"
      },
      {
        "title": "All Hands Meeting",
        "start": "2019-07-22T09:15:00",
        "end": "2019-07-22T10:15:00",
        "url": "meet.google.com/izm-yusl-gns",
        "phone": "020-711442123",
        "people": [
          {
          "personName": "Kalyani Bardiya"
        },
          {
            "personName": "Anuradha Chawan"
        }]
      },
      {
        "title": "Angular Workshop",
        "start": "2019-06-12T13:15:00",
        "end": "2019-06-12T15:15:00",
        "url": "meet.google.com/izm-imal-gns",
        "phone": "020-78542123",
        "people": [
          {
          "personName": "Rashmi Thakkar"
        },
          {
            "personName": "Anu Chandan"
        }]
      },
      {
        "title": "Conference",
        "start": "2019-06-12T11:15:00",
        "end": "2019-06-12T11:55:00",
        "url": "meet.google.com/852-ilao-gns",
        "phone": "780-963251112",
        "people": [
          {
          "personName": "Payal Barsoni"
        },
          {
            "personName": "Kashish Visarani"
        }]
      },
      {
        "title": "All Hands Meeting",
        "start": "2019-06-12T19:15:00",
        "end": "2019-06-12T20:15:00",
        "url": "meet.google.com/izm-imal-opa",
        "phone": "+1 05615115551",
        "people": [
          {
          "personName": "Jayesh Kadam"
        },
          {
            "personName": "Kajal Bhatewara"
        }]
      },
      {
        "title": "Juniper Meeting",
        "start": "2019-06-12T14:15:00",
        "url": "meet.google.com/izm-uioa-daa",
        "phone": "+91 8912009128",
        "people": [
          {
          "personName": "Dhanashree Kabade"
        },
          {
            "personName": "Puja Sharma"
        }]
      },
      {
        "title": "Status Meeting",
        "start": "2019-06-12T16:30:00",
        "url": "meet.google.com/pas-imal-opa",
        "phone": "9145100644",
        "people": [
          {
          "personName": "Nihar Kadam"
        },
          {
            "personName": "Neeti Bhatewara"
        }]
      },
      {
        "title": "Amexio Meetup",
        "start": "2019-07-13T11:00:00",
        "end": "2019-07-14T12:30:00",
        "url": "meet.yahoo.com/izm-imal-gns",
        "phone": "852-1284511541",
        "people": [
          {
          "personName": "Priyanka Aher"
        },
          {
            "personName": "Ganesh Parakh"
        }]
      },
      {
        "title": "Amexio Meetup ",
        "start": "2019-07-13T18:25:00",
        "end": "2019-07-13T21:25:00",
        "url": "meet.google.com/poa-imal-gns",
        "phone": "022-78542123",
        "people": [
          {
          "personName": "Lovish Sethi"
        },
          {
            "personName": "Avika Bhatt"
        }]
      },
      {
        "title": "Java Conference",
        "start": "2019-06-23T13:00:00",
        "end": "2019-06-23T13:50:00",
        "url": "meet.google.com/izm-pooa-gns",
        "phone": "020-85663521",
        "people": [
          {
          "personName": "Suraj Sukale"
        },
          {
            "personName": "Ganesh Chandan"
        }]
      },
      {
        "title": "Sass Conference",
        "start": "2019-06-23T14:15:00",
        "end": "2019-06-23T14:30:00",
        "url": "meet.google.com/izm-imal-gns",
        "phone": "+1 7412589330",
        "people": [
          {
          "personName": "Medha Jadhav"
        },
          {
            "personName": "Monish Gatha"
        }]
      }, {
        "title": "Angular Meetup",
        "start": "2019-06-23T17:30:00",
        "end": "2019-06-23T17:45:00",
        "url": "meet.google.com/ias-imal-gns",
        "phone": "896523017",
        "people": [
          {
          "personName": "Kiran Momin"
        },
          {
            "personName": "Azmeena Zari"
        }]
      },
      {
        "title": "JavaScript Conference",
        "start": "2019-06-23T19:15:00",
        "end": "2019-06-23T19:30:00",
        "url": "meet.google.com/izm-imal-gns",
        "phone": "022-8522131466",
        "people": [
          {
          "personName": "Navin Thakkar"
        },
          {
            "personName": "Tejas Mathur"
        }]
      },

      {
        "title": "Java Conference",
        "start": "2019-07-23T13:00:00",
        "end": "2019-07-23T13:50:00",
        "url": "meet.google.com/izm-pooa-gns",
        "phone": "020-85663521",
        "people": [
          {
          "personName": "Suraj Sukale"
        },
          {
            "personName": "Ganesh Chandan"
        }]
      },
      {
        "title": "Sass Conference",
        "start": "2019-07-23T14:15:00",
        "end": "2019-07-23T14:30:00",
        "url": "meet.google.com/izm-imal-gns",
        "phone": "+1 7412589330",
        "people": [
          {
          "personName": "Medha Jadhav"
        },
          {
            "personName": "Monish Gatha"
        }]
      }, {
        "title": "Angular Meetup",
        "start": "2019-07-23T17:30:00",
        "end": "2019-07-23T17:45:00",
        "url": "meet.google.com/ias-imal-gns",
        "phone": "896523017",
        "people": [
          {
          "personName": "Kiran Momin"
        },
          {
            "personName": "Azmeena Zari"
        }]
      },
      {
        "title": "JavaScript Conference",
        "start": "2019-07-23T19:15:00",
        "end": "2019-07-23T19:30:00",
        "url": "meet.google.com/izm-imal-gns",
        "phone": "022-8522131466",
        "people": [
          {
          "personName": "Navin Thakkar"
        },
          {
            "personName": "Tejas Mathur"
        }]
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

  showEventPanel: boolean;
  onEventClicked(event: any) {
    let moreData = event.this.addEventDetails(EventsPanelComponent, event);
    moreData.instance.eventData = event.item;
  }

  moreData: any;

  onMoreEventsClicked(event: any) {
    this.moreData = event.this.addComponent(EventsPanelComponent, event);
    this.moreData.instance.showPanel = true;
    this.moreData.instance.eventData = event.item;
  }

  onMoreClose(event: any){
    this.showEventPanel = false;
    this.moreData.instance.showPanel = false;

  }

  setCalendarDate() {
    this.calendarDate = new Date(this.calendarDate.setMonth(this.calendarDate.getMonth() + 1));
  }
}