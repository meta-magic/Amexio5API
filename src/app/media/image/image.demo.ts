/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'image-demo', template: `
    
    
    <amexio-card header="true">
      <amexio-header>
         Image 
      </amexio-header>
      <amexio-body>
        <p>An image is an artifact that depicts visual perception.Amexio support icons (font-awesome) / image</p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
            <!-- icon only-->
            <amexio-row>
              <amexio-column size="12">
                <amexio-card [header]="true">
                  <amexio-header>
                    Font Awesome Icon
                  </amexio-header>
                  <amexio-body>
                    <amexio-row>
                      <amexio-column size="12">
                        <amexio-row>
                          
                          <amexio-column size="2">
                            Apple &nbsp;
                            <amexio-image [icon-class]="'fa fa-apple fa-2x'" [tooltip]="'Fontawesome apple'"></amexio-image>
                          </amexio-column>
                          <amexio-column size="2">
                            BitCoin &nbsp;
                            <amexio-image [icon-class]="'	fa fa-btc fa-2x'" [tooltip]="'Fontawesome bitcoin'"></amexio-image>
                          </amexio-column>
                          <amexio-column size="2">
                          Facebook &nbsp;
                            <amexio-image [icon-class]="'fa fa-facebook-square fa-2x'" [tooltip]="'Fontawesome facebook'"></amexio-image>
                          </amexio-column>
                          <amexio-column size="2">
                           Github &nbsp;
                            <amexio-image [icon-class]="'fa fa-github fa-2x'" [tooltip]="'Fontawesome github'"></amexio-image>
                          </amexio-column>

                          <amexio-column size="2">
                            Telegram &nbsp;
                            <amexio-image [icon-class]="'fa fa-telegram fa-2x'" [tooltip]="'Fontawesome telegram'"></amexio-image>
                          </amexio-column>
                          <amexio-column size="2">
                            VK &nbsp;
                            <amexio-image [icon-class]="'fa fa-vk fa-2x'" [tooltip]="'Fontawesome VK'"></amexio-image>
                          </amexio-column>
                          
                        </amexio-row>
                      </amexio-column>                    
                    </amexio-row>
                    <br>
                 
                  </amexio-body>
                </amexio-card>
              </amexio-column>
            </amexio-row>
            <!-- Image with Labels -->
            <amexio-row>
              <amexio-column size="12">
                <amexio-card [header]="true">
                  <amexio-header>
                     Image with Labels
                  </amexio-header>
                  <amexio-body>
                    <amexio-row>
                      <amexio-column [size]="3">
                        <amexio-image [path]="'assets/images/carousel/set1/3.jpg'"
                                      [filter]="'normal'"
                                      [image-title]="'normal'"
                                      [title-position]="'top-left'"
                                      >
                        </amexio-image>
                      </amexio-column>
                      <amexio-column [size]="3">
                        <amexio-image [path]="'assets/images/carousel/set1/3.jpg'"
                                      [filter]="'grayscale'"
                                      [image-title]="'grayscale'"
                                      [title-position]="'centered'">
                        </amexio-image>
                      </amexio-column>
                      <amexio-column [size]="3">
                        <amexio-image [path]="'assets/images/carousel/set1/3.jpg'"
                                      [filter]="'invert'"
                                      [image-title]="'invert'"
                                      [title-position]="'bottom-right'">
                        </amexio-image>
                      </amexio-column>
                      <amexio-column [size]="3">
                        <amexio-image [path]="'assets/images/carousel/set1/3.jpg'"
                                      [filter]="'sepia'"
                                      [image-title]="'sepia'"
                                      [title-position]="'bottom-left'"></amexio-image>
                      </amexio-column>
                     
                    </amexio-row>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
            </amexio-row>
            <!-- Overlay Labels - Left, Right, Top, Bottom-->
            <amexio-row>
              <amexio-column size="12">
                <amexio-card [header]="true">
                  <amexio-header>
                   Image Overlay Labels 
                  </amexio-header>
                  <amexio-body>
                    <amexio-row>
                      <amexio-column size="12">
                        <amexio-row>
                          <amexio-column [size]="3">
                            <amexio-image [path]="'assets/images/carousel/set1/3.jpg'"
                                          [overlay-effect]="'slide-right'"
                                          [overlay-text]="'Overlay Fade Right!'"></amexio-image>
                          </amexio-column>
                          <amexio-column [size]="3">
                            <amexio-image [path]="'assets/images/carousel/set1/3.jpg'"
                                          [overlay-effect]="'slide-left'"
                                          [overlay-text]="'Overlay Fade Left!'"></amexio-image>
                          </amexio-column>
                          <amexio-column [size]="3">
                            <amexio-image [path]="'assets/images/carousel/set1/3.jpg'"
                                          [overlay-effect]="'slide-top'"
                                          [overlay-text]="'Overlay Fade top!'"></amexio-image>
                          </amexio-column>
                          <amexio-column [size]="3">
                            <amexio-image [path]="'assets/images/carousel/set1/3.jpg'"
                                          [overlay-effect]="'slide-bottom'"
                                          [overlay-text]="'Overlay Fade Bottom!'">
                            </amexio-image>
                          </amexio-column>
                        </amexio-row>
                      </amexio-column>                    
                    </amexio-row>
                    <br>
                 
                  </amexio-body>
                </amexio-card>
              </amexio-column>
            </amexio-row>
            <!--  Base Effect - Normal, Small, Opacity, Shadow,Blur, Round-->

            <amexio-row>
              <amexio-column size="12">
                <amexio-card [header]="true">
                  <amexio-header>
                    Base Effect
                  </amexio-header>
                  <amexio-body>
                    <amexio-row>
                      <amexio-column size="12">
                        <amexio-row>
                          <amexio-column [size]="1"></amexio-column>
                          <amexio-column [size]="3">
                            <amexio-image [path]="'assets/images/carousel/set1/3.jpg'"
                                          [filter]="'shadow'"
                                          [title]="'shadow'"
                                          [title-position]="'top-left'">
                            </amexio-image>
                          </amexio-column>
                          <amexio-column [size]="1"></amexio-column>

                          <amexio-column [size]="3">
                            <amexio-image [path]="'assets/images/carousel/set1/3.jpg'"
                                          [filter]="'normal'"
                                          [title]="'normal'"
                                          [title-position]="'centered'">
                            </amexio-image>
                          </amexio-column>
                          <amexio-column [size]="1"></amexio-column>

                          <amexio-column [size]="3">
                            <amexio-image [path]="'assets/images/carousel/set1/3.jpg'"
                                          [filter]="'opacity'"
                                          [title]="'opacity'"
                                          [title-position]="'bottom-right'"></amexio-image>
                          </amexio-column>
                        
                        </amexio-row>
                      </amexio-column>
                    </amexio-row>
                    <br>
                    <amexio-row>
                      <amexio-column size="12">
                        <amexio-row>
                          <amexio-column [size]="1"></amexio-column>

                          <amexio-column [size]="3">
                            <amexio-image [path]="'assets/images/carousel/set1/3.jpg'"
                                          [filter]="'blur'"
                                          [title]="'blur'"
                                          [title-position]="'bottom-left'"></amexio-image>
                          </amexio-column>
                          <amexio-column [size]="1"></amexio-column>

                          <amexio-column [size]="3">
                            <amexio-image [path]="'assets/images/carousel/set1/3.jpg'"
                                          [filter]="'round'"
                                          [title]="'round'"
                                          [title-position]="'centered'"></amexio-image>
                          </amexio-column>
                          <amexio-column [size]="1"></amexio-column>

                          <amexio-column [size]="3">
                            <amexio-image [path]="'assets/images/carousel/set1/3.jpg'"
                                          [filter]="'small'"
                                          [title]="'small'"
                                          [title-position]="'top-right'"></amexio-image>
                          </amexio-column>
                        </amexio-row>
                      </amexio-column>
                    </amexio-row>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
            </amexio-row>
            
            <!-- Color Effect - Gray Scale, Invert, Sepia, Saturate, Brigtness, hue-->
            <amexio-row>
              <amexio-column size="12">
                <amexio-card [header]="true">
                  <amexio-header>
                    Color Effect
                  </amexio-header>
                  <amexio-body>
                    <amexio-row>
                      <amexio-column size="12">
                        <amexio-row>
                          <amexio-column [size]="1"></amexio-column>
                          <amexio-column [size]="3">
                            <amexio-image [path]="'assets/images/carousel/set1/3.jpg'"
                                          [title]="'sepia'"
                                          [filter]="'sepia'"
                                          [title-position]="'top-left'">
                            </amexio-image>
                          </amexio-column>
                          <amexio-column [size]="1"></amexio-column>
                          <amexio-column [size]="3">
                            <amexio-image [path]="'assets/images/carousel/set1/3.jpg'"
                                          [filter]="'grayscale'"
                                          [title]="'grayscale'"
                                          [title-position]="'centered'">
                            </amexio-image>
                          </amexio-column>
                          <amexio-column [size]="1"></amexio-column>
                          <amexio-column [size]="3">
                            <amexio-image [path]="'assets/images/carousel/set1/3.jpg'"
                                          [filter]="'invert'"
                                          [title]="'invert'"
                                          [title-position]="'bottom-right'">
                            </amexio-image>
                          </amexio-column>
                        </amexio-row>
                      </amexio-column>
                    </amexio-row>
                    <br>
                    <amexio-row>
                      <amexio-column size="12">
                        <amexio-row>
                          <amexio-column [size]="1"></amexio-column>
                          <amexio-column [size]="3">
                            <amexio-image [path]="'assets/images/carousel/set1/3.jpg'"
                                          [filter]="'Saturate'"
                                          [title]="'Saturate'"
                                          [title-position]="'bottom-left'">
                            </amexio-image>
                          </amexio-column>
                          <amexio-column [size]="1"></amexio-column>

                          <amexio-column [size]="3">
                            <amexio-image [path]="'assets/images/carousel/set1/3.jpg'"
                                          [filter]="'brightness'"
                                          [title]="'brightness'"
                                          [title-position]="'centered'">
                            </amexio-image>
                          </amexio-column>
                          <amexio-column [size]="1"></amexio-column>

                          <amexio-column [size]="3">
                            <amexio-image [path]="'assets/images/carousel/set1/3.jpg'"
                                          [filter]="'hua'"
                                          [title]="'hua'"
                                          [title-position]="'top-right'"></amexio-image>
                          </amexio-column>
                        </amexio-row>
                      </amexio-column>
                    </amexio-row>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
            </amexio-row>
            
            <!-- simple image-->
            <amexio-row>
              <amexio-column size="12">
                <amexio-card  header="true">
                  <amexio-header> Simple Image </amexio-header>
                  <amexio-body>
                    <amexio-row>
                      <amexio-column size="3"></amexio-column>
                      <amexio-column size="6">
                        <amexio-image [path]="'assets/images/soap-bubble.jpg'" [tooltip]="'Image'"></amexio-image>
                      </amexio-column>
                      <amexio-column size="3"></amexio-column>
                    </amexio-row>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
            </amexio-row>
            
          </amexio-tab>
          <amexio-tab title="API Reference">
            <amexio-datagrid title="Properties <amexio-image>" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/media/image.json'"
                             [data-reader]="'properties'"
                             [enable-data-filter]="false">
              <amexio-data-table-column [width]="15" [data-index]="'name'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [width]="15" [data-index]="'version'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Version'"></amexio-data-table-column>               
              <amexio-data-table-column [width]="10" [data-index]="'type'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Type'"></amexio-data-table-column>
              <amexio-data-table-column [width]="10" [data-index]="'default'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Default'"></amexio-data-table-column>
              <amexio-data-table-column [width]="40" [data-index]="'description'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Description'"></amexio-data-table-column>
            </amexio-datagrid>
            <br>
            <amexio-datagrid title="Event" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/media/image.json'"
                             [data-reader]="'events'"
                             [enable-data-filter]="false">
              <amexio-data-table-column [width]="20"[data-index]="'name'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [width]="80" [data-index]="'description'" [data-type]="'string'" [hidden]="false"
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
                  <prism-block style="max-width: 100%" [code]="typeScriptCode" [language]="'typescript'"></prism-block>
                </ng-container>
              </amexio-tab>
            </amexio-vertical-tab-view>
            </div>
          </amexio-tab>
          <amexio-tab title="Live">
            <p align="center">Amexio Sandbox</p>
            
<iframe style="width: 100%; height: 600px" src="https://stackblitz.com/edit/amexio-v4-image?embed=1&file=app/media/image/image.demo.html" frameborder="0" allowfullscren="allowfullscren"></iframe>
          </amexio-tab>
        </amexio-tab-view>
      </amexio-body>
    </amexio-card>
    <!--<amexio-notification [data]="copyMsgArray"></amexio-notification>-->
  `
})
export class ImageDemo {
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];

  constructor(private http: HttpClient) {
    this.getHtmlAndTypeScriptCode();
  }

  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;

    //HTML FILE
    this.http.get('assets/data/code/media/image/media.html',{responseType: 'text'}).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/media/image/media.text',{responseType: 'text'}).subscribe(data => {
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
}


