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
            </amexio-body>
          </amexio-card>
        </amexio-column>
      </amexio-row>
      <br>
      <div id="gettingStarted" class="row col-lg-12">
        <amexio-card header="true">
          <amexio-header><h2>Getting Started</h2></amexio-header>
          <amexio-body>
            <amexio-row>
              <amexio-column size="12">
                <p>Amexio (Angular MetaMagic EXtensions for Inputs and Outputs) is a rich set of Angular 4 components powered by Bootstrap 4. We provide modular import for using our rich set of components,charts, maps & dashboard  and can be easily configured and implemented in a project.
                  Check out the Show case App for the Amexio UI Library Demo and API documentation.</p>
              </amexio-column>
            </amexio-row>
          </amexio-body>
        </amexio-card>
      </div>

      <br>
      <div id="InstallationInstruc" class="row col-lg-12">
        <amexio-card header="12">
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

      <div id="deptLib" class="row">
        <div class="col-lg-8">
          <div class="panel panel-default">
            <!-- Default panel contents -->
            <div class="panel-heading"><b>Dependent Libraries</b></div>

            <!-- Table -->
            <ul class="list-group">
              <li class="list-group-item">
                <code>jQuery</code>
                <span class="badge badge-pill badge-default">v3.2.1</span>
              </li>
              <li class="list-group-item">
                <code>Bootstrap 4 (Requires Tether.js & Popper.js)</code>
                <span class="badge badge-pill badge-default">v4.0.0-alpha.6</span>
              </li>
              <li class="list-group-item">
                <code style="text-decoration: line-through;">bootstrap-datepicker</code>
                <span style="text-decoration: line-through;" class="badge badge-pill badge-default">v1.7.1 </span>&nbsp;<span>Deprecated From v3.0</span>
              </li>
              <li class="list-group-item">
                <code style="text-decoration: line-through;">bootstrap-timepicker</code>
                <span style="text-decoration: line-through;" class="badge badge-pill badge-default">v0.5.2 </span>&nbsp;<span>Deprecated From v3.0</span>
              </li>
              <li class="list-group-item">
                <code>font-awesome</code>
                <span class="badge badge-pill badge-default">v4.7.0</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <br>
      <div class="row">
        <div class="col-lg-12">
          <p>Include these in your app's .angular-cli.json </p>
          <img src="https://preview.ibb.co/b4F1gG/dependecy.png"/>
          <p> If not using cli then simply add it to the index.html head.</p>
        </div>
      </div>

    </div>
    </div>
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
