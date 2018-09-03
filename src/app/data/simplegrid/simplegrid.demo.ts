/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'simplegridr-demo', template: `
    <amexio-card header="true">
      <amexio-header>
         Simple Data Grid 
      </amexio-header>
      <amexio-body>
        <p>Data grid component to render large amount of data-set with various options like sorting in ascending or descending order, client-side pagination, column hide/unhide, single/multi selection, user define template for rendering for column header and column data, displaying summation of numeric column.</p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
            <amexio-row>
              <amexio-column size="12">
                <amexio-card [header]="true">
                  <amexio-header>
                     Simple Data Grid 
                  </amexio-header>
                  <amexio-body>
                    <amexio-datagrid [enable-column-fiter]="true" title="Simple Data Grid " [enable-checkbox]="false"  [http-method]="'get'" [http-url]="'assets/data/componentdata/country.json'" [data-reader]="'data'"  [page-size] = "10">
                    <amexio-datagrid-header>
                    <amexio-drop-down-menu [icon-align]="'left'"
                 [title]="'Settings'"
                 [padding]="'5px 10px'"
                 [icon]="'fa fa-cog'">
   <amexio-drop-down-menu-item [separator]="true">
          <amexio-box background-color="purple" padding="true">
           <amexio-label size="small-bold">This account is managed by metamagic.in. </amexio-label>
             </amexio-box>
             <amexio-row>
             <amexio-column size="5">
   <amexio-image [height]="'89.75px'" [width]="'89.75px'"  [c-class]="'image-round'"
                path="assets/images/profile/ketan.jpg">
  </amexio-image>
</amexio-column>
<amexio-column size="7">

  <amexio-label > Ketan Gote</amexio-label>
  <amexio-label > xyz@metamagic.in</amexio-label><br>
  <amexio-button  [label]="'My Account'" [type]="'theme-color'" [tooltip]="'My Account'">
  </amexio-button>
</amexio-column>

</amexio-row>

</amexio-drop-down-menu-item>

<amexio-drop-down-menu-item
[label]="'Settings'"
[icon]="'fa fa-folder'"
>
</amexio-drop-down-menu-item>
<amexio-drop-down-menu-item
[label]="'Help Center'"
[icon]="'fa fa-question-circle'"
[separator] ="true"
>
</amexio-drop-down-menu-item>
<amexio-drop-down-menu-item
[label]="'Location'"
[icon]="'fa fa-map-marker'">
</amexio-drop-down-menu-item>
<amexio-drop-down-menu-item
[label]="'Sign Out'"
[icon]="'fa fa-sign-out'">
</amexio-drop-down-menu-item>
</amexio-drop-down-menu>
                 
                    <amexio-label size="small">
                    My Drive
                 </amexio-label>
                 <i class="fa fa-info-circle" aria-hidden="true"></i>
                   
                    </amexio-datagrid-header>
                    <amexio-data-table-column [data-index]="'countryName'" 
                                                [data-type]="'string'" 
                                                [hidden]="false" [text]="'Name'" (selectedRowData)="getSelectedData($event)">
                      </amexio-data-table-column>
                     
                      <amexio-data-table-column [sort]="false"   [data-index]="'countryCode1'" [data-type]="'string'" [hidden]="false"  [text]="'Code'"></amexio-data-table-column>

                      <amexio-data-table-column [data-index]="'currencyName'" [data-type]="'string'" [hidden]="false" [text]="'Currency'"></amexio-data-table-column>

                    </amexio-datagrid>
                    
                  </amexio-body>
                </amexio-card>
              </amexio-column>
            </amexio-row>
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
            <amexio-datagrid title="Column Properties" [enable-column-fiter]="false"
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
          <iframe style="width: 100%; height: 600px" src="https://stackblitz.com/edit/amexio-v4-simple-grid?ctl=1&embed=1&file=app/grid/simplegrid/simplegrid.demo.html&view=editor"></iframe>
          </amexio-tab>
        </amexio-tab-view>
      </amexio-body>
    </amexio-card>
  `
})
export class SimpleGridDemo {
  htmlCode: string;
  typeScriptCode: string;
  dataSource: string;
  copyMsgArray: any[];
  selectedData: any;
  constructor(private http: HttpClient) {
    this.getHtmlAndTypeScriptCode();
  }

  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;

    //HTML FILE
    this.http.get('assets/data/code/data/simplegrid/simplegrid.html',{responseType: 'text'}).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/data/simplegrid/simplegrid.text',{responseType: 'text'}).subscribe(data => {
      responseTs = data;
    }, error => {
    }, () => {
      this.typeScriptCode = responseTs;
    });

    this.http.get('assets/data/componentdata/country.json',{responseType: 'text'}).subscribe(data => {
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
      this.copyMsgArray.push({'msg': 'Code Copied', 'type': 'info'});
    } else {
      this.copyMsgArray.push({'msg': 'Code Copied', 'type': 'info'});
    }
  }

  getSelectedData(data: any) {
    this.selectedData = data;
  }
}


