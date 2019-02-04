/**
 * Created by sagar on 11/1/18.
 */
import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'bubble-chart-demo',
  templateUrl: './bubblechart.demo.component.html',
})
export class BubbleChartDemoComponent implements OnInit {
  bubbleChartData:any;
  bubbleChartColorAxis:any;
  htmlCode: string;
  typeScriptCode: string;
  dataSourceCode:string;
  copyMsgArray: any[];
  constructor(private http: HttpClient) {
    this.bubbleChartData=[
      ['ID', 'Life Expectancy', 'Fertility Rate', 'Region',     'Population'],
      ['CAN',    80.66,              1.67,      'North America',  33739900],
      ['DEU',    79.84,              1.36,      'Europe',         81902307],
      ['DNK',    78.6,               1.84,      'Europe',         5523095],
      ['EGY',    72.73,              2.78,      'Middle East',    79716203],
      ['GBR',    80.05,              2,         'Europe',         61801570],
      ['IRN',    72.49,              1.7,       'Middle East',    73137148],
      ['IRQ',    68.09,              4.77,      'Middle East',    31090763],
      ['ISR',    81.55,              2.96,      'Middle East',    7485600],
      ['RUS',    68.6,               1.54,      'Europe',         141850000],
      ['USA',    78.09,              2.05,      'North America',  307007000]
    ];
    this.bubbleChartColorAxis=[
      ['ID', 'X', 'Y', 'Temperature'],
      ['',   80,  167,      120],
      ['',   79,  136,      130],
      ['',   78,  184,      50],
      ['',   72,  278,      230],
      ['',   81,  200,      210],
      ['',   72,  170,      100],
      ['',   68,  477,      80]
    ];
    this.getHtmlAndTypeScriptCode();
  }
  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs:any;

    //HTML FILE
    this.http.get('assets/data/code/charts/bubblechart/chart.html',{responseType: 'text'}).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/charts/bubblechart/chart.text',{responseType: 'text'}).subscribe(data => {
      responseTs = data;
    }, error => {
    }, () => {
      this.typeScriptCode = responseTs;
    });
    //DataSource FILE
    this.http.get('assets/data/code/charts/bubblechart/datasource.json',{responseType: 'text'}).subscribe(data => {
      responseTs = data;
    }, error => {
    }, () => {
      this.dataSourceCode = responseTs;
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


