/**
 * Created by kedar on 12/9/18.
 */

import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'recaptcha-demo', template: `
    <amexio-card header="true">
      <amexio-header>
        Amexio google recaptcha
      </amexio-header>
      <amexio-body>
        <p>Amexio google recaptcha used for google security check. </p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
         

         
          <amexio-row>
          <amexio-column [size]="12">
            <amexio-card [header]="true">

            
              <amexio-header>Captcha Response data</amexio-header>
              <amexio-body>

        <amexio-google-recaptcha (onSuccess)="onSuccess($event)" 
        (onFailure)="onFailure($event)"
        [site-key]="'6LeZ5W8UAAAAAIHXZf35oYoUhpsICnJzqSxx3fpf'">
                              
        </amexio-google-recaptcha>
              
              </amexio-body>
            </amexio-card>
          </amexio-column>
        </amexio-row>
        
      

          </amexio-tab>

          <amexio-tab title="API Reference">
            <amexio-datagrid title="Properties <amexio-google-recaptcha>" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/forms/recaptcha.json'"
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
            <br>
            
            <amexio-datagrid title="Events" [http-method]="'get'"
                             [http-url]="'assets/apireference/forms/recaptcha.json'" [data-reader]="'events'"
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
              </amexio-vertical-tab-view>
            </div>
          </amexio-tab>
          <amexio-tab title="Live">
      <p align="center">Amexio Sandbox</p>
      <iframe style="width: 100%; height: 600px" src="https://stackblitz.com/edit/amexio-recaptcha1?embed=1&file=app/recaptcha-demo/recaptcha/recaptcha.demo.html&view=editor" frameborder="0" allowfullscren="allowfullscren"></iframe>

          </amexio-tab>
        </amexio-tab-view>
      </amexio-body>
    </amexio-card>
    <!--<amexio-notification [data]="copyMsgArray"></amexio-notification>-->

  `
})
export class RecaptchaDemo {
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  response: any;
  age:number=10;
  constructor(private http: HttpClient) {
    this.getHtmlAndTypeScriptCode();
  }

  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs:any;

    //HTML FILE
    this.http.get('assets/data/code/forms/recaptcha/recaptcha.html',{responseType: 'text'}).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/forms/recaptcha/recaptcha.text',{responseType: 'text'}).subscribe(data => {
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

  onSuccess(event: any) {
    this.response = event;
  }
  onFailure(event: any) {
    this.response = event;    
  }
}


