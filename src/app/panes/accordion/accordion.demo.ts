/**
 * Created by pratik on 16/1/18.
 */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'accordion-demo',
  template: `
    <amexio-card header="true">
      <amexio-header>
         Accordion 
      </amexio-header>
      <amexio-body>
        <p>Accordion provides an easy way to organize big forms by grouping the fields in accordion tabs</p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
            <amexio-accordion>
              <amexio-accordion-tab header="Page One" active="true"> 
              <amexio-accordion-header>
              <label  style="margin-top:0px;font-size:18px;"size="small" font-color="white">
              Completed : 100%
              </label>&nbsp;
              <i class="fa fa-info-circle" aria-hidden="true"></i>
              </amexio-accordion-header>
               
                
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                 
              </amexio-accordion-tab>
              <amexio-accordion-tab header="Page two">
              <amexio-accordion-header>
                    <label  style="margin-top:0px;font-size:18px;" size="small" font-color="white">
                     Completed : 90%
                     </label>&nbsp;
                     <i class="fa fa-info-circle" aria-hidden="true"></i>
              </amexio-accordion-header>
              
                    Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum. Vestibulum tempus, urna non ultrices aliquam, ex ex blandit lacus, at porttitor odio ligula sed lacus. Praesent in luctus odio, at sodales orci. Vivamus vitae ullamcorper lectus.
               
              </amexio-accordion-tab>
             <amexio-accordion-tab header="Page three">
              <amexio-accordion-header>
              <label  style="margin-top:0px;font-size:18px;"size="small" font-color="white">
               Completed : 80%
               </label>&nbsp;
               <i class="fa fa-info-circle" aria-hidden="true"></i>
               </amexio-accordion-header>
               
                    Phasellus in condimentum elit. In et vestibulum sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam erat volutpat. Sed viverra libero vel massa accumsan aliquet. Mauris a dui nec sapien pretium euismod. Sed lobortis quis sapien a mollis. Nullam ex nibh, malesuada eget rutrum eu, dapibus quis ante. Proin non convallis augue, at tincidunt nisi. Cras et metus blandit, sollicitudin mi ac, fringilla libero.
                 
              </amexio-accordion-tab>
              <amexio-accordion-tab header="Page four">Etiam mattis fermentum arcu eu feugiat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam porttitor, erat sit amet pharetra aliquam, ex leo tincidunt erat, in commodo leo magna quis mauris.
              <amexio-accordion-header>
              <label  style="margin-top:0px;font-size:18px;"size="small" font-color="white">
               Completed : 70%
               </label>&nbsp;
               <i class="fa fa-info-circle" aria-hidden="true"></i>
               </amexio-accordion-header>
              
              
              </amexio-accordion-tab>
            
              </amexio-accordion>
            <br><br>
            <span style="font-weight: bolder">All expanded Panes</span>
            <amexio-accordion expand-all="true">
              <amexio-accordion-tab header="Section One">
              <amexio-accordion-header>
              <label  style="margin-top:0px;font-size:18px;"size="small" font-color="white">
               Completed : 100%
               </label>&nbsp;
               <i class="fa fa-info-circle" aria-hidden="true"></i>
               </amexio-accordion-header>
              
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  
              </amexio-accordion-tab>
              <amexio-accordion-tab header="Section Two">
              <amexio-accordion-header>
              <label  style="margin-top:0px;font-size:18px;"size="small" font-color="white">
               Completed : 90%
               </label>&nbsp;
               <i class="fa fa-info-circle" aria-hidden="true"></i>
               </amexio-accordion-header>
               
                    Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum. Vestibulum tempus, urna non ultrices aliquam, ex ex blandit lacus, at porttitor odio ligula sed lacus. Praesent in luctus odio, at sodales orci. Vivamus vitae ullamcorper lectus.
               
              </amexio-accordion-tab>
              <amexio-accordion-tab header="Section Three">
              <amexio-accordion-header>
              <label  style="margin-top:0px;font-size:18px;"size="small" font-color="white">
               Completed : 80%
               </label>&nbsp;
               <i class="fa fa-info-circle" aria-hidden="true"></i>
               </amexio-accordion-header>
               
                    Phasellus in condimentum elit. In et vestibulum sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam erat volutpat. Sed viverra libero vel massa accumsan aliquet. Mauris a dui nec sapien pretium euismod. Sed lobortis quis sapien a mollis. Nullam ex nibh, malesuada eget rutrum eu, dapibus quis ante. Proin non convallis augue, at tincidunt nisi. Cras et metus blandit, sollicitudin mi ac, fringilla libero.
                 
              </amexio-accordion-tab>
              <amexio-accordion-tab header="Section Four">Etiam mattis fermentum arcu eu feugiat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam porttitor, erat sit amet pharetra aliquam, ex leo tincidunt erat, in commodo leo magna quis mauris.
              <amexio-accordion-header>
              <label  style="margin-top:0px;font-size:18px;"size="small" font-color="white">
               Completed : 70%
               </label>&nbsp;
               <i class="fa fa-info-circle" aria-hidden="true"></i>
               </amexio-accordion-header>
              </amexio-accordion-tab>
            </amexio-accordion>
            <br><br>
            <span style="font-weight: bolder"> Transparent Accordion</span>
            <amexio-accordion transparent="true" angle-icon="true">
              <amexio-accordion-tab header="Page One" active="true">
              <amexio-accordion-header>
              <label  style="margin-top:0px;font-size:18px;"size="small" >
               Completed : 100%
               </label>&nbsp;
               <i class="fa fa-info-circle" aria-hidden="true"></i>
               </amexio-accordion-header>
              
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
             
              </amexio-accordion-tab>
              <amexio-accordion-tab header="Page two">
              <amexio-accordion-header>
              <label  style="margin-top:0px;font-size:18px;"size="small">
               Completed : 100%
               </label>&nbsp;
               <i class="fa fa-info-circle" aria-hidden="true"></i>
               </amexio-accordion-header>
              
                    Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum. Vestibulum tempus, urna non ultrices aliquam, ex ex blandit lacus, at porttitor odio ligula sed lacus. Praesent in luctus odio, at sodales orci. Vivamus vitae ullamcorper lectus.
                
              </amexio-accordion-tab>
              <amexio-accordion-tab header="Page three">
              <amexio-accordion-header>
              <label  style="margin-top:0px;font-size:18px;"size="small">
               Completed : 100%
               </label>&nbsp;
               <i class="fa fa-info-circle" aria-hidden="true"></i>
               </amexio-accordion-header>
              
                    Phasellus in condimentum elit. In et vestibulum sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam erat volutpat. Sed viverra libero vel massa accumsan aliquet. Mauris a dui nec sapien pretium euismod. Sed lobortis quis sapien a mollis. Nullam ex nibh, malesuada eget rutrum eu, dapibus quis ante. Proin non convallis augue, at tincidunt nisi. Cras et metus blandit, sollicitudin mi ac, fringilla libero.
                 
              </amexio-accordion-tab>
              <amexio-accordion-tab header="Page four">Etiam mattis fermentum arcu eu feugiat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam porttitor, erat sit amet pharetra aliquam, ex leo tincidunt erat, in commodo leo magna quis mauris.
              <amexio-accordion-header>
              <label  style="margin-top:0px;font-size:18px;"size="small">
               Completed : 100%
               </label>&nbsp;
               <i class="fa fa-info-circle" aria-hidden="true"></i>
               </amexio-accordion-header>
              </amexio-accordion-tab>
            </amexio-accordion>
            <br><br>
            <span style="font-weight: bolder">Disabled Accordion Panes</span>
            <amexio-accordion>
              <amexio-accordion-tab header="Page One" active="true">
              <amexio-accordion-header>
              <label  style="margin-top:0px;font-size:18px;"size="small" font-color="white">
               Completed : 100%
               </label>&nbsp;
               <i class="fa fa-info-circle" aria-hidden="true"></i>
               </amexio-accordion-header>
            
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                 
              </amexio-accordion-tab>
              <amexio-accordion-tab header="Page two">
              <amexio-accordion-header>
              <label  style="margin-top:0px;font-size:18px;"size="small">
               Completed : 100%
               </label>&nbsp;
               <i class="fa fa-info-circle" aria-hidden="true"></i>
               </amexio-accordion-header>
            
                    Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum. Vestibulum tempus, urna non ultrices aliquam, ex ex blandit lacus, at porttitor odio ligula sed lacus. Praesent in luctus odio, at sodales orci. Vivamus vitae ullamcorper lectus.
                
              </amexio-accordion-tab>
              <amexio-accordion-tab header="Page three" disabled="true">
              <amexio-accordion-header>
              <label  style="margin-top:0px;font-size:18px;"size="small" font-color="white">
               Completed : 100%
               </label>&nbsp;
               <i class="fa fa-info-circle" aria-hidden="true"></i>
               </amexio-accordion-header>
           
                    Phasellus in condimentum elit. In et vestibulum sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam erat volutpat. Sed viverra libero vel massa accumsan aliquet. Mauris a dui nec sapien pretium euismod. Sed lobortis quis sapien a mollis. Nullam ex nibh, malesuada eget rutrum eu, dapibus quis ante. Proin non convallis augue, at tincidunt nisi. Cras et metus blandit, sollicitudin mi ac, fringilla libero.
               
              </amexio-accordion-tab>
              <amexio-accordion-tab header="Page four">Etiam mattis fermentum arcu eu feugiat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam porttitor, erat sit amet pharetra aliquam, ex leo tincidunt erat, in commodo leo magna quis mauris.
              <amexio-accordion-header>
              <label  style="margin-top:0px;font-size:18px;"size="small" font-color="white">
               Completed : 100%
               </label>&nbsp;
               <i class="fa fa-info-circle" aria-hidden="true"></i>
               </amexio-accordion-header>
              </amexio-accordion-tab>
            </amexio-accordion>
          </amexio-tab>
          <amexio-tab title="API Reference">
            <amexio-datagrid title="Properties <amexio-accordion>" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/layout/accordion/accordion.component.json'"
                             [data-reader]="'properties'"
                             [enable-data-filter]="false" >
              <amexio-data-table-column [width]="15" [data-index]="'name'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [width]="10" [data-index]="'version'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Version'"></amexio-data-table-column>
              <amexio-data-table-column [width]="10" [data-index]="'type'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Type'"></amexio-data-table-column>
              <amexio-data-table-column [width]="10" [data-index]="'default'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Default'"></amexio-data-table-column>
              <amexio-data-table-column [width]="65" [data-index]="'description'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Description'"></amexio-data-table-column>
            </amexio-datagrid>

                    <br>
            <amexio-datagrid title="Properties <amexio-accordion-tab>"
            [enable-column-fiter]="false"
            [http-method]="'get'"
            [http-url]="'assets/apireference/layout/accordion/accordion.pane.json'"
            [data-reader]="'properties'"
            [enable-data-filter]="false" >
<amexio-data-table-column [width]="15" [data-index]="'name'" [data-type]="'string'" [hidden]="false"
                       [text]="'Name'"></amexio-data-table-column>
<amexio-data-table-column [width]="10" [data-index]="'version'" [data-type]="'string'" [hidden]="false"
                        [text]="'Version'"></amexio-data-table-column>
<amexio-data-table-column [width]="10" [data-index]="'type'" [data-type]="'string'" [hidden]="false"
                       [text]="'Type'"></amexio-data-table-column>
<amexio-data-table-column [width]="10" [data-index]="'default'" [data-type]="'string'" [hidden]="false"
                       [text]="'Default'"></amexio-data-table-column>
<amexio-data-table-column [width]="65" [data-index]="'description'" [data-type]="'string'" [hidden]="false"
                       [text]="'Description'"></amexio-data-table-column>
</amexio-datagrid>
<br>
<amexio-panel border="true">
                             <amexio-label>amexio-accordion-header is a container, which can contain any amexio component.</amexio-label>
                    </amexio-panel>
                    <br>
            <amexio-datagrid title="Events <amexio-accordion-tab>" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/layout/accordion/accordion.pane.json'"
                             [data-reader]="'events'"
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
          <p align="center">Amexio Sandbox</p>
          <iframe style="width: 100%; height: 600px" src="https://stackblitz.com/edit/amexio-v4-accordion?embed=1&file=app/layouts/accordion/accordion.demo.html" frameborder="0" allowfullscren="allowfullscren"></iframe>
          </amexio-tab>
        </amexio-tab-view>
      </amexio-body>
    </amexio-card>
  `
})

export class AccordionDemoComponent {
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  asyncFlag: boolean;
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
    this.http.get('assets/data/code/layout/accordion/accordion.html', { responseType: 'text' }).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/layout/accordion/accordion.text', { responseType: 'text' }).subscribe(data => {
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
