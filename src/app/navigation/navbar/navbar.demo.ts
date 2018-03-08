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
        <p>The Nav Bar Component is a familiar top navigation pattern for users.
        </p>
          <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
            <amexio-row>
              <amexio-column [size]="12">
                <div class="navbardemo">
                  <amexio-nav [enable-side-nav-position]="false" 
                              [title]="'Amexio'"	
                              [logo]="'assets/images/logos/amexio-logo.png'">
                      <amexio-nav-item position-left 
                          [type]="'link'" 
                          [title]="'Click Link !'" 
                          (onNavItemClick)="homeLink('http://amexio.tech')">
                      </amexio-nav-item>
                      <amexio-nav-item position-center
                        [type]="'textfield'" 
                        [title]="'Enter your name'" [(ngModel)] = "uname">			
                      </amexio-nav-item>			                      
                      <amexio-nav-item position-center                                            
                        (onNavItemClick)="onClick('http://amexio.tech')" 
                        [icon]="'fa fa-bell fa-fw fa-lg'"
                        [type]="'button'" 
                        [title]="'Click Me! '" 
                        style="cursor: pointer;">			
                      </amexio-nav-item>		
                      <amexio-nav-item position-right *ngFor="let menus of topMenuData" 
                        [type]="'menu'" 
                        [title]="menus.text"
                        [data]="menus.submenus"
                	      (onNavItemClick)="externalLink($event)">			
                      </amexio-nav-item>                     	
                	 </amexio-nav>
                </div> 
                  <amexio-card header="true">
                    <amexio-header>
                        Welcome User 
                    </amexio-header>
                    <amexio-body>
                      <ng-container *ngIf="uname">
                        <br />
                        <amexio-label size="large-bold" 
                        font-color="#75FF33"> Welcome User,{{uname}}!</amexio-label>
                      </ng-container>
                    </amexio-body>
                  </amexio-card>
                  </amexio-column>
                </amexio-row>                      
          </amexio-tab>
          <amexio-tab title="API Reference">
            <amexio-datagrid title="Properties:amexio-nav" [enable-column-fiter]="false"
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
            <amexio-datagrid title="Properties:amexio-nav-item" [enable-column-fiter]="false"
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
            <amexio-datagrid title="Events" [http-method]="'get'"
                             [http-url]="'assets/apireference/forms/button.json'" [data-reader]="'events'"
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
              <amexio-tab title="Data Source">
                <ng-container *ngIf="dataSource">
                  <prism-block [code]="dataSource" [language]="'json'"></prism-block>
                </ng-container>
              </amexio-tab>
            </amexio-vertical-tab-view>
          </amexio-tab>
          <amexio-tab title="Live">
          <p align="center">Amexio Sandbox</p>
          <iframe style="width: 100%; height: 600px" src="https://stackblitz.com/edit/amexio-v4-nav-bar?embed=1&file=app/navigations/navbar/navbar.demo.html" frameborder="0" allowfullscren="allowfullscren"></iframe>
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
      "text": "Products",
      "submenus": [{
        "text": "Amexio Canvas",
        "link": "https://amexio.tech/amexio-canvas"
      }, {
        "text": "Amexio Themes",
        "link": "https://amexio.tech/amexio-themes"
      }]
    },
     {
      "text": "Start Using",
      "submenus": [{
        "text": "Pricing",
        "link": "https://amexio.tech/pricing"
      }, {
        "text": "Downloads",
        "link": "https://amexio.tech/download"
      }, {
        "text": "Subscribe (Beta)",
        "link": "https://canvas.amexio.org/signup/"
      }, {
        "text": "Canvas Login (Beta)",
        "link": "https://canvas.amexio.org/"
      }, {
        "text": "License and Other Docs",
        "link": "https://amexio.tech/license-and-other-docs-1"
      }]
    }, {
      "text": "Training",
      "submenus": [{
        "text": "Amexio Training",
        "link": "http://metaarivu.com/amexio-training"
      }]
    }, {
      "text": "Engage",
      "submenus": [{
        "text": "Events",
        "link": "https://metamagicglobal.com/events"
      }, {
        "text": "Forums",
        "link": "http://forum.metamagicglobal.com/"
      }, {
        "text": "Blogs",
        "link": "http://blog.metamagicglobal.com/"
      }, {
        "text": "Node Package Manager",
        "link": "https://www.npmjs.com/package/amexio-ng-extensions"
      }, {
        "text": "GitHub - Source Code",
        "link": "https://github.com/meta-magic/amexio.github.io"
      }]
    }, {
      "text": "About Us",
      "submenus": [{
        "text": "Contact",
        "link": "https://metamagicglobal.com/contact"
      }, {
        "text": "Company",
        "link": "http://www.metamagicglobal.com/company"
      }, {
        "text": "MetaMagic",
        "link": "https://www.metamagicglobal.com/"
      }]
    }]
`);

    this.getHtmlAndTypeScriptCode();
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


