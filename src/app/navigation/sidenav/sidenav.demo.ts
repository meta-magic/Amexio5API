/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'sidenav-demo', template: `
    <amexio-card header="true">
      <amexio-header>
         Side Nav Bar 
      </amexio-header>
      <amexio-body>
        <p>The Side Nav Bar Component is a familiar side navigation pattern for users.
          Side nav bar can be placed on left or right side. It can fit as many navigation links as needed, scrolling
          when the content exceeds the viewport.
          Take a look at Datastructure format which this component can consume in datasource tab.</p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
            <amexio-row>
              <amexio-column size="12">
                <amexio-card [header]="true">
                  <amexio-header> Side Nav </amexio-header>
                  <amexio-body>
                  <amexio-side-nav
                  [http-url]="'assets/data/componentdata/sidenav.json'"
                  [http-method]="'get'"
                  [data-reader]="'data'"
                  [width]="'275px'"
                  [position]="'relative'">
                </amexio-side-nav>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
            </amexio-row>

            <amexio-row>
              <amexio-column size="12">
                <amexio-card [header]="true">
                  <amexio-header> Side Nav with component </amexio-header>
                  <amexio-body> {{nodeData | json}}
                  <amexio-side-nav
                  [width]="'275px'"
                  [position]="'relative'">

                  <amexio-sidenav-node>
                  <amexio-label size="medium-bold">BetaMagic</amexio-label>
                  </amexio-sidenav-node>
                  <amexio-sidenav-node [expand-icon]=true  [separator]=true>
                  <amexio-row>
              <amexio-column size="3">
              <amexio-image [height]="'49.75px'" [width]="'49.75px'"  [c-class]="'image-round'"
              path="assets/images/profile/ketan.jpg">
                </amexio-image>
                </amexio-column>
                <amexio-column size="7">

                <amexio-label > Ketan Gote</amexio-label>
                <amexio-label > xyz@metamagic.in</amexio-label><br/>

                    </amexio-column>
                    </amexio-row>

                </amexio-sidenav-node>
              
                <amexio-sidenav-node  [separator]=true>
                      <amexio-button [label]="'Compose'" 
                      [icon]="'fa fa-plus'"
                      [size]="'large'"
                    [type]="'theme-color  '" 
                    [tooltip]="'Background Button'">
                      </amexio-button>
                </amexio-sidenav-node>
                
               
               <amexio-sidenav-node  [label]="'Input'"
               [icon]="'fa fa-inbox'" [badge]="395"  [expand-icon]=true
                >
              </amexio-sidenav-node>
              <amexio-sidenav-node  [label]="'Starred'"
              [icon]="'fa fa-star'"   [expand-icon]=true
               >
             </amexio-sidenav-node>
             <amexio-sidenav-node  [label]="'Send'"
             [icon]="'fa fa-paper-plane'"   [expand-icon]=true
              >
            </amexio-sidenav-node>
            <amexio-sidenav-node  [label]="'Draft'"
            [icon]="'fa fa-save'"   [expand-icon]=true
             >
           </amexio-sidenav-node>

                <amexio-sidenav-node  [separator]=true>
                <amexio-checkbox [field-label]="'Rashmi Thakkar'" [(ngModel)]="check2" >
                </amexio-checkbox>
                </amexio-sidenav-node>

                <amexio-sidenav-node   [separator]=true>
                     
                      <amexio-checkbox [field-label]="'Dattaram Gawas'" [(ngModel)]="check3" >
                      </amexio-checkbox>
                </amexio-sidenav-node>

                <amexio-sidenav-node     [separator]=true>
                      <amexio-checkbox [field-label]="'Sagar Jadhav'" [(ngModel)]="check1" >
                      </amexio-checkbox>
                </amexio-sidenav-node>

                <amexio-sidenav-node     [separator]=true>
              
                <amexio-checkbox [field-label]="'Kedar Kokil'" [(ngModel)]="check" >
                </amexio-checkbox>
                </amexio-sidenav-node>
         
                <amexio-sidenav-node  [separator]=true >
                    <amexio-toggle [field-label]="'Reminder'">
                </amexio-toggle>
              
              </amexio-sidenav-node>
               
                </amexio-side-nav>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
            </amexio-row>
          
          </amexio-tab>
          <amexio-tab title="API Reference">
            <amexio-datagrid title="Properties<amexio-side-nav>" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/navigation/sidenav.json'"
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
            <amexio-datagrid title="Properties <amexio-sidenav-node>" [enable-column-fiter]="false"
                            [http-method]="'get'"
                            [http-url]="'assets/apireference/navigation/sidenav.json'"
                            [data-reader]="'propertiesitem'"
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
            <amexio-datagrid title="Events" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/navigation/sidenav.json'"
                             [data-reader]="'events'"
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
          <iframe style="width: 100%; height: 600px" src="https://stackblitz.com/edit/amexio-v4-side-nav-bar?embed=1&file=app/navigations/sidenavbar/sidenavbar.demo.html" frameborder="0" allowfullscren="allowfullscren"></iframe>
          </amexio-tab>
        </amexio-tab-view>
      </amexio-body>
    </amexio-card>
    <!--<amexio-notification [data]="copyMsgArray"></amexio-notification>-->

  `
})
export class SideNavDemo {
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  nodeData: any;
  dataSource:any;
  check  : boolean = false;
  check1 : boolean = true;
  check2 : boolean = false;
  check3 : boolean = true;

  public max: number = 10;
  public rate: number = 7;
  public profileMaxRate: number = 5;
  public customIconRate: number = 10;
  public customRate: number = 5;
  public profileRate: number = 2;
  public disableProfileRate:number=3;
  public disableProfileMaxRate:number=5;

  titles: any = ['Poor', 'Fair', 'Average', 'Good', 'Excellent'];

  construct
  constructor(private http: HttpClient) {
    this.getHtmlAndTypeScriptCode();
  }

  onNodeClick(data: any) {

    this.nodeData = data;
  }

  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;
  let datasourceData:any;
    //HTML FILE
    this.http.get('assets/data/code/navigation/sidenav/navigation.html',{responseType: 'text'}).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/navigation/sidenav/navigation.text',{responseType: 'text'}).subscribe(data => {
      responseTs = data;
    }, error => {
    }, () => {
      this.typeScriptCode = responseTs;
    });
    //TS FILE
    this.http.get('assets/data/componentdata/sidenav.json',{responseType: 'text'}).subscribe(data => {
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


