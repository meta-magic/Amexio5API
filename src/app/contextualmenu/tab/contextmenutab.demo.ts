/**
 * Created by rashmi on 9/1/18.
 */

import {Component} from '@angular/core'
import {Http} from "@angular/http";

@Component({
  selector: 'context-menu-tab-demo', template: `
    <amexio-card header="true">
      <amexio-header>
          Tab with Context Menu 
      </amexio-header>
      <amexio-body>
        <p>Tab component for Angular Apps with multiple configurations such as Tab, Icon support, Scrollable tabs, Closable tab, Vertical Tabs and with custom context menu (right click operation) and default context menu(close all and close others) </p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
          <amexio-card [header]="true" [footer]="false" [footer-align]="'right'">
          <amexio-header>
              Tab layout with default context menu
          </amexio-header>
          <amexio-body>
              <amexio-tab-view [tab-position]="'top'" [default-context-menu]="true">
                  <amexio-tab title="Person" [active]="true" [closable]="true">
                      Personal Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                      type specimen book.
                  </amexio-tab>
                  <amexio-tab title="Work">
                      Work Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean
                      placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus
                      tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.
                  </amexio-tab>
                  <amexio-tab title="Education" [closable]="true">
                  Education Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean
                  placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus
                  tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.
              </amexio-tab>
              </amexio-tab-view>
          </amexio-body>
      </amexio-card>
      <br>
      <amexio-card [header]="true" [footer]="false" [footer-align]="'right'">
      <amexio-header>
          Tab layout with custom context menu
      </amexio-header>
      <amexio-body>
          <amexio-tab-view [context-menu]="rightclickdata">
              <amexio-tab title="Person" [active]="true">
                  Personal Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                  type specimen book.
              </amexio-tab>
              <amexio-tab title="Work">
                  Work Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean
                  placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus
                  tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.
              </amexio-tab>
              <amexio-tab title="Education">
                  Education Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean
                  placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus
                  tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.
              </amexio-tab>
              <amexio-tab title="Hobbies">
              Hobbies Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean
                  placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus
                  tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.
              </amexio-tab>
          </amexio-tab-view>
      </amexio-body>
  </amexio-card>
          </amexio-tab> 
          <amexio-tab title="API Reference">
          <amexio-datagrid title="Tab View Properties <amexio-tab-view>" [enable-column-fiter]="false"
          [http-method]="'get'"
          [http-url]="'assets/apireference/layout/tab/contextmenu-tab/contextmenutab.json'"
          [data-reader]="'properties'"
          [enable-data-filter]="false" >
<amexio-data-table-column [width]="15" [data-index]="'name'" [data-type]="'string'" [hidden]="false"
                     [text]="'Name'"></amexio-data-table-column>
<amexio-data-table-column [width]="10" [data-index]="'version'" [data-type]="'string'" [hidden]="false"
                     [text]="'Version'"></amexio-data-table-column>
<amexio-data-table-column [width]="10" [data-index]="'type'" [data-type]="'string'" [hidden]="false"
                     [text]="'Type'"></amexio-data-table-column>
<amexio-data-table-column [width]="10" [data-index]="'default'" [data-type]="'string'" [hidden]="false"
                     [text]="'Default'"></amexio-data-table-column>
<amexio-data-table-column [width]="65" [data-index]="'description'" [data-type]="'string'" [hidden]="false"
                     [text]="'Description'"></amexio-data-table-column>
</amexio-datagrid>
<br>
            <amexio-datagrid title="Tab Properties <amexio-tab>" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/layout/tab/contextmenu-tab/contextmenutab.json'"
                             [data-reader]="'tabproperties'"
                             [enable-data-filter]="false" >
              <amexio-data-table-column [width]="15" [data-index]="'name'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [width]="10" [data-index]="'version'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Version'"></amexio-data-table-column>
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
                             [http-url]="'assets/apireference/layout/tab/contextmenu-tab/contextmenutab.json'"
                             [data-reader]="'events'"
                             [enable-data-filter]="false" >
              <amexio-data-table-column [width]="20"[data-index]="'name'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [width]="10" [data-index]="'version'" [data-type]="'string'" [hidden]="false"
                     [text]="'Version'"></amexio-data-table-column>
              <amexio-data-table-column [width]="70" [data-index]="'description'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Description'"></amexio-data-table-column>
            </amexio-datagrid>
            <br>
            <amexio-datagrid title="Tab Methods" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/layout/tab/horizontaltab.json'"
                             [data-reader]="'methods'"
                             [enable-data-filter]="false" >
              <amexio-data-table-column [width]="40"[data-index]="'name'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [width]="20" [data-index]="'version'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Version'"></amexio-data-table-column>
              <amexio-data-table-column [width]="40" [data-index]="'description'" [data-type]="'string'" [hidden]="false"
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
          <iframe style="width: 100%; height: 600px" src="https://stackblitz.com/edit/amexio-tab-contextmenu-demo?embed=1&file=src/app/contextualmenu/tab/tab.demo.component.html&view=editor" 
          frameborder="0" allowfullscren="allowfullscren"></iframe>
          </amexio-tab>
        </amexio-tab-view>
      </amexio-body>
    </amexio-card>
    <!--<amexio-notification [data]="copyMsgArray"></amexio-notification>-->

  `
})
export class ContextMenuTabDemo {
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  rightclickdata : any[];
  constructor(private http: Http) {
    this.rightclickdata = [
      {
        "text": "Back",
        "icon": "fa fa-arrow-left",
        "disabled": true
      },
      {
        "text": "Reload",
        "icon": "fa fa-refresh",
        "seperator": false
      },
      {
        "text": "Save",
        "icon": "fa fa-save"
      }
    ];
    this.getHtmlAndTypeScriptCode();
  }

  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs:any;

    //HTML FILE
    this.http.get('assets/data/code/layout/tab/contextmenutab/tab.html').subscribe(data => {
      responseHtml = data.text();
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/layout/tab/contextmenutab/tab.text').subscribe(data => {
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




