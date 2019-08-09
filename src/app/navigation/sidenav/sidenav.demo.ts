/**
 * Created by sagar on 9/1/18.
 */

import {Component, OnInit} from '@angular/core';
import {ComponentDataStructure} from "../../apimetadata/models/component.structure";

@Component({
  selector: 'sidenav-demo', 
  templateUrl: './sidenav.demo.html'
})
export class SideNavDemo implements OnInit {
  nodeData;selectedData: any;
  dataSource;contactList:any;
  item; treeData; radioGroupData: any;
  customSourceData: ComponentDataStructure;
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
  }  

  ngOnInit(): void {
    this.createCustomSourceData();
  }
  
  createCustomSourceData() {
    this.customSourceData.title = 'Side Nav Bar';
    this.customSourceData.description = 'The Side Nav Bar Component is a familiar side navigation pattern for users. Side nav bar can be placed on left or right side. It can fit as many navigation links as needed, scrolling when the content exceeds the viewport. Take a look at Datastructure format which this component can consume in datasource tab.';
    this.customSourceData.sourceMetadata.htmlUrl = 'navigation/sidenav/navigation.html';
    this.customSourceData.sourceMetadata.tsUrl = 'navigation/sidenav/navigation.text';
    this.customSourceData.sourceMetadata.datasourceUrl = 'assets/data/componentdata/sidenav.json';
    this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v4-side-panel?embed=1&file=app/navigation/sidenav/sidenav.demo.html&view=editor';
  }
  sideNodeClick(data: any) {
    this.nodeData = data;
  }
}


