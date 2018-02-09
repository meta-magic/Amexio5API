/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core'
import {Http} from "@angular/http";

@Component({
  selector: 'card-image-demo', template: `
    <amexio-card header="true">
      <amexio-header>
         Card 
      </amexio-header>
      <amexio-body>
        <p>A Simple Card which renders card based on title, body and actions user has configured</p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
            <amexio-row>
              <amexio-column size="3">
                <amexio-card [header]="false" [footer]="true" [footer-align]="'right'">
                  <amexio-body>
                    <amexio-image path="assets/images/carousel/set1/1.jpg"></amexio-image>
                    <amexio-label size="small-bold">Let your startup grow!</amexio-label>
                    <br>
                    <amexio-label size="small">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.</amexio-label>
                  </amexio-body>
                  <amexio-action >
                    <amexio-button [label]="'Button'" [type]="'primary'"></amexio-button>
                  </amexio-action>
                </amexio-card>
              </amexio-column>
              
              <amexio-column size="3">
                <amexio-card [header]="true" [footer]="true" [footer-align]="'left'" [header-align]="'left'">
                  <amexio-header>
                     Coffee
                  </amexio-header>
                  <amexio-body>
                    <amexio-image path="assets/images/carousel/set1/2.jpg"></amexio-image>
                    <amexio-label size="small">Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates.</amexio-label>
                  </amexio-body>
                  <amexio-action>
                    <amexio-button [label]="'Button'" [type]="'primary'"></amexio-button>
                  </amexio-action>
                </amexio-card>
              </amexio-column>
              
              <amexio-column size="3">
                <amexio-card [header]="true" [footer]="true"  [footer-align]="'right'" [header-align]="'right'">
                  <amexio-header>
                    Animals
                  </amexio-header>
                  <amexio-body>
                    <amexio-image path="assets/images/carousel/set1/4.jpg"></amexio-image>
                    <amexio-label size="small">Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates.</amexio-label>
                  </amexio-body>
                  <amexio-action >
                    <amexio-button [label]="'Button'" [type]="'primary'"></amexio-button>
                  </amexio-action>
                </amexio-card>
              </amexio-column>
              
              <amexio-column size="3">
                <amexio-card [header]="true" [footer]="true"  [footer-align]="'center'" [header-align]="'center'">
                  <amexio-header>
                    Morning Walk
                  </amexio-header>
                  <amexio-body>
                    <amexio-image path="assets/images/carousel/set1/3.jpg"></amexio-image>
                    <br/><br/>
                    <amexio-label size="small">Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates.</amexio-label>
                  </amexio-body>
                  <amexio-action>
                    <amexio-button [label]="'Save'" [type]="'primary'"></amexio-button>
                    <amexio-button [label]="'Cancel'" [type]="'default'"></amexio-button>
                  </amexio-action>
                  
                </amexio-card>
              </amexio-column>
            </amexio-row>
        
          </amexio-tab>
          <amexio-tab title="API Reference">
            <amexio-datagrid title="Properties" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/layout/card.json'" 
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
          <iframe style="width: 100%; height: 600px" src="https://stackblitz.com/edit/amexio-v4-cardimage?embed=1&file=app/layouts/cardimage/cardimage.demo.html" frameborder="0" allowfullscren="allowfullscren"></iframe>          </amexio-tab>
        </amexio-tab-view>
      </amexio-body>
    </amexio-card>
    <!--<amexio-notification [data]="copyMsgArray"></amexio-notification>-->

  `
})
export class CardImageDemo {
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  flag: boolean;
  constructor(private http: Http) {
    this.flag = true;
    this.getHtmlAndTypeScriptCode();
  }

  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs:any;

    //HTML FILE
    this.http.get('assets/data/code/layout/card/cardimage/layout.html').subscribe(data => {
      responseHtml = data.text();
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/layout/card/cardimage/layout.text').subscribe(data => {
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


