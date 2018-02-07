/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core'
import {Http} from "@angular/http";

@Component({
  selector: 'verticalright-tab-demo', template: `
    <amexio-card header="true">
      <amexio-header>
         Right Aligned Vertical Tab 
      </amexio-header>
      <amexio-body>
        <p>Right Aligned Vertical Tab component for Angular Apps with multiple configurations such as Tab, Icon support</p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
            <amexio-right-vertical-tab-view>
              <amexio-tab title="Personal" [active]="true"  [icon]="'fa fa-user-circle'">
                 Personal 
                Lorem Ipsum is simply text of printing and typesetting industry. 
              </amexio-tab>
              <amexio-tab title="Work" [icon]="'fa fa-building'">
                 Work 
                Nullam nec dolor lobortis, dictum ac, massa. Donec id suscipit.
              </amexio-tab>
              <amexio-tab title="Team" [icon]="'fa fa-users'">
                 Team 
                Phasellus in condimentum. In et sem. Orci   varius penatibus.
              </amexio-tab>
            </amexio-right-vertical-tab-view>
          </amexio-tab>
          <amexio-tab title="API Reference">
            <amexio-datagrid title="Tab Properties" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/layout/tab/vertical-tab/basictab.json'"
                             [data-reader]="'tabproperties'"
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
            <amexio-datagrid title="Tab Events" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/layout/tab/vertical-tab/basictab.json'"
                             [data-reader]="'events'"
                             [enable-data-filter]="false" >
              <amexio-data-table-column [width]="20"[data-index]="'name'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [width]="80" [data-index]="'description'" [data-type]="'string'" [hidden]="false"
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
            </amexio-vertical-tab-view>
            </div>
          </amexio-tab>
          <amexio-tab title="Live">
          <p align="center">Amexio Sandbox</p>
          <iframe style="width: 100%; height: 600px" src="https://stackblitz.com/edit/amexio-v4-right-aligned-vertical-tab?embed=1&file=main.ts" frameborder="0" allowfullscren="allowfullscren"></iframe>
          </amexio-tab>
        </amexio-tab-view>
      </amexio-body>
    </amexio-card>
    <!--<amexio-notification [data]="copyMsgArray"></amexio-notification>-->

  `
})
export class VerticalRightTabDemo {
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
    this.http.get('assets/data/code/layout/tab/verticalrighttab/tab.html').subscribe(data => {
      responseHtml = data.text();
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/layout/tab/verticalrighttab/tab.text').subscribe(data => {
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


