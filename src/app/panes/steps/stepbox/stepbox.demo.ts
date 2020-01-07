/**
 * Created by sagar on 9/1/18.
 */

import {Component, OnInit} from '@angular/core'
import { HttpClient } from '@angular/common/http';

import { ComponentDataStructure } from '../../../apimetadata/models/component.structure';


@Component({
  selector: 'step-box', 
  templateUrl: './stepbox.demo.html',
})
export class StepBoxDemoComponent implements OnInit{

  copyMsgArray: any[];
  user:boolean;
  shop:boolean;
  payment:boolean;
  confirmation:boolean;
  clickMsgArray:any=[];

  customSourceData: ComponentDataStructure;
  constructor(private http: HttpClient) {
    this.customSourceData = new ComponentDataStructure();

      
    this.user=false;
    this.shop=true;
    this.payment=false;
    this.confirmation=false;
  }


  ngOnInit(): void {
    this.createCustomSourceData();
  }
  createCustomSourceData() {
    this.customSourceData.title = 'Step Box';
    this.customSourceData.description = 'Step-box component is an indicator for the steps in a workflow.';
    this.customSourceData.sourceMetadata.htmlUrl = 'layout/steps/steps.html';
    this.customSourceData.sourceMetadata.tsUrl = 'layout/steps/steps.text';
    this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v4-stepbox?embed=1&file=app/panels/stepbox/stepbox.demo.html&view=editor';
  }


// step box click event
  stepBlockClick(event:any){
    if(event.label=="User"){
      this.showMsg("Step 1 User");
      this.updateFlag(true,false,false,false);
    }else if(event.label=="Shop"){
      this.showMsg("Step 2 Shop");
      this.updateFlag(false,true,false,false);
    }else if(event.label=="Payment"){
      this.showMsg("Step 3 Payment");
      this.updateFlag(false,false,true,false);
    }else if(event.label=="Confirmation"){
      this.showMsg("Step 4 Confirmation");
      this.updateFlag(false,false,false,true);
    }
  }
  updateFlag(user:boolean,shop:boolean,payment:boolean,confirmation:boolean){
    this.user=user;
    this.shop=shop;
    this.payment=payment;
    this.confirmation=confirmation;
  }
  showMsg(msg){
    if(this.clickMsgArray.length>=1){
      this.clickMsgArray=[];
      this.clickMsgArray.push(msg);
    }else{
      this.clickMsgArray.push(msg);
    }
  }
  


  //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
  onCopyClick() {
    if (this.copyMsgArray.length >= 1) {
      this.copyMsgArray = [];
      this.copyMsgArray.push('Code Copied');
    } else {
      this.copyMsgArray.push('Code Copied');
    }
  }
}


