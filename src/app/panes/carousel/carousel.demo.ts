/**
 * Created by pratik on 16/1/18.
 */
import { Component, OnInit } from '@angular/core';
import {IconLoaderService} from "amexio-ng-extensions";
import {Icon} from "amexio-ng-extensions";
import {Http} from "@angular/http";

@Component({
 selector: 'carousel-demo',
 template: `
   <amexio-card header="true">
     <amexio-header>
        Carousel 
     </amexio-header>
     <amexio-body>
       <p>The CarouselView displays a collection of images or other content in a horizontal layout with built-in navigation between the items.</p>
       <amexio-tab-view>
         <amexio-tab title="Demo" active="true">
          <!-- <amexio-carousel [header]="'Mobiles'" [data]="[1,2,3,4,5,6,7,8,9,10,11]" mode="multiple" shuffle-interval="2000">
             <ng-template let-car amexioTemplate="item">
               <div style="height: 300px;width: 300px;border: 1px solid red;display : inline-block">
                <div style="text-align: center">CAR {{car}}</div>
               </div>
             </ng-template>
           </amexio-carousel>-->
           <amexio-carousel [header]="'Gallery'" [data]="[1,2,3,4,5,6,7,8,9,10,11,12]" mode="multiple">
             <ng-template let-img amexioTemplate="item">
                 <div style="text-align: center">
                   <amexio-image [height]="'300px'" path="assets/images/carousel/set1/{{img}}.jpg"></amexio-image>
                 </div>
             </ng-template>
           </amexio-carousel>
           <br><br>
           
           <amexio-carousel [header]="'Gallery With Auto Shuffle (2 seconds)'" [data]="[1,2,3,4,5,6,7,8,9,10,11]" mode="multiple" shuffle-interval="2000">
             <ng-template let-gallery amexioTemplate="item">
               <div style="text-align: center">
                 <amexio-image [height]="'300px'" path="assets/images/carousel/set2/{{gallery}}.jpg"></amexio-image>
               </div>
             </ng-template>
           </amexio-carousel>
           <br><br>
           
           
         </amexio-tab>
         <amexio-tab title="API Reference">
           <amexio-datagrid title="Properties" [enable-column-fiter]="false"
                            [http-method]="'get'"
                            [http-url]="'assets/apireference/layout/accordion/acc.json'"
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


           <amexio-datagrid title="Events" [enable-column-fiter]="false"
                            [http-method]="'get'"
                            [http-url]="'assets/apireference/layout/accordion/acc_event.json'"
                            [data-reader]="'properties'"
                            [enable-data-filter]="false" >
             <amexio-data-table-column [width]="15" [data-index]="'name'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
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
           Work in Progress
         </amexio-tab>
       </amexio-tab-view>
     </amexio-body>
   </amexio-card>
 `
})

export class CarouselDemoComponent{
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  asyncFlag : boolean;
  constructor(private http: Http) {
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
    this.http.get('assets/data/code/layout/carousel/carousel.html').subscribe(data => {
      responseHtml = data.text();
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/layout/carousel/carousel.text').subscribe(data => {
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
