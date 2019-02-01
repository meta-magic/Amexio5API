/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'buttondropdown-demo', template: `
     
  <amexio-card header="true">
  <amexio-header>
     Dropdown Button
  </amexio-header>
  <amexio-body>
    <p>A Dropdown Button component with various modes and configurations.
    </p>
    <amexio-tab-view>
      <amexio-tab title="Demo" active="true">
        <amexio-row>
          <amexio-column [size]="6">
            <amexio-card [header]="true">
              <amexio-header>
                 Dropdown Button
              </amexio-header>
              <amexio-body>
                <amexio-row>
               <amexio-column [size]="12">
                 <amexio-btn-dropdown [label]="'Button'" [type]="'success'" [size]="'default'" >
                   <amexio-btn-dropdown-item [label]="'Link 1'" [icon]="'fa fa-arrows-alt'" ></amexio-btn-dropdown-item>
                   <amexio-btn-dropdown-item [label]="'Link 2'"  [icon]="'fa fa-trash'"></amexio-btn-dropdown-item>
                 </amexio-btn-dropdown>
               </amexio-column>
                </amexio-row>
              </amexio-body>
            </amexio-card>
          </amexio-column>
          <amexio-column size="6">
            <amexio-card [header]="true">
              <amexio-header>
                  Dropdown Button with size
              </amexio-header>
              <amexio-body>
                <amexio-row>
                  <amexio-column size="6">
                    <amexio-btn-dropdown [label]="'Button'" [type]="'primary'" [size]="'large'">
                      <amexio-btn-dropdown-item [label]="'Link 1'" ></amexio-btn-dropdown-item>
                      <amexio-btn-dropdown-item [label]="'Link 2'" ></amexio-btn-dropdown-item>
                    </amexio-btn-dropdown>
                  </amexio-column>
                  <amexio-column size="6">
                    <amexio-btn-dropdown [label]="'Button'" [type]="'primary'" [size]="'small'">
                      <amexio-btn-dropdown-item [label]="'Link 1'" ></amexio-btn-dropdown-item>
                      <amexio-btn-dropdown-item [label]="'Link 2'" ></amexio-btn-dropdown-item>
                    </amexio-btn-dropdown>
                  </amexio-column>
                </amexio-row>
              </amexio-body>
            </amexio-card>
          </amexio-column>
        </amexio-row>
        <br><br>
        <amexio-row>
          <amexio-column size="6">
            <amexio-card [header]="true">
              <amexio-header>
                  Dropdown Button with disabled link
              </amexio-header>
              <amexio-body>
                <amexio-row>
                  <amexio-btn-dropdown  [label]="'Disabled Link'" [type]="'primary'" [size]="'default'">
                    <amexio-btn-dropdown-item [label]="'Disabled'"  [icon]="'fa fa-fullscreen'" [disabled]="true"></amexio-btn-dropdown-item>
                    <amexio-btn-dropdown-item [label]="'Link 2'" [icon]="'fa fa-trash'"></amexio-btn-dropdown-item>
                  </amexio-btn-dropdown>
                </amexio-row>
              </amexio-body>
            </amexio-card>
          </amexio-column>
          <amexio-column size="6">
          <amexio-card [header]="true">
            <amexio-header>
                Dropdown Button With Badges
            </amexio-header>
            <amexio-body>
              <amexio-row>
              <amexio-btn-dropdown [label]="'Button with badge'"   [type]="'theme-color'" [size]="'default'">
              <amexio-btn-dropdown-item  [label]="'Expand'" [badge] = "32" [icon]="'fa fa-arrows-alt'" ></amexio-btn-dropdown-item>
              <amexio-btn-dropdown-item [label]="'Delete'" [badge] = "31" [icon]="'fa fa-trash'" ></amexio-btn-dropdown-item>
            </amexio-btn-dropdown>
              </amexio-row>
            </amexio-body>
          </amexio-card>
        </amexio-column>
        
          </amexio-row>

      </amexio-tab>
      <amexio-tab title="API Reference">
        <amexio-datagrid title="Properties <amexio-btn-dropdown>" [enable-column-fiter]="false"
                         [http-method]="'get'"
                         [http-url]="'assets/apireference/forms/buttondropdown.json'"
                         [data-reader]="'properties'"
                         [enable-data-filter]="false">
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
        <amexio-datagrid title="Events" [http-method]="'get'"
                         [http-url]="'assets/apireference/forms/buttondropdown.json'" [data-reader]="'events'"
                         [enable-data-filter]="false">
          <amexio-data-table-column [width]="20"[data-index]="'name'" [data-type]="'string'" [hidden]="false"
                                    [text]="'Name'"></amexio-data-table-column>
          <amexio-data-table-column [width]="80" [data-index]="'description'" [data-type]="'string'" [hidden]="false"
                                    [text]="'Description'"></amexio-data-table-column>
        </amexio-datagrid>

      </amexio-tab>
      <amexio-tab title="Source">
        <div style="  overflow-y: scroll">
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
<iframe style="width: 100%; height: 600px" src="https://stackblitz.com/edit/amexio-v4-buttondropdown?embed=1&file=app/forms/buttondropdown/buttondropdown.demo.html&view=editor"></iframe>
      </amexio-tab>
    </amexio-tab-view>
  </amexio-body>
</amexio-card>
<!--<amexio-notification [data]="copyMsgArray"></amexio-notification>-->


  `
})
export class ButtonDropDownDemo {
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];

  constructor(private http: HttpClient) {
    this.getHtmlAndTypeScriptCode();
  }


  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;

    //HTML FILE
    this.http.get('assets/data/code/forms/buttondropdown/form.html',{responseType: 'text'}).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/forms/buttondropdown/form.text',{responseType: 'text'}).subscribe(data => {
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
      this.copyMsgArray.push({'msg': 'Code Copied', 'type': 'info'});
    } else {
      this.copyMsgArray.push({'msg': 'Code Copied', 'type': 'info'});
    }
  }
}
