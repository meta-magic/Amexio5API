/**
 * Created by sagar on 9/1/18.
 */

import {Component, OnInit} from '@angular/core'
import { HttpClient } from '@angular/common/http';

import { ComponentDataStructure } from '../../../apimetadata/models/component.structure';


@Component({
  selector: 'card-image-demo',
  templateUrl: './cardimage.demo.component.html'
})
export class CardImageDemo implements OnInit{
 
  copyMsgArray: any[];
  flag: boolean;

  customSourceData: ComponentDataStructure;


  constructor(private http: HttpClient) {
    this.customSourceData = new ComponentDataStructure();

    this.flag = true;
  }

  ngOnInit(): void {
    this.createCustomSourceData();
  }


  createCustomSourceData() {
    this.customSourceData.title = 'Card';
    this.customSourceData.description = 'A Simple Card which renders card based on title, body and actions user has configured.';
    this.customSourceData.sourceMetadata.htmlUrl = 'layout/card/cardimage/layout.html';
    this.customSourceData.sourceMetadata.tsUrl = 'layout/card/cardimage/layout.text';
    this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v4-cardimage?embed=1&file=app/layouts/cardimage/cardimage.demo.html&view=editor';
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


