/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core'
import {Http} from "@angular/http";

@Component({
  selector: 'text-demo', template: `
    <amexio-card header="true">
      <amexio-header>
         Text Input 
      </amexio-header>
      <amexio-body>
        <p>Text input component has been created with different configurable attributes for validation (min/max length,
          allow blank, custom regex), custom error message, help, custom styles.</p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
            <amexio-row>
              <amexio-column size="6">
                <amexio-card header="true">
                  <amexio-header>
                     Basic Text Field 
                  </amexio-header>
                  <amexio-body>
                    <amexio-text-input field-label="Name" name="name"
                                       place-holder="Enter name"
                                       icon-feedback="true" 
                    ></amexio-text-input>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
              <amexio-column [size]="6">
                <amexio-card [header]="true">
                  <amexio-header>
                     Input Without Label and Icon feedback 
                  </amexio-header>
                  <amexio-body>
                    <amexio-text-input name="name"
                                       place-holder="Enter name"
                                       icon-feedback="false"
                                       has-label="false"
                    ></amexio-text-input>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
            </amexio-row>
            <amexio-row>
              <amexio-column size="6">
                <amexio-card [header]="true">
                  <amexio-header>
                     Min/Max Validations 
                  </amexio-header>
                  <amexio-body>
                    <amexio-text-input enable-popover="true" [enable-popover]="true" 
                                       field-label="Name" name="name"
                                       place-holder="Enter name"
                                       allow-blank="false" error-msg="Please enter last name"
                                       min-length="1" minerror-msg="Minimum 1 char required"
                                       max-length="10" max-error-msg="Maximum 10 char allowed"
                                       icon-feedback="true"
                    ></amexio-text-input>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
              <amexio-column [size]="6">
                <amexio-card [header]="true">
                  <amexio-header>
                     Disabled Text Field 
                  </amexio-header>
                  <amexio-body>
                    <amexio-text-input name="name"
                                       field-label="Name"
                                       place-holder="Enter name"
                                       disabled="true"
                    ></amexio-text-input>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
            </amexio-row>
            <amexio-row>
              <amexio-column size="6">
                <amexio-card header="true">
                  <amexio-header>
                     Font Styling 
                  </amexio-header>
                  <amexio-body>
                    <amexio-text-input field-label="Name" name="name"
                                       place-holder="Enter name"
                                       icon-feedback="true"
                                       font-style="italic"
                    ></amexio-text-input>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
              <amexio-column size="6">
                <amexio-card header="true">
                  <amexio-header>
                     Font Size & Family Styling 
                  </amexio-header>
                  <amexio-body>
                    <amexio-text-input [field-label]="'Name'" name="name"
                                       [place-holder]="'Enter name'"
                                       [icon-feedback]="true"
                                       [font-size]="'large'"
                    ></amexio-text-input>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
            </amexio-row>
            <amexio-row>
              <amexio-column [size]="6">
                <amexio-card [header]="true">
                  <amexio-header>
                     Input with Pattern 
                  </amexio-header>
                  <amexio-body>
                    <amexio-text-input name="name" [field-label]="'Name'"
                                       [place-holder]="'Enter name'"
                                       [pattern]="'[a-z]'"
                                       [icon-feedback]="true"
                    ></amexio-text-input>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
            </amexio-row>
          </amexio-tab>
          <amexio-tab title="API Reference"> 
            <amexio-datagrid title="Properties" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/forms/textinput.json'" 
                             [data-reader]="'properties'"
                             [enable-data-filter]="false" >
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
                             [http-url]="'assets/apireference/forms/textinput.json'" [data-reader]="'events'"
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
<iframe style="width: 100%; height: 600px" src="https://stackblitz.com/edit/amexio-v4-textinput?embed=1&file=app/forms/text/text.demo.html" frameborder="0" allowfullscren="allowfullscren"></iframe>
          </amexio-tab>
        </amexio-tab-view>
      </amexio-body>
    </amexio-card>
    <!--<amexio-notification [data]="copyMsgArray"></amexio-notification>-->

  `
})
export class TextDemo {
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];

  constructor(private http: Http) {
    this.getHtmlAndTypeScriptCode();
  }

  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs:any;

    //HTML FILE
    this.http.get('assets/data/code/forms/textinput/form.html').subscribe(data => {
      responseHtml = data.text();
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/forms/textinput/form.text').subscribe(data => {
      responseTs = data.text();
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


