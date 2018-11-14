/**
 * Created by kedar on 13/11/18.
 */

import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Component({
    selector: 'sidenav-page',
   templateUrl: './sidenavpage.demo.html',
    
})
export class sideNavDemoPage implements OnInit {
    htmlCode: string;
    typeScriptCode: string;
    copyMsgArray: any[];
    nodeData;selectedData: any;
    dataSource;contactList:any;
    reportsMenu;dashboardMenu: any;
    
    item; treeData; radioGroupData: any
    construct
    constructor(private http: HttpClient) {
      this.getHtmlAndTypeScriptCode();
  
      this.contactList = {
        "response": {
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
              "name": "Ketan Gote",
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
        }
        };

       this.reportsMenu = [
      
              {
                "text": "Issue",
                "icon" : "fa fa-ticket fa-fw",
                "mdaIcon":"bug_report",
                "link":"/home/issue"
              },
              {
                "text": "Group By Issue",
                "icon" : "fa fa-ticket fa-fw",
                "mdaIcon":"link",
                "link":"/home/group-by-issue"
              }
            
       ]
  
       this.dashboardMenu =
       [
                {
                    "text": "Charts",
                    "icon" : "fa fa-bar-chart fa-fw",
                    "mdaIcon":"insert_chart",
                    "link" : "/home/charts"
                  },
                  {
                    "text": "Maps",
                    "icon" : "fa fa-map-marker fa-fw",
                    "mdaIcon":"location_on",
                    "link" : "/home/maps"
                  }
       ]
    }
  
    
    ngOnInit() {}
  
  
    //TO LOAD HTML AND TYPESCRIPT CODE
    getHtmlAndTypeScriptCode() {
      let responseHtml: any;
      let responseTs: any;
    let datasourceData:any;
      //HTML FILE
      this.http.get('assets/data/code/navigation/sidenav/advancedsidenav/navigation.html',{responseType: 'text'}).subscribe(data => {
        responseHtml = data;
      }, error => {
      }, () => {
        this.htmlCode = responseHtml;
      });
  
      //TS FILE
      this.http.get('assets/data/code/navigation/sidenav/advancedsidenav/navigation.text',{responseType: 'text'}).subscribe(data => {
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
  }
  
  
  