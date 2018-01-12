/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core'
import {Http} from "@angular/http";

@Component({
  selector: 'card-image-demo', template: `
    <amexio-card enableHeader="true">
      <amexio-header>
        <h2>Card Component</h2>
      </amexio-header>
      <amexio-body>
        <p>A Simple Card which renders card based on title, body and actions user has configured</p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
            <amexio-row>
              <amexio-column size="6">
                <amexio-card [enableHeader]="false" [enableFooter]="true" [footeralign]="'right'">
                  <amexio-body>
                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%2840%29.jpg" style="height: 250px;width: 400px" alt="">
                    <br/>
                    <h5 class="red-text"><i class="fa fa-money"></i> Business</h5>
                    <h4 class="card-title">Let your startup grow!</h4>
                    <p class="card-text">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.</p>
                  </amexio-body>
                  <amexio-action >
                    <amexio-button [label]="'Button'" [type]="'primary'"></amexio-button>
                  </amexio-action>
                </amexio-card>
              </amexio-column>
              <amexio-column size="6">
                <amexio-card [enableHeader]="true" [enableFooter]="false" [headeralign]="'center'">
                  <amexio-header>
                    <h4>Hi, Amexio</h4>
                  </amexio-header>
                  <amexio-body>
                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%2842%29.jpg"  style="height: 250px;width: 400px" alt="">
                    <br/><br/>
                    <p class="card-text">Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates.</p>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
            </amexio-row>
        
          </amexio-tab>
          <amexio-tab title="API Reference">
            <amexio-datagrid title="Properties" [columnToggle]="false"
                             [httpMethod]="'get'"
                             [httpUrl]="'assets/apireference/layout/card.json'" 
                             [dataReader]="'properties'"
                             [filtering]="false" >
              <amexio-data-table-column [dataIndex]="'name'" [dataType]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [dataIndex]="'type'" [dataType]="'string'" [hidden]="false"
                                        [text]="'Type'"></amexio-data-table-column>
              <amexio-data-table-column [dataIndex]="'default'" [dataType]="'string'" [hidden]="false"
                                        [text]="'Default'"></amexio-data-table-column>
              <amexio-data-table-column [dataIndex]="'description'" [dataType]="'string'" [hidden]="false"
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
    this.http.get('assets/data/code/layout/card/cardimage/layout.ts').subscribe(data => {
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


