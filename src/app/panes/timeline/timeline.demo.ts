/**
 * Created by pratik on 16/1/18.
 */
import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
 selector: 'timeline-demo',
 template: `
   <amexio-card header="true">
     <amexio-header>
        Timeline
     </amexio-header>
     <amexio-body>
       <p> A timeline is the presentation of a chronological sequence of events along a drawn line that enables a viewer to understand temporal relationships quickly.</p>
       <amexio-tab-view>
         <amexio-tab title="Demo" active="true">
           <amexio-card header="true">
             <amexio-header> Timeline Component</amexio-header>
             <amexio-body>
             <amexio-row>
                  <amexio-column size="12">
                  <amexio-timeline>
                  <amexio-timeline-event [label]="'10 June'" [icon]="'fa fa-map-signs'" [content-border]="true" >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis est sit amet augue aliquam vestibulum. Donec tempus erat in gravida dapibus.
                  </amexio-timeline-event>
                  <amexio-timeline-event [label]="'12 June'" [icon]="'fa fa-star'" [content-border]="true">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis est sit amet augue aliquam vestibulum. Donec tempus erat in gravida dapibus.
                  </amexio-timeline-event>
                  <amexio-timeline-event [label]="'13 June'" [icon]="'fa fa-comment'" [content-border]="true">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis est sit amet augue aliquam vestibulum. Donec tempus erat in gravida dapibus.
                  </amexio-timeline-event>
                  <amexio-timeline-event [label]="'14 June'" [icon]="'fa fa-map'" [content-border]="true">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis est sit amet augue aliquam vestibulum. Donec tempus erat in gravida dapibus.
                  </amexio-timeline-event>
                  <amexio-timeline-event [label]="'15 June'" [icon]="'fa fa-heart'" [content-border]="true">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis est sit amet augue aliquam vestibulum. Donec tempus erat in gravida dapibus.
                  </amexio-timeline-event>
              </amexio-timeline>
                  </amexio-column>
                </amexio-row>
             </amexio-body>
           </amexio-card>
          
         </amexio-tab>
         <amexio-tab title="API Reference">
            <amexio-datagrid title="Properties <amexio-timeline-event>" [enable-column-fiter]="false"
           [http-method]="'get'"
           [http-url]="'assets/apireference/panes/timeline/timeline.json'"
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
         <iframe style="width: 100%; height: 600px" src="" frameborder="0" allowfullscren="allowfullscren"></iframe>
         </amexio-tab>
       </amexio-tab-view>
     </amexio-body>
   </amexio-card>
 `
})

export class TimelineDemoComponent {
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  asyncFlag : boolean;
  constructor(private http: HttpClient) {
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
    this.http.get('assets/data/code/layout/timeline/timeline.html',{responseType: 'text'}).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/layout/timeline/timeline.text',{responseType: 'text'}).subscribe(data => {
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
