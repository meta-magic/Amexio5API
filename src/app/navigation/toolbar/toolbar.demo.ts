/**
 * Created by ankita on 5/6/18.
 */

import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'toolbar-demo', template: `

      

  
    <amexio-card header="true">
      <amexio-header>
         Tool Bar
      </amexio-header>
      <amexio-body>
        <p>The Tool Bar Component is a familiar Tool Bar pattern for users. 
        Tool Bar has Label Component left align, than Label, button,and Drop Down Components on right side.</p>
        <amexio-tab-view>

          <amexio-tab title="Demo" active="true">
          <h2>Demo: Tool Bar </h2>
                  <amexio-toolbar>
          <amexio-toolbar-item position-left [seperator-position]="'right'">
                  <amexio-label size="medium" font-color="Black">
                  Compose
                 </amexio-label>
                </amexio-toolbar-item>
                <amexio-toolbar-item position-left [seperator-position]="'right'">
                 
                <amexio-btn-group >
                <amexio-button [size]="'medium'"
                               [label]="''"
                               [type]="''"
                               [tooltip]="'Archive'"
                               [icon]="'fa fa-archive'">
                </amexio-button>
                <amexio-button [size]="'medium'"
                               [label]="''"
                               [type]="''"
                               [tooltip]="'Save'"
                               [icon]="'fa fa-exclamation-circle'" >
                </amexio-button>
                <amexio-button [size]="'medium'"
                               [label]="''"
                               [type]="''"
                               [tooltip]="'delete'"
                               [icon]="'fa fa-trash-o'">
                </amexio-button>
              </amexio-btn-group>
                  </amexio-toolbar-item>
                  <amexio-toolbar-item position-right >
              <amexio-drop-down-menu [icon-align]="'left'"
                             [title]="''"
                             [padding]="'5px'"
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
      </amexio-toolbar-item>
                   <amexio-toolbar-item position-left [seperator-position]="'left'">
                  <amexio-btn-group>
                <amexio-button [size]="'medium'"
                               [tooltip]="'Move to'"
                               [icon]="'fa fa-folder'">
                </amexio-button>
                <amexio-button [size]="'medium'"
                               [tooltip]="'Help'"
                               [icon]="'fa fa-question'" >
                </amexio-button>
                </amexio-btn-group>
                </amexio-toolbar-item>
        </amexio-toolbar>       
            <h2>Demo: Tool Bar In Card Header</h2>
           
            <amexio-card [header]="true">
          <amexio-header style="width:100%">
          
               <amexio-toolbar>
                  <amexio-toolbar-item position-left [seperator-position]="'right'">
                       <amexio-label size="small" font-color="white">
                        My Drive
                       </amexio-label>
                  </amexio-toolbar-item>
                  <amexio-toolbar-item position-left [seperator-position]="'right'">
                 
                  <amexio-drop-down-menu [icon-align]="'left'"
                  [title]="'Quick Access'"
                  [padding]="'5px'"
                  [data]="payment"
                  [down-arrow-icon] ="true"
                  [icon]="'fa fa-credit-card'"
                  [transparent]="false">
                  </amexio-drop-down-menu>
                        
                   </amexio-toolbar-item>
                  <amexio-toolbar-item position-right [seperator-position]="'left'">
                  <i class="fa fa-th" aria-hidden="true"></i>
                  </amexio-toolbar-item>
                  <amexio-toolbar-item position-right [seperator-position]="'left'">
                  <i class="fa fa-info-circle" aria-hidden="true"></i>
                  </amexio-toolbar-item>
                  <amexio-toolbar-item position-right [seperator-position]="'left'">
                  <i class="fa fa-question-circle" aria-hidden="true"></i>
                  </amexio-toolbar-item>
                  <amexio-toolbar-item position-right [seperator-position]="'left'">
                  <i class="fa fa-cog" aria-hidden="true"></i>
                  </amexio-toolbar-item>
                   

            </amexio-toolbar>
			         </amexio-header>
                    <amexio-body>
                    
                    <amexio-datagrid
      [enable-column-fiter]="false"
      [height]="200"
      title=""
      [enable-checkbox]="false"
      [http-method]="'get'"
      [http-url]="'assets/data/componentdata/toolbar.json'"
      [data-reader]="'data'"
      [page-size] = "10">
      <amexio-data-table-column  [data-index]="'No'" [data-type]="'string'" [hidden]="false" [text]="'No.'">
    <ng-template #amexioBodyTmpl let-column let-row="row">
      <amexio-label size="small" font-color="grey" class={{row.icon}}>
       </amexio-label> 
    </ng-template>
  </amexio-data-table-column>
 
      <amexio-data-table-column [data-index]="'countryName'"
                                [data-type]="'string'"
                                [hidden]="false" [text]="'Name'">
      </amexio-data-table-column>
      <amexio-data-table-column [data-index]="'countryCode1'"
                                [data-type]="'string'" [hidden]="false"
                                [text]="'Owner'">
      </amexio-data-table-column>
      <amexio-data-table-column [data-index]="'lastModified'"
                                [data-type]="'string'" [hidden]="false"
                                [text]="'Last Modified'">
      </amexio-data-table-column>
</amexio-datagrid>
				                  
			              </amexio-body>
	              	</amexio-card>
          
           
            
          </amexio-tab>
          <amexio-tab title="API Reference">
            <amexio-datagrid title="Properties <amexio-toolbar>" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/navigation/toolbar.json'" 
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
            <amexio-datagrid title="Properties <amexio-toolbar-item>" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/forms/toolbaritem.json'" 
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
                             [http-url]="'assets/apireference/navigation/toolbar.json'" [data-reader]="'events'"
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
<iframe style="width: 100%; height: 600px" src="https://stackblitz.com/edit/amexio-v4-toggle?embed=1&file=app/forms/toggle/toggle.demo.html" frameborder="0" allowfullscren="allowfullscren"></iframe>
          </amexio-tab>
        </amexio-tab-view>
      </amexio-body>
    </amexio-card>
    <!--<amexio-notification [data]="copyMsgArray"></amexio-notification>-->
    <amexio-notification [data]="toggleMsgArray" [vertical-position]="'top'" [horizontal-position]="'right'"></amexio-notification>
  `
})
export class ToolbarDemo implements OnInit {
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  toggleMsgArray: any[];
  payment: any[];
  ngOnInit() {
  
  }
  constructor(private http: HttpClient) {
    this.toggleMsgArray = [];
    this.getHtmlAndTypeScriptCode();
    this.payment=[
      {"label": "Open With", "icon": "fa fa-arrows-alt "},
      {"label": "Make a Copy", "icon": "fa fa-files-o","separator":"true"},
      {"label": "Refresh", "icon": "fa fa-refresh"},
      {"label": "Add Star", "icon": "fa fa-star"},
      {"label": "download", "icon": "fa fa-download"},
      {"label": "bookmark", "icon": "fa fa-bookmark"}
    ];
  
  }

  //Square Toggle click event
  onSquareToggleClick(data: any) {
    this.toggleMsgArray.push('Square Toggle Click');
  }
  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;

    //HTML FILE
    this.http.get('assets/data/code/navigation/toolbar/form.html', { responseType: 'text' }).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/navigation/toolbar/form.text', { responseType: 'text' }).subscribe(data => {
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
}


