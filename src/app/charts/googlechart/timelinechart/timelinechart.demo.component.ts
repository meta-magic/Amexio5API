/**
 * Created by sagar on 11/1/18.
 */
import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'scatter-chart-demo',
 templateUrl: './timelinechart.demo.component.html',
})
export class TimelineChartDemoComponent implements OnInit {
  timelineChartData:any;
  htmlCode: string;
  typeScriptCode: string;
  dataSourceCode:string;
  copyMsgArray: any[];
  constructor(private http: HttpClient) {
    this.timelineChartData=[
      [{"datatype":'string',"label":'Prime Minister'},
        {"datatype":"date", "label":'Start'},
        {"datatype":"date","label":"End"}
      ],
      [ 'Washington', new Date(1789, 3, 30), new Date(1797, 2, 4) ],
      [ 'Adams',      new Date(1797, 2, 4),  new Date(1801, 2, 4) ],
      [ 'Jefferson',  new Date(1801, 2, 4),  new Date(1809, 2, 4) ]
    ];
    this.getHtmlAndTypeScriptCode();
  }
  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs:any;

    //HTML FILE
    this.http.get('assets/data/code/charts/timelinechart/chart.html',{responseType: 'text'}).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/charts/timelinechart/chart.text',{responseType: 'text'}).subscribe(data => {
      responseTs = data;
    }, error => {
    }, () => {
      this.typeScriptCode = responseTs;
    });
    //DataSource FILE
    this.http.get('assets/data/code/charts/timelinechart/datasource.json',{responseType: 'text'}).subscribe(data => {
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


