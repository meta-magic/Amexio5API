/**
 * Created by sagar on 11/1/18.
 */
import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'gantt-chart-demo',
  template: `
    <amexio-card header="true">
      <amexio-header>
         Gantt Chart Component
      </amexio-header>
      <amexio-body>
        <p>A Gantt chart is a type of chart that illustrates the breakdown of a project into its component tasks.</p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
           <amexio-row>
             <amexio-column size="12">
             <amexio-label>A simple example</amexio-label><br>
               <amexio-chart-gantt  [data]="ganttChartData" [width]="'100%'"  >
               </amexio-chart-gantt>
             </amexio-column>
           </amexio-row>
           <br>
           <amexio-row>
           <amexio-column size="12">
           <amexio-label>A Gantt Chart with no dependencies</amexio-label><br>
             <amexio-chart-gantt [data]="ganttChartWithNoDepData" [width]="'100%'"  >
             </amexio-chart-gantt>

           </amexio-column>
         </amexio-row>
         <br>
         <amexio-row>
         <amexio-column size="12">
         <amexio-label>A Gantt Chart with grouping resources</amexio-label><br>
           <amexio-chart-gantt [data]="ganttChartWithGropResources" [width]="'100%'"  >
           </amexio-chart-gantt>

         </amexio-column>
       </amexio-row>
          </amexio-tab>
          <amexio-tab title="API Reference">
            <amexio-datagrid title="Chart Properties <amexio-chart-gantt>" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/charts/ganttchart.json'"
                             [data-reader]="'chart'"
                             [enable-data-filter]="false" >
              <amexio-data-table-column [width]="25" [data-index]="'name'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [width]="10" [data-index]="'type'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Type'"></amexio-data-table-column>
              <amexio-data-table-column [width]="10" [data-index]="'default'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Default'"></amexio-data-table-column>
              <amexio-data-table-column [width]="55" [data-index]="'description'" [data-type]="'string'" [hidden]="false"
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
            WORK IN PROGRESS
           </amexio-tab>
        </amexio-tab-view>
      </amexio-body>
    </amexio-card>

  `
})
export class GanttChartDemoComponent implements OnInit {
  ganttChartData:any;
  ganttChartWithNoDepData:any;
  ganttChartWithGropResources:any;
  htmlCode: string;
  typeScriptCode: string;
  dataSourceCode:string;
  copyMsgArray: any[];
  constructor(private http: HttpClient) {
    this.ganttChartData=[
      [{"datatype":'string',"label": 'Task ID'},{"datatype":'string',"label":  'Task Name'},{"datatype":'string', "label": 'Resource'},{"datatype":'date',"label":  'Start'},{"datatype":'date',"label":  'End'},{"datatype":'number',"label":  'Duration'},{"datatype":'number', "label": 'Percent Complete'},{"datatype":'string', "label": 'Dependencies'}],
            ['toTrain', 'Walk to train stop', 'walk', null, null, this.toMilliseconds(5), 100, null],
            ['music', 'Listen to music', 'music', null, null, this.toMilliseconds(70), 100, null],
            ['wait', 'Wait for train', 'wait', null, null, this.toMilliseconds(10), 100, 'toTrain'],
            ['train', 'Train ride', 'train', null, null, this.toMilliseconds(45), 75, 'wait'],
            ['toWork', 'Walk to work', 'walk', null, null, this.toMilliseconds(10), 0, 'train'],
            ['work', 'Sit down at desk', null, null, null, this.toMilliseconds(2), 0, 'toWork']
    ];
    this.ganttChartWithNoDepData=[
      [{"datatype":'string',"label": 'Task ID'},{"datatype":'string',"label":  'Task Name'},
      {"datatype":'string', "label": 'Resource'},{"datatype":'date',"label":  'Start'},
      {"datatype":'date',"label":  'End'},{"datatype":'number',"label":  'Duration'},
      {"datatype":'number', "label": 'Percent Complete'},
      {"datatype":'string', "label": 'Dependencies'}],
      ['2014Spring', 'Spring 2014', 'spring',
       new Date(2014, 2, 22), new Date(2014, 5, 20), null, 100, null],
      ['2014Summer', 'Summer 2014', 'summer',
       new Date(2014, 5, 21), new Date(2014, 8, 20), null, 100, null],
      ['2014Autumn', 'Autumn 2014', 'autumn',
       new Date(2014, 8, 21), new Date(2014, 11, 20), null, 100, null],
      ['2014Winter', 'Winter 2014', 'winter',
       new Date(2014, 11, 21), new Date(2015, 2, 21), null, 100, null],
      ['2015Spring', 'Spring 2015', 'spring',
       new Date(2015, 2, 22), new Date(2015, 5, 20), null, 50, null],
      ['2015Summer', 'Summer 2015', 'summer',
       new Date(2015, 5, 21), new Date(2015, 8, 20), null, 0, null],
      ['2015Autumn', 'Autumn 2015', 'autumn',
       new Date(2015, 8, 21), new Date(2015, 11, 20), null, 0, null],
      ['2015Winter', 'Winter 2015', 'winter',
       new Date(2015, 11, 21), new Date(2016, 2, 21), null, 0, null],
      ['Football', 'Football Season', 'sports',
       new Date(2014, 8, 4), new Date(2015, 1, 1), null, 100, null],
      ['Baseball', 'Baseball Season', 'sports',
       new Date(2015, 2, 31), new Date(2015, 9, 20), null, 14, null],
      ['Basketball', 'Basketball Season', 'sports',
       new Date(2014, 9, 28), new Date(2015, 5, 20), null, 86, null],
      ['Hockey', 'Hockey Season', 'sports',
       new Date(2014, 9, 8), new Date(2015, 5, 21), null, 89, null]
    ];
    this.ganttChartWithGropResources=[
      [{"datatype":'string',"label": 'Task ID'},
      {"datatype":'string',"label":  'Task Name'},
      {"datatype":'string', "label": 'Resource'},
      {"datatype":'date',"label":  'Start'},
      {"datatype":'date',"label":  'End'},
      {"datatype":'number',"label":  'Duration'},
      {"datatype":'number', "label": 'Percent Complete'},
      {"datatype":'string', "label": 'Dependencies'}],
        ['Research', 'Find sources', null,
         new Date(2015, 0, 1), new Date(2015, 0, 5), null,  100,  null],
        ['Write', 'Write paper', 'write',
         null, new Date(2015, 0, 9), this.toMilliseconds(3), 25, 'Research,Outline'],
        ['Cite', 'Create bibliography', 'write',
         null, new Date(2015, 0, 7), this.toMilliseconds(1), 20, 'Research'],
        ['Complete', 'Hand in paper', 'complete',
         null, new Date(2015, 0, 10), this.toMilliseconds(1), 0, 'Cite,Write'],
        ['Outline', 'Outline paper', 'write',
         null, new Date(2015, 0, 6), this.toMilliseconds(1), 100, 'Research']

    ];
    this.getHtmlAndTypeScriptCode();
  }
  toMilliseconds(days:number){
    return days * 24 * 60 * 60 * 1000;
  }
  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs:any;

    //HTML FILE
    this.http.get('assets/data/code/charts/ganttchart/chart.html',{responseType: 'text'}).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/charts/ganttchart/chart.text',{responseType: 'text'}).subscribe(data => {
      responseTs = data;
    }, error => {
    }, () => {
      this.typeScriptCode = responseTs;
    });
    //DataSource FILE
    this.http.get('assets/data/code/charts/ganttchart/datasource.json',{responseType: 'text'}).subscribe(data => {
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


