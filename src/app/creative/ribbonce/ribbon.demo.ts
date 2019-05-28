/**
 * Created by Ankita on 16/5/19.
 */

import {Component, OnInit} from '@angular/core'
import { HttpClient } from '@angular/common/http';

import { ComponentDataStructure } from '../../apimetadata/models/component.structure';
import { Router } from "@angular/router";
@Component({
  selector: 'ribbon-card-demo',
  templateUrl: './ribbon.demo.html'
})
export class RibbonCardDemo implements OnInit{
 
  copyMsgArray: any[];
  flag: boolean;

  customSourceData: ComponentDataStructure;


  constructor(private http: HttpClient,public router: Router) {
    this.customSourceData = new ComponentDataStructure();

    this.flag = true;
  }

  ngOnInit(): void {
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


