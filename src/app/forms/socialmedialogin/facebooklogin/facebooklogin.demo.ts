/**
 * Created by sagar on 25/1/19.
 */
import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'facebook-login-demo', template: `
    <amexio-card header="true" [body-height]="80">
      <amexio-header>
       Facebook Login
      </amexio-header>
      <amexio-body>
        <p>Amexio Facebook Sign-In component manages the OAuth flow and token lifecycle,
         simplifying your integration with Facebook APIs using amexio component.</p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
            <amexio-row>
              <amexio-column size="4">
              <amexio-card header="true" [body-height]="50">
              <amexio-header>
             Demo
            </amexio-header>
              <amexio-body>
              <amexio-row>
              <amexio-column size="12">
              <amexio-login-social [label]="'Signup With Facebook'"  [api-key]="'2203895509849807'" [type]="'facebook'" (onLogin)="onLoginClick($event)"></amexio-login-social>
              </amexio-column>
              </amexio-row>
              <amexio-row>
              <amexio-column size="12">
              <amexio-login-social  [api-key]="'2203895509849807'" [type]="'facebook'" (onLogin)="onLoginClick($event)"></amexio-login-social>
              </amexio-column>
              </amexio-row>
              <amexio-row>
              <amexio-column size="12">
              <amexio-login-social [style-type]="'circle'" [api-key]="'2203895509849807'" [type]="'facebook'" (onLogin)="onLoginClick($event)"></amexio-login-social>
              </amexio-column>
              </amexio-row>
              </amexio-body>
              </amexio-card>
               </amexio-column>
              <amexio-column size="8">
              <amexio-card header="true" [body-height]="50">
              <amexio-header>
             User Info After Login
            </amexio-header>
              <amexio-body>
             <amexio-row>
             <amexio-column size="12" [fit]="true">
             {{facebookLoginData|json}}
             </amexio-column>
             </amexio-row>
              </amexio-body>
              </amexio-card>
              </amexio-column>
            </amexio-row>
          </amexio-tab>
          <amexio-tab title="API Reference">
          <amexio-box border-color="brown" border="left" padding="true" background-color="brown">
          <amexio-label>
            Make sure api-key is created before use this component.refer Facebook developer webside to create key <a href="https://developers.facebook.com/apps" target="_blank">Facebook Sign-In</a>
            <br/><br/>
          </amexio-label>
        </amexio-box>
        <br>
            <amexio-datagrid title="Properties <amexio-login-social>" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/forms/facebooklogin.json'"
                             [data-reader]="'properties'"
                             [enable-data-filter]="false">
              <amexio-data-table-column [width]="10" [data-index]="'name'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [width]="10" [data-index]="'type'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Type'"></amexio-data-table-column>
              <amexio-data-table-column [width]="10" [data-index]="'default'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Default'"></amexio-data-table-column>
              <amexio-data-table-column [width]="65" [data-index]="'description'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Description'"></amexio-data-table-column>

            </amexio-datagrid>
            <br>
            <amexio-datagrid title="Events <amexio-login-social> " [http-method]="'get'"
                             [http-url]="'assets/apireference/forms/facebooklogin.json'" [data-reader]="'events'"
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
          <amexio-tab title="Live" [disabled]="false">
            <p align="center">Amexio Sandbox</p>
                        <iframe style="width: 100%; height: 600px" src="https://stackblitz.com/edit/amexio-facebook-login?embed=1&file=app/forms/facebook/facebook.demo.component.html&view=editor" frameborder="0" allowfullscren="allowfullscren"></iframe>
          </amexio-tab>
        </amexio-tab-view>
      </amexio-body>
    </amexio-card>
    <!--<amexio-notification [data]="copyMsgArray"></amexio-notification>-->
  `
})
export class FacebookLoginDemo {
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  facebookLoginData: any;
  constructor(private http: HttpClient) {
    this.getHtmlAndTypeScriptCode();
  }

  onLoginClick(data: any) {
    this.facebookLoginData = data;
  }

  // TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;

    // HTML FILE
    this.http.get('assets/data/code/forms/facebooklogin/form.html', {responseType: 'text'}).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    // TS FILE
    this.http.get('assets/data/code/forms/facebooklogin/form.text', {responseType: 'text'}).subscribe(data => {
      responseTs = data;
    }, error => {
    }, () => {
      this.typeScriptCode = responseTs;
    });

  }

  // THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
  onCopyClick() {
    if (this.copyMsgArray.length >= 1) {
      this.copyMsgArray = [];
      this.copyMsgArray.push({'msg': 'Code Copied', 'type': 'info'});
    } else {
      this.copyMsgArray.push({'msg': 'Code Copied', 'type': 'info'});
    }
  }
}


