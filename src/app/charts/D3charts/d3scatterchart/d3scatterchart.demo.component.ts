import { Component, OnInit, Input, AfterContentInit } from '@angular/core';
import * as d3 from 'd3';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'amexio-d3-chart-scatter-demo',
  templateUrl: './d3scatterchart.demo.component.html'
})
export class AmexioD3ScatterChartDemoComponent implements OnInit {

  htmlCode: string;
  typeScriptCode: string;
  userDataSourceCode: string;
  dataSourceCode: string;
  copyMsgArray: any[];
  scatterChartData: any;
  userDataSource: any;
  userDataSource1: any;
  mineralScatterChartData: any;
  
  constructor(private http: HttpClient) {
    this.getHtmlAndTypeScriptCode();
  }


  ngOnInit() {
    this.mineralScatterChartData = [
      ['Calories', 'Protein', 'Type' ,'Brand'],
      [5, 25, 'Kelloggs','All-Bran'],
      [8, 20,'Kelloggs','Apple_Jacks'],
      [10, 25,'Kelloggs','Corn_Flakes'],
      [2, 15, 'Kelloggs','All-Bran'],
      [12, 22,'Kelloggs','Apple_Jacks'],
      [10, 15,'Kelloggs','Corn_Flakes'],
      [3, 12,'Kelloggs','Fruitful_Bran'],
      [12,18,'Oats','Honey_Graham_Ohs'],
      [7,19,'Oats','Life'],
      [11,9,'Oats','Honey_Graham_Ohs'],
      [6,19,'Oats','Life'],
      [7,10,'Oats','Puffed_Rice'],
      [8,22,'General Mills','Lucky_Charms'],
      [5,1,'General Mills','Raisin_Nut'],
      [7,16,'General Mills','Triples'],
      [7,26,'General Mills','Corn Flakes'],
  ];

    this.scatterChartData = [
      ['Age', 'Weight'],
      [5, 35],
      [8, 40],
      [10, 45],
      [3, 12],
      [12, 48],
      [6, 39],
      [8, 42],
      [5, 32],
      [7, 46],
      [1,10],
      [3,15],
      [2,8],
      [4,20]
    ];

  }

  onLegendClick(event: any) {
    this.userDataSource = event;
  }

  onChartClick(event: any) {
    this.userDataSource = event;
  }

  onLegendClick1(event: any) {
    this.userDataSource1 = event;
  }

  onChartClick1(event: any) {
    this.userDataSource1 = event;
  }

  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;
    let dataSource: any;
    //HTML FILE
    this.http.get('assets/data/code/charts/D3Charts/d3scatterchart/d3chart.html', { responseType: 'text' }).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    // TS FILE
    this.http.get('assets/data/code/charts/D3Charts/d3scatterchart/d3chart.text', { responseType: 'text' }).subscribe(data => {
      responseTs = data;
    }, error => {
    }, () => {
      this.typeScriptCode = responseTs;
    });
    // DataSource FILE
    this.http.get('assets/data/code/charts/D3Charts/d3scatterchart/datasource.json', { responseType: 'text' }).subscribe(data => {
      responseTs = data;
    }, error => {
    }, () => {
      this.dataSourceCode = responseTs;
    });

    // User DataSource FILE
    this.http.get('assets/data/code/charts/D3Charts/d3scatterchart/usersource.json', { responseType: 'text' }).subscribe(data => {
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
