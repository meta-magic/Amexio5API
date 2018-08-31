/**
 * Created by pratik on 16/1/18.
 */
import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'panel-demo',
  template: `
   
<amexio-card header="true">

<amexio-header>
    Panel
</amexio-header>
<amexio-body>
    <p>Panel provides an easy way to organize big forms by grouping the fields in panel</p>
    <amexio-tab-view>
        <amexio-tab title="Demo" active="true">
<h2>Demo:Panel</h2>
            <amexio-row>
                <amexio-column [size]="4">
                    <amexio-panel [header]="true" title="Panel" [expanded]="false">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                        text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                        typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                        of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                        software like Aldus PageMaker including versions of Lorem Ipsum.
                    </amexio-panel>
                </amexio-column>
                <amexio-column [size]="4">
                    <amexio-panel [header]="true" title="Custom Header" expanded="true">
                        <amexio-panel-header>
                            <amexio-image [icon-class]="'fa fa-refresh fa-fw'" (onClick)="refreshData()">
                            </amexio-image>
                        </amexio-panel-header>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                        text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                        typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                        of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                        software like Aldus PageMaker including versions of Lorem Ipsum.
                    </amexio-panel>
                    <amexio-dialogue [show-dialogue]="refreshDialogue" [title]="'refresh'" [message]="'Data refresh successfully.'" [primary-action-label]="'ok'"
                        [message-type]="'warning'" [type]="'alert'">
                    </amexio-dialogue>
                </amexio-column>
                <amexio-column [size]="4">
                    <amexio-panel [header]="false" [height]="800" expanded="true">
                        <amexio-header>
                            Custom Header
                        </amexio-header>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                        text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                        typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                        of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                        software like Aldus PageMaker including versions of Lorem Ipsum.
                    </amexio-panel>
                </amexio-column>
            </amexio-row>
            <h2>Demo:Panel with ToolBar</h2>
    <amexio-row>
        <amexio-column [size]="12">
            <amexio-panel [header]="true" title="Custom Header" expanded="true">
                <amexio-panel-header>
                    <amexio-label size="small" font-color="white">
                        My Drive
                     </amexio-label>
                    <amexio-text-input name="name"
                    place-holder="Enter name"
                    icon-feedback="true">
                    </amexio-text-input>
                    <i class="fa fa-info-circle" aria-hidden="true"></i>
                  
                </amexio-panel-header>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
</amexio-panel>
            <amexio-dialogue [show-dialogue]="refreshDialogue" [title]="'refresh'" [message]="'Data refresh successfully.'" [primary-action-label]="'ok'"
                [message-type]="'warning'" [type]="'alert'">
            </amexio-dialogue>
        </amexio-column>

    </amexio-row>

            
        </amexio-tab>
        <amexio-tab title="API Reference">
            <amexio-datagrid title="Properties <amexio-panel>" [enable-column-fiter]="false" 
            [http-method]="'get'" 
            [http-url]="'assets/apireference/layout/panel/panel.json'"
                [data-reader]="'properties'" [enable-data-filter]="false">
                <amexio-data-table-column [width]="15" [data-index]="'name'" [data-type]="'string'" [hidden]="false" [text]="'Name'"></amexio-data-table-column>
                <amexio-data-table-column [width]="15" [data-index]="'version'" [data-type]="'string'" [hidden]="false" [text]="'version'"></amexio-data-table-column>
                <amexio-data-table-column [width]="10" [data-index]="'type'" [data-type]="'string'" [hidden]="false" [text]="'Type'"></amexio-data-table-column>
                <amexio-data-table-column [width]="10" [data-index]="'default'" [data-type]="'string'" [hidden]="false" [text]="'Default'"></amexio-data-table-column>
                <amexio-data-table-column [width]="65" [data-index]="'description'" [data-type]="'string'" [hidden]="false" [text]="'Description'"></amexio-data-table-column>
            </amexio-datagrid>
            <br />
            <amexio-datagrid title="Events" [enable-column-fiter]="false" [http-method]="'get'" [http-url]="'assets/apireference/layout/panel/panel.json'"
                [data-reader]="'events'" [enable-data-filter]="false">
                <amexio-data-table-column [width]="15" [data-index]="'name'" [data-type]="'string'" [hidden]="false" [text]="'Name'"></amexio-data-table-column>
                <amexio-data-table-column [width]="65" [data-index]="'description'" [data-type]="'string'" [hidden]="false" [text]="'Description'"></amexio-data-table-column>
            </amexio-datagrid>


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
            <iframe style="width: 100%; height: 600px" src="https://stackblitz.com/edit/amexio-v4-panel?embed=1&file=app/panels/panel/panel.demo.html"
                frameborder="0" allowfullscren="allowfullscren"></iframe>
        </amexio-tab>
    </amexio-tab-view>
</amexio-body>
</amexio-card>
  `
})

export class PanelDemoComponent {
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  asyncFlag: boolean;
  refreshDialogue: boolean;
  rightclickdata: any;
  constructor(private http: HttpClient) {
    this.rightclickdata =
      [{ "text": "Add New", "icon": "fa fa-plus", "disabled": true }, { "text": "Edit", "icon": "", "seperator": true }
        , { "text": "Send data in email", "icon": "" }];
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
    this.http.get('assets/data/code/layout/panel/panel.html', { responseType: 'text' }).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/layout/panel/panel.text', { responseType: 'text' }).subscribe(data => {
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

  refreshData() {
    this.refreshDialogue = !this.refreshDialogue;
  }
}
