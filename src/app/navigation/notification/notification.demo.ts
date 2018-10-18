/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'notification-demo', template: `
    
   
    <amexio-card header="true">
      <amexio-header>
         Notifications 
      </amexio-header>
      <amexio-body>
        <p>Notification provides a way to let user know through pop-up messages.</p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
            <amexio-row>
              <amexio-column size="4">
                <amexio-card [header]="true">
                  <amexio-header> Vertical Top Notification </amexio-header>
                  <amexio-body>

                    <amexio-notification
                      [data]="verticalLeftMessageArray"
                      [vertical-position]="'top'"
                      [horizontal-position]="'left'"
                      [close-on-escape] ="true"
                      [background-color]="'orange '"
                      [foreground-color]="'black'"
                      [auto-dismiss-msg]="true"
                      [auto-dismiss-msg-interval]="6000">

                      <ng-template #amexioNotificationTemp let-data="data">
                        <amexio-row>
                          <amexio-column size="2">
                            <amexio-image [icon-class]="'	fa fa-exclamation-triangle'" style="font-size: 25px;">
                            </amexio-image> &nbsp;&nbsp;
                          </amexio-column>
                          <amexio-column size="8">
                            <amexio-label size="small-bold" font-color="white" > Warning Message </amexio-label><br/>
                            <amexio-label size="small" font-color="white" >{{data}}</amexio-label><br/>
                          </amexio-column>

                        </amexio-row>
                      </ng-template>


                    </amexio-notification>
                    <amexio-button
                      (onClick)="verticalLeftNotification()"
                      [label]="'Info Top Left'"
                      [type]="'primary'"
                      [tooltip]="'Primary Button'">
                    </amexio-button>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
              <amexio-column size="4">
                <amexio-card [header]="true">
                  <amexio-header> Vertical Center Notification </amexio-header>
                  <amexio-body>
                    <amexio-notification 
                      [data]="verticalCenterMessageArray"
                      [vertical-position]="'top'"
                      [horizontal-position]="'center'"
                      [close-on-escape] ="true"
                      [background-color]="'yellow'"
                      [auto-dismiss-msg]="true"
                      [auto-dismiss-msg-interval]="6000">
                      <ng-template #amexioNotificationTemp let-data="data">  
                            <amexio-box [box-width]="'350px'" >
                              <amexio-image [icon-class]="'	fa fa-info-circle fa-2x'" >
                              </amexio-image> &nbsp;&nbsp;
                              <amexio-label size="small-bold" [badge]=7 font-color="black"> {{data}}</amexio-label>
                            </amexio-box>
                      </ng-template>
                    </amexio-notification> 
                    <amexio-button
                      (onClick)="verticalCenterNotification()"
                      [label]="'Info center Popup'"
                      [type]="'primary'"
                      [tooltip]="'Primary Button'">
                    </amexio-button>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
              <amexio-column size="4">
                <amexio-card [header]="true">
                  <amexio-header> Vertical Right Notification </amexio-header>
                  <amexio-body>
                    <amexio-notification
                      [data]="verticalRightMessageArray"
                      [vertical-position]="'top'"
                      [horizontal-position]="'right'"
                      [close-on-escape] ="true"
                      [background-color]="'red'"
                      [auto-dismiss-msg]="true"
                      [auto-dismiss-msg-interval]="4000">
                      <ng-template #amexioNotificationTemp >
                                 <amexio-row>
                                   <amexio-column size="2">
                                     <amexio-image [icon-class]="'	fa fa-times-circle-o'" style="font-size: 25px;">
                                     </amexio-image> &nbsp;&nbsp;
                                   </amexio-column>
                                   <amexio-column size="10">
                                      <amexio-label size="small-bold" font-color="white" >Error Message</amexio-label><br/>
                                      <amexio-label font-color="white" >Please Enter Name</amexio-label><br/>
                                      <amexio-label font-color="white" >Please Enter Phone No.</amexio-label>
                                   </amexio-column>
                                 </amexio-row>
                      </ng-template>
                    </amexio-notification>
                    <amexio-button
                      (onClick)="verticalRightNotification()"
                      [label]="'Info Right Popup'"
                      [type]="'primary'"
                      [tooltip]="'Primary Button'">
                    </amexio-button>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
            </amexio-row>
            
            
            <amexio-row>

              <amexio-column size="4">
                <amexio-card [header]="true">
                  <amexio-header> Horizontal Left Notification </amexio-header>
                  <amexio-body>
                    <amexio-notification
                      [data]="horizontalLeftMessageArray"
                      [vertical-position]="'bottom'"
                      [horizontal-position]="'left'"
                      [close-on-escape] ="true"
                      [background-color]="'green'"
                      [auto-dismiss-msg]="true"
                      [auto-dismiss-msg-interval]="4000">
                      <ng-template #amexioNotificationTemp let-data="data">

                        <amexio-row>
                          <amexio-column size="2">
                            <amexio-image [icon-class]="'	fa fa-check'" style="font-size: 25px;">
                            </amexio-image> &nbsp;&nbsp;
                          </amexio-column>
                          <amexio-column size="8">
                            <amexio-label size="small-bold" font-color="white" >Success Message </amexio-label>
                            <amexio-label font-color="white" > {{data}}</amexio-label>
                          </amexio-column>
                        </amexio-row>
                        
                      </ng-template>
                      
                    </amexio-notification>
                    <amexio-button
                      (onClick)="horizontalLeftNotification()"
                      [label]="'Info Bottom Left '"
                      [type]="'primary'"
                      [tooltip]="'Primary Button'">
                    </amexio-button>

                  </amexio-body>
                </amexio-card>
              </amexio-column>
              <amexio-column size="4">
                <amexio-card [header]="true">
                  <amexio-header> Horizontal Center Notification </amexio-header>
                  <amexio-body>

                    <amexio-notification
                      [data]="horizontalCenterMessageArray"
                      [vertical-position]="'bottom'"
                      [horizontal-position]="'center'"
                      [close-on-escape] ="true"
                      [background-color]="'black'"
                      [foreground-color]="'white'"
                      [auto-dismiss-msg]="true "
                      [auto-dismiss-msg-interval]="4000">
                      <ng-template #amexioNotificationTemp let-data="data">


                        <amexio-box   >
                          <amexio-image [icon-class]="'	fa fa-check-square-o'" style="font-size: 25px;">
                          </amexio-image> &nbsp;&nbsp;
                          <amexio-label font-color="white">{{data}}</amexio-label>
                          
                        </amexio-box>
                        
                      </ng-template>
                      
                    </amexio-notification>
                    <amexio-button
                      (onClick)="horizontalCenterNotification()"
                      [label]="'Info Bottom center'"
                      [type]="'primary'"
                      [tooltip]="'Primary Button'">
                    </amexio-button>

                  </amexio-body>
                </amexio-card>

              </amexio-column>
              <amexio-column size="4">
                <amexio-card [header]="true">
                  <amexio-header> Horizontal Right Notification </amexio-header>
                  <amexio-body>

                    <amexio-notification
                      [background-color]="'orange'"
                      [foreground-color]="'black'"
                      [data]="horizontalRightMessageArray"
                      [vertical-position]="'bottom'"
                      [horizontal-position]="'right'"
                      [close-on-escape] ="true"
                      [auto-dismiss-msg]="false"
                      [auto-dismiss-msg-interval]="6000">

                      <ng-template #amexioNotificationTemp let-data="data">
                        <amexio-box padding="true" [box-width]="'225px'">
                          <amexio-label size="medium-bold">Cookies Policy</amexio-label><br/>
                          <amexio-label>{{data}}</amexio-label><br/>
                          <br/>
                          <amexio-button [label]="'Accept & Close'"
                                         [type]="'theme-color'"
                                         (onClick)="closeCookie()"
                                         [size]="'small'"
                                         [tooltip]="'cookies accepted button'">
                          </amexio-button>
                        </amexio-box>
                      </ng-template>


                    </amexio-notification>
                    <amexio-button
                      (onClick)="horizontalRightNotification()"
                      [label]="'Info Bottom Right'"
                      [type]="'primary'"
                      [tooltip]="'Primary Button'">
                    </amexio-button>

                  </amexio-body>
                </amexio-card>

              </amexio-column>

            </amexio-row>
           
            
          </amexio-tab>
          <amexio-tab title="API Reference">
            <amexio-datagrid title="Properties<amexio-notification>" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/navigation/notification.json'"
                             [data-reader]="'properties'"
                             [enable-data-filter]="false">
              <amexio-data-table-column [width]="25" [data-index]="'name'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [width]="10" [data-index]="'type'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Type'"></amexio-data-table-column>
              <amexio-data-table-column [width]="10" [data-index]="'default'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Default'"></amexio-data-table-column>
              <amexio-data-table-column [width]="55" [data-index]="'description'" [data-type]="'string'" [hidden]="false"
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
        <iframe style="width: 100%; height: 600px" src="https://stackblitz.com/edit/amexio-v4-notification?embed=1&file=app/navigation/notification/notification.demo.html&view=editor" frameborder="0" allowfullscren="allowfullscren"></iframe>
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
  verticalLeftMessageArray:any=[];
  verticalCenterMessageArray:any=[];
  verticalRightMessageArray:any=[];

  horizontalLeftMessageArray:any=[];
  horizontalCenterMessageArray:any=[];
  horizontalRightMessageArray:any=[];


  verticalLeftNotification(){
    this.verticalLeftMessageArray.push('There are unsaved changes')
  }
  verticalCenterNotification(){
    this.verticalCenterMessageArray.push('We have to update security policy')
  }
  verticalRightNotification(){
    this.verticalRightMessageArray.push('top Right Notification!!!');
  }

  horizontalLeftNotification(){
    this.horizontalLeftMessageArray.push('Order Submitted ')
  }
  horizontalCenterNotification(){
    this.horizontalCenterMessageArray.push('Event Registered')
  }
  horizontalRightNotification(){
    this.horizontalRightMessageArray.push('We use cookies to help our site work, to understand how it is used and analytics cookies to learn more and track the websites performance. By continuing to use this site,you accept our use of cookies.')
  }
  constructor(private http: HttpClient) {
    this.getHtmlAndTypeScriptCode();
  }

  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;

    //HTML FILE
    this.http.get('assets/data/code/navigation/notification/navigation.html',{responseType: 'text'}).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/navigation/notification/navigation.text',{responseType: 'text'}).subscribe(data => {
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

  closeCookie()
  {
    this.horizontalRightMessageArray =[];
  }
}


