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
              <amexio-image path="https://d25lcipzij17d.cloudfront.net/badge.svg?id=js&type=6&v=4.0.0&x2=0"></amexio-image>
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
                  <span style="cursor: pointer">1. Getting Started</span>
                </amexio-column>
              </amexio-row>
              <amexio-row>
                <amexio-column size="12">
                 <span style="cursor: pointer;">2. Installation Details</span> 
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
          <amexio-card header="true">
            <amexio-header> Getting Started </amexio-header>
            <amexio-body>
              <amexio-row>
                <amexio-column size="12">
                  <p>Amexio (Angular MetaMagic EXtensions for Inputs and Outputs) is a pure Typescript Compnent Library of Angular. We provide modular import for using our rich set of components,charts, maps , dashboard, forms, data, media, layout etc and can be easily configured and implemented in a project.
                    Check out the Demo App built using Amexio. For the Amexio UI Library refer API documentation.</p>
                </amexio-column>
              </amexio-row>
            </amexio-body>
          </amexio-card>
        </div>  
        </amexio-column>
      </amexio-row>
    

      <br>
      <amexio-row>
        <amexio-column size="12">
          <amexio-card header="true">
            <amexio-header> Installation Details </amexio-header>
            <amexio-body>
              <amexio-row>
                <amexio-column size="12">
                  <p><b>To install this library, follow the steps given below:</b><br> <code>npm install amexio-ng-extensions@beta --save</code></p>
                  <p class="text-muted">Please make sure you have the latest version of <code>NodeJS</code> & <code>npm</code> & <code>Angular CLI</code> Installed.
                    <br><b>and then from your Angular AppModule:</b></p>
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
            </amexio-body>
          </amexio-card>    
        </amexio-column>
      </amexio-row>
      
      <br>
      <amexio-row>
        <amexio-column size="12">
          <amexio-card header="true">
            <amexio-header> Amexio Services</amexio-header>
            <amexio-body>
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
            </amexio-body>
          </amexio-card>
        </amexio-column>
      </amexio-row>
      <amexio-row>
        <amexio-column size="12">
          <amexio-card header="true">
            <amexio-header> Modules </amexio-header>
            <amexio-body>
              <amexio-datagrid title="" [enable-column-fiter]="false"
                               [http-method]="'get'"
                               [http-url]="'assets/apireference/modules/modules.json'"
                               [data-reader]="'properties'"
                               [enable-data-filter]="false" >
                <amexio-data-table-column [width]="15" [data-index]="'name'" [data-type]="'string'" [hidden]="false"
                                          [text]="'Module Name'">
                </amexio-data-table-column>
                <amexio-data-table-column [width]="65" [data-index]="'description'" [data-type]="'string'" [hidden]="false"
                                          [text]="'Description'"></amexio-data-table-column>
              </amexio-datagrid>
            </amexio-body>
          </amexio-card>
        </amexio-column>
      </amexio-row>
      
      <amexio-row>
        <amexio-column size="12">
          <amexio-card header="true">
            <amexio-header> Themes </amexio-header>
            <amexio-body>
              <span>To use the default include the <pre><code>../node_module/amexio-ng-extensions/styles/mda/at-md-blue.scss</code></pre>in your app .angular-cli.json <code style="font-weight: bolder">styles</code> key</span>
              

              <ng-container *ngIf="styleCode">
                <prism-block [code]="styleCode" [language]="'json'"></prism-block>
              </ng-container>

              <p>Or refer the below table for other themes provided.</p>
              
              <amexio-row>
                <amexio-column size="12">
                  <amexio-datagrid title="Amexio Material Themes" [enable-column-fiter]="false"
                                   [height]="300"
                                   [http-method]="'get'"
                                   [http-url]="'assets/apireference/modules/themes.json'"
                                   [data-reader]="'properties'"
                                   [enable-data-filter]="false" >
                    <amexio-data-table-column [width]="15" [data-index]="'name'" [data-type]="'string'" [hidden]="false"
                                              [text]="'Theme Name'">
                    </amexio-data-table-column>
                    <amexio-data-table-column [width]="65" [data-index]="'description'" [data-type]="'string'" [hidden]="false"
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
                                   [enable-data-filter]="false" >
                    <amexio-data-table-column [width]="15" [data-index]="'name'" [data-type]="'string'" [hidden]="false"
                                              [text]="'Theme Name'">
                    </amexio-data-table-column>
                    <amexio-data-table-column [width]="65" [data-index]="'description'" [data-type]="'string'" [hidden]="false"
                                              [text]="'Path'"></amexio-data-table-column>
                  </amexio-datagrid>
                </amexio-column>
              </amexio-row>
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
