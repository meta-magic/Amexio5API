/**
 * Created by kedar on 29/5/18.
 */

import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'dropdownmenu', template: `
    <amexio-card header="true">
      <amexio-header>
        Dropdown Menu
      </amexio-header>
      <amexio-body>
        <p>Drop-Down Menu component has been created to render N numbers of drop-down items based on data-set configured.
        </p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
            <amexio-row>
              <amexio-column size="4">
                <amexio-card [header]="true"
                             [footer]="false">
                  <amexio-header>Demo 1</amexio-header>
                  <amexio-body>
                    <amexio-drop-down-menu [icon-align]="'right'"
                                           [title]="'Payment '"
                                           [data]="payment"
                                           [down-arrow-icon] ="true"
                                           [icon]="'fa fa-credit-card'"
                                           [transparent]="false"
                                           (onClick)="onDropDownMenuClick($event)">
                    </amexio-drop-down-menu>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
              <amexio-column size="4  ">
                <amexio-card [header]="true"
                             [footer]="false">
                  <amexio-header>Demo 2</amexio-header>
                  <amexio-body>
                    <amexio-drop-down-menu [icon-align]="'left'"  
                                           [title]="'Advance'"
                                           [icon]="'fa fa-flash'"
                                           (onClick)="onDropDownMenuClick($event)">

                      <amexio-drop-down-menu-item >

                        <amexio-box background-color="purple" padding="true">
                          <amexio-label size="small-bold">This account is managed by metamagic.in. </amexio-label>
                        </amexio-box>
                        <amexio-row>
                          <amexio-column size="5">
                            <amexio-image [height]="'89.75px'" [width]="'89.75px'"  [c-class]="'image-round'"
                                          path="assets/images/profile/ketan.jpg">
                            </amexio-image>
                          </amexio-column>
                          <amexio-column size="7">

                            <amexio-label > Ketan Gote</amexio-label>
                            <amexio-label > xyz@metamagic.in</amexio-label><br/>
                            <amexio-button  (onClick)="onDropDownMenuClick($event)" [label]="'My Account'" [type]="'theme-color'" [tooltip]="'My Account'"><br/>
                            </amexio-button>

                          </amexio-column>

                        </amexio-row>

                      </amexio-drop-down-menu-item>

                      <amexio-drop-down-menu-item
                        [label]="'Settings'"
                        [icon]="'fa fa-cog'"
                        (onClick)="onDropDownMenuClick($event)"
                      >
                      </amexio-drop-down-menu-item>
                      <amexio-drop-down-menu-item
                        [label]="'Help Center'"
                        [icon]="'fa fa-question-circle'"
                        [separator] ="true"
                        (onClick)="onDropDownMenuClick($event)"
                      >
                      </amexio-drop-down-menu-item>
                      <amexio-drop-down-menu-item
                        [label]="'Location'"
                        [icon]="'fa fa-map-marker'"
                        (onClick)="onDropDownMenuClick($event)"

                      >
                      </amexio-drop-down-menu-item>
                      <amexio-drop-down-menu-item
                        [label]="'Sign Out'"
                        [icon]="'fa fa-sign-out'"
                        (onClick)="onDropDownMenuClick($event)"
                      >
                      </amexio-drop-down-menu-item>

                    </amexio-drop-down-menu>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
              <amexio-column size="4">
                <amexio-card [header]="true"
                             [footer]="false">
                  <amexio-header>Demo 3  </amexio-header>
                  <amexio-body>
                    <amexio-drop-down-menu [icon-align]="'left'"
                                           [title]="'Brands'"
                                           [icon]="'fa fa-slack'"
                                           (onClick)="onDropDownMenuClick($event)">

                      <amexio-drop-down-menu-item
                        [icon-align]="'right'"
                        [label-align]="'left'"
                        [label]="'VK'"
                        [icon]="'fa fa-vk'"
                        [separator]="false"
                        (onClick)="onDropDownMenuClick($event)"
                      >
                      </amexio-drop-down-menu-item>

                      <amexio-drop-down-menu-item
                        [icon-align]="'right'"
                        [label-align]="'left'"
                        [label]="'Twitter'"
                        [icon]="'fa fa-twitter'"
                        [separator]="false"
                        (onClick)="onDropDownMenuClick($event)"
                      >
                      </amexio-drop-down-menu-item>

                      <amexio-drop-down-menu-item
                        [icon-align]="'right'"
                        [label-align]="'left'"
                        [label]="'Telegram'"
                        [icon]="'fa fa-telegram'"
                        [separator]="true"
                        (onClick)="onDropDownMenuClick($event)"
                      >
                      </amexio-drop-down-menu-item>

                      <amexio-drop-down-menu-item
                        [icon-align]="'right'"
                        [label-align]="'left'"
                        [label]="'Github'"
                        [icon]="'fa fa-github-alt'"
                        [separator]="false"
                        (onClick)="onDropDownMenuClick($event)"
                      >
                      </amexio-drop-down-menu-item>
                      <amexio-drop-down-menu-item
                        [icon-align]="'right'"
                        [label-align]="'left'"
                        [label]="'Apple'"
                        [icon]="'fa fa-apple'"
                        [separator]="false"
                        (onClick)="onDropDownMenuClick($event)"
                      >
                      </amexio-drop-down-menu-item>

                      <amexio-drop-down-menu-item
                        [icon-align]="'right'"
                        [label-align]="'left'"
                        [label]="'WhatsApp'"
                        [icon]="'fa fa-whatsapp'"
                        [separator]="false"
                        (onClick)="onDropDownMenuClick($event)"
                      >
                      </amexio-drop-down-menu-item>

                    </amexio-drop-down-menu>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
            </amexio-row>

            <amexio-row>
              <amexio-column size="4" >
                <amexio-card [header]="true"
                             [footer]="false">
                  <amexio-header>Demo 4</amexio-header>
                  <amexio-body>
                    <amexio-drop-down-menu [icon-align]="'left'"
                                           [title]="'Transport'"
                                           [data]="transport"
                                           [icon]="'fa fa-truck'"
                                           (onClick)="onDropDownMenuClick($event)">
                    </amexio-drop-down-menu>
                  </amexio-body>
                </amexio-card>
              </amexio-column>

              <amexio-column size="8">
                <amexio-card [header]="true"
                             [footer]="false">
                  <amexio-header> Source data</amexio-header>
                  <amexio-body>
                    <pre><code>{{sourceData |json }}</code></pre>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
            </amexio-row>
          </amexio-tab>

          <amexio-tab title="API Reference">
            <amexio-datagrid title="Properties : <Amexio-DropDownMenu>" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/navigation/dropdownmenu.component.json'"
                             [data-reader]="'properties'"
                             [enable-data-filter]="false">
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
            <amexio-datagrid title="Properties : <Amexio-DropDownMenu-item>" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/navigation/dropdownmenu.component.json'"
                             [data-reader]="'propertiesitem'"
                             [enable-data-filter]="false">
              <amexio-data-table-column [width]="15"[data-index]="'name'" [data-type]="'string'" [hidden]="false"
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
            <amexio-datagrid title="Events" [http-method]="'get'"
                             [http-url]="'assets/apireference/navigation/dropdownmenu.component.json'" [data-reader]="'events'"
                             [enable-data-filter]="false">
              <amexio-data-table-column [width]="20"[data-index]="'name'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [width]="80" [data-index]="'description'" [data-type]="'string'" [hidden]="false"
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

                <!--<amexio-tab title="Data Source">-->
                <!--<ng-container *ngIf="dataSource">-->
                <!--<prism-block [code]="dataSource" [language]="'json'"></prism-block>-->
                <!--</ng-container>-->
                <!--</amexio-tab>-->

              </amexio-vertical-tab-view>
            </div>
          </amexio-tab>
          <amexio-tab title="Live">

            <p align="center">Amexio DropdownMenu</p>
            <iframe style="width: 100%; height: 600px" src="https://stackblitz.com/edit/amexio-dropdownmenu-toolbar?embed=1&file=src/app/navigation/dropdownmenu/dropdownmenu.demo.html&view=editor" frameborder="0" allowfullscren="allowfullscren"></iframe>

          </amexio-tab>
        </amexio-tab-view>
      </amexio-body>
    </amexio-card>


    <!--<amexio-notification [data]="copyMsgArray"></amexio-notification>-->


  `
})
export class DropDownMenuDemo {

  sourceData: any ;
  htmlCode: string;
  typeScriptCode: string;
  dataSource: string;
  copyMsgArray: any[];
  countryCode1: string;

  payment: any[];
  transport: any[];

  constructor(private http: HttpClient) {
    this.getHtmlAndTypeScriptCode();

    this.payment = [
      {"label": "Visa", "icon": "fa fa-cc-visa"},
      {"label": "paypal", "icon": "fa fa-paypal", "separator": true},
      {"label": "google wallet", "icon": "fa fa-google-wallet"},
      {"label": "stripe", "icon": "fa fa-cc-stripe", "separator": true},
      {"label": "mastercard", "icon": "fa fa-cc-mastercard"},
      {"label": "jcb", "icon": "fa fa-cc-jcb"}

    ];


    this.transport = [
      {"label": "motorcycle", "icon": "  fa fa-motorcycle"},
      {"label": "plane", "icon": "fa fa-plane"},
      {"label": "ship", "icon": "fa fa-ship"},
      {"label": "space shuttle", "icon": "fa fa-space-shuttle"},
      {"label": "bicycle", "icon": "fa fa-bicycle"},
      {"label": "rocket", "icon": "fa fa-rocket"}
    ];
  }

  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtmlData: any;
    let responseTs: any;
    let responseData: any;
    //HTML FILE
    this.http.get('assets/data/code/navigation/dropdownmenu/form.html', {responseType: 'text'}).subscribe(data => {
      responseHtmlData = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtmlData;
    });

    //TS FILE
    this.http.get('assets/data/code/navigation/dropdownmenu/form.text', {responseType: 'text'}).subscribe(data => {
      responseTs = data;
    }, error => {
    }, () => {
      this.typeScriptCode = responseTs;
    });

    //TS FILE
    // this.http.get('assets/data/componentdata/country.json',{responseType: 'text'}).subscribe(data => {
    //   responseData = data;
    // }, error => {
    // }, () => {
    //   this.dataSource = responseData;
    // });

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

  onDropDownMenuClick(event: any) {
    debugger;
    let jsonData={
      'icon':'',
      'label':'',
      'labelalign':'',
      'iconalign':'',
      'separator':''
    };


    if(event.this.icon ){
      jsonData.icon=event.this.icon;
    }
    if(event.this.label){
      jsonData.label=event.this.label;
    }
    if(event.this.labelalign){
      jsonData.labelalign=event.this.labelalign;
    }
    if(event.this.iconalign){
      jsonData.iconalign=event.this.iconalign;
    }
    if(event.this.separator  ){
      jsonData.separator=event.this.separator;
    }

    this.sourceData = jsonData;
  }
}


