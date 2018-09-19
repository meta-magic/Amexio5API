/**
 * Created by kedar on 19/9/18.
 */

import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'amexio-spinner-demo', template: `
    <amexio-card header="true">
      <amexio-header>
      Data Loading Indicator
      </amexio-header>
      <amexio-body>
        <p>Data Loading Indicator Component Provides up-to-date feedback on the progress of a workflow or action with simple yet flexible spinner and easy to configure.</p>
        <amexio-tab-view>
        <amexio-tab title="Demo" active="true">
  <amexio-row>
    <amexio-column size="12">
    <amexio-card [header]="true">
    <amexio-header>
        Data Loading Indicator
    </amexio-header>
    <amexio-body>
    <input type="color" id="head" name="color"
                    (input)= "setColorForIndictor($event)"
                    value="colorModel.color" />
        <amexio-row>
            <amexio-column [size]="4"  [fit]=true>
                <amexio-card [header]="true" [body-height]="45">
                    <amexio-header>
                    spinner round loader
                    </amexio-header>
                    <amexio-body>
                        <amexio-spinner [show]=true [type]="'spinnerRound'" [color]="colorModel.color" >
                        </amexio-spinner>
                    </amexio-body>
                </amexio-card>
            </amexio-column>
            <amexio-column [size]="4"  [fit]=true>
                <amexio-card [header]="true">
                    <amexio-header>
                    half circle loader
                    </amexio-header>
                    <amexio-body>
                        <amexio-spinner [show]=true [type]="'halfCircle'" [color]="colorModel.color">
                        </amexio-spinner>
                    </amexio-body>
                </amexio-card>
            </amexio-column>
            <amexio-column [size]="4"  [fit]=true>
                <amexio-card [header]="true">
                    <amexio-header>
                    ring loader
                    </amexio-header>
                    <amexio-body>
                        <amexio-spinner [show]=true [type]="'ring'" [color]="colorModel.color" >
                        </amexio-spinner>
                    </amexio-body>
                </amexio-card>
            </amexio-column>
        </amexio-row>

        <amexio-row>
         <amexio-column [size]="4"  [fit]=true>
            <amexio-card [header]="true" [body-height]="45">
                <amexio-header>
                fading circle round loader
                </amexio-header>
                <amexio-body>
                    <amexio-spinner [show]=true [type]="'fadingCircle'" [color]="colorModel.color" >
                    </amexio-spinner>
                </amexio-body>
            </amexio-card>
         </amexio-column>
         <amexio-column [size]="4"  [fit]=true>
            <amexio-card [header]="true">
                <amexio-header>
                ball spin loader
                </amexio-header>
                <amexio-body>
                    <amexio-spinner [show]=true [type]="'ballSpin'" [color]="colorModel.color">
                    </amexio-spinner>
                </amexio-body>
            </amexio-card>
         </amexio-column>
         <amexio-column [size]="4"  [fit]=true>
            <amexio-card [header]="true">
                <amexio-header>
                fire spin loader
                </amexio-header>
                <amexio-body>
                    <amexio-spinner [show]=true [type]="'fireSpin'" [color]="colorModel.color" >
                    </amexio-spinner>
                </amexio-body>
            </amexio-card>
         </amexio-column>
        </amexio-row>

        <amexio-row>
        <amexio-column [size]="4"  [fit]=true>
           <amexio-card [header]="true" [body-height]="45">
               <amexio-header>
               spinner round loader
               </amexio-header>
               <amexio-body>
                   <amexio-spinner [show]=true [type]="'threeBounce'" [color]="colorModel.color" >
                   </amexio-spinner>
               </amexio-body>
           </amexio-card>
        </amexio-column>
        <amexio-column [size]="4"  [fit]=true>
           <amexio-card [header]="true">
               <amexio-header>
               half circle loader
               </amexio-header>
               <amexio-body>
                   <amexio-spinner [show]=true [type]="'rectangleBounce'" [color]="colorModel.color">
                   </amexio-spinner>
               </amexio-body>
           </amexio-card>
        </amexio-column>
        
       </amexio-row>

    </amexio-body>
</amexio-card>

    </amexio-column>
  </amexio-row>
</amexio-tab>
          <amexio-tab title="API Reference">
            <amexio-datagrid title="Properties<amexio-spinner>" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/data/spinner.json'"
                             [data-reader]="'properties'"
                             [enable-data-filter]="false">
              <amexio-data-table-column [data-index]="'name'" [width]="15" [data-type]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [data-index]="'type'" [width]="10" [data-type]="'string'" [hidden]="false"
                                        [text]="'Type'"></amexio-data-table-column>
              <amexio-data-table-column [data-index]="'default'" [width]="10" [data-type]="'string'" [hidden]="false"
                                        [text]="'Default'"></amexio-data-table-column>
              <amexio-data-table-column [data-index]="'description'" [width]="65" [data-type]="'string'" [hidden]="false"
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
<iframe style="width: 100%; height: 600px" src="https://stackblitz.com/edit/amexio-v4-progressbar?embed=1&file=app/data/progressbar/progressbar.demo.html" frameborder="0" allowfullscren="allowfullscren"></iframe>
          </amexio-tab>
        </amexio-tab-view>
      </amexio-body>
    </amexio-card>
  `
})
export class AmexioSpinnerDemo {
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  color: any;
  colorModel:ColorModel;
  constructor(private http: HttpClient) {
    this.getHtmlAndTypeScriptCode();
    this.colorModel=new ColorModel();
  }

  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;

    //HTML FILE
    this.http.get('assets/data/code/data/spinner/spinner.html', {responseType: 'text'}).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/data/spinner/spinner.text', {responseType: 'text'}).subscribe(data => {
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

//THIS METHOD IS USED FOR SETTING COLOR FOR INDICATOR
  setColorForIndictor(colorName: any) {
    this.colorModel.color= colorName.target.value;
  }
}

export class ColorModel{
  color:string;
  constructor(){

  }
}


