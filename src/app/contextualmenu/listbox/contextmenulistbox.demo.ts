/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'contextmenu-listbox-demo', template: `
    <amexio-card header="true">
      <amexio-header>
         List Box With Context Menu
      </amexio-header>
      <amexio-body>
        <p>Simple list box which allows user to select one of more items from list based on configuration. User can
          provide custom template to change look and feel and with context menu (right-click mouse operation)</p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
            <amexio-row>
            <amexio-column size="12">
              <amexio-card [header]="true">
                <amexio-header>
                   List Box With Context Menu
                </amexio-header>
                <amexio-body>
                  <amexio-listbox [enable-checkbox]="true" [height]="400"
                                  [header]="'Contacts'" [search-placeholder]="'Search Contacts'"
                                  [data]="localData" [filter]="true"
                                  [data-reader]="'response.data'" [context-menu]="contextMenuData"
                                  [display-field]="'name_official'" (selectedRows)="getSelectedData($event)">
                  </amexio-listbox>
                </amexio-body>
              </amexio-card>
            </amexio-column>
          </amexio-row>

             

               </amexio-tab>
          <amexio-tab title="API Reference">
            <amexio-datagrid title="Properties<amexio-listbox>" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/data/listbox.json'"
                             [data-reader]="'properties'"
                             [enable-data-filter]="false">
              <amexio-data-table-column [width]="15" [data-index]="'name'" [data-type]="'string'" [hidden]="false"
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
            <br>
            <amexio-datagrid title="Events" [http-method]="'get'"
                             [http-url]="'assets/apireference/data/listbox.json'" [data-reader]="'events'"
                             [enable-data-filter]="false">
              <amexio-data-table-column [width]="20" [data-index]="'name'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [width]="70" [data-index]="'description'" [data-type]="'string'" [hidden]="false"
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
          <iframe style="width: 100%; height: 600px" src="https://stackblitz.com/edit/amexio-listbox-contextmenu?ctl=1&embed=1&file=src/app/contextualmenu/list/list.demo.component.html&view=editor" frameborder="0" allowfullscren="allowfullscren"></iframe>
          </amexio-tab>
        </amexio-tab-view>
      </amexio-body>
    </amexio-card>
  `,
  styles:[
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
export class ContextMenuListBoxDemo {
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  localData: any;
  onRowClickData: any;
  selectedData: any;
  progressType: string;
  actionWindowFlag: boolean;
  projectData: any;
  browserData: any;
  contextMenuData: any;
  constructor(private http: HttpClient) {
    this.contextMenuData =
    [{ "text": "Add New", "icon": "fa fa-arrows", "disabled": true },
    { "text": "Edit", "icon": "", "seperator": true }
        , { "text": "Send data in email", "icon": "" }];

    this.getHtmlAndTypeScriptCode();
    this.localData = {"response": {
      "success": true,
        "message": "Fetching  Data  Request Succeeded: Profile",
        "data": [
        {
          "name": "Buck Kulkarni",
          "name_official": "Buck Kulkarni",
          "profile": "buck.jpg",
          "email" : "XYZ@metamagic.in"
        },
        {
          "name": "Araf Karsh Hamid",
          "name_official": "Araf Karsh Hamid",
          "profile": "karsh.jpg",
          "email" : "XYZ@metamagic.in"
        },
        {
          "name": "ketan Gote",
          "name_official": "Ketan Gote",
          "profile": "ketan.jpg",
          "email" : "XYZ@metamagic.in"
        },

        {
          "name": "Dattaram Gawas",
          "name_official": "Dattaram Gawas",
          "profile": "dats.jpg",
          "email" : "XYZ@metamagic.in"
        },
        {
          "name": "Sagar Jadhav",
          "name_official": "Sagar Jadhav",
          "profile": "sagar.jpg",
          "email" : "XYZ@metamagic.in"
        },
      
        {
          "name": "Rashmi Thakkar",
          "name_official": "Rashmi Thakkar",
          "profile": "rashmi.jpg",
          "email" : "XYZ@metamagic.in"
        },
        {
          "name": "Deepali Arvind",
          "name_official": "Deepali Arvind",
          "profile": "dipali.jpg",
          "email" : "XYZ@metamagic.in"
        },
        {
          "name": "Ashwini Agre",
          "name_official": "Ashwini Agre",
          "profile": "ashwini.jpg",
          "email" : "XYZ@metamagic.in"
        }
      ]
    }};

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
    this.http.get('assets/data/code/data/contextmenulistbox/listbox.html',{responseType: 'text'}).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/data/contextmenulistbox/listbox.text',{responseType: 'text'}).subscribe(data => {
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

  onRowClick(data: any) {
    this.onRowClickData = data;
  }

  getSelectedData(data: any) {
    this.selectedData = data;
  }

}
