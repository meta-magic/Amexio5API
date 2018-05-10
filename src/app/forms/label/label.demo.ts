/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core'
import {Http} from "@angular/http";

@Component({
  selector: 'label-demo', template: `
    <amexio-card header="true">
      <amexio-header>
        Amexio Label
      </amexio-header>
      <amexio-body>
        <p>Amexio Label can be easily wrapped around any text and configure using the different responsive styling</p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
            <amexio-row>
              <amexio-column size="6">
                <amexio-card header="true">
                  <amexio-header>
                    Label size Large
                  </amexio-header>
                  <amexio-body>
                    <amexio-label [badge]="12" size="large">This is large amexio label</amexio-label>
                   
                    </amexio-body>
                </amexio-card>
              </amexio-column>
              <amexio-column [size]="6">
                <amexio-card [header]="true">
                  <amexio-header>
                    Label size Large - Bold
                  </amexio-header>
                  <amexio-body>
                   <amexio-label size="large-bold">This is large-bold amexio label</amexio-label>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
            </amexio-row>
            <amexio-row>
              <amexio-column size="6">
                <amexio-card [header]="true">
                  <amexio-header>
                    Label size medium
                  </amexio-header>
                  <amexio-body>
                    <amexio-label size="medium">This is medium amexio label</amexio-label>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
              <amexio-column [size]="6">
                <amexio-card [header]="true">
                  <amexio-header>
                    Label with medium-bold size
                  </amexio-header>
                  <amexio-body>
                   <amexio-label size="medium-bold">This is medium-bold amexio label</amexio-label>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
            </amexio-row>
            <amexio-row>
              <amexio-column size="6">
                <amexio-card header="true">
                  <amexio-header>
                    Label size small
                  </amexio-header>
                  <amexio-body>
                    <amexio-label>This is small amexio label</amexio-label>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
              <amexio-column [size]="6">
                <amexio-card [header]="true">
                  <amexio-header>
                    Label size small - Bold
                  </amexio-header>
                  <amexio-body>
                    <amexio-label size="small-bold">This is small-bold amexio label</amexio-label>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
            </amexio-row>
            <amexio-row>
              <amexio-column size="6">
                <amexio-card header="true">
                  <amexio-header>
                    Colored Label size Medium Bold
                  </amexio-header>
                  <amexio-body>
                    <amexio-label size="medium-bold" font-color="#FF5733">This is  amexio label</amexio-label>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
              <amexio-column [size]="6">
                <amexio-card [header]="true">
                  <amexio-header>
                    Colored Label size Small - Bold
                  </amexio-header>
                  <amexio-body>
                    <amexio-label size="small-bold" font-color="#75FF33">This is small-bold amexio label</amexio-label>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
            </amexio-row>
          </amexio-tab>
          <amexio-tab title="API Reference">
            <amexio-datagrid title="Properties" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/forms/label.json'"
                             [data-reader]="'properties'"
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
<iframe style="width: 100%; height: 600px" src="https://stackblitz.com/edit/amexio-v4-label?embed=1&file=app/forms/label/label.demo.html" frameborder="0" allowfullscren="allowfullscren"></iframe>
          </amexio-tab>
        </amexio-tab-view>
      </amexio-body>
    </amexio-card>
    <!--<amexio-notification [data]="copyMsgArray"></amexio-notification>-->

  `
})
export class LabelDemo {
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  age:number=10;
  
  constructor(private http: Http) {
    this.getHtmlAndTypeScriptCode();
  }

  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs:any;

    //HTML FILE
    this.http.get('assets/data/code/forms/label/label.html').subscribe(data => {
      responseHtml = data.text();
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/forms/label/label.text').subscribe(data => {
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


