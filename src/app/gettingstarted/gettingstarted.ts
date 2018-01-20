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

      <h1 align="center">
        <br>
        <a href="http://www.amexio.tech/"><img src="https://image.ibb.co/kdy6Ev/logo.png" alt="Amexio" width="200"></a>
        <br>
        Amexio Angular EXtensions V4.0
        <br>
        <br>
        <img src="assets/images/npm.svg"/>
        <img src="https://badge.fury.io/js/amexio-ng-extensions.svg"/> <a href="https://badge.fury.io/js/amexio-ng-extensions"><img src="https://img.shields.io/npm/dt/amexio-ng-extensions.svg" alt="npm download" height="18"></a>
      </h1>

      <hr>
      <amexio-row>
        <amexio-column size="12">
          <amexio-card header="true">
            <amexio-header>
             <h2>Table Of Contents</h2>
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
        <div id="gettingStarted">
          <amexio-card header="true">
            <amexio-header><h2>Getting Started</h2></amexio-header>
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
      </amexio-row>
    

      <br>
      <amexio-row>
        <amexio-column size="12">
          <amexio-card header="true">
            <amexio-header><h2>Installation Details</h2></amexio-header>
            <amexio-body>
              <amexio-row>
                <amexio-column size="12">
                  <p><b>To install this library, follow the steps given below:</b><br> <code>npm install amexio-ng-extensions --save</code></p>
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
            <amexio-header><h2>Modules</h2></amexio-header>
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
            <amexio-header><h2>Themes</h2></amexio-header>
            <amexio-body>
              <span>To use the default theme import the <pre><code>../node_module/amexio-ng-extensions/styles/mda/mda-blue.scss</code></pre>in your app styles.scss</span>
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
