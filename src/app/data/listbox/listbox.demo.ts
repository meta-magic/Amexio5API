/**
 * Created by sagar on 9/1/18.
 */

import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'listbox-demo', 
  templateUrl: './listbox.demo.html',
  styles:[
    `
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
export class ListBoxDemo {
  
  copyMsgArray: any[];
  localData: any;
  onRowClickData: any;
  selectedData: any;
  progressType: string;
  actionWindowFlag: boolean;
  projectData: any;
  browserData: any;
  contextMenuData: any;
  constructor(private http: HttpClient) {
    this.contextMenuData =
    [{ "text": "Add New", "icon": "fa fa-arrows", "disabled": true },
    { "text": "Edit", "icon": "", "seperator": true }
        , { "text": "Send data in email", "icon": "" }];

    this.localData = {"response": {
      "success": true,
        "message": "Fetching  Data  Request Succeeded: Profile",
        "data": [
        {
          "name": "Buck Kulkarni",
          "name_official": "Buck Kulkarni",
          "profile": "buck.jpg",
          "email" : "XYZ@metamagic.in"
        },
        {
          "name": "Araf Karsh Hamid",
          "name_official": "Araf Karsh Hamid",
          "profile": "karsh.jpg",
          "email" : "XYZ@metamagic.in"
        },
        {
          "name": "ketan Gote",
          "name_official": "Ketan Gote",
          "profile": "ketan.jpg",
          "email" : "XYZ@metamagic.in"
        },

        {
          "name": "Dattaram Gawas",
          "name_official": "Dattaram Gawas",
          "profile": "dats.jpg",
          "email" : "XYZ@metamagic.in"
        },
        {
          "name": "Sagar Jadhav",
          "name_official": "Sagar Jadhav",
          "profile": "sagar.jpg",
          "email" : "XYZ@metamagic.in"
        },
      
        {
          "name": "Rashmi Thakkar",
          "name_official": "Rashmi Thakkar",
          "profile": "rashmi.jpg",
          "email" : "XYZ@metamagic.in"
        },
        {
          "name": "Deepali Arvind",
          "name_official": "Deepali Arvind",
          "profile": "dipali.jpg",
          "email" : "XYZ@metamagic.in"
        },
        {
          "name": "Ashwini Agre",
          "name_official": "Ashwini Agre",
          "profile": "ashwini.jpg",
          "email" : "XYZ@metamagic.in"
        }
      ]
    }};

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



  //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
  onCopyClick() {
    if (this.copyMsgArray.length >= 1) {
      this.copyMsgArray = [];
      this.copyMsgArray.push({'msg': 'Code Copied', 'type': 'info'});
    } else {
      this.copyMsgArray.push({'msg': 'Code Copied', 'type': 'info'});
    }
  }

  onRowClick(data: any) {
    this.onRowClickData = data;
  }

  getSelectedData(data: any) {
    this.selectedData = data;
  }

}
