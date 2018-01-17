/**
 * Created by pratik on 16/1/18.
 */
import { Component, OnInit } from '@angular/core';

@Component({
 selector: 'carousel-demo',
 template: `
   <amexio-card enableHeader="true">
     <amexio-header>
       <h2>Carousel Component</h2>
     </amexio-header>
     <amexio-body>
       <p>The CarouselView displays a collection of images or other content in a horizontal layout with built-in navigation between the items.</p>
       <amexio-tab-view>
         <amexio-tab title="Demo" active="true">
           <amexio-carousel [headerName]="'Mobiles'" [data]="[1,2,3,4,5,6,7,8,9,10,11]" mode="single">
             <ng-template let-car amexioTemplate="item">
               <div style="height: 300px;width: 300px;border: 1px solid red;display : inline-block">
                 {{car}}
               </div>
             </ng-template>
           </amexio-carousel>
           
           
         </amexio-tab>
         <amexio-tab title="API Reference">
           <amexio-datagrid title="Properties" [columnToggle]="false"
                            [httpMethod]="'get'"
                            [httpUrl]="'assets/apireference/layout/accordion/acc.json'"
                            [dataReader]="'properties'"
                            [filtering]="false" >
             <amexio-data-table-column [dataIndex]="'name'" [dataType]="'string'" [hidden]="false"
                                       [text]="'Name'"></amexio-data-table-column>
             <amexio-data-table-column [dataIndex]="'type'" [dataType]="'string'" [hidden]="false"
                                       [text]="'Type'"></amexio-data-table-column>
             <amexio-data-table-column [dataIndex]="'default'" [dataType]="'string'" [hidden]="false"
                                       [text]="'Default'"></amexio-data-table-column>
             <amexio-data-table-column [dataIndex]="'description'" [dataType]="'string'" [hidden]="false"
                                       [text]="'Description'"></amexio-data-table-column>
           </amexio-datagrid>


           <amexio-datagrid title="Events" [columnToggle]="false"
                            [httpMethod]="'get'"
                            [httpUrl]="'assets/apireference/layout/accordion/acc_event.json'"
                            [dataReader]="'properties'"
                            [filtering]="false" >
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
 `
})

export class CarouselDemoComponent implements OnInit {
 constructor() { }

 ngOnInit() { }
}
