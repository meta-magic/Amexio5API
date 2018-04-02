/**
 * Created by anagha on 13/3/18.
 */
import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'box-demo', template: `
    <amexio-card header="true">
      <amexio-header>
        Amexio Box
      </amexio-header>
      <amexio-body>
        <p>Amexio Box can be easily wrapped around any other component and configure using the different responsive styling</p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
          <h2>Box Component</h2>
          <amexio-row>
            <amexio-column [size]="4">
              <amexio-box border-color ="red" border="top" padding="true">
                 <amexio-label  border="top">This is small-bold amexio label with red border</amexio-label>
              </amexio-box>
            </amexio-column>
            <amexio-column [size]="4">
              <amexio-box border-color ="blue" border="bottom" padding="true">
                <amexio-label  border="bottom">This is small-bold amexio label with blue border</amexio-label>
              </amexio-box>
              </amexio-column>
              <amexio-column [size]="4">
            <amexio-box border-color ="yellow" border="right" padding="true">
              <amexio-label  border="right">This is small-bold amexio label with yellow border</amexio-label>
            </amexio-box>   
            </amexio-column>
            </amexio-row>
            <br />
            <amexio-row>
            <amexio-column [size]="4">
            <amexio-box border-color ="green" border="left" padding="true">
              <amexio-label  border="left">This is small-bold amexio label with green border</amexio-label>
            </amexio-box>
            </amexio-column>
              <amexio-column [size]="4">
            <amexio-box background-color="purple" padding="true">
              <amexio-label>This is small-bold amexio label with purple bg color</amexio-label>
           </amexio-box>  
           </amexio-column>
              <amexio-column [size]="4">
           <amexio-box background-color="yellow" padding="true">
              <amexio-label>This is small-bold amexio label with background-color yellow</amexio-label>
            </amexio-box>  </amexio-column>
            </amexio-row>
            <br />
            <amexio-row>
            <amexio-column [size]="4">
            <amexio-box background-color="red" padding="true">
              <amexio-label>This is small-bold amexio label with background-color red</amexio-label>
            </amexio-box>  
            </amexio-column>
              <amexio-column [size]="4">
            <amexio-box background-color="blue" padding="true">
              <amexio-label>This is small-bold amexio label with background-color blue</amexio-label>
            </amexio-box>        
            </amexio-column>
              <amexio-column [size]="4">
              <amexio-box border-color ="green" border="bottom" padding="true" background-color="yellow">
              <amexio-label >This is small-bold amexio label with background-color green</amexio-label>
              </amexio-box></amexio-column>
              </amexio-row>
              <br />
              <amexio-row>
              <amexio-column [size]="4">
              <amexio-box border-color ="purple" border="all" padding="true" background-color="purple">
              <amexio-text-input field-label="Aadhar No" name="name"
                         place-holder="Enter aadhar card no"
                         icon-feedback="true">
              </amexio-text-input>
              </amexio-box>
              </amexio-column>
              <amexio-column [size]="4">
              <amexio-box border-color ="brown" border="right-left" padding="true" background-color="brown">
              <amexio-label >This is small-bold amexio label with background-color</amexio-label>
              </amexio-box>
              </amexio-column>
              <amexio-column [size]="4">
              <amexio-box border="top-bottom" padding="true">
              <amexio-label >This is small-bold amexio label with background-color</amexio-label>        
              </amexio-box>
              </amexio-column>
           </amexio-row>

          </amexio-tab>
          <amexio-tab title="API Reference">
            <amexio-datagrid title="Properties <amexio-box>" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/layout/box.json'"
                             [data-reader]="'properties'"
                             [enable-data-filter]="false" >
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
<iframe style="width: 100%; height: 600px" src="https://stackblitz.com/edit/amexio-v41-box?embed=1&file=app/forms/box/box.demo.html" frameborder="0" allowfullscren="allowfullscren"></iframe>
          </amexio-tab>
        </amexio-tab-view>
      </amexio-body>
    </amexio-card>
    <!--<amexio-notification [data]="copyMsgArray"></amexio-notification>-->

  `
})
export class BoxDemo {
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  age:number=10;
  constructor(private http: HttpClient) {
    this.getHtmlAndTypeScriptCode();
  }

  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs:any;

    //HTML FILE
    this.http.get('assets/data/code/layout/box/box.html',{responseType: 'text'}).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/layout/box/box.text',{responseType: 'text'}).subscribe(data => {
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
}


