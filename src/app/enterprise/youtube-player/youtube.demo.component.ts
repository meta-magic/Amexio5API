/**
 * Created by pratik on 18/1/18.
 */
import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";

@Component({
 selector: 'youtube-player',
 template: `
   <amexio-card header="true">
     <amexio-header>
        YouTube Video Player 
     </amexio-header>
     <amexio-body>
       <p>A simple configurable of video player.</p>
       <amexio-tab-view>
         <amexio-tab title="Demo" active="true">
           <amexio-card header="true">
             <amexio-header> Video player </amexio-header>
             <amexio-body>
               <amexio-row>
                 <amexio-column size="12">
                   <amexio-card header="true">
                     <amexio-header> Video player without Width </amexio-header>
                     <amexio-body>
                       <amexio-ee-youtube-player url="https://www.youtube.com/embed/U7elNhHwgBU"
                                                 [height]="450">

                       </amexio-ee-youtube-player>
                     </amexio-body>
                   </amexio-card>

                 </amexio-column>
               </amexio-row>
               <amexio-row>
                 <amexio-column size="12">
                   <amexio-card header="true">
                     <amexio-header> Video player with Width </amexio-header>
                     <amexio-body>
                   <amexio-ee-youtube-player url="https://www.youtube.com/embed/U7elNhHwgBU"
                                             [height]="450" [width]="50">

                   </amexio-ee-youtube-player>
                     </amexio-body>
                   </amexio-card>

                 </amexio-column>
               </amexio-row>
             </amexio-body>
           </amexio-card>
         </amexio-tab>
         <amexio-tab title="API Reference">
           <amexio-datagrid title="Propeties" [enable-column-fiter]="false"
                            [http-method]="'get'"
                            [http-url]="'assets/apireference/enterprise/videoplayer.json'"
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
         <iframe style="width: 100%; height: 600px" src="https://stackblitz.com/edit/amexio-v4-youtube-player" frameborder="0" allowfullscren="allowfullscren"></iframe>
         </amexio-tab>
       </amexio-tab-view>
     </amexio-body>
   </amexio-card>
 `
})

export class YoutubePlayerDemoComponent implements OnInit {
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
    this.http.get('assets/data/code/enterprise/videoplayer/ee.html').subscribe(data => {
      responseHtml = data.text();
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/enterprise/videoplayer/ee.text').subscribe(data => {
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


 ngOnInit() { }
}
