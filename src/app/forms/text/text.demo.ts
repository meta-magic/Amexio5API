/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core'
import {Http} from "@angular/http";

@Component({
  selector: 'text-demo', template: `
    <amexio-card header="true">
      <amexio-header>
        <h2>Text Input</h2>
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
                    <h4>Basic Text Field</h4>
                  </amexio-header>
                  <amexio-body>
                    <amexio-text-input fieldlabel="Name" name="name"
                                       placeholder="Enter name"
                                       iconfeedback="true" 
                    ></amexio-text-input>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
              <amexio-column [size]="6">
                <amexio-card [header]="true">
                  <amexio-header>
                    <h4>Input Without Label and Icon feedback</h4>
                  </amexio-header>
                  <amexio-body>
                    <amexio-text-input name="name"
                                       placeholder="Enter name"
                                       iconfeedback="false"
                                       haslabel="false"
                    ></amexio-text-input>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
            </amexio-row>
            <amexio-row>
              <amexio-column size="6">
                <amexio-card [header]="true">
                  <amexio-header>
                    <h4>Min/Max Validations</h4>
                  </amexio-header>
                  <amexio-body>
                    <amexio-text-input enablepopover="true" [enablepopover]="true" 
                                       fieldlabel="Name" name="name"
                                       placeholder="Enter name"
                                       allowblank="false" errormsg="Please enter last name"
                                       minlength="1" minerrormsg="Minimum 1 char required"
                                       maxlength="10" maxerrormsg="Maximum 10 char allowed"
                                       iconfeedback="true"
                    ></amexio-text-input>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
              <amexio-column [size]="6">
                <amexio-card [header]="true">
                  <amexio-header>
                    <h4>Disabled Text Field</h4>
                  </amexio-header>
                  <amexio-body>
                    <amexio-text-input name="name"
                                       fieldlabel="Name"
                                       placeholder="Enter name"
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
                    <h4>Font Styling</h4>
                  </amexio-header>
                  <amexio-body>
                    <amexio-text-input fieldlabel="Name" name="name"
                                       placeholder="Enter name"
                                       iconfeedback="true"
                                       fontstyle="italic"
                    ></amexio-text-input>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
              <amexio-column size="6">
                <amexio-card header="true">
                  <amexio-header>
                    <h4>Font Size & Family Styling</h4>
                  </amexio-header>
                  <amexio-body>
                    <amexio-text-input [fieldlabel]="'Name'" name="name"
                                       [placeholder]="'Enter name'"
                                       [iconfeedback]="true"
                                       [fontsize]="'large'"
                    ></amexio-text-input>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
            </amexio-row>
            <amexio-row>
              <amexio-column [size]="6">
                <amexio-card [header]="true">
                  <amexio-header>
                    <h4>Input with Pattern</h4>
                  </amexio-header>
                  <amexio-body>
                    <amexio-text-input name="name" [fieldlabel]="'Name'"
                                       [placeholder]="'Enter name'"
                                       [pattern]="'[a-z]'"
                                       [iconfeedback]="true"
                    ></amexio-text-input>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
            </amexio-row>
          </amexio-tab>
          <amexio-tab title="API Reference"> 
            <amexio-datagrid title="Properties" [enablecolumnfiter]="false"
                             [httpmethod]="'get'"
                             [httpurl]="'assets/apireference/forms/textinput.json'" 
                             [datareader]="'properties'"
                             [enabledatafilter]="false" >
              <amexio-data-table-column [width]="15" [dataindex]="'name'" [datatype]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [width]="10" [dataindex]="'type'" [datatype]="'string'" [hidden]="false"
                                        [text]="'Type'"></amexio-data-table-column>
              <amexio-data-table-column [width]="10" [dataindex]="'default'" [datatype]="'string'" [hidden]="false"
                                        [text]="'Default'"></amexio-data-table-column>
              <amexio-data-table-column [width]="65" [dataindex]="'description'" [datatype]="'string'" [hidden]="false"
                                        [text]="'Description'"></amexio-data-table-column>
            </amexio-datagrid>
            <br>
            <amexio-datagrid title="Events" [httpmethod]="'get'" 
                             [httpurl]="'assets/apireference/forms/textinput.json'" [datareader]="'events'"
                             [enabledatafilter]="false">
              <amexio-data-table-column [width]="20"[dataindex]="'name'" [datatype]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [width]="80" [dataindex]="'description'" [datatype]="'string'" [hidden]="false"
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
           Work in Progress
          </amexio-tab>
        </amexio-tab-view>
      </amexio-body>
    </amexio-card>
    <!--<amexio-notification [messageData]="copyMsgArray"></amexio-notification>-->

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


