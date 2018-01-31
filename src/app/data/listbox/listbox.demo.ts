/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core'
import {Http} from "@angular/http";

@Component({
  selector: 'listbox-demo', template: `
    <amexio-card header="true">
      <amexio-header>
         List Box
      </amexio-header>
      <amexio-body>
        <p>Simple list box which allows user to select one of more items from list based on configuration. User can
          provide custom template to change look and feel.</p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
            <amexio-row>
              <amexio-column size="12">
                <amexio-card [header]="true">
                  <amexio-header>
                     Simple List Box
                  </amexio-header>
                  <amexio-body>
                    <amexio-listbox [enable-checkbox]="true" [height]="400"
                                    [header]="'Contacts'" [search-placeholder]="'Search Contacts'"
                                    [data]="localData" [filter]="true"
                                    [data-reader]="'response.data'"
                                    [display-field]="'name_official'" (selectedRows)="getSelectedData($event)">
                    </amexio-listbox>
                    <p>
                      <b>selected data</b> : {{selectedData | json}}
                    </p>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
            </amexio-row>
            <amexio-row>
              <amexio-column size="12">
                <amexio-card [header]="true">
                  <amexio-header>
                     List Box with Template
                  </amexio-header>
                  <amexio-body>
                    <amexio-listbox [height]="400" [header]="'Contacts'" [search-placeholder]="'Search Contacts'"
                                    [data]="localData" [filter]="false"
                                    [data-reader]="'response.data'"
                                    [display-field]="'name'" (onRowClick)="onRowClick($event)">
                      <ng-template #amexioBodyTmpl let-row="row">
                        <amexio-row>
                          <amexio-column [size]="1">
                              <amexio-image [c-class]="'around-image'" height="50px" width="50px" path="assets/images/profile/{{row.profile}}"></amexio-image>
                          </amexio-column>
                          <amexio-column [size]="11">
                            {{row.name}}
                          </amexio-column>
                        </amexio-row>
                      </ng-template>
                    </amexio-listbox>
                   <!-- <p>
                      <b>clicked record data</b> : {{onRowClickData | json}}
                    </p>-->
                  </amexio-body>
                </amexio-card>

              </amexio-column>
            </amexio-row>
          </amexio-tab>
          <amexio-tab title="API Reference">
            <amexio-datagrid title="Properties" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/data/listbox.json'"
                             [data-reader]="'properties'"
                             [enable-data-filter]="false">
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
                             [http-url]="'assets/apireference/data/listbox.json'" [data-reader]="'events'"
                             [enable-data-filter]="false">
              <amexio-data-table-column [width]="20" [data-index]="'name'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [width]="70" [data-index]="'description'" [data-type]="'string'" [hidden]="false"
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
  `
})
export class ListBoxDemo {
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  localData: any;
  onRowClickData: any;
  selectedData: any;
  constructor(private http: Http) {
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
          "name": "Pratik Kelwalkar",
          "name_official": "Pratik Kelwalkar",
          "profile": "pratik.jpg",
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
          "name": "Mahesh Pardeshi",
          "name_official": "Mahesh Pardeshi",
          "profile": "mahesh.jpg",
          "email" : "XYZ@metamagic.in"
        },
        {
          "name": "Ashutosh Jadhav",
          "name_official": "Ashutosh Jadhav",
          "profile": "ahutosh.jpg",
          "email" : "XYZ@metamagic.in"
        },
        {
          "name": "Anagha Kulkarni",
          "name_official": "Anagha Kulkarni",
          "profile": "anagha.jpg",
          "email" : "XYZ@metamagic.in"
        },
        {
          "name": "Amruta Abhyankar",
          "name_official": "Amruta Abhyankar",
          "profile": "amruta.jpg",
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

  }

  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;

    //HTML FILE
    this.http.get('assets/data/code/data/listbox/listbox.html').subscribe(data => {
      responseHtml = data.text();
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/data/listbox/listbox.text').subscribe(data => {
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

  onRowClick(data: any) {
    this.onRowClickData = data;
  }

  getSelectedData(data: any) {
    this.selectedData = data;
  }

}
