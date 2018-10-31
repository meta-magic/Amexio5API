import { Component, OnInit, Input, AfterContentInit } from '@angular/core';
import * as d3 from 'd3';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'amexio-d3-chart-histogram-demo',
  templateUrl: './d3histogramchart.demo.component.html'
})
export class AmexioD3HistogramChartDemoComponent implements OnInit {

  htmlCode: string;
  typeScriptCode: string;
  userDataSourceCode: string;
  dataSourceCode: string;
  copyMsgArray: any[];
  userDefineColors: any;
  defultColorData: any;
  userDefineColorData: any;
  sourceData: any;
  userDataSource: any;
  barChartWithColorData: any;
  histogramdata:any;
  barData: any;
  sourceData1: any;
  constructor(private http: HttpClient) {
    this.getHtmlAndTypeScriptCode();
  }


  ngOnInit() {
    this.userDefineColors =
      [
        "#4040a1",
        "#e06377",
        " #7e4a35",
        "#6b5b95",
        "#feb236",
        "#d64161",
        "#ff7b25"
      ]
      this.histogramdata=  [
        ['Dinosaur', 'Length'],
        ['Acrocanthosaurus (top-spined lizard)', 12.2],
        ['Albertosaurus (Alberta lizard)', 9.1],
        ['Allosaurus (other lizard)', 12.2],
        ['Apatosaurus (deceptive lizard)', 22.9],
        ['Archaeopteryx (ancient wing)', 0.9],
        ['Argentinosaurus (Argentina lizard)', 36.6],
        ['Baryonyx (heavy claws)', 9.1],
        ['Brachiosaurus (arm lizard)', 30.5],
        ['Ceratosaurus (horned lizard)', 6.1],
        ['Coelophysis (hollow form)', 2.7],
        ['Compsognathus (elegant jaw)', 0.9],
        ['Deinonychus (terrible claw)', 2.7],
        ['Diplodocus (double beam)', 27.1],
        ['Dromicelomimus (emu mimic)', 3.4],
        ['Gallimimus (fowl mimic)', 5.5],
        ['Mamenchisaurus (Mamenchi lizard)', 21.0],
        ['Megalosaurus (big lizard)', 7.9],
        ['Microvenator (small hunter)', 1.2],
        ['Ornithomimus (bird mimic)', 4.6],
        ['Oviraptor (egg robber)', 1.5],
        ['Plateosaurus (flat lizard)', 7.9],
        ['Sauronithoides (narrow-clawed lizard)', 2.0],
        ['Seismosaurus (tremor lizard)', 45.7],
        ['Spinosaurus (spiny lizard)', 12.2],
        ['Supersaurus (super lizard)', 30.5],
        ['Tyrannosaurus (tyrant lizard)', 15.2],
        ['Ultrasaurus (ultra lizard)', 30.5],
        ['Velociraptor (swift robber)', 1.8]
   ]
  
       
  }

  onDefaultLegendClick(event: any) {

    this.sourceData = event;

  }

  onDefaultLegendClick1(event: any) {
this.sourceData1 = event;
  }



  onDefaultChartClick1(event: any) {
    this.sourceData = event;
  }

  onDefaultChartClick2(event: any) {
    this.sourceData1 = event;
   }
  

  onDefaultChartClick(event: any) {
    this.userDataSource = event;
  }

  onUserDefineLegendClick(event: any) {

    this.userDataSource = event;
  }

  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;
    let dataSource: any;
    //HTML FILE
    this.http.get('assets/data/code/charts/D3Charts/d3histogramchart/d3chart.html', { responseType: 'text' }).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    // TS FILE
    this.http.get('assets/data/code/charts/D3Charts/d3histogramchart/d3chart.text', { responseType: 'text' }).subscribe(data => {
      responseTs = data;
    }, error => {
    }, () => {
      this.typeScriptCode = responseTs;
    });
    // DataSource FILE
    this.http.get('assets/data/code/charts/D3Charts/d3histogramchart/datasource.json', { responseType: 'text' }).subscribe(data => {
      responseTs = data;
    }, error => {
    }, () => {
      this.dataSourceCode = responseTs;
    });

    // User DataSource FILE
    this.http.get('assets/data/code/charts/D3Charts/d3histogramchart/usersource.json', { responseType: 'text' }).subscribe(data => {
      responseTs = data;
    }, error => {
    }, () => {
      this.userDataSourceCode = responseTs;
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