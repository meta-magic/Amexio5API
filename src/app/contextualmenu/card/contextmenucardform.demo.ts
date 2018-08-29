/**
 * Created by sagar on 9/1/18.
 */

import { Component } from '@angular/core'
import { Http } from "@angular/http";

@Component({
  selector: 'contextmenu-card-form', template: `

  <amexio-card header="true">

  <amexio-header>
    Card
  </amexio-header>
  <amexio-body>
    <p>A Simple Card which renders card based on title, body and actions user has configured</p>
    <amexio-tab-view>
      <amexio-tab title="Demo" active="true">
        <amexio-row>
          <amexio-column size="12">
            <amexio-button [label]="'Hide / Un-hide Card'" [type]="'primary'" [tooltip]="'Hide/UnHide Card'" (click)="toggle()"> </amexio-button>
          </amexio-column>
        </amexio-row>
        <amexio-row>
          <amexio-column size="12">
            <amexio-card  [context-menu]="rightclickdata" [header]="true" [footer]="true" [show]="flag" [footer-align]="'right'" height="250">
              <amexio-header>
                Employee Registration
              </amexio-header>
              <amexio-body>
                <amexio-row>
                  <amexio-column [size]="6">
                    <amexio-text-input [field-label]="'Name'" name="name" [place-holder]="'Enter name'" [icon-feedback]="true">
                    </amexio-text-input>
                  </amexio-column>
                  <amexio-column [size]="6">
                    <amexio-text-input [field-label]="'Local Address'" name="address" [place-holder]="'Enter address'" [icon-feedback]="true">
                    </amexio-text-input>
                  </amexio-column>
                </amexio-row>
                <amexio-row>
                  <amexio-column [size]="6">
                    <amexio-number-input [field-label]="'Number Input'" [place-holder]="'Enter Age'">
                    </amexio-number-input>
                  </amexio-column>
                  <amexio-column [size]="6">
                    <amexio-email-input [field-label]="'Email Id'" name="email" [place-holder]="'Enter Email Id'" [allow-blank]="false" [error-msg]="'Please Enter Email Id'"
                      [enable-popover]="true" [icon-feedback]="true">
                    </amexio-email-input>
                  </amexio-column>
                </amexio-row>
                <amexio-row>
                  <amexio-column [size]="6">
                    <amexio-text-input [field-label]="'Father Name'" name="name" [place-holder]="'Enter name'" [icon-feedback]="true">
                    </amexio-text-input>
                  </amexio-column>
                  <amexio-column [size]="6">
                    <amexio-text-input [field-label]="'Present Address'" name="address" [place-holder]="'Enter address'" [icon-feedback]="true">
                    </amexio-text-input>
                  </amexio-column>
                </amexio-row>
                <amexio-row>
                  <amexio-column [size]="6">
                    <amexio-number-input [field-label]="'Number Input'" [place-holder]="'Enter Age'">
                    </amexio-number-input>
                  </amexio-column>
                  <amexio-column [size]="6">
                    <amexio-email-input [field-label]="'Father Email Id'" name="email" [place-holder]="'Enter Email Id'" [allow-blank]="false"
                      [error-msg]="'Please Enter Email Id'" [enable-popover]="true" [icon-feedback]="true">
                    </amexio-email-input>
                  </amexio-column>
                </amexio-row>
              </amexio-body>
              <amexio-action>
                <amexio-button [label]="'Save'" [type]="'primary'"></amexio-button>
              </amexio-action>
            </amexio-card>
          </amexio-column>
        
        </amexio-row>

        

      </amexio-tab>
      <amexio-tab title="API Reference">
        <amexio-datagrid title="Properties<amexio-card>" [enable-column-fiter]="false" [http-method]="'get'" [http-url]="'assets/apireference/layout/card.json'"
          [data-reader]="'properties'" [enable-data-filter]="false">
          <amexio-data-table-column [width]="15" [data-index]="'name'" [data-type]="'string'" [hidden]="false" [text]="'Name'"></amexio-data-table-column>
          <amexio-data-table-column [width]="15" [data-index]="'version'" [data-type]="'string'" [hidden]="false"[text]="'version'"></amexio-data-table-column>
          <amexio-data-table-column [width]="10" [data-index]="'type'" [data-type]="'string'" [hidden]="false" [text]="'Type'"></amexio-data-table-column>
          <amexio-data-table-column [width]="10" [data-index]="'default'" [data-type]="'string'" [hidden]="false" [text]="'Default'"></amexio-data-table-column>
          <amexio-data-table-column [width]="65" [data-index]="'description'" [data-type]="'string'" [hidden]="false" [text]="'Description'"></amexio-data-table-column>
        </amexio-datagrid>
        <amexio-datagrid title="Events" [enable-column-fiter]="false" [http-method]="'get'" [http-url]="'assets/apireference/layout/card.json'"
        [data-reader]="'events'" [enable-data-filter]="false">
        <amexio-data-table-column [width]="15" [data-index]="'name'" [data-type]="'string'" [hidden]="false" [text]="'Name'"></amexio-data-table-column>
        <amexio-data-table-column [width]="65" [data-index]="'description'" [data-type]="'string'" [hidden]="false" [text]="'Description'"></amexio-data-table-column>
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
        <iframe style="width: 100%; height: 600px" src="https://stackblitz.com/edit/amexio-card-contextmenu-demo?embed=1&file=src/app/app.component.html&view=preview"
          frameborder="0" allowfullscren="allowfullscren"></iframe>
      </amexio-tab>
    </amexio-tab-view>
  </amexio-body>
</amexio-card>

    <!--<amexio-notification [data]="copyMsgArray"></amexio-notification>-->

  `
})
export class ContextMenuCardFormDemo {
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  flag: boolean;
  rightclickdata: any;
  constructor(private http: Http) {
    this.rightclickdata =
      [{ "text": "Add New", "icon": "fa fa-plus", "disabled": true }, { "text": "Edit", "icon": "", "seperator": true }
        , { "text": "Send data in email", "icon": "" }];
    this.flag = true;
    this.getHtmlAndTypeScriptCode();
  }
  //Toggle event
  toggle() {
    this.flag = !this.flag;
  }
  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;

    //HTML FILE
    this.http.get('assets/data/code/layout/card/layout.html').subscribe(data => {
      responseHtml = data.text();
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/layout/card/layout.text').subscribe(data => {
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
      this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
    } else {
      this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
    }
  }
}


