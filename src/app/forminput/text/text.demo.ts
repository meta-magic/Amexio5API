/**
 * Created by sagar on 9/1/18.
 */

import {NgModule, Component} from '@angular/core'
import {RouterModule} from '@angular/router'
import {FormsModule} from "@angular/forms";
import {Http, HttpModule} from "@angular/http";
import {CommonModule} from "@angular/common";
import {AmexioWidgetModule} from "amexio-ng-extensions";

/* Import prism core */
import 'prismjs/prism';
/* Import the language you need to highlight */
import 'prismjs/components/prism-typescript';
import {PrismComponent} from 'angular-prism';

@Component({
  selector: 'text-demo', template: `
    <amexio-card enableHeader="true">
      <amexio-pane-header>
        <h2>Text Input Component</h2>
      </amexio-pane-header>
      <amexio-pane-body>
        <p>Text input component has been created with different configurable attributes for validation (min/max length,
          allow blank, custom regex), custom error message, help, custom styles.</p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
            <amexio-row>
              <amexio-column size="6">
                <amexio-card enableHeader="true">
                  <amexio-pane-header>
                    <h4>Basic Text Field</h4>
                  </amexio-pane-header>
                  <amexio-pane-body>
                    <amexio-text-input fieldLabel="Name" name="name"
                                       placeholder="Enter name"
                                       iconFeedBack="true"
                    ></amexio-text-input>
                  </amexio-pane-body>
                </amexio-card>
              </amexio-column>
              <amexio-column [size]="6">
                <amexio-card [enableHeader]="true">
                  <amexio-pane-header>
                    <h4>Input Without Label and Icon feedback</h4>
                  </amexio-pane-header>
                  <amexio-pane-body>
                    <amexio-text-input name="name"
                                       placeholder="Enter name"
                                       iconFeedBack="false"
                                       hasLabel="false"
                    ></amexio-text-input>
                  </amexio-pane-body>
                </amexio-card>
              </amexio-column>
            </amexio-row>
            <amexio-row>
              <amexio-column size="6">
                <amexio-card [enableHeader]="true">
                  <amexio-pane-header>
                    <h4>Min/Max Validations</h4>
                  </amexio-pane-header>
                  <amexio-pane-body>
                    <amexio-text-input enablePopOver="true"
                                       fieldLabel="Name" name="name"
                                       placeholder="Enter name"
                                       allowBlank="false" errorMsg="Please enter last name"
                                       minLength="1" minErrorMsg="Minimum 1 char required"
                                       maxLength="10" maxErrorMsg="Maximum 10 char allowed"
                                       iconFeedBack="true"
                    ></amexio-text-input>
                  </amexio-pane-body>
                </amexio-card>
              </amexio-column>
              <amexio-column [size]="6">
                <amexio-card [enableHeader]="true">
                  <amexio-pane-header>
                    <h4>Disabled Text Field</h4>
                  </amexio-pane-header>
                  <amexio-pane-body>
                    <amexio-text-input name="name"
                                       fieldLabel="Name"
                                       placeholder="Enter name"
                                       disabled="true"
                    ></amexio-text-input>
                  </amexio-pane-body>
                </amexio-card>
              </amexio-column>
            </amexio-row>
            <amexio-row>
              <amexio-column size="6">
                <amexio-card enableHeader="true">
                  <amexio-pane-header>
                    <h4>Font Styling</h4>
                  </amexio-pane-header>
                  <amexio-pane-body>
                    <amexio-text-input fieldLabel="Name" name="name"
                                       placeholder="Enter name"
                                       iconFeedBack="true"
                                       fontStyle="italic"
                    ></amexio-text-input>
                  </amexio-pane-body>
                </amexio-card>
              </amexio-column>
              <amexio-column size="6">
                <amexio-card enableHeader="true">
                  <amexio-pane-header>
                    <h4>Font Size & Family Styling</h4>
                  </amexio-pane-header>
                  <amexio-pane-body>
                    <amexio-text-input [fieldLabel]="'Name'" name="name"
                                       [placeholder]="'Enter name'"
                                       [iconFeedBack]="true"
                                       [fontStyle]="'italic'"
                    ></amexio-text-input>
                  </amexio-pane-body>
                </amexio-card>
              </amexio-column>
            </amexio-row>
            <amexio-row>
              <amexio-column [size]="6">
                <amexio-card [enableHeader]="true">
                  <amexio-pane-header>
                    <h4>Input with Pattern</h4>
                  </amexio-pane-header>
                  <amexio-pane-body>
                    <amexio-text-input name="name" [fieldLabel]="'Name'"
                                       [placeholder]="'Enter name'"
                                       [pattern]="'[a-z]'"
                                       [iconFeedBack]="true"
                    ></amexio-text-input>
                  </amexio-pane-body>
                </amexio-card>
              </amexio-column>
            </amexio-row>
          </amexio-tab>
          <amexio-tab title="API Reference">
            <amexio-datagrid title="Properties" httpMethod="get"  [columnToggle]="false"
                             httpUrl="assets/apireference/attribute/textinput.json" dataReader="attributes"
                             [filtering]="false" >
              <amexio-data-table-column [dataIndex]="'name'" [dataType]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [dataIndex]="'type'" [dataType]="'string'" [hidden]="false"
                                        [text]="'Type'"></amexio-data-table-column>
              <amexio-data-table-column [dataIndex]="'default'" [dataType]="'string'" [hidden]="false"
                                        [text]="'Default'"></amexio-data-table-column>
              <amexio-data-table-column [dataIndex]="'description'" [dataType]="'string'" [hidden]="false"
                                        [text]="'Description'"></amexio-data-table-column>
            </amexio-datagrid>
            <br>
            <amexio-datagrid title="Events" [httpMethod]="'get'" 
                             [httpUrl]="'assets/apireference/attribute/textinput.json'" [dataReader]="'events'"
                             [filtering]="false">
              <amexio-data-table-column [dataIndex]="'name'" [dataType]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [dataIndex]="'description'" [dataType]="'string'" [hidden]="false"
                                        [text]="'Description'"></amexio-data-table-column>
            </amexio-datagrid>
            <br>
            <amexio-datagrid title="Styling" [httpMethod]="'get'"
                             [httpUrl]="'assets/apireference/attribute/textinput.json'" [dataReader]="'css'"
                             [filtering]="false">
              <amexio-data-table-column [dataIndex]="'name'" [dataType]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [dataIndex]="'description'" [dataType]="'string'" [hidden]="false"
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
            <p class="text-md-center text-primary">Amexio Sandbox</p>
            <iframe style="width: 100%; height: 600px" src="https://embed.plnkr.co/kR94Gf/" frameborder="0"
                    allowfullscren="allowfullscren"></iframe>
          </amexio-tab>
        </amexio-tab-view>
      </amexio-pane-body>
    </amexio-card>
    <!--<amexio-notification [messageData]="copyMsgArray"></amexio-notification>-->

  `
})
export class TextDemo {
  name: string;
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];

  constructor(private http: Http) {
    this.getHtmlAndTypeScriptCode();
  }

  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseData: any;
    this.http.get('assets/data/code/textinput/textinput.html').subscribe(data => {
      responseData = data.text();
    }, error => {
    }, () => {
      this.htmlCode = responseData;
    });
    this.http.get('assets/data/code/textinput/textinput.ts').subscribe(data => {
      responseData = data.text();
    }, error => {
    }, () => {
      this.typeScriptCode = responseData;
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

@NgModule({
  declarations: [TextDemo, PrismComponent],
  imports: [CommonModule, FormsModule, HttpModule, AmexioWidgetModule, RouterModule.forChild([{
    path: '', component: TextDemo, pathMatch: 'full'
  }])],
  providers: []
})
export class TextDemoModule {

}
