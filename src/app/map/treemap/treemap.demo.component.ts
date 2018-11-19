/**
 * Created by sagar on 11/1/18.
 */
import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'tree-map-demo',
  template: `
    <amexio-card header="true">
      <amexio-header>
         TreeMap 
      </amexio-header>
      <amexio-body>
        <p>A visual representation of a data tree, where each node can have zero or more children, and one parent (except for the root, which has no parents). Each node is displayed as a rectangle, sized and colored according to values that you assign. </p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
           <amexio-row>
             <amexio-column size="12">
               <amexio-map-treemap [title]="'tree'" [height]="'500px'" [width]="'100%'" [data]="treeMapData"
                                   [max-color]="'#0d0'" [mid-color]="'#ddd'" [min-color]="'#f00'" [max-post-depth]="2" [show-scale]="true">

                                   <amexio-map-title 
                                   [title]="'TreeMapDemo'">
                                   </amexio-map-title>
               </amexio-map-treemap>
             </amexio-column>
           </amexio-row>
          </amexio-tab>
          <amexio-tab title="API Reference">
            <amexio-datagrid title="Map Properties<amexio-map-treemap>" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/map/treemap.json'"
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
            <amexio-datagrid title="Map Title Properties<amexio-map-title
            >" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/map/treemap.json'"
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
<iframe style="width: 100%; height: 600px" src="https://stackblitz.com/edit/amexi-v4-treemap?embed=1&file=app/map/treemap/treemap.demo.html" frameborder="0" allowfullscren="allowfullscren"></iframe>
          </amexio-tab>
        </amexio-tab-view>
      </amexio-body>
    </amexio-card>
  
  `
})
export class TreeMapDemoComponent implements OnInit {
  treeMapData:any;
  htmlCode: string;
  typeScriptCode: string;
  dataSourceCode:string;
  copyMsgArray: any[];
  constructor(private http: HttpClient) {
    this.treeMapData=[
      ['Location', 'Parent', 'Market trade volume (size)', 'Market increase/decrease (color)'],
      ['Global',    null,                 0,                               0],
      ['America',   'Global',             0,                               0],
      ['Europe',    'Global',             0,                               0],
      ['Asia',      'Global',             0,                               0],
      ['Australia', 'Global',             0,                               0],
      ['Africa',    'Global',             0,                               0],
      ['Brazil',    'America',            11,                              10],
      ['USA',       'America',            52,                              31],
      ['Mexico',    'America',            24,                              12],
      ['Canada',    'America',            16,                              -23],
      ['France',    'Europe',             42,                              -11],
      ['Germany',   'Europe',             31,                              -2],
      ['Sweden',    'Europe',             22,                              -13],
      ['Italy',     'Europe',             17,                              4],
      ['UK',        'Europe',             21,                              -5],
      ['China',     'Asia',               36,                              4],
      ['Japan',     'Asia',               20,                              -12],
      ['India',     'Asia',               40,                              63],
      ['Laos',      'Asia',               4,                               34],
      ['Mongolia',  'Asia',               1,                               -5],
      ['Israel',    'Asia',               12,                              24],
      ['Iran',      'Asia',               18,                              13],
      ['Pakistan',  'Asia',               11,                              -52],
      ['Egypt',     'Africa',             21,                              0],
      ['S. Africa', 'Africa',             30,                              43],
      ['Sudan',     'Africa',             12,                              2],
      ['Congo',     'Africa',             10,                              12],
      ['Zaire',     'Africa',             8,                               10]
    ];
    this.getHtmlAndTypeScriptCode();
  }
  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs:any;

    //HTML FILE
    this.http.get('assets/data/code/map/treemap/chart.html',{responseType: 'text'}).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/map/treemap/chart.text',{responseType: 'text'}).subscribe(data => {
      responseTs = data;
    }, error => {
    }, () => {
      this.typeScriptCode = responseTs;
    });
    //DataSource FILE
    this.http.get('assets/data/code/map/treemap/datasource.json',{responseType: 'text'}).subscribe(data => {
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


