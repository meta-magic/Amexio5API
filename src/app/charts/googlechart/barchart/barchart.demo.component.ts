/**
 * Created by sagar on 11/1/18.
 */
import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'bar-chart-demo',
  templateUrl: './barchart.demo.component.html',
})
export class BarChartDemoComponent implements OnInit {
  barStackChartData:any;
  barChartData:any;
  htmlCode: string;
  typeScriptCode: string;
  dataSourceCode:string;
  copyMsgArray: any[];
  constructor(private http: HttpClient) {
    this.barStackChartData=[
      ['Year', 'Sales', 'Expenses', 'Profit'],
      ['2014', 1000, 400, 200],
      ['2015', 1170, 460, 250],
      ['2016', 660, 1120, 300],
      ['2017', 1030, 540, 350]
    ];
    this.barChartData = [
      ['City', '2010 Population',],
      ['New York City, NY', 8175000],
      ['Los Angeles, CA', 3792000],
      ['Chicago, IL', 2695000],
      ['Houston, TX', 2099000],
      ['Philadelphia, PA', 1526000]
    ];
    this.getHtmlAndTypeScriptCode();
  }
  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs:any;
    let responseDataSource:any;
    //HTML FILE
    this.http.get('assets/data/code/charts/barchart/chart.html',{responseType: 'text'}).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/charts/barchart/chart.text',{responseType: 'text'}).subscribe(data => {
      responseTs = data;
    }, error => {
    }, () => {
      this.typeScriptCode = responseTs;
    });
    //DataSource FILE
    this.http.get('assets/data/code/charts/barchart/datasource.json',{responseType: 'text'}).subscribe(data => {
      responseDataSource = data;
    }, error => {
    }, () => {
      this.dataSourceCode = responseDataSource;
    });
  }

  //this code use copy to html code from tabpanel
  onCopyClick(){
    if(this.copyMsgArray.length>=1){
      this.copyMsgArray=[];
      this.copyMsgArray.push({'msg':'Code Copied', 'type' : 'info'});
    }else{
      this.copyMsgArray.push({'msg':'Code Copied', 'type' : 'info'});
    }
  }
  ngOnInit() {
  }

}


