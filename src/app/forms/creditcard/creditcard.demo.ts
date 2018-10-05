/**
 * Created by anaghak07 on 16/4/18.
 */
import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
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
          <h2>Demo: Form </h2>
    <amexio-form form-name="validateForm" header="true" show-error="true">
              <amexio-form-header style="width:100%">
             CreditCard
              </amexio-form-header>
              <amexio-form-body>
              <amexio-row>
              <amexio-column size="9">
              <pre><code>{{creditcard|json}}</code></pre>
              <h2>CreditCard with Model Binding</h2>
              <amexio-creditcard [year-count]="4" [(ngModel)]="creditcard"></amexio-creditcard>
              <h2>CreditCard without Model Binding</h2>
              <amexio-creditcard [year-count]="4"></amexio-creditcard>
              </amexio-column>
            </amexio-row>
             </amexio-form-body>
  </amexio-form>
          </amexio-tab>
          <amexio-tab title="API Reference">
            <amexio-datagrid title="Properties <amexio-creditcard>" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/forms/creditcard.json'"
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
             <br/>
              
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
          <iframe style="width: 100%; height: 600px" src="https://stackblitz.com/edit/amexio-v42-form?embed=1&file=app/forms/form/form.demo.html" frameborder="0" allowfullscren="allowfullscren"></iframe>
          </amexio-tab>
        </amexio-tab-view>
      </amexio-body>
    </amexio-card>
  `
})
export class CreditCardDemo{
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  asyncFlag : boolean;
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
    this.http.get('assets/data/code/forms/creditcard/form.html',{responseType: 'text'}).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/forms/creditcard/form.text',{responseType: 'text'}).subscribe(data => {
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

  refreshData() {
    this.refreshDialogue = !this.refreshDialogue;
  }
 
}
export class creditcardtemp {
  
  owner = 'ABC';
  cvv = '123';
  cardnumber='4565488999999';
  expMonth='January';
  expYear='2020'

}

