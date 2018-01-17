/**
 * Created by sagar on 11/1/18.
 */
import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";
@Component({
  selector: 'histogram-chart-demo', template: `
    <amexio-card enableHeader="true">
      <amexio-header>
        <h2>Histogram Chart Component</h2>
      </amexio-header>
      <amexio-body>
        <p>A histogram is a chart that groups numeric data into bins, displaying the bins as segmented columns.</p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
            <amexio-row>
              <amexio-column size="12">
                <amexio-chart-histogram [height]="'400px'" [width]="'100%'" [data]="histogramChartData">
                  <amexio-chart-title [title]="'Lengths of dinosaurs, in meters'"></amexio-chart-title>
                </amexio-chart-histogram>
              </amexio-column>
            </amexio-row>
          </amexio-tab>
          <amexio-tab title="API Reference">
            <amexio-datagrid title="Chart Properties" [columnToggle]="false"
                             [httpMethod]="'get'"
                             [httpUrl]="'assets/apireference/charts/histogramchart.json'"
                             [dataReader]="'chart'"
                             [filtering]="false">
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
                             [httpUrl]="'assets/apireference/charts/histogramchart.json'"
                             [dataReader]="'chartTitle'"
                             [filtering]="false">
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
export class HistogramChartDemoComponent implements OnInit {
  histogramChartData: any;
  htmlCode: string;
  typeScriptCode: string;
  dataSourceCode: string;
  copyMsgArray: any[];

  constructor(private http: Http) {
    this.histogramChartData = [['Dinosaur', 'Length'], ['Acrocanthosaurus (top-spined lizard)', 12.2], ['Albertosaurus (Alberta lizard)', 9.1], ['Allosaurus (other lizard)', 12.2], ['Apatosaurus (deceptive lizard)', 22.9], ['Archaeopteryx (ancient wing)', 0.9], ['Argentinosaurus (Argentina lizard)', 36.6], ['Baryonyx (heavy claws)', 9.1], ['Brachiosaurus (arm lizard)', 30.5], ['Ceratosaurus (horned lizard)', 6.1], ['Coelophysis (hollow form)', 2.7], ['Compsognathus (elegant jaw)', 0.9], ['Deinonychus (terrible claw)', 2.7], ['Diplodocus (double beam)', 27.1], ['Dromicelomimus (emu mimic)', 3.4], ['Gallimimus (fowl mimic)', 5.5], ['Mamenchisaurus (Mamenchi lizard)', 21.0], ['Megalosaurus (big lizard)', 7.9], ['Microvenator (small hunter)', 1.2], ['Ornithomimus (bird mimic)', 4.6], ['Oviraptor (egg robber)', 1.5], ['Plateosaurus (flat lizard)', 7.9], ['Sauronithoides (narrow-clawed lizard)', 2.0], ['Seismosaurus (tremor lizard)', 45.7], ['Spinosaurus (spiny lizard)', 12.2], ['Supersaurus (super lizard)', 30.5], ['Tyrannosaurus (tyrant lizard)', 15.2], ['Ultrasaurus (ultra lizard)', 30.5], ['Velociraptor (swift robber)', 1.8]];

    this.getHtmlAndTypeScriptCode();
  }

  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;

    //HTML FILE
    this.http.get('assets/data/code/charts/histogramchart/chart.html').subscribe(data => {
      responseHtml = data.text();
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/charts/histogramchart/chart.text').subscribe(data => {
      responseTs = data.text();
    }, error => {
    }, () => {
      this.typeScriptCode = responseTs;
    });
    //DataSource FILE
    this.http.get('assets/data/code/charts/histogramchart/datasource.json').subscribe(data => {
      responseTs = data.text();
    }, error => {
    }, () => {
      this.dataSourceCode = responseTs;
    });
  }

  //this code use copy to html code from tabpanel
  onCopyClick() {
    if (this.copyMsgArray.length >= 1) {
      this.copyMsgArray = [];
      this.copyMsgArray.push({'msg': 'Code Copied', 'type': 'info'});
    } else {
      this.copyMsgArray.push({'msg': 'Code Copied', 'type': 'info'});
    }
  }

  ngOnInit() {
  }

}


