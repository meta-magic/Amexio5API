/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core'
import {Http} from "@angular/http";

@Component({
  selector: 'vertical-tab-demo', template: `
    <amexio-card header="true">
      <amexio-header>
        <h2>Left Aligned Vertical Tab Component</h2>
      </amexio-header>
      <amexio-body>
        <p>Left Aligned Vertical Tab Component for Angular Apps with multiple configurations such as Tab, Icon support</p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
            <amexio-vertical-tab-view >
              <amexio-tab title="Personal" [active]="true"  [icon]="'fa fa-user-circle'">
                <h4>Personal</h4>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.</amexio-tab>
              <amexio-tab title="Work" [icon]="'fa fa-building'">
                <h4>Work</h4>
                Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. 
                Nunc sit amet aliquet risus.
              </amexio-tab>
              <amexio-tab title="Team" [icon]="'fa fa-users'">
                <h4>Team</h4>
                Phasellus in condimentum elit. In et vestibulum sem. Orci varius natoque penatibus et magnis 
                dis parturient montes,nascetur ridiculus mus. 
              </amexio-tab>
            </amexio-vertical-tab-view>
          </amexio-tab>
          <amexio-tab title="API Reference">
            <amexio-datagrid title="Tab Properties" [enablecolumnfiter]="false"
                             [httpmethod]="'get'"
                             [httpurl]="'assets/apireference/layout/tab/vertical-tab/basictab.json'"
                             [datareader]="'tabproperties'"
                             [enabledatafilter]="false" >
              <amexio-data-table-column [width]="15" [dataindex]="'name'" [datatype]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [width]="10" [dataindex]="'type'" [datatype]="'string'" [hidden]="false"
                                        [text]="'Type'"></amexio-data-table-column>
              <amexio-data-table-column [width]="10" [dataindex]="'default'" [datatype]="'string'" [hidden]="false"
                                        [text]="'Default'"></amexio-data-table-column>
              <amexio-data-table-column [width]="65" [dataindex]="'description'" [datatype]="'string'" [hidden]="false"
                                        [text]="'Description'"></amexio-data-table-column>
            </amexio-datagrid>
            <br>
            <amexio-datagrid title="Tab Events" [enablecolumnfiter]="false"
                             [httpmethod]="'get'"
                             [httpurl]="'assets/apireference/layout/tab/vertical-tab/basictab.json'"
                             [datareader]="'events'"
                             [enabledatafilter]="false" >
              <amexio-data-table-column [width]="20"[dataindex]="'name'" [datatype]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [width]="80" [dataindex]="'description'" [datatype]="'string'" [hidden]="false"
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
export class VerticalTabDemo {
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
    this.http.get('assets/data/code/layout/tab/verticaltab/tab.html').subscribe(data => {
      responseHtml = data.text();
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/layout/tab/verticaltab/tab.text').subscribe(data => {
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


