/**
 * Created by kedar on 13/11/18.
 */

import { Component, OnInit } from '@angular/core';
import {ComponentDataStructure} from "../../apimetadata/models/component.structure";

@Component({
    selector: 'sidenav-page',
   templateUrl: './sidenavpage.demo.html',
    
})
export class sideNavDemoPage implements OnInit {
    nodeData;selectedData: any;
    dataSource;contactList:any;
    reportsMenu;dashboardMenu: any;
    customSourceData: ComponentDataStructure;
    item; treeData; radioGroupData: any
    construct
    constructor() {
      this.customSourceData = new ComponentDataStructure();
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
    ngOnInit(): void {
      this.createCustomSourceData();
    }
    
    createCustomSourceData() {
      this.customSourceData.title = 'Side Nav Bar';
      this.customSourceData.description = 'The Side Nav Bar Component is a familiar side navigation pattern for users. Side nav bar can be placed on left or right side. It can fit as many navigation links as needed, scrolling when the content exceeds the viewport. Take a look at Datastructure format which this component can consume in datasource tab.';
      this.customSourceData.sourceMetadata.htmlUrl = 'navigation/sidenav/advancedsidenav/navigation.html';
      this.customSourceData.sourceMetadata.tsUrl = 'navigation/sidenav/advancedsidenav/navigation.text';
      this.customSourceData.sourceMetadata.datasourceUrl = 'assets/data/componentdata/sidenav.json';
      this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v4-side-navpage?embed=1&file=app/navigation/sidenavpage/sidenavpage.demo.html&view=editor';
    }
  }
  
  
  