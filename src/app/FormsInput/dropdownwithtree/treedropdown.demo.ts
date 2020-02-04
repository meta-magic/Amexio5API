/**
 * Created by kedar on 27/1/20.
 */

import { Component, OnInit } from '@angular/core';
import { HTTPService } from '../../service/http.service';

@Component({
  selector: 'tree-dropdown',
  templateUrl: './treedropdown.demo.html',
})
export class TreeDropDownDemo implements OnInit {
  copyMsgArray: any[];
  treeDropdown: any;
  model = '29'
  constructor(private httpService: HTTPService) {

  }
  ngOnInit(): void {
    this.getData();
  }

  getData() {
    let response: any;
    this.httpService.fetch('assets/data/componentdata/treedropdown.json', 'get')
      .subscribe((r) => {
        response = r;
      },
        (error: any) => {
        },
        () => {
          const cloneData = response;
          this.treeDropdown = JSON.parse(JSON.stringify(cloneData));
        });
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
}


