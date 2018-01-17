/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core'
import {Http} from "@angular/http";

@Component({
  selector: 'buttondropdown-demo', template: `
    <amexio-card header="true">
      <amexio-header>
        <h2>DropDown Button Component</h2>
      </amexio-header>
      <amexio-body>
        <p>A DropDown Button component with various modes and configurations.
        </p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
            <amexio-row>
              <amexio-column [size]="6">
                <amexio-card [header]="true">
                  <amexio-header>
                    <h2>DropDown Button</h2>
                  </amexio-header>
                  <amexio-body>
                    <amexio-row>
                   <amexio-column [size]="12">
                     <amexio-btn-dropdown [label]="'Button'" [type]="'success'" [size]="'default'" >
                       <amexio-btn-dropdown-item [label]="'Link 1'" [icon]="'fa fa-arrows-alt'"></amexio-btn-dropdown-item>
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
                    <h2> Dropdown Button with size</h2>
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
                    <h2> Dropdown Button with Disebled link</h2>
                  </amexio-header>
                  <amexio-body>
                    <amexio-row>
                      <amexio-btn-dropdown [label]="'Disebled Link'" [type]="'primary'" [size]="'default'">
                        <amexio-btn-dropdown-item [label]="'Disebled'"  [icon]="'fa fa-fullscreen'" [disabled]="true"></amexio-btn-dropdown-item>
                        <amexio-btn-dropdown-item [label]="'Link 2'" [icon]="'fa fa-trash'"></amexio-btn-dropdown-item>
                      </amexio-btn-dropdown>
                    </amexio-row>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
            </amexio-row>
            
          </amexio-tab>
          <amexio-tab title="API Reference">
            <amexio-datagrid title="Properties" [enablecolumnfiter]="false"
                             [httpmethod]="'get'"
                             [httpurl]="'assets/apireference/forms/buttondropdown.json'"
                             [datareader]="'properties'"
                             [enabledatafilter]="false">
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
                             [httpurl]="'assets/apireference/forms/buttondropdown.json'" [datareader]="'events'"
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

  `
})
export class ButtonDropDownDemo {
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];

  onClick(data:any){
    debugger;
  }
  constructor(private http: Http) {
    this.getHtmlAndTypeScriptCode();
  }

  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;

    //HTML FILE
    this.http.get('assets/data/code/forms/buttondropdown/form.html').subscribe(data => {
      responseHtml = data.text();
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/forms/buttondropdown/form.text').subscribe(data => {
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


