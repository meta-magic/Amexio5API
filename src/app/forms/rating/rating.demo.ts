/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'rating-demo', template: `
    <amexio-card header="true">
      <amexio-header>
         Rating 
      </amexio-header>
      <amexio-body>
        <p>A simple configurable star rating component with visual feedback.</p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
            <amexio-row>
              <amexio-column [size]="6">
                <amexio-card [header]="true" [footer]="true" [footer-align]="'center'">
                  <amexio-header>
                     Sample Rating With Label 
                  </amexio-header>
                  <amexio-body>
                    <amexio-rating-input [(ngModel)]="rate" [field-label]="'Film Rating'"
                                         [max]="max" name="rate" [float]="true"
                                         [read-only]="isReadonly">
                    </amexio-rating-input>
                  </amexio-body>
                  <amexio-action>
                    Rating : {{rate}}
                  </amexio-action>
                </amexio-card>
              </amexio-column>
              <amexio-column [size]="6">
                <amexio-card [header]="true" [footer]="true"  [footer-align]="'center'">
                  <amexio-header>
                      Rating With Rate Titles 
                  </amexio-header>
                  <amexio-body>
                    <amexio-rating-input [(ngModel)]="profileRate"
                                         [max]="profileMaxRate" name="profileRate"
                                         [titles]="titles"
                                         [read-only]="isReadonly">
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
                <amexio-card [header]="true" [footer]="true" [footer-align]="'center'">
                  <amexio-header>
                     Custom Rating Icons 
                  </amexio-header>
                  <amexio-body>
                    <amexio-rating-input [(ngModel)]="customRate" [full-icon]="'☑'" [empty-icon]="'☐'"
                                         [max]="customIconRate" name="customRate" [float]="true"
                                         [read-only]="isReadonly">
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
                      Rating With Read Only 
                  </amexio-header>
                  <amexio-body>
                    <!--Read only Rating-->
                    <amexio-rating-input [field-label]="'Profile Rating'"
                                         [(ngModel)]="disableProfileRate"
                                         [max]="disableProfileMaxRate"
                                         [read-only]="true">
                    </amexio-rating-input>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
            </amexio-row>
          </amexio-tab>
          <amexio-tab title="API Reference">
            <amexio-datagrid title="Properties <amexio-rating-input>" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/forms/rating.json'" 
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
                             [http-url]="'assets/apireference/forms/rating.json'" [data-reader]="'events'"
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
<iframe style="width: 100%; height: 600px" src="https://stackblitz.com/edit/amexio-v4-rating?embed=1&file=app/forms/rating/rating.demo.html" frameborder="0" allowfullscren="allowfullscren"></iframe>
          </amexio-tab>
        </amexio-tab-view>
      </amexio-body>
    </amexio-card>
    <!--<amexio-notification [data]="copyMsgArray"></amexio-notification>-->

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
  constructor(private http: HttpClient) {
    this.getHtmlAndTypeScriptCode();
  }

  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs:any;

    //HTML FILE
    this.http.get('assets/data/code/forms/rating/form.html',{responseType: 'text'}).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/forms/rating/form.text',{responseType: 'text'}).subscribe(data => {
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


