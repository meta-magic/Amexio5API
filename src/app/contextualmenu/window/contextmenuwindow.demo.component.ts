/**
 * Created by pratik on 16/1/18.
 */
import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'contextmenu-window',
  template: `
  <amexio-card header="true">
  <amexio-header>
    Window 
  </amexio-header>
  <amexio-body>
    <p>Window Pane component is a customizable Modal Pane in which user can enter custom content</p>
    <amexio-tab-view>
      <amexio-tab title="Demo" active="true">
        <amexio-card [header]="true">
          <amexio-header> Window With Context-Menu </amexio-header>
          <amexio-body>
            <amexio-row>
            <amexio-column [size]="4"></amexio-column>
              <amexio-column [size]="4">
                <amexio-button type="success" (onClick)="toggleBasicWindow('material')" label="Context-menu Window"></amexio-button>
                <amexio-window [context-menu]="rightclickdata" [body-height]="40" [(show)]="showBasicWindowMaterial" [close-on-escape]="true"
                  [material-design]="true" [footer]="true" [vertical-position]="'top'" [horizontal-position]="'center'">
                  <amexio-header>
                    Employee Form
                  </amexio-header>
                  <amexio-body>
                    <amexio-row>
                      <amexio-column [size]="6">
                        <amexio-text-input [field-label]="'Name'" name="country" [place-holder]="'Enter name'" [enable-popover]="true" [icon-feedback]="true"
                          [allow-blank]="false" [error-msg]="'Please enter name'" [min-length]="3" [max-length]="15" [min-error-msg]="'Name should be minimum 3 characters'"
                          [max-error-msg]="'Name should be less than 15 characters'">
                        </amexio-text-input>
                      </amexio-column>
                      <amexio-column [size]="6">
                        <amexio-text-input [field-label]="'Surname'" name="name" [place-holder]="'Enter surname'" [enable-popover]="true" [icon-feedback]="true"
                          [allow-blank]="false" [error-msg]="'Please enter Surname'" [min-length]="3" [max-length]="15" [min-error-msg]="'Surname should be minimum 3 characters'"
                          [max-error-msg]="'Surname should be less than 15 characters'">
                        </amexio-text-input>
                      </amexio-column>
                    </amexio-row>

                    <amexio-row>
                      <amexio-column [size]="6">
                        <amexio-text-input [field-label]="'Description'" name="country" [place-holder]="'Description'" [enable-popover]="true" [icon-feedback]="true"
                          [allow-blank]="false" [error-msg]="'Please enter name'" [min-length]="3" [max-length]="15" [min-error-msg]="'Name should be minimum 3 characters'"
                          [max-error-msg]="'Name should be less than 15 characters'">
                        </amexio-text-input>
                      </amexio-column>
                      <amexio-column [size]="6">
                        <amexio-text-input [field-label]="'Hobbies'" name="name" [place-holder]="'Hobbies'" [enable-popover]="true" [icon-feedback]="true"
                          [allow-blank]="false" [error-msg]="'Please enter Surname'" [min-length]="3" [max-length]="15" [min-error-msg]="'Surname should be minimum 3 characters'"
                          [max-error-msg]="'Surname should be less than 15 characters'">
                        </amexio-text-input>
                      </amexio-column>
                    </amexio-row>

                    <amexio-row>
                      <amexio-column [size]="6">

                        <amexio-textarea-input [field-label]="'Address'" name="Address" [place-holder]="'Enter address'" [error-msg]="'Please enter address'"
                          [icon-feedback]="true" [rows]="'1'" [columns]="'2'" [allow-blank]="false" [enable-popover]="true">
                        </amexio-textarea-input>
                      </amexio-column>
                    </amexio-row>
                    <amexio-row>
                      <amexio-column [size]="6">
                        <amexio-text-input [field-label]="'Phone'" name="country" [place-holder]="'Phone'" [enable-popover]="true" [icon-feedback]="true"
                          [allow-blank]="false" [error-msg]="'Please enter name'" [min-length]="3" [max-length]="15" [min-error-msg]="'Name should be minimum 3 characters'"
                          [max-error-msg]="'Name should be less than 15 characters'">
                        </amexio-text-input>
                      </amexio-column>
                      <amexio-column [size]="6">
                        <amexio-text-input [field-label]="'Email'" name="name" [place-holder]="'Email'" [enable-popover]="true" [icon-feedback]="true"
                          [allow-blank]="false" [error-msg]="'Please enter Surname'" [min-length]="3" [max-length]="15" [min-error-msg]="'Surname should be minimum 3 characters'"
                          [max-error-msg]="'Surname should be less than 15 characters'">
                        </amexio-text-input>
                      </amexio-column>
                    </amexio-row>

                  </amexio-body>
                  <amexio-action>
                    <amexio-button [type]="'default'" (onClick)="showBasicWindowMaterial = false" label="Cancel"></amexio-button>
                    &nbsp;&nbsp;&nbsp;
                    <amexio-button [type]="'theme-color'" (onClick)="showBasicWindowMaterial = false" label="Save"></amexio-button>
                  </amexio-action>

                </amexio-window>
                
              </amexio-column>
              <amexio-column [size]="4"></amexio-column>
            </amexio-row>
          </amexio-body>
        </amexio-card>
      </amexio-tab>

      <amexio-tab title="API Reference">
        <amexio-datagrid title="Properties <amexio-window>" [enable-column-fiter]="false" [http-method]="'get'" [http-url]="'assets/apireference/panes/window/window.json'"
          [data-reader]="'properties'" [enable-data-filter]="false">
          <amexio-data-table-column [width]="15" [data-index]="'name'" [data-type]="'string'" [hidden]="false" [text]="'Name'"></amexio-data-table-column>
          <amexio-data-table-column [width]="15" [data-index]="'version'" [data-type]="'string'" [hidden]="false"[text]="'version'"></amexio-data-table-column>
            <amexio-data-table-column [width]="10" [data-index]="'type'" [data-type]="'string'" [hidden]="false" [text]="'Type'"></amexio-data-table-column>
          <amexio-data-table-column [width]="10" [data-index]="'default'" [data-type]="'string'" [hidden]="false" [text]="'Default'"></amexio-data-table-column>
          <amexio-data-table-column [width]="55" [data-index]="'description'" [data-type]="'string'" [hidden]="false" [text]="'Description'"></amexio-data-table-column>
        </amexio-datagrid>
        <amexio-datagrid title="Events" [enable-column-fiter]="false" [http-method]="'get'" [http-url]="'assets/apireference/panes/window/window.json'"
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
        <iframe style="width: 100%; height: 600px" src="https://stackblitz.com/edit/amexio-window-contextmenu-demo?file=src%2Fapp%2Fcontextualmenu%2Fwindow%2Fwindow.demo.component.ts"
          frameborder="0" allowfullscren="allowfullscren"></iframe>
      </amexio-tab>
    </amexio-tab-view>
  </amexio-body>
</amexio-card>
 `
})

export class ContextMenuWindowDemoComponent {

  showBasicWindowMaterial: boolean;
  showBasicWindowNonMaterial: boolean;

  showMaxWindowMaterial: boolean;
  showMaxWindowNonMaterial: boolean;

  showClosableMaterial: boolean;
  showClosableNonMaterial: boolean;

  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  asyncFlag: boolean;
  rightclickdata: any;

  constructor(private http: HttpClient) {
    this.rightclickdata =
      [{ "text": "Add New", "icon": "fa fa-plus", "disabled": true }, { "text": "Edit", "icon": "", "seperator": true }
        , { "text": "Send data in email", "icon": "" }];
    this.getHtmlAndTypeScriptCode();
  }
  getDta() {
    this.asyncFlag = true;
    setTimeout(() => {
      this.asyncFlag = false;
    }, 3000);
  }
  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;

    //HTML FILE
    this.http.get('assets/data/code/pane/window/window.html', { responseType: 'text' }).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/pane/window/window.text', { responseType: 'text' }).subscribe(data => {
      responseTs = data;
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

  toggleBasicWindow(data: any) {
    if (data == 'material') {
      this.showBasicWindowMaterial = !this.showBasicWindowMaterial;
    }
    else {
      this.showBasicWindowNonMaterial = !this.showBasicWindowNonMaterial;
    }

  }
  toggleMaxWindow(data: any) {
    if (data == 'material') {
      this.showMaxWindowMaterial = !this.showMaxWindowMaterial;
    }
    else {
      this.showMaxWindowNonMaterial = !this.showMaxWindowNonMaterial;
    }
  }


  toggleClosable(data: any) {
    if (data == 'material') {
      this.showClosableMaterial = !this.showClosableMaterial;
    }
    else {
      this.showClosableNonMaterial = !this.showClosableNonMaterial;
    }
  }


}
