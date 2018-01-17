/**
 * Created by sagar on 11/1/18.
 */
import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";
@Component({
  selector: 'datapoint', template: `
    <amexio-card enableHeader="true">
      <amexio-header>
        <h2>Data Point Component</h2>
      </amexio-header>
      <amexio-body>
        <p>Represent the summary of the data in bullet point format.</p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
            <amexio-row>
              <amexio-column size="6">
                <amexio-datapoints [west]="true" [center]="true" [east]="true" [south]="true"
                                   [backgroundColor]="'#efa64c'" [fontColor]="'#ffffff'">
                  <amexio-west [contentalign]="'center'" [width]="'100px'">
                    <amexio-image [imageClass]="'fa fa-line-chart fa-3x'"></amexio-image>
                  </amexio-west>
                  <amexio-center [contentalign]="'right'">
                    <amexio-datapoints [north]="true" [center]="true" [south]="true">
                      <amexio-north [cClass]="'datapoint-north'">
                        200 Million
                      </amexio-north>
                      <amexio-center [cClass]="'datapoint-center'">
                        Sales Volume
                      </amexio-center>
                    </amexio-datapoints>
                  </amexio-center>
                  <amexio-south [contentalign]="'center'" [backgroundColor]="'#d97c3e'">10% More than last year
                  </amexio-south>
                </amexio-datapoints>
              </amexio-column>
              <amexio-column size="6">
                <amexio-datapoints [west]="true" [center]="true" [east]="true" [south]="true"
                                   [backgroundColor]="'#68bafc'" [fontColor]="'#ffffff'">
                  <amexio-west [contentalign]="'center'" [width]="'100px'">
                    <amexio-image [imageClass]="'fa fa-line-chart fa-3x'"></amexio-image>
                  </amexio-west>
                  <amexio-center [contentalign]="'right'">
                    <amexio-datapoints [north]="true" [center]="true" [south]="true">
                      <amexio-north [cClass]="'datapoint-north'">
                        $10 Million
                      </amexio-north>
                      <amexio-center [cClass]="'datapoint-center'">
                        Sales Revenue
                      </amexio-center>
                    </amexio-datapoints>
                  </amexio-center>
                  <amexio-south [contentalign]="'center'" [backgroundColor]="'#3192e1'">5% more than last year
                  </amexio-south>
                </amexio-datapoints>
              </amexio-column>
            </amexio-row>
            <amexio-row>
              <amexio-column size="3">
                <amexio-datapoints [west]="true" [center]="true" [east]="true" [south]="true"
                                   [backgroundColor]="'#4CAF50'" [fontColor]="'#ffffff'">
                  <amexio-west [contentalign]="'center'">
                    <amexio-image [imageClass]="'fa fa-check fa-3x'"></amexio-image>
                  </amexio-west>
                  <amexio-center [contentalign]="'right'">
                    <amexio-datapoints [north]="true" [center]="true" [south]="true">
                      <amexio-north [cClass]="'datapoint-north'">
                        212
                      </amexio-north>
                      <amexio-center [cClass]="'datapoint-center'">
                        Closed
                      </amexio-center>
                    </amexio-datapoints>
                  </amexio-center>
                </amexio-datapoints>
              </amexio-column>
              <amexio-column size="3">
                <amexio-datapoints [west]="true" [center]="true" [east]="true" [south]="true"
                                   [backgroundColor]="'#FF9800'" [fontColor]="'#ffffff'">
                  <amexio-west [contentalign]="'center'">
                    <amexio-image [imageClass]="'fa fa-envelope-open-o fa-3x'"></amexio-image>
                  </amexio-west>
                  <amexio-center [contentalign]="'right'">
                    <amexio-datapoints [north]="true" [center]="true" [south]="true">
                      <amexio-north [cClass]="'datapoint-north'">
                        20
                      </amexio-north>
                      <amexio-center [cClass]="'datapoint-center'">
                        Open
                      </amexio-center>
                    </amexio-datapoints>
                  </amexio-center>
                </amexio-datapoints>
              </amexio-column>
              <amexio-column size="2">
                <amexio-datapoints [west]="true" [center]="true" [east]="true" [south]="true"
                                   [backgroundColor]="'#68bafc'" [fontColor]="'#ffffff'">
                  <amexio-west [contentalign]="'center'">
                    <amexio-image [imageClass]="'fa fa-bolt fa-3x'"></amexio-image>
                  </amexio-west>
                  <amexio-center [contentalign]="'right'">
                    <amexio-datapoints [north]="true" [center]="true" [south]="true">
                      <amexio-north [cClass]="'datapoint-north'">
                        3
                      </amexio-north>
                      <amexio-center [cClass]="'datapoint-center'">
                        High
                      </amexio-center>
                    </amexio-datapoints>
                  </amexio-center>
                </amexio-datapoints>
              </amexio-column>
              <amexio-column size="2">
                <amexio-datapoints [west]="true" [center]="true" [east]="true" [south]="true"
                                   [backgroundColor]="'#607D8B'" [fontColor]="'#ffffff'">
                  <amexio-west [contentalign]="'center'">
                    <amexio-image [imageClass]="'fa fa-medium fa-3x'"></amexio-image>
                  </amexio-west>
                  <amexio-center [contentalign]="'right'">
                    <amexio-datapoints [north]="true" [center]="true" [south]="true">
                      <amexio-north [cClass]="'datapoint-north'">
                        7
                      </amexio-north>
                      <amexio-center [cClass]="'datapoint-center'">
                        Medium
                      </amexio-center>
                    </amexio-datapoints>
                  </amexio-center>
                </amexio-datapoints>
              </amexio-column>
              <amexio-column size="2">
                <amexio-datapoints [west]="true" [center]="true" [east]="true" [south]="true"
                                   [backgroundColor]="'#00BCD4'" [fontColor]="'#ffffff'">
                  <amexio-west [contentalign]="'center'">
                    <amexio-image [imageClass]="'fa fa-low-vision fa-3x'"></amexio-image>
                  </amexio-west>
                  <amexio-center [contentalign]="'right'">
                    <amexio-datapoints [north]="true" [center]="true" [south]="true">
                      <amexio-north [cClass]="'datapoint-north'">
                        10
                      </amexio-north>
                      <amexio-center [cClass]="'datapoint-center'">
                        Low
                      </amexio-center>
                    </amexio-datapoints>
                  </amexio-center>
                </amexio-datapoints>
              </amexio-column>

            </amexio-row>
          </amexio-tab>
          <amexio-tab title="API Reference">
            <amexio-datagrid title="Chart Properties" [columnToggle]="false"
                             [httpMethod]="'get'"
                             [httpUrl]="'assets/apireference/datapoint/datapoint.json'"
                             [dataReader]="'dashboard'"
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
            <amexio-datagrid title="Chart Properties" [columnToggle]="false"
                             [httpMethod]="'get'"
                             [httpUrl]="'assets/apireference/datapoint/datapoint.json'"
                             [dataReader]="'location'"
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
export class DataPointComponent implements OnInit {
  gaugeChartData: any;
  htmlCode: string;
  typeScriptCode: string;
  dataSourceCode: string;
  copyMsgArray: any[];

  constructor(private http: Http) {
    this.gaugeChartData = [['Label', 'Value'], ['Memory', 80], ['CPU', 55], ['Network', 68]];
    this.getHtmlAndTypeScriptCode();
  }

  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;

    //HTML FILE
    this.http.get('assets/data/code/dashboard/datapoint/datapoint.html').subscribe(data => {
      responseHtml = data.text();
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/dashboard/datapoint/datapoint.ts').subscribe(data => {
      responseTs = data.text();
    }, error => {
    }, () => {
      this.typeScriptCode = responseTs;
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


