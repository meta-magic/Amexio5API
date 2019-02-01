
import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TitleCasePipe } from '@angular/common';


const COLUMN_DATA = {
  'name': { propertyName: "name",propertyNameCaps: 'Name', width: 15 },
  'type': { propertyName: 'type',propertyNameCaps: 'Type', width: 15 },
  'version': { propertyName: 'version',propertyNameCaps: 'Version', width: 15 },
  'default': { propertyName: 'default',propertyNameCaps: 'Default', width: 10 },
  'description': { propertyName: 'description',propertyNameCaps: 'Description', width: 60 },
};

@Component({
  selector: 'amexio-api-reference',
  templateUrl: './amexioapireference.component.html',
})

export class AmexioApiReferenceComponent implements OnInit {

  @Input('http-url') httpUrl: string;

  @Input('data') data: any[];

  apiReferenceJson: any = {};

  apiRefData: any;

  descriptionObject = { propertyName: 'description',propertyNameCaps: 'Description',width: 60  };


  constructor(private _http: HttpClient, private _titlecase: TitleCasePipe) {


  }
  ngOnInit() {
    this.loadData();
  }

  // CREATING DATAGRID TABLE BY USING JSON DATA
  // dataTableCreation(userDataArray: any) {
  //   if (userDataArray.properties && userDataArray.properties.length > 0) {
  //     const property = userDataArray.properties[0];
  //     let propertyKeyArray = [];
  //     for (let key in property) {
  //       if (key) {
  //         if (key !== 'deprecated') {
  //           if (key !== 'description') {
  //             debugger;
  //             propertyKeyArray.push(COLUMN_DATA[key]);
  //           }
  //         }
  //       }
  //     }
  //     debugger;
  //     propertyKeyArray[propertyKeyArray.length - 1] = this.descriptionObject;
  //     this.apiReferenceJson['properties'] = propertyKeyArray;
  //     this.apiReferenceJson['propertiesData'] = userDataArray.properties;
  //   }
  //   if (userDataArray.columnProperties && userDataArray.columnProperties.length > 0) {
  //     const property = userDataArray.columnProperties[0];
  //     let propertyChildKeyArray = [];
  //     for (let key in property) {
  //       if (key) {
  //         if (key !== 'deprecated') {
  //           if (key !== 'description') {
  //             propertyChildKeyArray.push(COLUMN_DATA[key]);
  //           }
  //         }
  //       }
  //     }
  //     propertyChildKeyArray[propertyChildKeyArray.length - 1] = this.descriptionObject;
  //     this.apiReferenceJson['columnProperties'] = propertyChildKeyArray;
  //     this.apiReferenceJson['propertiesChildData'] = userDataArray.columnProperties;
  //   }
  //   if (userDataArray.events && userDataArray.events.length > 0) {
  //     const eventData = userDataArray.events[0];
  //     let eventKeyArray = [];
  //     for (let key in eventData) {
  //       if (key !== 'deprecated') {
  //         if (key !== 'decription') {
  //           eventKeyArray.push(COLUMN_DATA[key]);
  //         }
  //       }
  //     }
  //     eventKeyArray[eventKeyArray.length - 1] = this.descriptionObject;
  //     this.apiReferenceJson['events'] = eventKeyArray;
  //     this.apiReferenceJson['eventsData'] = userDataArray.events;
  //   }
  // }

 
  
  loadData() {
  //   this.http.get(this.httpUrl).subscribe(data => {
  //     debugger;
  //     this.dataTableCreation(data);
     
  //     this.data = data;
  //     console.log('kedar', this.data);
  //   });
  // }
  }
}

