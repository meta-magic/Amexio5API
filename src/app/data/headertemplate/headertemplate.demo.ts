/**
 * Created by Manisha on 22/6/18.
 */

import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import {ComponentDataStructure} from "../../apimetadata/models/component.structure";


@Component({
  selector: 'grid-template-demo', 
  templateUrl: './headertemplate.demo.html',
  styles: [
    `
    .button-dropdown{
        color:black;
        padding: 50px;
    }
    .listbox-StatusYellow {
      background-color: yellow;
    }
    .listbox-StatusGreen  {
      background-color: green;
     }
    .listbox-StatusRed {
      background-color: red;
  }
  
.red {
    color: red!important;
   
}
.green {
    color: green!important;
   
}
.yellow {
    color: yellow!important;
    
}
.template-progressBar .progress{
  height:5px !important;
}  
`
  ]
})
export class HeaderTemplateDemo {
  htmlCode: string;
  typeScriptCode: string;
  dataSource: string;
  copyMsgArray: any[];
  clickedRowData: any;
  progressType: string;
  actionWindowFlag: boolean;
  projectData: any;
  browserData: any;
  
  customSourceData: ComponentDataStructure;
  constructor(private http: HttpClient) {
    this.customSourceData = new ComponentDataStructure();

    this.projectData = {
      "response": {
        "success": true,
        "message": "Fetching  Data  Request Succeeded: Profile",
        "data": [
          {
            "name": "Admin Template	",
            "status": " 65%"
          },
          {
            "name": "Landing Page",
            "status": "Finished"
          },
          {
            "name": "Backend UI	",
            "status": "Rejected"
          },
          {
            "name": "Personal Blog",
            "status": "40%"
          },
          {
            "name": "E-mail Templates	",
            "status": "13%"
          },
          {
            "name": "Corporate Website",
            "status": "Pending"
          }
        ]
      }
    }
    this.browserData = {
      "response": {
        "success": true,
        "message": "Fetching  Data  Request Succeeded: Profile",
        "data": [
          {
            "name": "Google Chrome",
            "usage": "23%",
            "icon": "GoogleChrome.jpg "
          },
          {
            "name": "Mozila Firefox",
            "usage": "15%",
            "icon": "MozilaFirefox.png "
          },
          {
            "name": "Apple Safari",
            "usage": "7%",
            "icon": "AppleSafari.png "
          },
          {
            "name": "Internet Explorer",
            "usage": "9%",
            "icon": "InternetExplorer.jpeg"
          },
          {
            "name": "Opera mini",
            "usage": "20%",
            "icon": "Operamini.jpg"
          },
          {
            "name": "Microsoft edge",
            "usage": "9%",
            "icon": "Microsoftedge.jpg"
          }
        ]
      }
    }


  }


  ngOnInit(): void {
    this.createCustomSourceData();
  }

  createCustomSourceData() {
    this.customSourceData.title = 'Header Template';
    this.customSourceData.description = 'Data grid component to render large amount of data-set with various options like sorting in ascending or descending order, client-side pagination, column hide/unhide, single/multi selection, user define template for rendering for column header and column data, displaying summation of numeric column.';
    this.customSourceData.sourceMetadata.htmlUrl = 'data/headertemplate/headertemplate.html';
    this.customSourceData.sourceMetadata.tsUrl = 'data/headertemplate/headertemplate.text';
    this.customSourceData.sourceMetadata.datasourceUrl = 'assets/data/componentdata/headertemplateemail.json';
    this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/header-template?embed=1&file=app/data/headertemplate/headertemplate.demo.html&view=editor';
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

  getRowData(data: any) {
    this.clickedRowData = data;
  }

  getGridTemplateData(row: any): string {
    if (row.Usage >= 50) {
      return "success";
    }
    if (row.Usage < 50 && row.Usage >= 30) {
      return "warning";
    }
    if (row.Usage < 30) {
      return "danger";
    }
  }


}


