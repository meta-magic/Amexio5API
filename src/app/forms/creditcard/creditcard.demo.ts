/**
 * Created by ankita on 11/10/18.
 */
import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AmexioCreditCardModel } from 'amexio-ng-extensions/module/forms/creditcard/creditcardmodel.component';

@Component({
  selector: 'credit-card-demo',
  template: `
      <amexio-card header="true">
      <amexio-header>
         Credit Card
      </amexio-header>
      <amexio-body>
        <p> Amexio Credit Card can be used basically for payment purpose.
        </p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
    <amexio-card form-name="validateForm" header="true" show-error="true">
              <amexio-card-header style="width:100%">
             Credit Card
              </amexio-card-header>
         <amexio-card-body>
          <amexio-row>
            <amexio-column size="9">
              <pre><code>{{creditcard|json}}</code></pre>

              <h2>Credit Card with Model Binding, label and double column template</h2>
              <amexio-creditcard [year-count]="4" [show-label]="true" [(ngModel)]="creditcard"></amexio-creditcard>
              <br>
              <h2>Credit Card with double column template and without Model Binding and label</h2>
              <amexio-creditcard [show-label]="false" [year-count]="4"></amexio-creditcard>
              <br>
              <h2>Credit Card with single column template</h2>
              <br>
              <amexio-creditcard [template]="'single-column'" [year-count]="4"></amexio-creditcard>

              </amexio-column>
            </amexio-row>
        </amexio-card-body>
  </amexio-card>
          </amexio-tab>
          <amexio-tab title="API Reference">
            <amexio-datagrid title="Properties <amexio-creditcard>" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/forms/creditcard.json'"
                             [data-reader]="'properties'"
                             [enable-data-filter]="false" >
              <amexio-data-table-column [width]="20" [data-index]="'name'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [width]="20" [data-index]="'version'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Version'"></amexio-data-table-column>
              <amexio-data-table-column [width]="10" [data-index]="'type'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Type'"></amexio-data-table-column>
              <amexio-data-table-column [width]="10" [data-index]="'default'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Default'"></amexio-data-table-column>
              <amexio-data-table-column [width]="45" [data-index]="'description'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Description'"></amexio-data-table-column>
            </amexio-datagrid>
             <br/>
             <amexio-datagrid title="Model for Credit card" [enable-column-fiter]="false"
             [http-method]="'get'"
             [http-url]="'assets/apireference/forms/creditcard.json'"
             [data-reader]="'model'"
             [enable-data-filter]="false" >
<amexio-data-table-column [width]="50" [data-index]="'name'" [data-type]="'string'" [hidden]="false"
                        [text]="'Name'"></amexio-data-table-column>
<amexio-data-table-column [width]="50" [data-index]="'datatype'" [data-type]="'string'" [hidden]="false"
                        [text]="'Datatype'"></amexio-data-table-column>
</amexio-datagrid>
          </amexio-tab>

          <amexio-tab title="Source">
            <div style="overflow-y: scroll">
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
            </div>

          </amexio-tab>
          <amexio-tab title="Live">
          <p align="center">Amexio Sandbox</p>
          <iframe style="width: 100%; height: 600px" src="https://stackblitz.com/edit/amexio-credit-card?embed=1&file=app/creditcard/creditcard/creditcard.demo.html&view=editor" frameborder="0" allowfullscren="allowfullscren"></iframe>
          </amexio-tab>
        </amexio-tab-view>
      </amexio-body>
    </amexio-card>
  `
})
export class CreditCardDemo {
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  asyncFlag: boolean;
  refreshDialogue: boolean;
  creditcard: creditcardtemp;
  constructor(private http: HttpClient) {
    this.creditcard = new creditcardtemp();
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
    this.http.get('assets/data/code/forms/creditcard/form.html', { responseType: 'text' }).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/forms/creditcard/form.text', { responseType: 'text' }).subscribe(data => {
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
      this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
    } else {
      this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
    }
  }

  refreshData() {
    this.refreshDialogue = !this.refreshDialogue;
  }

}
export class creditcardtemp {

  owner = 'ABC';
  cvv = 123;
  cardnumber = 4444444444444444;
  expMonth = 2;
  expYear = 2020;

}

