/**
 * Created by sagar on 11/1/18.
 */
import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";
@Component({
  selector: 'column-chart-demo',
  template: `
    <amexio-card enableHeader="true">
      <amexio-header>
        <h2>Column Chart Component</h2>
      </amexio-header>
      <amexio-body>
        <p>A column chart is a vertical bar chart rendered in the browser using SVG.</p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
           <amexio-row>
             <amexio-column size="6">
               <amexio-chart-column [data]="columnChartData" [height]="'400px'" [width]="'100%'" >
                 <amexio-chart-title [title]="'Motivation and Energy Level Throughout the Day'"></amexio-chart-title>
                 <amexio-chart-legend [legendPosition]="'bottom'"></amexio-chart-legend>
               </amexio-chart-column>
             </amexio-column>
             <amexio-column size="6">
               <amexio-chart-column [data]="columnStackChartData" [height]="'400px'"[width]="'100%'"  [isStacked]="true">
                 <amexio-chart-title [title]="'Motivation Level Throughout the Day'"></amexio-chart-title>
                 <amexio-chart-legend [legendPosition]="'bottom'"></amexio-chart-legend>
               </amexio-chart-column>
             </amexio-column>
           </amexio-row>
          </amexio-tab>
          <amexio-tab title="API Reference">
            <amexio-datagrid title="Chart Properties" [columnToggle]="false"
                             [httpMethod]="'get'"
                             [httpUrl]="'assets/apireference/charts/columnchart.json'"
                             [dataReader]="'chart'"
                             [filtering]="false" >
              <amexio-data-table-column [width]="15" [dataIndex]="'name'" [dataType]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [width]="10" [dataIndex]="'type'" [dataType]="'string'" [hidden]="false"
                                        [text]="'Type'"></amexio-data-table-column>
              <amexio-data-table-column [width]="10" [dataIndex]="'default'" [dataType]="'string'" [hidden]="false"
                                        [text]="'Default'"></amexio-data-table-column>
              <amexio-data-table-column [width]="65" [dataIndex]="'description'" [dataType]="'string'" [hidden]="false"
                                        [text]="'Description'"></amexio-data-table-column>
            </amexio-datagrid>
            <br>
            <amexio-datagrid title="Chart Title Properties" [columnToggle]="false"
                             [httpMethod]="'get'"
                             [httpUrl]="'assets/apireference/charts/columnchart.json'"
                             [dataReader]="'chartTitle'"
                             [filtering]="false" >
              <amexio-data-table-column [width]="15" [dataIndex]="'name'" [dataType]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [width]="10" [dataIndex]="'type'" [dataType]="'string'" [hidden]="false"
                                        [text]="'Type'"></amexio-data-table-column>
              <amexio-data-table-column [width]="10" [dataIndex]="'default'" [dataType]="'string'" [hidden]="false"
                                        [text]="'Default'"></amexio-data-table-column>
              <amexio-data-table-column [width]="65" [dataIndex]="'description'" [dataType]="'string'" [hidden]="false"
                                        [text]="'Description'"></amexio-data-table-column>
            </amexio-datagrid>
            <br>
            <amexio-datagrid title="Chart Legend Properties" [columnToggle]="false"
                             [httpMethod]="'get'"
                             [httpUrl]="'assets/apireference/charts/columnchart.json'"
                             [dataReader]="'chartLegend'"
                             [filtering]="false" >
              <amexio-data-table-column [width]="15" [dataIndex]="'name'" [dataType]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [width]="10" [dataIndex]="'type'" [dataType]="'string'" [hidden]="false"
                                        [text]="'Type'"></amexio-data-table-column>
              <amexio-data-table-column [width]="10" [dataIndex]="'default'" [dataType]="'string'" [hidden]="false"
                                        [text]="'Default'"></amexio-data-table-column>
              <amexio-data-table-column [width]="65" [dataIndex]="'description'" [dataType]="'string'" [hidden]="false"
                                        [text]="'Description'"></amexio-data-table-column>
            </amexio-datagrid>
           
          </amexio-tab>
          <amexio-tab title="Source">
            <amexio-vertical-tab-view>
              <amexio-tab title="HTML" [active]="true">
                <ng-container *ngIf="htmlCode">
                  <!--<clip-copy [htmlCode]="htmlCode" (onClick)="onCopyClick()"></clip-copy>-->
                  <prism-block [code]="htmlCode" [language]="'html'"></prism-block>
                </ng-container>
              </amexio-tab>
              <amexio-tab title="Type Script">
                <ng-container *ngIf="typeScriptCode">
                  <prism-block [code]="typeScriptCode" [language]="'typescript'"></prism-block>
                </ng-container>
              </amexio-tab>
              <amexio-tab title="Data Source">
                <ng-container *ngIf="dataSourceCode">
                  <prism-block [code]="dataSourceCode" [language]="'json'"></prism-block>
                </ng-container>
              </amexio-tab>
            </amexio-vertical-tab-view>
          </amexio-tab>
          <amexio-tab title="Live">
            Work in Progress
          </amexio-tab>
        </amexio-tab-view>
      </amexio-body>
    </amexio-card>
  
  `
})
export class ColumnChartDemoComponent implements OnInit {
  columnStackChartData:any;
  columnChartData:any;
  htmlCode: string;
  typeScriptCode: string;
  dataSourceCode:string;
  copyMsgArray: any[];
  constructor(private http: Http) {
    this.columnStackChartData=[
      [{"dataType":'timeofday',"label":'Time of Day'},
        {"dataType":"number", "label":'Motivation Level'},
        {"dataType":"number","label":"Energy Level"}
      ],
      [{v: [8, 0, 0], f: '8 am'}, 1, .25],
      [{v: [9, 0, 0], f: '9 am'}, 2, .5],
      [{v: [10, 0, 0], f:'10 am'}, 3, 1],
      [{v: [11, 0, 0], f: '11 am'}, 4, 2.25],
      [{v: [12, 0, 0], f: '12 pm'}, 5, 2.25],
      [{v: [13, 0, 0], f: '1 pm'}, 6, 3],
      [{v: [14, 0, 0], f: '2 pm'}, 7, 4],
      [{v: [15, 0, 0], f: '3 pm'}, 8, 5.25],
      [{v: [16, 0, 0], f: '4 pm'}, 9, 7.5],
      [{v: [17, 0, 0], f: '5 pm'}, 10, 10],
    ];
    this.columnChartData = [
      [{"dataType":'timeofday',"label":'Time of Day'},
        {"dataType":"number", "label":'Motivation Level'}
      ],
      [{v: [8, 0, 0], f: '8 am'}, 1],
      [{v: [9, 0, 0], f: '9 am'}, 2],
      [{v: [10, 0, 0], f:'10 am'}, 3],
      [{v: [11, 0, 0], f: '11 am'}, 4],
      [{v: [12, 0, 0], f: '12 pm'}, 5],
      [{v: [13, 0, 0], f: '1 pm'}, 6],
      [{v: [14, 0, 0], f: '2 pm'}, 7],
      [{v: [15, 0, 0], f: '3 pm'}, 8],
      [{v: [16, 0, 0], f: '4 pm'}, 9],
      [{v: [17, 0, 0], f: '5 pm'}, 10],
    ];
    this.getHtmlAndTypeScriptCode();
  }
  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs:any;

    //HTML FILE
    this.http.get('assets/data/code/charts/columnchart/chart.html').subscribe(data => {
      responseHtml = data.text();
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/charts/columnchart/chart.text').subscribe(data => {
      responseTs = data.text();
    }, error => {
    }, () => {
      this.typeScriptCode = responseTs;
    });
    //DataSource FILE
    this.http.get('assets/data/code/charts/columnchart/datasource.json').subscribe(data => {
      responseTs = data.text();
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


