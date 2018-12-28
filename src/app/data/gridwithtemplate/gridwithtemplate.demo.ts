/**
 * Created by sagar on 9/1/18.
 */

import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'grid-template-demo', template: `
    <amexio-card header="true">
      <amexio-header>
         Data Grid Template 
      </amexio-header>
      <amexio-body>
        <p>To define the detail template, nest an ng-template tag inside the AmexioColumn component. The template context is set to the current row.</p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
          <!--1-->
          <amexio-datagrid [enable-checkbox]="false" title="Invoice Details" [http-method]="'get'" [http-url]="'assets/data/componentdata/templategrid.json'"
              [data-reader]="'response.data'" [page-size]="10" [enable-data-filter]="false">
              <amexio-data-table-column [width]="5" [data-index]="'No'" [data-type]="'string'" [hidden]="false" [text]="'No.'">
                  <ng-template #amexioBodyTmpl let-column let-row="row">
                      <amexio-label size="small" font-color="grey">
                          {{row.No}}
                      </amexio-label>
                  </ng-template>
              </amexio-data-table-column>
              <amexio-data-table-column [width]="10" [data-index]="'Invoice Subject'" [data-type]="'string'" [hidden]="false" [text]="'Invoice Subject'">
              </amexio-data-table-column>
              <amexio-data-table-column [width]="8" [data-index]="'client'" [data-type]="'string'" [hidden]="false" [text]="'Client'">
          
              </amexio-data-table-column>
              <amexio-data-table-column [width]="6" [data-index]="'Vat No.'" [data-type]="'string'" [hidden]="false" [text]="'Vat No.'">
          
              </amexio-data-table-column>
              <amexio-data-table-column [width]="8" [data-index]="'Created'" [data-type]="'string'" [hidden]="false" [text]="'Created'">
          
              </amexio-data-table-column>
              <amexio-data-table-column [width]="10" [data-index]="'Status'" [data-type]="'string'" [hidden]="false" [text]="'Status'">
                  <ng-template #amexioBodyTmpl let-column let-row="row">
                      <amexio-label class="fa fa-circle fa-lg" [ngClass]="{'green': row.Status== 'Paid' , 'yellow': row.Status =='Pending' , 'red' : row.Status=='Paid Today'}"></amexio-label>
                      &nbsp;{{row.Status}}
                  </ng-template>
              </amexio-data-table-column>
              <amexio-data-table-column [width]="5" [data-index]="'Price'" [data-type]="'string'" [hidden]="false" [text]="'Price'">
          
              </amexio-data-table-column>
              <amexio-data-table-column [width]="15" [data-index]="''" [data-type]="'string'" [hidden]="false" [text]="''">
                  <ng-template #amexioBodyTmpl let-column let-row="row">
                      <amexio-row>
                          <amexio-column [size]="4">
                              <amexio-button [label]="'Manage'" [size]="'small'" [type]="'theme-backgroundcolor'" [tooltip]="'Manage'">
                              </amexio-button>
                          </amexio-column>
                          <amexio-column [size]="5">
                              <amexio-btn-dropdown [label]="'Action'" [type]="'theme-backgroundcolor'" [size]="'small'">
                                  <amexio-btn-dropdown-item [label]="'Accept'">
                                  </amexio-btn-dropdown-item>
                                  <amexio-btn-dropdown-item [label]="'Reject'">
                                  </amexio-btn-dropdown-item>
                              </amexio-btn-dropdown>
                          </amexio-column>
                          <amexio-column [size]="3">
                              <amexio-image style="color:grey;" [icon-class]="'fa fa-pencil fa-2x'"></amexio-image>
                          </amexio-column>
                      </amexio-row>
                  </ng-template>
              </amexio-data-table-column>
          
          </amexio-datagrid>
          
          <!--2-->
          <br>
          <amexio-datagrid [enable-checkbox]="false" title="User Activity Details" [http-method]="'get'" [http-url]="'assets/data/componentdata/datagridtemplate.json'"
              [data-reader]="'response.data'" [page-size]="10" [enable-data-filter]="false">
              <amexio-data-table-column [width]="40" [data-index]="'User'" [data-type]="'string'" [hidden]="false" [text]="'USER'">
                  <ng-template #amexioBodyTmpl let-column let-row="row">
                      <amexio-row>
                          <amexio-column [size]="3">
                              <amexio-image [path]="'assets/images/profile/'+row.profile" [c-class]="'image-round'">
                              </amexio-image>
                           </amexio-column>
                          <amexio-column [size]="9">
                              <amexio-label size="small">
                                  {{row.User}}
                              </amexio-label>
                              <br>
                              <amexio-label size="small" font-color="grey">
                                  Registered:{{row.Date}}
                              </amexio-label>
                          </amexio-column>
                      </amexio-row>
                  </ng-template>
              </amexio-data-table-column>
              <amexio-data-table-column [width]="40" [data-index]="'Usage'" [data-type]="'string'" [hidden]="false" [text]="'USAGE'">
                  <ng-template #amexioBodyTmpl let-column let-row="row">
                      <amexio-label>{{row.Usage}}%</amexio-label>
          
                      <amexio-progress-bar [height]="'10'" [current-value]="row.Usage" [infinite]="false" [type]="getGridTemplateData(row)"></amexio-progress-bar>
          
                      <amexio-label size="small" font-color="grey">
                          {{row.usageFromDate}}-{{row.usageToDate}}
                      </amexio-label>
          
                  </ng-template>
              </amexio-data-table-column>
              <amexio-data-table-column [width]="20" [data-index]="'Payment'" [data-type]="'string'" [hidden]="false" [text]="'PAYMENT'">
                  <ng-template #amexioBodyTmpl let-column let-row="row">
                      <amexio-label>
                          <amexio-image [height]="'59.75px'" [width]="'59.75px'" [path]="'assets/images/'+row.Payment" [c-class]="'image-round'">
                          </amexio-image>
                       </amexio-label>
                  </ng-template>
              </amexio-data-table-column>
              <amexio-data-table-column [width]="20" [data-index]="'Activity'" [data-type]="'string'" [hidden]="false" [text]="'ACTIVITY'">
                  <ng-template #amexioBodyTmpl let-column let-row="row">
                      <amexio-label size="small" font-color="grey">
                          Last login
                      </amexio-label>
                      <br>
                      <amexio-label size="small">
                          {{row.Activity}}
                      </amexio-label>
          
          
                  </ng-template>
              </amexio-data-table-column>
              <amexio-data-table-column [width]="10" [data-index]="''" [data-type]="'string'" [hidden]="false" [text]="''">
                  <ng-template #amexioBodyTmpl let-column let-row="row">
          
 
                          <amexio-image  style="color:grey;" [icon-class]="'fa fa-pencil  fa-2x'"></amexio-image>
 
          
                  </ng-template>
              </amexio-data-table-column>
          </amexio-datagrid>
          
          <!--3-->
          <br>
          <amexio-datagrid title="Country Grid" [http-method]="'get'" [http-url]="'assets/data/componentdata/gridtemplate.json'" [data-reader]="'data'"
              [page-size]="10" [enable-data-filter]="false" (rowSelect)="getRowData($event)">
              <amexio-data-table-column [width]="70" [data-index]="'name_official'" [data-type]="'string'" [hidden]="false" [text]="'Name'">
                  <ng-template #amexioBodyTmpl let-column let-row="row">
                      <amexio-label class="datagrid-template">
                          <amexio-label>
                              <amexio-image [width]="100" [path]="'assets/images/flags/flags/'+row.flag_32"></amexio-image>
                          </amexio-label>
                          <amexio-label>{{row.name}}</amexio-label>
          
                          <amexio-label >( {{row.name_official}} )</amexio-label>
                      </amexio-label>
                  </ng-template>
              </amexio-data-table-column>
              <amexio-data-table-column [width]="20" [data-index]="'latitude'" [data-type]="'number'" [hidden]="false" [text]="'Latitude'"></amexio-data-table-column>
              <amexio-data-table-column [width]="20" [data-index]="'longitude'" [data-type]="'number'" [hidden]="false" [text]="'Longitude'"></amexio-data-table-column>
          </amexio-datagrid>
          <p>
              <b>Clicked row data :</b> {{clickedRowData | json}}</p>




          </amexio-tab>
          <amexio-tab title="API Reference">
            <amexio-datagrid title="Properties<amexio-datagrid>" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/data/grid.json'"
                             [data-reader]="'properties'"
                             [enable-data-filter]="false">
              <amexio-data-table-column [data-index]="'name'" [width]="20" [data-type]="'string'" [hidden]="false"
                                        [text]="'Name'">
                <ng-template #amexioBodyTmpl let-column let-row="row">
                  <ng-container *ngIf="row.deprecated">
                    <div style="text-decoration: line-through red;">{{row.name}}</div>
                  </ng-container>
                  <ng-container *ngIf="!row.deprecated">
                    {{row.name}}
                  </ng-container>
                </ng-template>
              </amexio-data-table-column>
              <amexio-data-table-column [data-index]="'type'" [width]="10" [data-type]="'string'" [hidden]="false"
                                        [text]="'Type'"></amexio-data-table-column>
              <amexio-data-table-column [data-index]="'default'" [width]="10" [data-type]="'string'" [hidden]="false"
                                        [text]="'Default'"></amexio-data-table-column>
              <amexio-data-table-column [data-index]="'description'" [width]="65" [data-type]="'string'" [hidden]="false"
                                        [text]="'Description'"></amexio-data-table-column>
            </amexio-datagrid><br>
            <amexio-datagrid title="Column Properties <amexio-data-table-colum>" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/data/grid.json'"
                             [data-reader]="'columnProperties'"
                             [enable-data-filter]="false">
              <amexio-data-table-column [data-index]="'name'" [width]="15" [data-type]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [data-index]="'type'" [width]="10" [data-type]="'string'" [hidden]="false"
                                        [text]="'Type'"></amexio-data-table-column>
              <amexio-data-table-column [data-index]="'default'" [width]="10" [data-type]="'string'" [hidden]="false"
                                        [text]="'Default'"></amexio-data-table-column>
              <amexio-data-table-column [data-index]="'description'" [width]="65" [data-type]="'string'" [hidden]="false"
                                        [text]="'Description'"></amexio-data-table-column>
            </amexio-datagrid>
            <br>
            <amexio-datagrid title="Events" [http-method]="'get'"
                             [http-url]="'assets/apireference/data/grid.json'" [data-reader]="'events'"
                             [enable-data-filter]="false">
              <amexio-data-table-column [data-index]="'name'" [width]="20" [data-type]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [data-index]="'description'" [width]="65" [data-type]="'string'" [hidden]="false"
                                        [text]="'Description'"></amexio-data-table-column>
            </amexio-datagrid>

          </amexio-tab>
          <amexio-tab title="Source">
            <div style="overflow-y: scroll;">
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
                <amexio-tab title="DataSource">
                  <ng-container *ngIf="dataSource">
                    <prism-block [code]="dataSource" [language]="'json'"></prism-block>
                  </ng-container>
                </amexio-tab>
              </amexio-vertical-tab-view>  
            </div>
            
          </amexio-tab>

          <amexio-tab title="Live">
          <p align="center">Amexio Sandbox</p>
          <iframe style="width: 100%; height: 600px" src="https://stackblitz.com/edit/amexio-v4-template-grid?embed=1&file=app/grid/templategrid/templategrid.demo.html" frameborder="0" allowfullscren="allowfullscren"></iframe>
          </amexio-tab>
        </amexio-tab-view>
      </amexio-body>
    </amexio-card>
  `,
  styles: [
    `
    .listbox-StatusYellow {
      background-color: yellow;
    }
    .listbox-StatusGreen  {
      background-color: green;
     }
    .listbox-StatusRed {
      background-color: red;
  }
  
.red {
    color: red!important;
   
}
.green {
    color: green!important;
   
}
.yellow {
    color: yellow!important;
    
}
.template-progressBar .progress{
  height:5px !important;
}  
`
  ]
})
export class GridWithTemplateDemo {
  htmlCode: string;
  typeScriptCode: string;
  dataSource: string;
  copyMsgArray: any[];
  clickedRowData: any;
  progressType: string;
  actionWindowFlag: boolean;
  projectData: any;
  browserData: any;
  constructor(private http: HttpClient) {
    this.getHtmlAndTypeScriptCode();
    this.projectData = {
      "response": {
        "success": true,
        "message": "Fetching  Data  Request Succeeded: Profile",
        "data": [
          {
            "name": "Admin Template	",
            "status": " 65%"
          },
          {
            "name": "Landing Page",
            "status": "Finished"
          },
          {
            "name": "Backend UI	",
            "status": "Rejected"
          },
          {
            "name": "Personal Blog",
            "status": "40%"
          },
          {
            "name": "E-mail Templates	",
            "status": "13%"
          },
          {
            "name": "Corporate Website",
            "status": "Pending"
          }
        ]
      }
    }
    this.browserData = {
      "response": {
        "success": true,
        "message": "Fetching  Data  Request Succeeded: Profile",
        "data": [
          {
            "name": "Google Chrome",
            "usage": "23%",
            "icon": "GoogleChrome.jpg "
          },
          {
            "name": "Mozila Firefox",
            "usage": "15%",
            "icon": "MozilaFirefox.png "
          },
          {
            "name": "Apple Safari",
            "usage": "7%",
            "icon": "AppleSafari.png "
          },
          {
            "name": "Internet Explorer",
            "usage": "9%",
            "icon": "InternetExplorer.jpeg"
          },
          {
            "name": "Opera mini",
            "usage": "20%",
            "icon": "Operamini.jpg"
          },
          {
            "name": "Microsoft edge",
            "usage": "9%",
            "icon": "Microsoftedge.jpg"
          }
        ]
      }
    }


  }

  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;

    //HTML FILE
    this.http.get('assets/data/code/data/templategrid/templategrid.html', { responseType: 'text' }).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/data/templategrid/templategrid.text', { responseType: 'text' }).subscribe(data => {
      responseTs = data;
    }, error => {
    }, () => {
      this.typeScriptCode = responseTs;
    });

    this.http.get('assets/data/componentdata/gridtemplate.json', { responseType: 'text' }).subscribe(data => {
      responseTs = data;
    }, error => {
    }, () => {
      this.dataSource = responseTs;
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

  getRowData(data: any) {
    this.clickedRowData = data;
  }

  getGridTemplateData(row: any): string {
    if (row.Usage >= 50) {
      return "success";
    }
    if (row.Usage < 50 && row.Usage >= 30) {
      return "warning";
    }
    if (row.Usage < 30) {
      return "danger";
    }
  }


}


