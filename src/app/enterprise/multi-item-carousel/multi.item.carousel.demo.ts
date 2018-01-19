/**
 * Created by pratik on 18/1/18.
 */
import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";

@Component({
  selector: 'ee-carousel-demo', template: `
    <amexio-card header="true">
      <amexio-header>
        <h2>Multi EE Carousel</h2>
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
                    <h4>Horizontal Carousel</h4>
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
                    <h4>Vertical Carousel</h4>
                  </amexio-header>
                  <amexio-body>
                    <br><br>
                    <div style="background-color: black">
                      <amexio-media-ee-carousel title="Trending" [data]="topRateContent"
                                                carouselStyle="vertical"
                      >
                      </amexio-media-ee-carousel>
                    </div>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
            </amexio-row>


          </amexio-tab>
          <amexio-tab title="API Reference">
            <amexio-datagrid title="Properties" [enablecolumnfiter]="false"
                             [httpmethod]="'get'"
                             [httpurl]="'assets/apireference/enterprise/carousel.json'"
                             [datareader]="'properties'"
                             [enabledatafilter]="false">
              <amexio-data-table-column [width]="15" [dataindex]="'name'" [datatype]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [width]="10" [dataindex]="'type'" [datatype]="'string'" [hidden]="false"
                                        [text]="'Type'"></amexio-data-table-column>
              <amexio-data-table-column [width]="10" [dataindex]="'default'" [datatype]="'string'" [hidden]="false"
                                        [text]="'Default'"></amexio-data-table-column>
              <amexio-data-table-column [width]="65" [dataindex]="'description'" [datatype]="'string'" [hidden]="false"
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

export class EECarouselDemoComponent implements OnInit {
  newreleases: any[];
  topRateContent:any[];
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];

  constructor(private http: Http) {
    this.getHtmlAndTypeScriptCode();
    http.get('assets/data/enterprise/eee.json')
      .subscribe(response => {
        this.newreleases = response.json();
      });
    this.http.get('assets/data/enterprise/topratedcontent.json').subscribe(res => this.topRateContent = res.json());
  }

  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;

    //HTML FILE
    this.http.get('assets/data/code/enterprise/multicarusel/ee.html').subscribe(data => {
      responseHtml = data.text();
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/enterprise/multicarusel/ee.text').subscribe(data => {
      responseTs = data.text();
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


  ngOnInit() {
  }
}