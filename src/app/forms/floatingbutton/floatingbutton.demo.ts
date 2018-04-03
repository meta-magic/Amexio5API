/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'floating-button-demo', template: `
    <amexio-card header="true">
      <amexio-header>
         Floating Button
      </amexio-header>
      <amexio-body>
        <p>A Floating button component with various position options (vertical/horizontal/top/bottom/left/right)</p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
            <amexio-row>
            <amexio-column [size]="12">
              <amexio-card [header]="true" [body-height]="'50%'">
                <amexio-header>
                   Floating Button Types 
                </amexio-header>
                <amexio-body>
                  <amexio-row>
                    <amexio-column size=3>
                      <amexio-floating-button [relative]="true" [icon]="'fa fa-snowflake-o'" [type]="'theme-color'"></amexio-floating-button>
                    </amexio-column>
                    <amexio-column size=3>
                      <amexio-floating-button [relative]="true"  [icon]="'fa fa-user-circle-o'" [type]="'yellow'"></amexio-floating-button>
                    </amexio-column>
                    <amexio-column size=3>
                      <amexio-floating-button [relative]="true" [icon]="'fa fa-envelope-open'" [type]="'red'"></amexio-floating-button>
                    </amexio-column>
                    <amexio-column size=3>
                      <amexio-floating-button [relative]="true" [icon]="'fa fa fa-telegram'" [type]="'theme-color'"></amexio-floating-button>
                    </amexio-column>
                  </amexio-row>
                  <amexio-row>
                    <amexio-column size=12>
                    <amexio-button [label]="'Vertical/Horizontal Poistioning'" (onClick)="onFloatingButtonClick1($event)" [type]="'theme-color'" [tooltip]="'Using Vertical/Horizontal Poistioning'"></amexio-button>
                    <br/>
                    <br/>
                    <amexio-button [label]="'Right/Left/Top/Right Poistioning'" (onClick)="onFloatingButtonClick2($event)" [type]="'theme-color'" [tooltip]="'Using Vertical/Horizontal Poistioning'"></amexio-button>
                    </amexio-column>
                  </amexio-row>

                <div *ngIf="toggle1">
                  <amexio-floating-button [vertical-position]="'top'" [horizontal-position]="'left'" [label]="'top-left'" [icon]="'fa fa-snowflake-o'" [type]="'theme-color'"></amexio-floating-button>
                  <amexio-floating-button [vertical-position]="'top'" [horizontal-position]="'right'" [label]="'top-right'" [icon]="'fa fa-telegram'" [type]="'green'"></amexio-floating-button>
                  <amexio-floating-button [vertical-position]="'bottom'" [horizontal-position]="'left'" [label]="'bottom-left'" [icon]="'fa fa-user-circle-o'" [type]="'yellow'"></amexio-floating-button>
                  <amexio-floating-button [vertical-position]="'bottom'" [horizontal-position]="'right'" [label]="'bottom-right'" [icon]="'fa fa-envelope-open'" [type]="'red'"></amexio-floating-button>
                  <amexio-floating-button [vertical-position]="'center'" [horizontal-position]="'center'" [icon]="'fa fa-snowflake-o'" [type]="'red'" (onClick)="onFloatingButtonClick($event)"></amexio-floating-button>                
                </div>              

                <div *ngIf="toggle2">
                  <amexio-floating-button [position-top]="'30px'" [position-right]="'40px'" [label]="'top-left'" [icon]="'fa fa-snowflake-o'" [type]="'theme-color'"></amexio-floating-button>
                  <amexio-floating-button [position-top]="'50%'" [position-right]="'40px'" [label]="'top-left'" [icon]="'fa fa-snowflake-o'" [type]="'green'"></amexio-floating-button>
                  <amexio-floating-button [position-bottom]="'30px'" [position-right]="'40px'" [label]="'top-left'" [icon]="'fa fa-snowflake-o'" [type]="'yellow'"></amexio-floating-button>
                  <amexio-floating-button [position-bottom]="'30px'" [position-left]="'40px'" [label]="'top-left'" [icon]="'fa fa-snowflake-o'" [type]="'red'"></amexio-floating-button>
                  <amexio-floating-button [position-top]="'30px'" [position-left]="'40px'" [label]="'top-left'" [icon]="'fa fa-snowflake-o'"></amexio-floating-button>
                  
                </div>
                </amexio-body>
              </amexio-card>

            </amexio-column>
            </amexio-row>
            
          </amexio-tab>
          <amexio-tab title="API Reference">
          <amexio-label size="small-bold">from Amexio v4.1</amexio-label>
            <amexio-datagrid title="Properties <amexio-floating-button>" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/forms/floatingbutton.json'"
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
            <amexio-datagrid title="Events" [http-method]="'get'"
                             [http-url]="'assets/apireference/forms/floatingbutton.json'" [data-reader]="'events'"
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
                  <div>
                   <prism-block [code]="htmlCode" [language]="'html'"></prism-block>
                  </div>
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
              <iframe style="width: 100%; height: 600px" 
              src="https://stackblitz.com/edit/amexio-v41-floatingbutton?embed=1&file=app/forms/floatingbutton/floatingbutton.demo.html" frameborder="0" allowfullscren="allowfullscren"></iframe>
              </amexio-tab>
        </amexio-tab-view>
      </amexio-body>
    </amexio-card>
    <!--<amexio-notification [data]="copyMsgArray"></amexio-notification>-->

  `
})
export class FloatingButtonDemo {
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  asyncFlag : boolean;
  toggle1 : boolean = false;
  toggle2 : boolean = false;
    constructor(private http: HttpClient) {
      this.getHtmlAndTypeScriptCode();
  }
  getDta() {
    this.asyncFlag = true;
    setTimeout(() => {
      this.asyncFlag = false;
    }, 3000);
  }
  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;

    //HTML FILE
    this.http.get('assets/data/code/forms/floatingbutton/form.html',{responseType: 'text'}).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/forms/floatingbutton/form.text',{responseType: 'text'}).subscribe(data => {
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

  onFloatingButtonClick1(event :any){
    this.toggle1 = !this.toggle1;
    this.toggle2 = false;
  }

  onFloatingButtonClick2(event :any){
    this.toggle2 = !this.toggle2;
    this.toggle1 = false;
  }

}


