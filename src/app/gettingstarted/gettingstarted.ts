/**
 * Created by sagar on 17/01/17.
 */
import {NgModule, Component} from '@angular/core'
import {RouterModule} from '@angular/router'
import {FormsModule} from "@angular/forms";
import {Http, HttpModule} from "@angular/http";
import {CommonModule} from "@angular/common";
import {AmexioWidgetModule} from "amexio-ng-extensions";
import {SharedModule} from "../shared.module";

@Component({
  selector: 'getting-started',
  template: `
    <div style="padding-left: 10px;padding-right: 10px;">
      <amexio-row>
        <amexio-column size="12">
          <div align="center">
            <a href="http://www.amexio.tech/">
              <amexio-image path="https://image.ibb.co/kdy6Ev/logo.png"></amexio-image>
            </a>
            <br>
            <h1>Amexio Angular EXtensions v4.0 beta</h1>
            <br>
            <amexio-image path="assets/images/npm.svg"></amexio-image>
            <amexio-image
              path="https://d25lcipzij17d.cloudfront.net/badge.svg?id=js&type=6&v=4.0.0&x2=0"></amexio-image>
            <a href="https://badge.fury.io/js/amexio-ng-extensions">
              <amexio-image path="https://img.shields.io/npm/dt/amexio-ng-extensions.svg"></amexio-image>
            </a>
          </div>
          <hr>
        </amexio-column>
      </amexio-row>
      <amexio-row>
        <amexio-column size="12">
          <amexio-card header="true">
            <amexio-header>
              Table Of Contents
            </amexio-header>
            <amexio-body>
              <amexio-row>
                <amexio-column size="12">
                  <span style="cursor: pointer">1. Installation Details</span>
                </amexio-column>
              </amexio-row>
              <amexio-row>
                <amexio-column size="12">
                  <span style="cursor: pointer;">2. Themes</span>
                </amexio-column>
              </amexio-row>
              <amexio-row>
                <amexio-column size="12">
                  <span style="cursor: pointer;" routerLink="/license">3. License</span>
                </amexio-column>
              </amexio-row>

            </amexio-body>
          </amexio-card>
        </amexio-column>
      </amexio-row>
      <br>
      <amexio-row>
        <amexio-column size="12">
          <div id="gettingStarted">

            <amexio-panel [header]="true"
                          [title]="'Installation Details'"
                          [expanded]="true">
              <amexio-row>
                <amexio-column size="12">
                  <amexio-accordion>
                    <amexio-accordion-tab header="Amexio Thanjavur v4.0" expanded="true">
                      <amexio-tab-view>
                        <amexio-tab title="Installation" active="true">
                          <amexio-row>
                            <amexio-column size="12">
                              <b>To install this Amexio Thanjavur v4.0, follow the steps given below:</b><br>
                              <pre style="font-weight: bold;color: #c0392b"><code>npm install amexio-ng-extensions@beta --save</code></pre>
                              Please make sure you have the latest version of
                              <pre
                                style="font-weight: bold;color: #c0af1a"><code>NodeJS</code> & <code>npm</code> & <code>Angular CLI</code></pre>
                              installed. <b>and then from your Angular AppModule:</b>
                            </amexio-column>
                          </amexio-row>
                          <br>
                          <amexio-row>
                            <amexio-column size="12">
                              <ng-container *ngIf="tsCode">
                                <prism-block [code]="tsCode" [language]="'typescript'"></prism-block>
                              </ng-container>
                            </amexio-column>
                          </amexio-row>
                        </amexio-tab>
                        <amexio-tab title="Modules">
                          <p>Amexio Library Consist of the following modules</p>
                          <ng-container *ngIf="modulesData">
                            <amexio-datagrid title="" [enable-column-fiter]="false"
                                             [data]="modulesData"
                                             [height]="300"
                                             [enable-data-filter]="false">
                              <amexio-data-table-column [width]="25" [data-index]="'name'" [data-type]="'string'"
                                                        [hidden]="false"
                                                        [text]="'Module Name'">
                              </amexio-data-table-column>
                              <amexio-data-table-column [width]="65" [data-index]="'description'" [data-type]="'string'"
                                                        [hidden]="false"
                                                        [text]="'Description'"></amexio-data-table-column>
                            </amexio-datagrid>
                          </ng-container>
                          <br>

                        </amexio-tab>
                        <amexio-tab title="Services">
                          <p>Amexio Provides the below services :</p>
                          <amexio-accordion>
                            <amexio-accordion-tab header="Icon Loader Service">
                              <span style="font-weight: bolder">Change all amexio icons from font-awesome to material and vice versa in a single line of code by injecting the <code>IconLoaderService</code></span>
                              <ng-container *ngIf="iconCode">
                                <prism-block [code]="iconCode" [language]="'typescript'"></prism-block>
                              </ng-container>
                            </amexio-accordion-tab>
                            <amexio-accordion-tab header="CommonData Service">
                              <span style="font-weight: bolder">By injecting <code>CommonDataService</code> into to module, you could easly fetch data from Rest</span>
                              <ng-container *ngIf="dataCode">
                                <prism-block [code]="dataCode" [language]="'typescript'"></prism-block>
                              </ng-container>
                            </amexio-accordion-tab>
                          </amexio-accordion>
                        </amexio-tab>
                        <amexio-tab title="Themes">
                          <div style="height: 500px;overflow-x : auto">
                           <span>To use the default include the <pre><code>../node_module/amexio-ng-extensions/styles/mda/at-md-blue.scss</code></pre>in your app .angular-cli.json <code
                             style="font-weight: bolder">styles</code> key</span>


                            <ng-container *ngIf="styleCode">
                              <div style="max-height: 300px;overflow-y: scroll;">
                                <prism-block [code]="styleCode" [language]="'json'"></prism-block>
                              </div>

                            </ng-container>

                            <p>Or refer the below table for other themes provided.</p>

                            <amexio-row>
                              <amexio-column size="12">
                                <amexio-datagrid title="Amexio Material Themes" [enable-column-fiter]="false"
                                                 [height]="300"
                                                 [http-method]="'get'"
                                                 [http-url]="'assets/apireference/modules/themes.json'"
                                                 [data-reader]="'properties'"
                                                 [enable-data-filter]="false">
                                  <amexio-data-table-column [width]="15" [data-index]="'name'" [data-type]="'string'"
                                                            [hidden]="false"
                                                            [text]="'Theme Name'">
                                  </amexio-data-table-column>
                                  <amexio-data-table-column [width]="65" [data-index]="'description'"
                                                            [data-type]="'string'"
                                                            [hidden]="false"
                                                            [text]="'Path'"></amexio-data-table-column>
                                </amexio-datagrid>
                              </amexio-column>
                            </amexio-row>

                            <amexio-row>
                              <amexio-column size="12">
                                <amexio-datagrid title="Amexio Themes" [enable-column-fiter]="false"
                                                 [height]="300"
                                                 [http-method]="'get'"
                                                 [http-url]="'assets/apireference/modules/amx_themes.json'"
                                                 [data-reader]="'properties'"
                                                 [enable-data-filter]="false">
                                  <amexio-data-table-column [width]="15" [data-index]="'name'" [data-type]="'string'"
                                                            [hidden]="false"
                                                            [text]="'Theme Name'">
                                  </amexio-data-table-column>
                                  <amexio-data-table-column [width]="65" [data-index]="'description'"
                                                            [data-type]="'string'"
                                                            [hidden]="false"
                                                            [text]="'Path'"></amexio-data-table-column>
                                </amexio-datagrid>
                              </amexio-column>
                            </amexio-row>
                          </div>
                        </amexio-tab>
                      </amexio-tab-view>
                    </amexio-accordion-tab>
                    <amexio-accordion-tab header="Amexio Muziris v3.0" expanded="true">
                      <amexio-row>
                        <amexio-column size="12">
                          <b style="color: green">Amexio Muziris Supports Angular 5 from version 3.2.X series, if you
                            are looking for Angular 4 supported use v3.0.12</b>
                          <br>
                          <b style="color: #323188">To install Amexio Muziris v3.2 (Angular 5 Supported)
                            library,</b><br>
                          <pre style="font-weight: bold;color: #c0392b"><code>npm install amexio-ng-extensions@3.2.1 --save</code></pre>


                          <b style="color: #323188">To install Amexio Muziris v3.0.12 (Angular 4 Supported)
                            library</b><br>
                          <pre style="font-weight: bold;color: #c0392b"><code>npm install amexio-ng-extensions@3.0.12 --save</code></pre>

                          Please make sure you have the latest version of
                          <pre style="font-weight: bold;color: #c0af1a"><code>NodeJS</code> & <code>npm</code> & <code>Angular CLI</code></pre>
                          installed. <b>and then from your Angular AppModule:</b>
                        </amexio-column>
                      </amexio-row>
                      <br>
                      <amexio-row>
                        <amexio-column size="12">
                          <ng-container *ngIf="tsCodeV32">
                            <prism-block [code]="tsCodeV32" [language]="'typescript'"></prism-block>
                          </ng-container>
                        </amexio-column>
                      </amexio-row>
                      <!-- add dependent libraries -->
                    </amexio-accordion-tab>
                    <amexio-accordion-tab header="Amexio Hampi v2.0" expanded="true">
                      <amexio-row>
                        <amexio-column size="12">

                          <b style="color: #323188">To install Amexio Hampi v2.0 ,</b><br>
                          <pre style="font-weight: bold;color: #c0392b"><code>npm install amexio-ng-extensions@2.0.0 --save</code></pre>

                          Please make sure you have the latest version of
                          <pre style="font-weight: bold;color: #c0af1a"><code>NodeJS</code> & <code>npm</code> & <code>Angular CLI</code></pre>
                          installed. <b>and then from your Angular AppModule:</b>
                        </amexio-column>
                      </amexio-row>
                      <br>
                      <amexio-row>
                        <amexio-column size="12">
                          <ng-container *ngIf="tsCodeV32">
                            <prism-block [code]="tsCodeV32" [language]="'typescript'"></prism-block>
                          </ng-container>
                        </amexio-column>
                      </amexio-row>
                      <!-- add dependent libraries -->

                    </amexio-accordion-tab>
                    <amexio-accordion-tab header="Amexio Varanasi v1.0" expanded="true">
                      <amexio-row>
                        <amexio-column size="12">

                          <b style="color: #323188">To install Amexio Varanasi v1.0 ,</b><br>
                          <pre style="font-weight: bold;color: #c0392b"><code>npm install amexio-ng-extensions@1.0.44 --save</code></pre>

                          Please make sure you have the latest version of
                          <pre style="font-weight: bold;color: #c0af1a"><code>NodeJS</code> & <code>npm</code> & <code>Angular CLI</code></pre>
                          installed. <b>and then from your Angular AppModule:</b>
                        </amexio-column>
                      </amexio-row>
                      <br>
                      <amexio-row>
                        <amexio-column size="12">
                          <ng-container *ngIf="tsCodeV1x">
                            <prism-block [code]="tsCodeV1x" [language]="'typescript'"></prism-block>
                          </ng-container>
                        </amexio-column>
                      </amexio-row>
                    </amexio-accordion-tab>
                  </amexio-accordion>
                </amexio-column>
              </amexio-row>


            </amexio-panel>
          </div>
        </amexio-column>
      </amexio-row>


      <br>

      <amexio-row>
        <amexio-column size="12">
          <amexio-card header="true">
            <amexio-header> License</amexio-header>
            <amexio-body>
              <amexio-card header="true">
                <amexio-header>
                  Apache License
                </amexio-header>

                <amexio-body>
                  <p> Apache License
                    Version 2.0, January 2004
                    http://www.apache.org/licenses/</p>


                  <p><b>TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION</b></p>

                  <p>1. Definitions.</p>

                  <p> "License" shall mean the terms and conditions for use, reproduction,
                    and distribution as defined by Sections 1 through 9 of this document.</p>
                  <p>
                    "Licensor" shall mean the copyright owner or entity authorized by
                    the copyright owner that is granting the License.
                  </p>
                  <p>
                    "Legal Entity" shall mean the union of the acting entity and all
                    other entities that control, are controlled by, or are under common
                    control with that entity. For the purposes of this definition,
                    "control" means (i) the power, direct or indirect, to cause the
                    direction or management of such entity, whether by contract or
                    otherwise, or (ii) ownership of fifty percent (50%) or more of the
                    outstanding shares, or (iii) beneficial ownership of such entity.
                  </p>
                  <p>
                    "You" (or "Your") shall mean an individual or Legal Entity
                    exercising permissions granted by this License.
                  </p>
                  <p>
                    "Source" form shall mean the preferred form for making modifications,
                    including but not limited to software source code, documentation
                    source, and configuration files.<a href="" style="font-weight: bold;color: #323188;">Continue Reading..</a>
                  </p>
                </amexio-body>

              </amexio-card>
            </amexio-body>
          </amexio-card>
        </amexio-column>
      </amexio-row>

      <!--<br>
      <amexio-row>
        <amexio-column>
          <p>Include these in your app's .angular-cli.json </p>
          <img src="https://preview.ibb.co/b4F1gG/dependecy.png"/>
          <p> If not using cli then simply add css it to the index.html head.</p>
        </amexio-column>
      </amexio-row>-->


  `
})
export class GettingStatedDemo {
  tsCode: any;
  iconCode : any;
  dataCode : any;
  styleCode : any;
  modulesData : any;
  tsCodeV32 : any;
  tsCodeV1x : any;
  constructor(private http:Http) {
    this.getHtmlAndTypeScriptCode();
  }

  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseTs: any;
    //TS FILE
    this.http.get('assets/data/code/gettingstated/gettingstated.text').subscribe(data => {
      responseTs = data.text();
    }, error => {
    }, () => {
      this.tsCode = responseTs;
    });

    this.http.get('assets/data/code/gettingstated/icon.text').subscribe(data=>{
      this.iconCode = data.text();
    });

    this.http.get('assets/data/code/gettingstated/data.text').subscribe(data=>{
      this.dataCode = data.text();
    });

    this.http.get('assets/data/code/gettingstated/style.text').subscribe(data=>{
      this.styleCode = data.text();
    });

    this.http.get('assets/apireference/modules/modules.json').subscribe(
      data=>{
        let response = data.json();
        this.modulesData = response.properties.sort((a : any, b : any)=>{
          if(a.name < b.name) return -1;
          if(a.name > b.name) return 1;
          return 0;
        });
      }
    );

    this.http.get('assets/data/code/gettingstated/gettingstatedv32.text').subscribe(
      data=>{
        this.tsCodeV32 = data.text();
      }
    );
    this.http.get('assets/data/code/gettingstated/gettingstatedv1x.text').subscribe(
      data=>{
        this.tsCodeV1x = data.text();
      }
    );
  }
}
@NgModule({
  declarations: [GettingStatedDemo],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    AmexioWidgetModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: GettingStatedDemo, pathMatch: 'full'}
    ])
  ],
  providers : []
})
export class GettingStatedModule {

}
