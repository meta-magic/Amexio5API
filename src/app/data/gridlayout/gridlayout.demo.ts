/**
 * Created by rashmi on 2/1/18.
 */

import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'gridlayout-demo', template: `
    <amexio-card header="true">
      <amexio-header>
      Grid Layout
      </amexio-header>
      <amexio-body>
        <p>CSS Grid Layout introduces a two-dimensional grid system to CSS. Grids can be used to layout major page areas or small user interface elements.</p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
            <amexio-row>
              <amexio-column size="12">
                <amexio-card [header]="true">
                  <amexio-header>
                     Grid Layout 
                  </amexio-header>
                  <amexio-body>
                  <amexio-grid-component [data]="data">
                  <amexio-grid-item style="border: 1px dashed black; " [name]="'gridheader'">Header</amexio-grid-item>
                  <amexio-grid-item style="border: 1px dashed black" [name]="'gridmenu'">Menu</amexio-grid-item>
                  <amexio-grid-item style="border: 1px dashed black" [name]="'gridmain'">Main </amexio-grid-item>
                  <amexio-grid-item style="border: 1px dashed black" [name]="'gridright'">Right</amexio-grid-item>
                  <amexio-grid-item style="border: 1px dashed black" [name]="'gridfooter'">Footer</amexio-grid-item>
              </amexio-grid-component>
                  </amexio-body>
                </amexio-card>

                <br>

                <amexio-card [header]="true">
                  <amexio-header>
                     Grid Layout with Components
                  </amexio-header>
                  <amexio-body>

                  <amexio-grid-component [data]="data1">

                  <amexio-grid-item [name]="'gridheader'">
                  <div class = "navbardemo">
                  <amexio-nav
                  [enable-side-nav-position]="true"
                  [title]="'DashBoard'"
                  [logo]="'assets/images/logos/amexio-logo.png'">
                            <amexio-nav-item position-right
                                                      [type]="'button'"
                                                      [icon]="'fa fa-bell fa-fw'">
                            </amexio-nav-item>
                            <amexio-nav-item position-right
                                            [type]="'button'"
                                            [icon]="'fa fa-envelope'">
                            </amexio-nav-item>
                          
                           
                           
                        
                </amexio-nav>
                </div>
                
                  </amexio-grid-item>

                  <amexio-grid-item [name]="'griddatapoint1'">
                  <amexio-datapoints  [amexio-color]="'amexio-yellow'"  [west]="true" [center]="true" [east]="true" [south]="true">
  <amexio-west [content-align]="'center'">
    <amexio-image [icon-class]="'fa fa-line-chart'">
    </amexio-image>
  </amexio-west>
  <amexio-center [content-align]="'center'">
    <amexio-label size="small-bold">804</amexio-label><br/>
    <amexio-label size="small">Memory Usage</amexio-label>
  </amexio-center>
  <amexio-south [content-align]="'center'">
    <amexio-label>Updated: 05:35 AM</amexio-label>
  </amexio-south>
</amexio-datapoints>
</amexio-grid-item>

<amexio-grid-item [name]="'griddatapoint2'">
<amexio-datapoints  [amexio-color]="'amexio-yellow'"  [west]="true" [center]="true" [east]="true" [south]="true">
<amexio-west [content-align]="'center'">
<amexio-image [icon-class]="'fa fa-line-chart'">
</amexio-image>
</amexio-west>
<amexio-center [content-align]="'center'">
<amexio-label size="small-bold">403</amexio-label><br/>
<amexio-label size="small">Disk Usage</amexio-label>
</amexio-center>
<amexio-south [content-align]="'center'">
<amexio-label>Updated: 12:42 PM</amexio-label>
</amexio-south>
</amexio-datapoints>
</amexio-grid-item>

<amexio-grid-item [name]="'griddatapoint3'">
<amexio-datapoints  [amexio-color]="'amexio-yellow'"  [west]="true" [center]="true" [east]="true" [south]="true">
<amexio-west [content-align]="'center'">
<amexio-image [icon-class]="'fa fa-line-chart'">
</amexio-image>
</amexio-west>
<amexio-center [content-align]="'center'">
<amexio-label size="small-bold">976</amexio-label><br/>
<amexio-label size="small">Ram Test</amexio-label>
</amexio-center>
<amexio-south [content-align]="'center'">
<amexio-label>Updated: 09:35 PM</amexio-label>
</amexio-south>
</amexio-datapoints>
</amexio-grid-item>

<amexio-grid-item [name]="'griddatapoint4'">
<amexio-datapoints  [amexio-color]="'amexio-yellow'"  [west]="true" [center]="true" [east]="true" [south]="true">
<amexio-west [content-align]="'center'">
<amexio-image [icon-class]="'fa fa-line-chart'">
</amexio-image>
</amexio-west>
<amexio-center [content-align]="'center'">
<amexio-label size="small-bold">496</amexio-label><br/>
<amexio-label size="small">CPU Usage</amexio-label>
</amexio-center>
<amexio-south [content-align]="'center'">
<amexio-label>Updated: 06:45 AM</amexio-label>
</amexio-south>
</amexio-datapoints>
</amexio-grid-item>

<amexio-grid-item [name]="'griddatapoint5'">
<amexio-datapoints  [amexio-color]="'amexio-yellow'"  [west]="true" [center]="true" [east]="true" [south]="true">
<amexio-west [content-align]="'center'">
<amexio-image [icon-class]="'fa fa-line-chart'">
</amexio-image>
</amexio-west>
<amexio-center [content-align]="'center'">
<amexio-label size="small-bold">239</amexio-label><br/>
<amexio-label size="small">Ram Usage</amexio-label>
</amexio-center>
<amexio-south [content-align]="'center'">
<amexio-label>Updated: 08:55 PM</amexio-label>
</amexio-south>
</amexio-datapoints>
</amexio-grid-item>

<amexio-grid-item [name]="'gridfooter'">
<amexio-card
    [header]="false"
    [footer]="false">
        
        <amexio-body>
        <amexio-chart-area [data]="areaChartData"
        [width]="'100%'" >
   <amexio-chart-title [title]="'Activity'">
   </amexio-chart-title>
   <amexio-chart-legend [position]="'bottom'">
   </amexio-chart-legend>
</amexio-chart-area>
        </amexio-body>
</amexio-card>
</amexio-grid-item>

<amexio-grid-item [name]="'gridmenu'">
<amexio-row>
  <amexio-column size="12">
    <amexio-card [header]="false">
      <amexio-body>

      <amexio-side-nav
      [http-url]="'assets/data/componentdata/gridlayoutexp.json'"
      [http-method]="'get'"
      [data-reader]="'data'"
      [width]="'275px'"
      [position]="'relative'">
      </amexio-side-nav>
      </amexio-body>
    </amexio-card>
  </amexio-column>
</amexio-row>
</amexio-grid-item>

<amexio-grid-item [name]="'gridmenu2'">
<amexio-row>
  <amexio-column size="12">
    <amexio-card [header]="false">
      <amexio-body>

      <amexio-side-nav
      [http-url]="'assets/data/componentdata/gridlayoutexp.json'"
      [http-method]="'get'"
      [data-reader]="'data1'"
      [width]="'275px'"
      [position]="'relative'">
      </amexio-side-nav>
      </amexio-body>
    </amexio-card>
  </amexio-column>
</amexio-row>
</amexio-grid-item>

<amexio-grid-item [name]="'gridmenu1'">
<amexio-row>
<amexio-column size="5">
  <amexio-image [height]="'69.75px'" [width]="'69.75px'" [c-class]="'image-round'" path="assets/images/profile/ketan.jpg">
  </amexio-image>
</amexio-column>
<amexio-column size="7">
  <amexio-label size="small"> Ketan Gote</amexio-label>
  <amexio-label> xyz@metamagic.in</amexio-label>
  </amexio-column>
  </amexio-row>
</amexio-grid-item>


                  </amexio-grid-component>

                  
                  </amexio-body>
                </amexio-card>




                <br>
                <amexio-card [header]="true">
                <amexio-header>
                   Grid Layout with Images
                </amexio-header>
                <amexio-body>
                <amexio-grid-component [data]="data2">
                <amexio-grid-item [name]="'gridheader'">
                <amexio-image [path]="'assets/images/soap-bubble.jpg'" ></amexio-image>

                </amexio-grid-item>
                <amexio-grid-item [name]="'gridmenu'">
                <amexio-card [header]="false"
             [footer]="true"
             [footer-align]="'right'">
  <amexio-body>
    <amexio-image path="assets/images/carousel/set1/1.jpg"></amexio-image>
    <br/>
    <amexio-label size="small-bold">Let your startup grow!</amexio-label>
    <amexio-label size="small">
      Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.
    </amexio-label>
  </amexio-body>
  <amexio-action >
    <amexio-button [label]="'Button'"
                   [type]="'primary'">
    </amexio-button>
  </amexio-action>
</amexio-card>
                </amexio-grid-item>
             
                <amexio-grid-item [name]="'gridright'">
                <amexio-panel [header]="false" expanded="true">
                <amexio-label>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </amexio-label>
            </amexio-panel>
                </amexio-grid-item>
            </amexio-grid-component>
                </amexio-body>
              </amexio-card>
              </amexio-column>
            </amexio-row>
          </amexio-tab>
          <amexio-tab title="API Reference">
            <amexio-datagrid title="Properties<amexio-grid-component>" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/data/gridlayout.json'"
                             [data-reader]="'properties'"
                             [enable-data-filter]="false">
              <amexio-data-table-column [data-index]="'name'" [width]="20" [data-type]="'string'" [hidden]="false"
                                        [text]="'Name'">
              </amexio-data-table-column>
              <amexio-data-table-column [data-index]="'version'" [width]="20" [data-type]="'string'" [hidden]="false"
              [text]="'Version'">
              </amexio-data-table-column>
              <amexio-data-table-column [data-index]="'type'" [width]="10" [data-type]="'string'" [hidden]="false"
                                        [text]="'Type'"></amexio-data-table-column>
              <amexio-data-table-column [data-index]="'default'" [width]="10" [data-type]="'string'" [hidden]="false"
                                        [text]="'Default'"></amexio-data-table-column>
              <amexio-data-table-column [data-index]="'description'" [width]="45" [data-type]="'string'" [hidden]="false"
                                        [text]="'Description'"></amexio-data-table-column>
            </amexio-datagrid>
            <amexio-datagrid title="Properties<amexio-grid-item>" [enable-column-fiter]="false"
            [http-method]="'get'"
            [http-url]="'assets/apireference/data/gridlayout.json'"
            [data-reader]="'childproperties'"
            [enable-data-filter]="false">
<amexio-data-table-column [data-index]="'name'" [width]="20" [data-type]="'string'" [hidden]="false"
                       [text]="'Name'">
</amexio-data-table-column>
<amexio-data-table-column [data-index]="'version'" [width]="20" [data-type]="'string'" [hidden]="false"
[text]="'Version'">
</amexio-data-table-column>
<amexio-data-table-column [data-index]="'type'" [width]="10" [data-type]="'string'" [hidden]="false"
                       [text]="'Type'"></amexio-data-table-column>
<amexio-data-table-column [data-index]="'default'" [width]="10" [data-type]="'string'" [hidden]="false"
                       [text]="'Default'"></amexio-data-table-column>
<amexio-data-table-column [data-index]="'description'" [width]="45" [data-type]="'string'" [hidden]="false"
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
          Work in Progress
          </amexio-tab>
        </amexio-tab-view>
      </amexio-body>
    </amexio-card>
  `
})
export class GridLayoutDemo {
  htmlCode: string;
  typeScriptCode: string;
  dataSource: string;
  copyMsgArray: any[];
  selectedData: any;
  data:any[];
  data1:any[];
  data2:any[];
  localData :any;
  areaChartData: any;
  sidenavData: any;

  constructor(private http: HttpClient) {
    this.getHtmlAndTypeScriptCode();
    this.data = [
        ["gridmenu", "gridheader", "gridheader", "gridheader", "gridheader", "gridheader"],
        ["gridmenu", "gridmain", "gridmain", "gridmain", "gridright", "gridright"],
        ["gridfooter", "gridfooter", "gridfooter", "gridfooter", "gridright", "gridright"]
      ];
      this.data1 = [
        ["gridmenu1", "gridheader", "gridheader", "gridheader", "gridheader", "gridheader"],
        ["gridmenu", "griddatapoint1", "griddatapoint2", "griddatapoint3", "griddatapoint4", "griddatapoint5"],
        ["gridmenu", "gridfooter", "gridfooter", "gridfooter", "gridfooter", "gridfooter"],
        ["gridmenu2", "gridfooter", "gridfooter", "gridfooter", "gridfooter", "gridfooter"]
      ];
      this.data2 = [
        ["gridmenu", "gridmenu", "gridheader", "gridheader", "gridheader", "gridheader"],
        ["gridmenu", "gridmenu", "gridheader", "gridheader", "gridheader", "gridheader"],
        ["gridmenu", "gridmenu", "gridright", "gridright", "gridright", "gridright"]
      ];
  
      this.sidenavData = [
        {
          "text": "Home",
          "icon" : "fa fa-home fa-fw",
          "mdaIcon" : "home",
          "link" : "/home/dashboard",
          "selected":true
        },
        {
          "text": "Apps",
          "icon" : "fa fa-envelope fa-fw",
          "mdaIcon" : "email",
          "link" : "/home/email"
        },
        {
          "text": "Component",
          "icon" : "fa fa-user fa-fw",
          "mdaIcon" : "account_box",
          "link" : "/home/profile",
          "badge": "32"
        },
        {
          "text": "Charts",
          "icon" : "fa fa-bars fa-fw",
          "mdaIcon" : "account_box",
          "link" : "/home/profile"
         
        },
        {
          "text": "Maps",
          "icon" : "fa fa-map-marker fa-fw",
          "mdaIcon" : "home",
          "link" : "/home/dashboard",
          "selected":true
        },
        {
          "text": "Extra",
          "icon" : "fa fa-envelope fa-fw",
          "mdaIcon" : "email",
          "link" : "/home/email",
          "badge": "New"
        },
        {
          "text": "Menu Levels",
          "icon" : "fa fa-user fa-fw",
          "mdaIcon" : "account_box",
          "link" : "/home/profile",
          "badge": "32"
        }
      ]
      this.areaChartData=[
        ['Count', 'Activity'],
        ['1',  1000],
        ['2',  1170],
        ['3',  660],
        ['4',  530],
        ['5',  830],
        ['6',  1000],
        ['7',  130]
      ];
  }
  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;

    //HTML FILE
    this.http.get('assets/data/code/data/gridlayout/gridlayout.html',{responseType: 'text'}).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/data/gridlayout/gridlayout.text',{responseType: 'text'}).subscribe(data => {
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

  onRowSelect(data: any) {
    this.selectedData = data;
  }
}
