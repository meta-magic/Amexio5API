/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core'
import {Http} from "@angular/http";

@Component({
  selector: 'notification-demo', template: `
    <amexio-card header="true">
      <amexio-header>
         App Notification's 
      </amexio-header>
      <amexio-body>
        <p>Notification provides a way to let user know through pop-up messages.</p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
            <amexio-row>
              <amexio-column size="6">
                <amexio-card [header]="true">
                  <amexio-header> Top Left Notification </amexio-header>
                  <amexio-body>
                    <amexio-notification [data]="topLeftMessageArray"
                                         [vertical-position]="'top'"
                                         [horizontal-position]="'left'" [auto-dismiss-msg]="true"
                                         [auto-dismiss-msg-interval]="2000">
                    </amexio-notification>
                    <amexio-button (onClick)="topLeftNotification()"
                                   [label]="'Info Left Popup'" [type]="'primary'"
                                   [tooltip]="'Primary Button'">
                    </amexio-button>
                  </amexio-body>
                </amexio-card>

              </amexio-column>
              <amexio-column size="6">
                <amexio-card [header]="true">
                  <amexio-header> Top Right Notification </amexio-header>
                  <amexio-body>
                    <amexio-notification [data]="topMessageArray"
                                         [vertical-position]="'top'"
                                         [horizontal-position]="'right'" [auto-dismiss-msg]="true"
                                         [auto-dismiss-msg-interval]="2000">
                    </amexio-notification>
                    <amexio-button (onClick)="topNotification()"
                                   [label]="'Info Right Popup'" [type]="'primary'"
                                   [tooltip]="'Primary Button'">
                    </amexio-button>
                  </amexio-body>
                </amexio-card>
              
              </amexio-column>
           
            </amexio-row>

            <amexio-row>
             
              <amexio-column size="6">
                <amexio-card [header]="true">
                  <amexio-header> Bottom Left Notification </amexio-header>
                  <amexio-body>
                    <amexio-notification [data]="bottomLeftMessageArray"
                                         [vertical-position]="'bottom'"
                                         [horizontal-position]="'left'"
                                         [auto-dismiss-msg]="true"
                                         [auto-dismiss-msg-interval]="2000">
                    </amexio-notification>
                    <amexio-button (onClick)="bottomLeftNotification()"
                                   [label]="'Info Bottom Left '" [type]="'primary'"
                                   [tooltip]="'Primary Button'">
                    </amexio-button>
                  </amexio-body>
                </amexio-card>

              </amexio-column>
              <amexio-column size="6">
                <amexio-card [header]="true">
                  <amexio-header> Bottom Right Notification </amexio-header>
                  <amexio-body>
                    <amexio-notification [data]="bottomMessageArray"
                                         [vertical-position]="'bottom'"
                                         [horizontal-position]="'right'" [auto-dismiss-msg]="true"
                                         [auto-dismiss-msg-interval]="2000">
                    </amexio-notification>
                    <amexio-button (onClick)="bottomNotification()"
                                   [label]="'Info Bottom Right'" [type]="'primary'"
                                   [tooltip]="'Primary Button'">
                    </amexio-button>
                  </amexio-body>
                </amexio-card>

              </amexio-column>
            </amexio-row>
          </amexio-tab>
          <amexio-tab title="API Reference">
            <amexio-datagrid title="Propeties" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/navigation/notification.json'"
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
    <!--<amexio-notification [data]="copyMsgArray"></amexio-notification>-->

  `
})
export class NotificationDemo {
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  topMessageArray:any=[];
  bottomMessageArray:any=[];
  topLeftMessageArray:any=[];
  bottomLeftMessageArray:any=[];

  bottomLeftNotification(){
    this.bottomLeftMessageArray.push('Bottom Left Notification!!!')
  }
  topLeftNotification(){
    this.topLeftMessageArray.push('Top Left Notification!!!')
  }
  topNotification(){
    this.topMessageArray.push('Top Right Notification!!!')
  }
  bottomNotification(){
    this.bottomMessageArray.push('Bottom Right Notification!!!')
  }
  constructor(private http: Http) {
    this.getHtmlAndTypeScriptCode();
  }

  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;

    //HTML FILE
    this.http.get('assets/data/code/navigation/notification/navigation.html').subscribe(data => {
      responseHtml = data.text();
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/navigation/notification/navigation.text').subscribe(data => {
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


