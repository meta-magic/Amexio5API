import { Component, OnInit, Input, AfterContentInit } from '@angular/core';
import * as d3 from 'd3';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'drillable-with-single-target-demo',
  templateUrl: './d3drillablesingletarget.demo.component.html'
})
export class AmexioD3DrillableSingleTargetDemoComponent implements OnInit {

  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  drillabledata:any;
  barchartcolor: any;
  constructor(private http: HttpClient) {
    this.getHtmlAndTypeScriptCode();
  }


  ngOnInit() {
     this.drillabledata=["label","value","name"];
    
     this.barchartcolor =
      [
        "#4040a1",
        "#e06377",
        "#7e4a35",
        "#6b5b95",
        "#feb236",
        "#d64161",
        "#ff7b25"
      ]
       
  }

  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;
    let dataSource: any;
    //HTML FILE
    this.http.get('assets/data/code/charts/D3Charts/d3multipletarget/d3chart.html', { responseType: 'text' }).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    // TS FILE
    this.http.get('assets/data/code/charts/D3Charts/d3multipletarget/d3chart.text', { responseType: 'text' }).subscribe(data => {
      responseTs = data;
    }, error => {
    }, () => {
      this.typeScriptCode = responseTs;
    });
   
  }

  //this code use copy to html code from tabpanel
  onCopyClick() {
    if (this.copyMsgArray.length >= 1) {
      this.copyMsgArray = [];
      this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
    } else {
      this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
    }
  }



}