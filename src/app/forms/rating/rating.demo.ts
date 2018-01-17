/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core'
import {Http} from "@angular/http";

@Component({
  selector: 'rating-demo', template: `
    <amexio-card header="true">
      <amexio-header>
        <h2>Rating Component</h2>
      </amexio-header>
      <amexio-body>
        <p>A simple configurable star rating component with visual feedback.</p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
            <amexio-row>
              <amexio-column [size]="6">
                <amexio-card [header]="true" [footer]="true" [footeralign]="'center'">
                  <amexio-header>
                    <h2>Sample Rating With Label</h2>
                  </amexio-header>
                  <amexio-body>
                    <amexio-rating-input [(ngModel)]="rate" [fieldlabel]="'Film Rating'"
                                         [max]="max" name="rate" [float]="true"
                                         [readonly]="isReadonly">
                    </amexio-rating-input>
                  </amexio-body>
                  <amexio-action>
                    Rating : {{rate}}
                  </amexio-action>
                </amexio-card>
              </amexio-column>
              <amexio-column [size]="6">
                <amexio-card [header]="true" [footer]="true"  [footeralign]="'center'">
                  <amexio-header>
                    <h2> Rating With Rate Titles</h2>
                  </amexio-header>
                  <amexio-body>
                    <amexio-rating-input [(ngModel)]="profileRate"
                                         [max]="profileMaxRate" name="profileRate"
                                         [titles]="titles"
                                         [readonly]="isReadonly">
                    </amexio-rating-input>
                  </amexio-body>
                  <amexio-action>
                    Rating : {{profileRate}}
                  </amexio-action>
                </amexio-card>
              </amexio-column>
            </amexio-row>
            <amexio-row>
              <amexio-column size="6">
                <amexio-card [header]="true" [footer]="true" [footeralign]="'center'">
                  <amexio-header>
                    <h2>Custom Rating Icons</h2>
                  </amexio-header>
                  <amexio-body>
                    <amexio-rating-input [(ngModel)]="customRate" [fullicon]="'☑'" [emptyicon]="'☐'"
                                         [max]="customIconRate" name="customRate" [float]="true"
                                         [readonly]="isReadonly">
                    </amexio-rating-input>
                  </amexio-body>
                  <amexio-action>
                    Rating : {{customRate}}
                  </amexio-action>
                </amexio-card>
              </amexio-column>
              <amexio-column size="6">
                <amexio-card [header]="true">
                  <amexio-header>
                    <h2> Rating With Read Only</h2>
                  </amexio-header>
                  <amexio-body>
                    <!--Read only Rating-->
                    <amexio-rating-input [fieldlabel]="'Profile Rating'"
                                         [(ngModel)]="disableProfileRate"
                                         [max]="disableProfileMaxRate"
                                         [readonly]="true">
                    </amexio-rating-input>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
            </amexio-row>
          </amexio-tab>
          <amexio-tab title="API Reference">
            <amexio-datagrid title="Properties" [enablecolumnfiter]="false"
                             [httpmethod]="'get'"
                             [httpurl]="'assets/apireference/forms/rating.json'" 
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
export class RatingDemo {
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  public max:number = 10;
  public rate:number = 7;
  public profileMaxRate:number = 5;
  public customIconRate:number = 10;
  public customRate:number = 5;
  public profileRate:number = 2;
  public disableProfileRate:number=3;
  public disableProfileMaxRate:number=5;
  public isReadonly:boolean = false;
  titles:any=['Poor','Fair','Average','Good','Excellent'];
  constructor(private http: Http) {
    this.getHtmlAndTypeScriptCode();
  }

  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs:any;

    //HTML FILE
    this.http.get('assets/data/code/forms/rating/form.html').subscribe(data => {
      responseHtml = data.text();
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/forms/rating/form.text').subscribe(data => {
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


