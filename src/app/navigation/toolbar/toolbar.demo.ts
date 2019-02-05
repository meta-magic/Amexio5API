/**
 * Created by ankita on 5/6/18.
 */

import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'toolbar-demo',
  templateUrl :'./toolbar.demo.html',
})
export class ToolbarDemo implements OnInit {
  firstName: string;
  lastName: string;
  toggleMsgArray: any[];
  payment: any[];
  showBasicWindowNonMateialToolbar:boolean;
  ngOnInit() {

  }
  constructor(private http: HttpClient) {
    this.toggleMsgArray = [];
    this.payment=[
      {"label": "Open With", "icon": "fa fa-arrows-alt "},
      {"label": "Make a Copy", "icon": "fa fa-files-o","separator":"true"},
      {"label": "Refresh", "icon": "fa fa-refresh"},
      {"label": "Add Star", "icon": "fa fa-star"},
      {"label": "download", "icon": "fa fa-download"},
      {"label": "bookmark", "icon": "fa fa-bookmark"}
    ];

  }

  //Square Toggle click event
  onSquareToggleClick(data: any) {
    this.toggleMsgArray.push('Square Toggle Click');
  }
  toggleBasicWindow(data: any){
    this.showBasicWindowNonMateialToolbar= !this.showBasicWindowNonMateialToolbar;
  }
}



