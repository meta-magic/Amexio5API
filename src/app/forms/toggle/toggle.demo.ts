/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core'
import {Http} from "@angular/http";

@Component({
  selector: 'toggle-demo', template: `
    <amexio-card header="true">
      <amexio-header>
        <h2>Toggle Switch</h2>
      </amexio-header>
      <amexio-body>
        <p>Toggle Switches are checkboxes with a toggle switch UI.</p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
            <amexio-row>
              <amexio-column [size]="6">
                <amexio-card [header]="true">
                  <amexio-header>
                    <h2> Round Toggle</h2>
                  </amexio-header>
                  <amexio-body>
                    <amexio-toggle [fieldlabel]="'Round Toogle'"></amexio-toggle>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
              <amexio-column [size]="6">
                <amexio-card [header]="true">
                  <amexio-header>
                    <h2> Square Toggle</h2>
                  </amexio-header>
                  <amexio-body>
                    <amexio-toggle shape="square" (onChange)="onSquareToggleClick($event)"></amexio-toggle>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
              
            </amexio-row>
          </amexio-tab>
          <amexio-tab title="API Reference">
            <amexio-datagrid title="Properties" [enablecolumnfiter]="false"
                             [httpmethod]="'get'"
                             [httpurl]="'assets/apireference/forms/toggle.json'" 
                             [datareader]="'properties'"
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
            <amexio-datagrid title="Events" [httpmethod]="'get'" 
                             [httpurl]="'assets/apireference/forms/toggle.json'" [datareader]="'events'"
                             [enabledatafilter]="false">
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
    <amexio-notification [messageData]="toggleMsgArray" [verticalposition]="'top'" [horizontalposition]="'right'"></amexio-notification>
  `
})
export class ToggleDemo {
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  toggleMsgArray:any[];
  constructor(private http: Http) {
    this.toggleMsgArray=[];
    this.getHtmlAndTypeScriptCode();
  }

  //Square Toggle click event
  onSquareToggleClick(data:any){
    this.toggleMsgArray.push('Square Toggle Click');
  }
  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs:any;

    //HTML FILE
    this.http.get('assets/data/code/forms/toggle/form.html').subscribe(data => {
      responseHtml = data.text();
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/forms/toggle/form.text').subscribe(data => {
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


