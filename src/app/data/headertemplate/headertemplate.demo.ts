/**
 * Created by Manisha on 22/6/18.
 */

import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'grid-template-demo', template: `
    <amexio-card header="true">
      <amexio-header>
         Header Template 
      </amexio-header>
      <amexio-body>
        <p>Defines header template for user customization AmexioColumn component. The template context is set to the current header</p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
           
          <!--1-->
          <amexio-datagrid [enable-checkbox]="false" title="Registeration Details" [http-method]="'get'" [http-url]="'assets/data/componentdata/headertemplateemail.json'"
              [data-reader]="'data'" [page-size]="10" [enable-data-filter]="false">
              <amexio-data-table-column [width]="5" [data-index]="'No'" [data-type]="'string'" [hidden]="false" [text]="'No.'">
                  <ng-template #amexioHeaderTmpl let-column="column" let-index="index">
                      <amexio-label size="small" font-color="white">
                          {{column.text}}
                      </amexio-label>
                  </ng-template>
              </amexio-data-table-column>
              <amexio-data-table-column   [width]="10" [data-index]="'name'" [data-type]="'string'" [hidden]="false" [text]="'Name'">
              <ng-template #amexioHeaderTmpl let-column="column" let-index="index">
                      <amexio-label size="small-bold" font-color="white">
                          {{column.text}}
                      </amexio-label>
                  </ng-template>
              </amexio-data-table-column>
              <amexio-data-table-column [width]="8" [data-index]="'loginid'" [data-type]="'string'" [hidden]="false" [text]="'Login-Id'">
              <ng-template #amexioHeaderTmpl let-column="column" let-index="index">
              <amexio-label size="small" font-color="red">
                  {{column.text}}
              </amexio-label>
          </ng-template>
              </amexio-data-table-column>
              <amexio-data-table-column [width]="14" [data-index]="'emailid'" [data-type]="'string'" [hidden]="false" [text]="'Email-Id'">
              <ng-template #amexioHeaderTmpl let-column="column" let-index="index">
              <amexio-label size="small" font-color="white">
              <i class="fa fa-envelope"  style="color:white"></i>
                  {{column.text}}
              </amexio-label>
          </ng-template>
              </amexio-data-table-column>
              <amexio-data-table-column [width]="8" [data-index]="'phone'" [data-type]="'string'" [hidden]="false" [text]="'Phone'">
              <ng-template #amexioHeaderTmpl let-column="column" let-index="index">
              <amexio-label size="small" font-color="white">
              <i class="fa fa-phone"  style="color:white"></i>
                  {{column.text}}
              </amexio-label>
          </ng-template>
              </amexio-data-table-column>
              <amexio-data-table-column [sort]="false" [width]="10" [data-index]="'Status'" [data-type]="'string'" [hidden]="false" [text]="'Status'">
              <ng-template #amexioHeaderTmpl let-column="column" let-index="index">
              <amexio-btn-dropdown [label]="'Status'" [type]="'red'" [size]="'small'">
              
              <amexio-btn-dropdown-item  [label]="'Accept All'">
              </amexio-btn-dropdown-item>
              <amexio-btn-dropdown-item [label]="'Reject All'">
              </amexio-btn-dropdown-item>
              
          </amexio-btn-dropdown>
          </ng-template>
              <ng-template #amexioBodyTmpl let-column let-row="row">
                      <amexio-label class="fa fa-circle fa-lg" [ngClass]="{'green': row.Status== 'Paid' , 'yellow': row.Status =='Pending' , 'red' : row.Status=='Approved'}"></amexio-label>
                      &nbsp;{{row.Status}}
                  </ng-template>
              </amexio-data-table-column>
               
          </amexio-datagrid>


          </amexio-tab>
          <amexio-tab title="API Reference">
            <amexio-datagrid title="Properties<amexio-datagrid>" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/data/headertemplate.json'"
                             [data-reader]="'properties'"
                             [enable-data-filter]="false">
              <amexio-data-table-column [data-index]="'name'" [width]="20" [data-type]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [data-index]="'type'" [width]="10" [data-type]="'string'" [hidden]="false"
                                        [text]="'Type'"></amexio-data-table-column>
              <amexio-data-table-column [data-index]="'default'" [width]="10" [data-type]="'string'" [hidden]="false"
                                        [text]="'Default'"></amexio-data-table-column>
              <amexio-data-table-column [data-index]="'description'" [width]="65" [data-type]="'string'" [hidden]="false"
                                        [text]="'Description'"></amexio-data-table-column>
            </amexio-datagrid><br>
            <amexio-datagrid title="Column Properties" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/data/headertemplate.json'"
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
                             [http-url]="'assets/apireference/data/headertemplate.json'" [data-reader]="'events'"
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
          <iframe style="width: 100%; height: 600px" src="https://stackblitz.com/edit/header-template?ctl=1&embed=1&file=app/data/headertemplate/headertemplate.demo.html&view=editor"></iframe>
          </amexio-tab>
        </amexio-tab-view>
      </amexio-body>
    </amexio-card>
  `,
  styles: [
    `
    .button-dropdown{
        color:black;
        padding: 50px;
    }
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
export class HeaderTemplateDemo {
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
    this.http.get('assets/data/code/data/headertemplate/headertemplate.html', { responseType: 'text' }).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/data/headertemplate/headertemplate.text', { responseType: 'text' }).subscribe(data => {
      responseTs = data;
    }, error => {
    }, () => {
      this.typeScriptCode = responseTs;
    });

    this.http.get('assets/data/componentdata/headertemplateemail.json', { responseType: 'text' }).subscribe(data => {
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


