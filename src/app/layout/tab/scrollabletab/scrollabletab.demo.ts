/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core'
import {Http} from "@angular/http";

@Component({
  selector: 'scrollable-tab-demo', template: `
    <amexio-card header="true">
      <amexio-header>
        <h2>Scrollable Tab</h2>
      </amexio-header>
      <amexio-body>
        <p>Scrollable Tab component for Angular Apps with multiple configurations such as Tab, Icon support, Scrollable tabs, Closable tab, Vertical Tabs</p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
            <amexio-tab-view  [closable]="true">
            <amexio-tab [title]="'Tab 1'" [active]="true">
             <h1>Tab 1</h1> 
            </amexio-tab>
              <amexio-tab [title]="'Tab 2'">
                <h1> Tab 2</h1>
              </amexio-tab>
              <amexio-tab [title]="'Tab 3'">
                <h1> Tab 3</h1>
              </amexio-tab>
              <amexio-tab [title]="'Tab 4'">
                <h1> Tab 4</h1>
              </amexio-tab>
              <amexio-tab [title]="'Tab 5'">
                <h1> Tab 5</h1>
              </amexio-tab> 
              <amexio-tab [title]="'Tab 6'">
              <h1> Tab 6</h1>
            </amexio-tab> <amexio-tab [title]="'Tab 7'">
              <h1> Tab 7</h1>
            </amexio-tab> <amexio-tab [title]="'Tab 8'">
              <h1> Tab 8</h1>
            </amexio-tab>
              <amexio-tab [title]="'Tab 9'">
                <h1> Tab 9</h1>
              </amexio-tab>
              <amexio-tab [title]="'Tab 10'">
                <h1> Tab 10</h1>
              </amexio-tab>
              <amexio-tab [title]="'Tab 11'">
                <h1> Tab 11</h1>
              </amexio-tab>
              <amexio-tab [title]="'Tab 12'">
                <h1> Tab 12</h1>
              </amexio-tab>
              <amexio-tab [title]="'Tab 13'">
                <h1> Tab 13</h1>
              </amexio-tab>  
              <amexio-tab [title]="'Tab 14'">
              <h1> Tab 14</h1>
            </amexio-tab>  
              <amexio-tab [title]="'Tab 15'">
              <h1> Tab 15</h1>
            </amexio-tab>  
              <amexio-tab [title]="'Tab 16'">
              <h1> Tab 16</h1>
            </amexio-tab>  
              <amexio-tab [title]="'Tab 17'">
              <h1> Tab 17</h1>
            </amexio-tab> 
              <amexio-tab [title]="'Tab 18'">
              <h1> Tab 18</h1>
            </amexio-tab>  
            </amexio-tab-view>
          </amexio-tab>
          <amexio-tab title="API Reference">
            <amexio-datagrid title="Tab View Properties" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/layout/tab/basic-tab/basictab.json'"
                             [data-reader]="'properties'"
                             [enable-data-filter]="false" >
              <amexio-data-table-column [data-index]="'name'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [data-index]="'type'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Type'"></amexio-data-table-column>
              <amexio-data-table-column [data-index]="'default'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Default'"></amexio-data-table-column>
              <amexio-data-table-column [data-index]="'description'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Description'"></amexio-data-table-column>
            </amexio-datagrid>
            <br>
            <amexio-datagrid title="Tab Properties" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/layout/tab/basic-tab/basictab.json'"
                             [data-reader]="'tabproperties'"
                             [enable-data-filter]="false" >
              <amexio-data-table-column [data-index]="'name'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [data-index]="'type'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Type'"></amexio-data-table-column>
              <amexio-data-table-column [data-index]="'default'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Default'"></amexio-data-table-column>
              <amexio-data-table-column [data-index]="'description'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Description'"></amexio-data-table-column>
            </amexio-datagrid>
            <br>
            <amexio-datagrid title="Tab Events" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/layout/tab/basic-tab/basictab.json'"
                             [data-reader]="'events'"
                             [enable-data-filter]="false" >
              <amexio-data-table-column [width]="20"[data-index]="'name'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [width]="80" [data-index]="'description'" [data-type]="'string'" [hidden]="false"
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
    <!--<amexio-notification [messageData]="copyMsgArray"></amexio-notification>-->

  `
})
export class ScrollableTabDemo {
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  constructor(private http: Http) {
    this.getHtmlAndTypeScriptCode();
  }

  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs:any;

    //HTML FILE
    this.http.get('assets/data/code/layout/tab/scrollabletab/tab.html').subscribe(data => {
      responseHtml = data.text();
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/layout/tab/scrollabletab/tab.text').subscribe(data => {
      responseTs = data.text();
    }, error => {
    }, () => {
      this.typeScriptCode = responseTs;
    });

  }

  //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
  onCopyClick() {
    if (this.copyMsgArray.length >= 1) {
      this.copyMsgArray = [];
      this.copyMsgArray.push({'msg': 'Code Copied', 'type': 'info'});
    } else {
      this.copyMsgArray.push({'msg': 'Code Copied', 'type': 'info'});
    }
  }
}


