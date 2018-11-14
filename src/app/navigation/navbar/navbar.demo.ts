/**
 * Created by sagar on 9/1/18.
 */

import {Component, ViewEncapsulation} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'navbar-demo', template: `
    <amexio-card header="true">
      <amexio-header>
         Nav Bar 
      </amexio-header> 
      <amexio-body>
       <p>
         The Nav Bar Component is a familiar top navigation pattern for users.
         Nav bar has Logo/Title left align, than link, text field, button and menus on right side.
         v4.1 Nav bar is not backward compatible of v4.0, for v4.0 refer <a href="https://amexio.org/api/v4.1/#/navbar-demo">link</a>
       </p>
          <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
            <amexio-row>
              <amexio-column [size]="12">
               
                  <amexio-card header="true">
                    <amexio-header>
                        Nav Bar Demo 
                    </amexio-header>
                    <amexio-body>
                    <div class="navbardemo">
                    
                    <amexio-nav [enable-side-nav-position]="false" 
                                [title]="'Amexio'"	
                                [logo]="'assets/images/logos/amexio-logo.png'">
                      	                      
                        <amexio-nav-item position-right                                            
                          (onNavItemClick)="onClick('http://amexio.tech')" 
                          [icon]="'fa fa-bell fa-fw fa-lg'"
                          [type]="'button'" 
                          
                          style="cursor: pointer;">			
                        </amexio-nav-item>
                      <amexio-nav-item position-right
                                       [type]="'textfield'"
                                       [title]="'Enter your name'">
                      </amexio-nav-item>
                     
                      <amexio-nav-item position-right
                                       [title]="'Settings'"
                                       [type]="'menucontainer'">

                        <amexio-box background-color="purple" padding="true">
                          <amexio-label size="small-bold">This account is managed by metamagic.in. </amexio-label>
                        </amexio-box>
                        <amexio-row>
                          <amexio-column size="5">
                          <amexio-image [height]="'95.75px'" [width]="'95.75px'"  [c-class]="'image-round'"
                          path="assets/images/profile/mark.jpg">
                            </amexio-image>
                          </amexio-column>
                          <amexio-column size="7">
                            <amexio-label>John deo 
                            </amexio-label>  <br/>
                            <amexio-label>john@metamagic.in</amexio-label>

                          </amexio-column>

                        </amexio-row>
                        <amexio-drop-down-menu-item
                          [label]="'Settings'"
                          [icon]="'fa fa-cog'"
                          [separator]="true"
                        >
                        </amexio-drop-down-menu-item>
                        <amexio-drop-down-menu-item
                          [label]="'Help Center'"
                          [icon]="'fa fa-question-circle'"
                          [separator] ="true"
                        >
                        </amexio-drop-down-menu-item>
                        <amexio-drop-down-menu-item
                        >
                          <amexio-button      [label]="'My Account'" [type]="'theme-color'" [tooltip]="'My Account'">
                          </amexio-button>
                        </amexio-drop-down-menu-item>

                      </amexio-nav-item>
                        <amexio-nav-item position-right *ngFor="let menus of topMenuData" 
                          [type]="'menu'" 
                          [title]="menus.text"
                          [data]="menus.submenus"
                          (onNavItemClick)="externalLink($event)">			
                        </amexio-nav-item>

                    
                     </amexio-nav>

                      
                  </div>                       
                    </amexio-body>
                  </amexio-card>
                  </amexio-column>
                </amexio-row>                      
          </amexio-tab>
          <amexio-tab title="API Reference">
            <amexio-datagrid title="Properties<amexio-nav>" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/navigation/navbar.json'"
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
            <amexio-datagrid title="Events<amexio-nav>" [http-method]="'get'"
            [http-url]="'assets/apireference/navigation/navbar.json'" [data-reader]="'navevents'"
                             [enable-data-filter]="false">
              <amexio-data-table-column [width]="20"[data-index]="'name'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [width]="80" [data-index]="'description'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Description'"></amexio-data-table-column>
            </amexio-datagrid>
            <br>
            <amexio-datagrid title="Properties<amexio-nav-item>" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/navigation/navbar.json'"
                             [data-reader]="'propertiesitem'"
                             [enable-data-filter]="false">
              <amexio-data-table-column [width]="20"[data-index]="'name'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [width]="10" [data-index]="'type'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Type'"></amexio-data-table-column>
              <amexio-data-table-column [width]="10" [data-index]="'default'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Default'"></amexio-data-table-column>
              <amexio-data-table-column [width]="80" [data-index]="'description'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Description'"></amexio-data-table-column>
            </amexio-datagrid>
            <br>
            <amexio-datagrid title="Events<amexio-nav-item>" [http-method]="'get'"
            [http-url]="'assets/apireference/navigation/navbar.json'" [data-reader]="'events'"
                             [enable-data-filter]="false">
              <amexio-data-table-column [width]="20"[data-index]="'name'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [width]="80" [data-index]="'description'" [data-type]="'string'" [hidden]="false"
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
          <p align="center">Amexio Sandbox</p>
        
<iframe style="width: 100%; height: 600px" src="https://stackblitz.com/edit/amexio-v41-navbar?embed=1&file=app/forms/navbar/navbar.demo.html&view=editor" frameborder="0" allowfullscren="allowfullscren"></iframe>
        
          </amexio-tab>
        </amexio-tab-view>
      </amexio-body>
    </amexio-card>
    <!--<amexio-notification [data]="copyMsgArray"></amexio-notification>-->

  `
})
export class NavbarDemo {
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  dataSource:any;
  topMenuData:any;
  constructor(private http: HttpClient) {
    this.topMenuData = JSON.parse(`[{
      "text": "About Us",
      "submenus": [{
        "text": "Amexio Canvas",
        "link": "https://amexio.tech/amexio-canvas"
      }, {
        "text": "Amexio Themes",
        "link": "https://amexio.tech/amexio-themes"
      }]
    }]
`);

    this.getHtmlAndTypeScriptCode();
  }

  onClick(event:any){
  }

  externalLink(event:any){
  }
  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;
  let datasourceData:any;
    //HTML FILE
    this.http.get('assets/data/code/navigation/navbar/navigation.html',{responseType: 'text'}).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/navigation/navbar/navigation.text',{responseType: 'text'}).subscribe(data => {
      responseTs = data;
    }, error => {
    }, () => {
      this.typeScriptCode = responseTs;
    });
    //TS FILE
    this.http.get('assets/data/componentdata/navbar.json',{responseType: 'text'}).subscribe(data => {
      datasourceData = data;
    }, error => {
    }, () => {
      this.dataSource = datasourceData;
    });

    this.dataSource = "";
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


