/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core'
import {Http} from "@angular/http";

@Component({
  selector: 'dockbar-demo', template: `
    <amexio-card enableHeader="true">
      <amexio-header>
        <h2>Dockbar Component</h2>
      </amexio-header>
      <amexio-body>
        <p>The dockbar is a bar of tools and menus.</p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">

            <amexio-dockbar [height]="'600px'">
              <amexio-dockbar-item [icon]="'fa fa-home fa-fw'"
                                   [title]="'Features'"
                                   [width]="'350px'">
                <amexio-side-nav
                  [httpUrl]="'assets/data/componentdata/sidenav.json'"
                  [httpMethod]="'get'"
                  [dataReader]="'data'"
                  [width]="'275px'"
                  [position]="'relative'">
                </amexio-side-nav>
              </amexio-dockbar-item>
              <amexio-dockbar-item [icon]="'fa fa-address-book fa-fw'" [title]="'Contacts'"
                                   [width]="'350px'">
                <amexio-listbox [header]="'Contacts'" [searchPlaceHolder]="'Search Contacts'"
                                [httpUrl]="'assets/data/componentdata/profiledata.json'"
                                [httpMethod]="'get'"
                                [filter]="false"
                                [enableCheckBox]="false" [dataReader]="'response.data'"
                                [displayField]="'name'">
                  <ng-template #amexioBodyTmpl let-row="row">
                    <amexio-row>
                      <amexio-column [size]="12">
                        <div class="profile-image">
                          <img src="assets/images/profile/{{row.profile}}">
                          <a>{{row.name}}</a>
                        </div>
                      </amexio-column>

                    </amexio-row>
                  </ng-template>
                </amexio-listbox>
              </amexio-dockbar-item>
            </amexio-dockbar>

          </amexio-tab>
          <amexio-tab title="API Reference">
            <amexio-datagrid title="API Reference : amexio-dockbar" [columnToggle]="false"
                             [httpMethod]="'get'"
                             [httpUrl]="'assets/apireference/navigation/dockbar.json'"
                             [dataReader]="'dockbarproperties'"
                             [filtering]="false">
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
            <amexio-datagrid title="API Reference : amexio-dockbar-item" [columnToggle]="false"
                             [httpMethod]="'get'"
                             [httpUrl]="'assets/apireference/navigation/dockbar.json'"
                             [dataReader]="'dockbaritemproperties'"
                             [filtering]="false">
              <amexio-data-table-column [dataIndex]="'name'" [dataType]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [dataIndex]="'type'" [dataType]="'string'" [hidden]="false"
                                        [text]="'Type'"></amexio-data-table-column>
              <amexio-data-table-column [dataIndex]="'default'" [dataType]="'string'" [hidden]="false"
                                        [text]="'Default'"></amexio-data-table-column>
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
            Work in Progress
          </amexio-tab>
        </amexio-tab-view>
      </amexio-body>
    </amexio-card>
    <!--<amexio-notification [messageData]="copyMsgArray"></amexio-notification>-->

  `
})
export class DockbarDemo {
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];

  constructor(private http: Http) {
    this.getHtmlAndTypeScriptCode();
  }

  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;

    //HTML FILE
    this.http.get('assets/data/code/navigation/dockbar/navigation.html').subscribe(data => {
      responseHtml = data.text();
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/navigation/dockbar/navigation.text').subscribe(data => {
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


