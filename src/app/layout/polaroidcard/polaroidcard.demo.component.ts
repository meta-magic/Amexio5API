/**
 * Created by Ankita on 16/5/19.
 */

import {Component, OnInit} from '@angular/core'
import { HttpClient } from '@angular/common/http';

import { ComponentDataStructure } from '../../apimetadata/models/component.structure';

@Component({
  selector: 'polaroid-card-demo',
  templateUrl: './polaroidcard.demo.component.html'
})
export class PolaroidCardDemo implements OnInit{
 
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
    this.customSourceData.title = 'Polaroid-Card';
    this.customSourceData.description = 'A Simple Card which renders card based on title, body and actions user has configured.';
    this.customSourceData.sourceMetadata.htmlUrl = 'layout/polaroidcard/polaroid.html';
    this.customSourceData.sourceMetadata.tsUrl = 'layout/polaroidcard/polaroid.text';
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


