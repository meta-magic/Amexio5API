/**
 * Created by sagar on 11/1/18.
 */
import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";
@Component({
  selector: 'datapoint', template: `
    <amexio-card header="true">
      <amexio-header>
        Data Point
      </amexio-header>
      <amexio-body>
        <p>Represent the summary of the data in bullet point format.</p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
            <amexio-row>
              <amexio-column [size]="4">
                <amexio-datapoints [west]="true" [center]="true" [east]="true" [south]="true">
                  <amexio-west [contentalign]="'center'" [c-class]="'datapoint-west'">
                    <amexio-image [icon-class]="'fa fa-line-chart fa-3x'">
                    </amexio-image>
                  </amexio-west>
                  <amexio-center [contentalign]="'center'">
                    <span class="datapoints-north">200 Million</span><br/><span
                    class="datapoints-center">Sales Volume</span>
                  </amexio-center>
                  <amexio-south [contentalign]="'center'" [c-class]="'datapoint-south'">
                    <div>10% More than last year</div>
                  </amexio-south>
                </amexio-datapoints>
              </amexio-column>
              <amexio-column [size]="4">
                <amexio-datapoints [west]="true" [center]="true" [east]="true" [south]="true">
                  <amexio-west [contentalign]="'center'" [c-class]="'datapoint-west'">
                    <amexio-image [icon-class]="'fa fa-line-chart fa-3x'">
                    </amexio-image>
                  </amexio-west>
                  <amexio-center [contentalign]="'center'">
                    <span class="datapoints-north">$10 Million</span><br/><span
                    class="datapoints-center">Sales Revenue</span>
                  </amexio-center>
                  <amexio-south [contentalign]="'center'" [c-class]="'datapoint-south'">
                    5% More than last year
                  </amexio-south>
                </amexio-datapoints>
              </amexio-column>
              <amexio-column [size]="4">
                <amexio-datapoints [west]="true" [center]="true" [east]="true" [south]="true">
                  <amexio-west [contentalign]="'center'" [c-class]="'datapoint-west'">
                    <amexio-image [icon-class]="'fa fa-line-chart fa-3x'">
                    </amexio-image>
                  </amexio-west>
                  <amexio-center [contentalign]="'center'">
                    <span class="datapoints-north">$2 Million</span><br/><span class="datapoints-center">Profit</span>
                  </amexio-center>
                  <amexio-south [contentalign]="'center'" [c-class]="'datapoint-south'">10% More than last year
                  </amexio-south>
                </amexio-datapoints>
              </amexio-column>
            </amexio-row>
            <br>
            <amexio-row>
              <amexio-column size="2">
                <amexio-datapoints [west]="true" [center]="true" [east]="true">
                  <amexio-west [contentalign]="'center'" [c-class]="'datapoint-west'">
                    <amexio-image [icon-class]="'fa fa-check fa-3x'">
                    </amexio-image>
                  </amexio-west>
                  <amexio-center [contentalign]="'center'">
                    <span class="datapoints-north">8</span><br/><span class="datapoints-center">Closed</span>
                  </amexio-center>
                </amexio-datapoints>
              </amexio-column>
              <amexio-column size="2">
                <amexio-datapoints [west]="true" [center]="true" [east]="true">
                  <amexio-west [contentalign]="'center'" [c-class]="'datapoint-west'">
                    <amexio-image [icon-class]="'fa fa-envelope-open fa-3x'">
                    </amexio-image>
                  </amexio-west>
                  <amexio-center [contentalign]="'center'">
                    <span class="datapoints-north">13</span><br/><span class="datapoints-center">Open</span>
                  </amexio-center>
                </amexio-datapoints>
              </amexio-column>
              <amexio-column size="2">
                <amexio-datapoints [west]="true" [center]="true" [east]="true">
                  <amexio-west [contentalign]="'center'" [c-class]="'datapoint-west'">
                    <amexio-image [icon-class]="'fa fa-bolt fa-3x'">
                    </amexio-image>
                  </amexio-west>
                  <amexio-center [contentalign]="'center'">
                    <span class="datapoints-north">6</span><br/><span class="datapoints-center">High</span>
                  </amexio-center>
                </amexio-datapoints>
              </amexio-column>
              <amexio-column size="2">
                <amexio-datapoints [west]="true" [center]="true" [east]="true">
                  <amexio-west [contentalign]="'center'" [c-class]="'datapoint-west'">
                    <amexio-image [icon-class]="'fa fa-medium fa-3x'">
                    </amexio-image>
                  </amexio-west>
                  <amexio-center [contentalign]="'center'">
                    <span class="datapoints-north">9</span><br/><span class="datapoints-center">Medium</span>
                  </amexio-center>
                </amexio-datapoints>
              </amexio-column>
              <amexio-column size="2">
                <amexio-datapoints [west]="true" [center]="true" [east]="true">
                  <amexio-west [contentalign]="'center'" [c-class]="'datapoint-west'">
                    <amexio-image [icon-class]="'fa fa-low-vision fa-3x'">
                    </amexio-image>
                  </amexio-west>
                  <amexio-center [contentalign]="'center'">
                    <span class="datapoints-north">6</span><br/><span class="datapoints-center">Low</span>
                  </amexio-center>
                </amexio-datapoints>
              </amexio-column>
            </amexio-row>
          </amexio-tab>
          <amexio-tab title="API Reference">
            <amexio-datagrid title="Chart Properties" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/dashboard/datapoint.json'"
                             [data-reader]="'datapoint'"
                             [enable-data-filter]="false">
              <amexio-data-table-column [width]="15" [data-index]="'name'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [width]="10" [data-index]="'type'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Type'"></amexio-data-table-column>
              <amexio-data-table-column [width]="10" [data-index]="'default'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Default'"></amexio-data-table-column>
              <amexio-data-table-column [width]="65" [data-index]="'description'" [data-type]="'string'"
                                        [hidden]="false"
                                        [text]="'Description'"></amexio-data-table-column>
            </amexio-datagrid>
            <br>
            <amexio-datagrid title="Chart Properties" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/dashboard/datapoint.json'"
                             [data-reader]="'location'"
                             [enable-data-filter]="false">
              <amexio-data-table-column [width]="15" [data-index]="'name'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [width]="10" [data-index]="'type'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Type'"></amexio-data-table-column>
              <amexio-data-table-column [width]="10" [data-index]="'default'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Default'"></amexio-data-table-column>
              <amexio-data-table-column [width]="65" [data-index]="'description'" [data-type]="'string'"
                                        [hidden]="false"
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
    this.http.get('assets/data/code/dashboard/datapoint/datapoint.text').subscribe(data => {
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


