/**
 * Created by sagar on 11/1/18.
 */
import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";
@Component({
  selector: 'scatter-chart-demo',
  template: `
    <amexio-card enableHeader="true">
      <amexio-header>
        <h2>Scatter Chart Component</h2>
      </amexio-header>
      <amexio-body>
        <p>Scatter charts plot points on a graph. When the user hovers over the points, tooltips are displayed with more information.</p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
           <amexio-row>
             <amexio-column size="12">
               <amexio-chart-scatter [height]="'400px'" [data]="scatterChartData">
                 <amexio-chart-title [title]="'Age vs. Weight comparison'"></amexio-chart-title>
                 <amexio-chart-horizontal-axis [title]="'Age'"></amexio-chart-horizontal-axis>
                 <amexio-chart-vertical-axis [title]="'Weight'"></amexio-chart-vertical-axis>
               </amexio-chart-scatter>
             </amexio-column>
           </amexio-row>
          </amexio-tab>
          <amexio-tab title="API Reference">
            <amexio-datagrid title="Chart Properties" [columnToggle]="false"
                             [httpMethod]="'get'"
                             [httpUrl]="'assets/apireference/charts/scatterchart.json'"
                             [dataReader]="'chart'"
                             [filtering]="false" >
              <amexio-data-table-column [dataIndex]="'name'" [dataType]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [dataIndex]="'type'" [dataType]="'string'" [hidden]="false"
                                        [text]="'Type'"></amexio-data-table-column>
              <amexio-data-table-column [dataIndex]="'default'" [dataType]="'string'" [hidden]="false"
                                        [text]="'Default'"></amexio-data-table-column>
              <amexio-data-table-column [dataIndex]="'description'" [dataType]="'string'" [hidden]="false"
                                        [text]="'Description'"></amexio-data-table-column>
            </amexio-datagrid>
            <br>
            <amexio-datagrid title="Chart Title Properties" [columnToggle]="false"
                             [httpMethod]="'get'"
                             [httpUrl]="'assets/apireference/charts/scatterchart.json'"
                             [dataReader]="'chartTitle'"
                             [filtering]="false" >
              <amexio-data-table-column [dataIndex]="'name'" [dataType]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [dataIndex]="'type'" [dataType]="'string'" [hidden]="false"
                                        [text]="'Type'"></amexio-data-table-column>
              <amexio-data-table-column [dataIndex]="'default'" [dataType]="'string'" [hidden]="false"
                                        [text]="'Default'"></amexio-data-table-column>
              <amexio-data-table-column [dataIndex]="'description'" [dataType]="'string'" [hidden]="false"
                                        [text]="'Description'"></amexio-data-table-column>
            </amexio-datagrid>
            <br>
            <amexio-datagrid title="Chart Legend Properties" [columnToggle]="false"
                             [httpMethod]="'get'"
                             [httpUrl]="'assets/apireference/charts/scatterchart.json'"
                             [dataReader]="'chartLegend'"
                             [filtering]="false" >
              <amexio-data-table-column [dataIndex]="'name'" [dataType]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [dataIndex]="'type'" [dataType]="'string'" [hidden]="false"
                                        [text]="'Type'"></amexio-data-table-column>
              <amexio-data-table-column [dataIndex]="'default'" [dataType]="'string'" [hidden]="false"
                                        [text]="'Default'"></amexio-data-table-column>
              <amexio-data-table-column [dataIndex]="'description'" [dataType]="'string'" [hidden]="false"
                                        [text]="'Description'"></amexio-data-table-column>
            </amexio-datagrid>
            <br>
            <amexio-datagrid title="Chart Horizontal Axis" [columnToggle]="false"
                             [httpMethod]="'get'"
                             [httpUrl]="'assets/apireference/charts/scatterchart.json'"
                             [dataReader]="'horizontalAxis'"
                             [filtering]="false" >
              <amexio-data-table-column [dataIndex]="'name'" [dataType]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [dataIndex]="'type'" [dataType]="'string'" [hidden]="false"
                                        [text]="'Type'"></amexio-data-table-column>
              <amexio-data-table-column [dataIndex]="'default'" [dataType]="'string'" [hidden]="false"
                                        [text]="'Default'"></amexio-data-table-column>
              <amexio-data-table-column [dataIndex]="'description'" [dataType]="'string'" [hidden]="false"
                                        [text]="'Description'"></amexio-data-table-column>
            </amexio-datagrid>
            <br>
            <amexio-datagrid title="Chart Vertical Axis" [columnToggle]="false"
                             [httpMethod]="'get'"
                             [httpUrl]="'assets/apireference/charts/scatterchart.json'"
                             [dataReader]="'verticalAxis'"
                             [filtering]="false" >
              <amexio-data-table-column [dataIndex]="'name'" [dataType]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [dataIndex]="'type'" [dataType]="'string'" [hidden]="false"
                                        [text]="'Type'"></amexio-data-table-column>
              <amexio-data-table-column [dataIndex]="'default'" [dataType]="'string'" [hidden]="false"
                                        [text]="'Default'"></amexio-data-table-column>
              <amexio-data-table-column [dataIndex]="'description'" [dataType]="'string'" [hidden]="false"
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
export class ScatterChartDemoComponent implements OnInit {
  scatterChartData:any;
  htmlCode: string;
  typeScriptCode: string;
  dataSourceCode:string;
  copyMsgArray: any[];
  constructor(private http: Http) {
    this.scatterChartData=[
      ['Age', 'Weight'],
      [ 8,      12],
      [ 4,      5.5],
      [ 11,     14],
      [ 4,      5],
      [ 3,      3.5],
      [ 6.5,    7]
    ];
    this.getHtmlAndTypeScriptCode();
  }
  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs:any;

    //HTML FILE
    this.http.get('assets/data/code/charts/scatterchart/chart.html').subscribe(data => {
      responseHtml = data.text();
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/charts/scatterchart/chart.text').subscribe(data => {
      responseTs = data.text();
    }, error => {
    }, () => {
      this.typeScriptCode = responseTs;
    });
    //DataSource FILE
    this.http.get('assets/data/code/charts/scatterchart/datasource.json').subscribe(data => {
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


