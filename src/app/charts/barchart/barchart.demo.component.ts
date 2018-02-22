/**
 * Created by sagar on 11/1/18.
 */
import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'bar-chart-demo',
  template: `
    <amexio-card header="true">
      <amexio-header>
         Bar Chart 
      </amexio-header>
      <amexio-body>
        <p>An bar chart that is rendered within the browser using SVG. A bar chart is a chart that presents grouped data with rectangular bars with lengths proportional to the values that they represent.</p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
           <amexio-row>
             <amexio-column size="6">
               <amexio-chart-bar [data]="barChartData" [height]="'400px'" [width]="'100%'" >
                 <amexio-chart-title [title]="'Population of Largest U.S. Cities'"></amexio-chart-title>
                 <amexio-chart-legend [position]="'bottom'"></amexio-chart-legend>
               </amexio-chart-bar>
             </amexio-column>
             <amexio-column size="6">
               <amexio-chart-bar [data]="barStackChartData" [height]="'400px'" [width]="'100%'"  [stacked]="true">
                 <amexio-chart-title [title]="'Company Performance'"></amexio-chart-title>
                 <amexio-chart-legend [position]="'bottom'"></amexio-chart-legend>
               </amexio-chart-bar>
             </amexio-column>
           </amexio-row>
          </amexio-tab>
          <amexio-tab title="API Reference">
            <amexio-datagrid title="Chart Properties" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/charts/barchart.json'"
                             [data-reader]="'chart'"
                             [enable-data-filter]="false" >
              <amexio-data-table-column [width]="15" [data-index]="'name'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [width]="10" [data-index]="'type'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Type'"></amexio-data-table-column>
              <amexio-data-table-column [width]="10" [data-index]="'default'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Default'"></amexio-data-table-column>
              <amexio-data-table-column [width]="65" [data-index]="'description'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Description'"></amexio-data-table-column>
            </amexio-datagrid>
            <br>
            <amexio-datagrid title="Chart Title Properties" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/charts/barchart.json'"
                             [data-reader]="'chartTitle'"
                             [enable-data-filter]="false" >
              <amexio-data-table-column [width]="15" [data-index]="'name'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [width]="10" [data-index]="'type'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Type'"></amexio-data-table-column>
              <amexio-data-table-column [width]="10" [data-index]="'default'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Default'"></amexio-data-table-column>
              <amexio-data-table-column [width]="65" [data-index]="'description'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Description'"></amexio-data-table-column>
            </amexio-datagrid>
            <br>
            <amexio-datagrid title="Chart Legend Properties" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/charts/barchart.json'"
                             [data-reader]="'chartLegend'"
                             [enable-data-filter]="false" >
              <amexio-data-table-column [width]="15" [data-index]="'name'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [width]="10" [data-index]="'type'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Type'"></amexio-data-table-column>
              <amexio-data-table-column [width]="10" [data-index]="'default'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Default'"></amexio-data-table-column>
              <amexio-data-table-column [width]="65" [data-index]="'description'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Description'"></amexio-data-table-column>
            </amexio-datagrid>
          </amexio-tab>
          <amexio-tab title="Source">
            <div style="overflow-y: scroll">
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
            </div>
          </amexio-tab>
          <amexio-tab title="Live">
                       <p align="center">Amexio Sandbox</p>
<iframe style="width: 100%; height: 600px" src="https://stackblitz.com/edit/amexio-v4-barchart?embed=1&file=app/charts/barchart/barchart.demo.html" frameborder="0" allowfullscren="allowfullscren"></iframe>
          </amexio-tab>
        </amexio-tab-view>
      </amexio-body>
    </amexio-card>
  
  `
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


