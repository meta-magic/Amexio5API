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
            <h1>Amexio Angular EXtensions v4.0</h1>
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
          <amexio-panel [header]="true"
                        [title]="'Installation Details'"
                        [expanded]="true">
            <amexio-row>
              <amexio-column size="12">
                <amexio-accordion>
                  <amexio-accordion-tab header="Amexio 4.x - Angular 5" active="true">
                    <amexio-tab-view>
                      <amexio-tab title="Installation" active="true">
                        <amexio-row>
                          <amexio-column size="12">
                            <b>To install this Amexio 4.x follow the steps given below:</b><br>
                            <pre style="font-weight: bold;color: #c0392b"><code>npm install amexio-ng-extensions@latest --save</code></pre>
                            Please make sure you have the latest version of
                            <span
                              style="font-weight: bold;color: #21c00f">NodeJS & npm Angular CLI</span>
                            installed. <b>and then from your Angular AppModule:</b>
                          </amexio-column>
                        </amexio-row>
                        <br>
                        <amexio-row>
                          <amexio-column size="12">
                            <div style="height: 400px">
                              <ng-container *ngIf="tsCode">
                                <prism-block [code]="tsCode" [language]="'typescript'"></prism-block>
                              </ng-container>
                            </div>

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
                        <div style="height: 500px;overflow-x: auto;">


                          <p>Amexio Provides the below services :</p>

                          <h3>IconService</h3>
                          <span style="font-weight: bolder">Change all amexio icons from font-awesome to material and vice versa in a single line of code by injecting the <code>IconLoaderService</code></span>
                          <ng-container *ngIf="iconCode">
                            <prism-block [code]="iconCode" [language]="'typescript'"></prism-block>
                          </ng-container>
                          <br>
                          <h3>CommonDataService</h3>
                          <span style="font-weight: bolder">By injecting <code>CommonDataService</code> into to module, you could easly fetch data from Rest</span>
                          <ng-container *ngIf="dataCode">
                            <prism-block [code]="dataCode" [language]="'typescript'"></prism-block>
                          </ng-container>
                        </div>
                      </amexio-tab>
                    </amexio-tab-view>
                  </amexio-accordion-tab>
                  <amexio-accordion-tab header="Amexio 3.2.x - Angular 5 and Bootstrap 4" expanded="true">
                    <amexio-row>
                      <amexio-column size="12">
                        <b>To install this Amexio 3.2.x - Angular 5 and Bootstrap 4 follow the steps given below:</b><br>
                        <pre style="font-weight: bold;color: #c0392b"><code>npm install amexio-ng-extensions@3.2.1 --save</code></pre>
                        Please make sure you have the latest version of
                        <span
                          style="font-weight: bold;color: #21c00f">NodeJS & npm Angular CLI</span>
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

                    <div align="center">
                      <a href="http://www.amexio.org/showcaseapp/v3.2/index.html#/home" target="_blank"
                         style="color: blueviolet">Link for API for V3</a>
                    </div>

                  </amexio-accordion-tab>
                  <amexio-accordion-tab header="Amexio 3.0.x - Angular 4 and Bootstrap 4" expanded="true">
                    <amexio-row>
                      <amexio-column size="12">
                        <b>To install this Amexio 3.0.x - Angular 4 and Bootstrap 4 follow the steps given below:</b><br>
                        <pre style="font-weight: bold;color: #c0392b"><code>npm install amexio-ng-extensions@3.0.12 --save</code></pre>
                        Please make sure you have the latest version of
                        <span
                          style="font-weight: bold;color: #21c00f">NodeJS & npm Angular CLI</span>
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
                    <div align="center">
                      <a href="http://www.amexio.org/showcaseapp/v3.2/index.html#/home" target="_blank"
                         style="color: blueviolet">Link for API for V2</a>
                    </div>

                  </amexio-accordion-tab>
                </amexio-accordion>
              </amexio-column>
            </amexio-row>


          </amexio-panel>
        </amexio-column>
      </amexio-row>

      <amexio-row>
        <amexio-column size="12">
          <amexio-panel [header]="true"
                        [title]="'Themes'"
                        [expanded]="true">
            <p style="color: darkred"> Themes are available from Version 4 </p>
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
          </amexio-panel>
        </amexio-column>
      </amexio-row>

      <amexio-row>
        <amexio-column size="12">
          <amexio-panel [header]="true"
                        [title]="'License'"
                        [expanded]="true">
            <br>
            <b>Amexio API License for Standard & Enterprise Edition</b>
            <p>
              Amexio API is Free & Open Source & based on Apache 2 License. A Permissive License whose main condition
              require preservation of copyright and license notices.
              Contributors provide an express grant of patent rights. Licensed works, modification and larger works may
              be distributed under different terms and without source code.
            </p>
            <p><a href="http://amexio.org/showcaseapp/v4/license.html" style="color: blue">Click here to read the Apache
              2 License. </a></p>
          </amexio-panel>
        </amexio-column>
      </amexio-row>


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
