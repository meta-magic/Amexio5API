/**
 * Created by pratik on 18/1/18.
 */
import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'ee-carousel-demo', template: `
    <amexio-card header="true">
      <amexio-header>
         Multi EE Carousel 
      </amexio-header>
      <amexio-body>
        <p>A Awesome Multi Item Media Carousel, which comes preloaded with video playing and a full blown detailing page
          embedded in the component itself</p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
            <amexio-row>
              <amexio-column [size]="12">
                <amexio-card [header]="true">
                  <amexio-header>
                     Horizontal Carousel 
                  </amexio-header>
                  <amexio-body>
                    <br><br>
                    <div style="background-color: black">
                      <amexio-media-ee-carousel title="Top Movies" [data]="newreleases"></amexio-media-ee-carousel>
                    </div>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
            </amexio-row>

            <amexio-row>
              <amexio-column [size]="12">
                <amexio-card [header]="true">
                  <amexio-header>
                     Vertical Carousel 
                  </amexio-header>
                  <amexio-body>
                    <br><br>
                    <div style="background-color: black">
                      <amexio-media-ee-carousel title="Trending" [data]="topRateContent"
                                                carousel-type="vertical"
                      >
                      </amexio-media-ee-carousel>
                    </div>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
            </amexio-row>


          </amexio-tab>
          <amexio-tab title="API Reference">
            <amexio-datagrid title="Properties<amexio-media-ee-carousel>" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/enterprise/carousel.json'"
                             [data-reader]="'properties'"
                             [enable-data-filter]="false">
              <amexio-data-table-column [width]="15" [data-index]="'name'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [width]="10" [data-index]="'type'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Type'"></amexio-data-table-column>
              <amexio-data-table-column [width]="10" [data-index]="'default'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Default'"></amexio-data-table-column>
              <amexio-data-table-column [width]="65" [data-index]="'description'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Description'"></amexio-data-table-column>
            </amexio-datagrid>
            <br>
            <amexio-datagrid title="Events" [http-method]="'get'"
                             [http-url]="'assets/apireference/enterprise/carousel.json'" [data-reader]="'events'"
                             [enable-data-filter]="false">
              <amexio-data-table-column [data-index]="'name'" [width]="20" [data-type]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
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

              <amexio-tab title="Data Source">
                <ng-container *ngIf="dataSource">
                  <prism-block [code]="dataSource" [language]="'json'"></prism-block>
                </ng-container>
              </amexio-tab>
            </amexio-vertical-tab-view>
            </div>
          </amexio-tab>
          <amexio-tab title="Live">
            <p align="center">Amexio Sandbox</p>
<iframe style="width: 100%; height: 600px" src="https://stackblitz.com/edit/amexio-multi-ee-carousel?embed=1&file=src/app/multi-item-carousel/carousel.demo.component.html&view=editor" frameborder="0" allowfullscren="allowfullscren"></iframe>          </amexio-tab>
        </amexio-tab-view>
      </amexio-body>
    </amexio-card>
  `
})

export class EECarouselDemoComponent implements OnInit {
  newreleases: any[];
  topRateContent:any[];
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  dataSource : any;

  constructor(private http: HttpClient) {
    this.getHtmlAndTypeScriptCode();
    http.get('assets/data/enterprise/eee.json')
      .subscribe((response : any) => {
        this.newreleases = response;
      });
    this.http.get('assets/data/enterprise/topratedcontent.json').subscribe((res : any) => this.topRateContent = res);
  }

  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;

    //HTML FILE
    this.http.get('assets/data/code/enterprise/multicarusel/ee.html',{responseType: 'text'}).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/enterprise/multicarusel/ee.text',{responseType: 'text'}).subscribe(data => {
      responseTs = data;
    }, error => {
    }, () => {
      this.typeScriptCode = responseTs;
    });
  //data source FILE
    this.http.get('assets/data/code/enterprise/multicarusel/ee.json',{responseType: 'text'}).subscribe(data => {
      responseTs = data;
    }, error => {
    }, () => {
      this.dataSource = responseTs;
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


  ngOnInit() {
  }
}
