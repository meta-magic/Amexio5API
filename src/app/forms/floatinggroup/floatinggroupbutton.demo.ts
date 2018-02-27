/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'floating-group-button-demo', template: `
    <amexio-card header="true">
      <amexio-header>
         Floating Group Button
      </amexio-header>
      <amexio-body>
        <p>A Floating group button component with various position options (vertical/horizontal/top/bottom/left/right)</p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
            <amexio-row>
            <amexio-column [size]="12">
              <amexio-card [header]="true" [body-height]="'50%'">
                <amexio-header>
                   Floating group button types 
                </amexio-header>
                <amexio-body>
                  <amexio-row>
                    <amexio-column size=12>
                      
                      <b>Demo focus on showcasing three demos</b><br/>
                      1 - Relative with floating group poisitioned bottom right<br/>
                      2 - Relative with floating  group poisitioned top right<br/>
                      3 - Floating group poisitioned bottom right<br/>

                    </amexio-column>
                  </amexio-row>
                  <amexio-row>
                    <amexio-column size=6>
                      <amexio-floating-group-button [relative]="true" 
                      (onClick)="onFloatingClick($event)" [data]="floatingbuttongroup" [floating-group-position]="'top'"
                      [icon]="'fa fa-ellipsis-v'" [type]="'primary'">
                      </amexio-floating-group-button>
                    </amexio-column>
                    <amexio-column size=6>
                      <amexio-floating-group-button [relative]="true" 
                      (onClick)="onFloatingClick($event)" [data]="floatingbuttongroup" [floating-group-position]="'bottom'"
                      [icon]="'fa fa-ellipsis-v'" [type]="'success'">
                      </amexio-floating-group-button>
                    </amexio-column>

                    <amexio-floating-group-button (onClick)="onFloatingClick($event)" [data]="floatingbuttongroup" [floating-group-position]="'top'"
                    [position-bottom]="'5%'" [position-right]="'5%'"
                    [icon]="'fa fa-ellipsis-v'" [type]="'danger'">
                    </amexio-floating-group-button>

                  </amexio-row>

                </amexio-body>
              </amexio-card>

            </amexio-column>
            </amexio-row>
            
          </amexio-tab>
          <amexio-tab title="API Reference">
            <amexio-datagrid title="Properties" [enable-column-fiter]="false"
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
                             [http-url]="'assets/apireference/forms/floatinggroupbutton.json'" [data-reader]="'events'"
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
            After Live
          </amexio-tab>
        </amexio-tab-view>
      </amexio-body>
    </amexio-card>
    <!--<amexio-notification [data]="copyMsgArray"></amexio-notification>-->

  `
})
export class FloatingGroupButtonDemo {
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  asyncFlag : boolean;
  floatingbuttongroup : any[];

  constructor(private http: HttpClient) {
      this.getHtmlAndTypeScriptCode();
      this.floatingbuttongroup = [
        {'label':'Facebook', 'icon':'fa fa-facebook','type':'warning'},
        {'label':'Twitter', 'icon':'fa fa-facebook','type':'success'},
        {'label':'Google', 'icon':'fa fa-google-plus','type':'primary'}
      ];
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
    this.http.get('assets/data/code/forms/floatinggroupbutton/form.html',{responseType: 'text'}).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/forms/floatinggroupbutton/form.text',{responseType: 'text'}).subscribe(data => {
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

  onFloatingClick(event:any){
    debugger;
  }

}


