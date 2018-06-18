/**
 * Created by Rashmi on 30/4/18.
 */

import { Component } from '@angular/core'
import { Http } from "@angular/http";
import { DyanmicTabComponent } from './dynamictabdemo.component';


@Component({
    selector: 'enhanced-tab-demo', template: `
    <amexio-card header="true">
      <amexio-header>
         Enhanced Tab 
      </amexio-header>
      <amexio-body>
        <p>Enhanced Tab component for Angular Apps with multiple configurations such as Tab, Header, Tab Alignments, Tabs divided equally, Tab Colors and Action Component</p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
          <amexio-card [header]="true" [footer]="false" [footer-align]="'right'">
          <amexio-header>
              Tab layout with header and tabs right aligned
          </amexio-header>
          <amexio-body>
              <amexio-tab-view header="Work Profile" [tab-position]="'top'" [header-align]="'right'" [divide-header-equally]=false>
                  <amexio-tab title="Person" [active]="true" [amexio-color]="'red'">
                      Personal Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                      type specimen book.
                  </amexio-tab>
                  <amexio-tab title="Work" [amexio-color]="'blue'">
                      Work Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean
                      placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus
                      tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.
                  </amexio-tab>
              </amexio-tab-view>
          </amexio-body>
      </amexio-card>
      
      <br>
      
      <amexio-card [header]="true" [footer]="false" [footer-align]="'right'">
          <amexio-header>
              Tab layout with action component(Radio Group) and tabs left aligned
          </amexio-header>
          <amexio-body>
              <amexio-tab-view [action]="true" [closable]="false" [tab-position]="'top'" [header-align]="'left'" [divide-header-equally]=false>
                  <amexio-tab-action>
                      <amexio-radio-group name="gender" [data-reader]="'response.data'" [display-field]="'gender'"
                          [value-field]="'genderId'" [horizontal]="true" [data]="radioGroupData" [default-value]="'male'">
                      </amexio-radio-group>
                  </amexio-tab-action>
      
                  <amexio-tab title="Person" [active]="true" [amexio-color]="'red'">
                      Personal Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                      type specimen book.
                  </amexio-tab>
                  <amexio-tab title="Work" [amexio-color]="'blue'">
                      Work Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean
                      placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus
                      tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.
                  </amexio-tab>
                  <amexio-tab title="Profile" [amexio-color]="'green'">
                  Profile Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                  type specimen book.
                  </amexio-tab>
                  <amexio-tab title="Education" [amexio-color]="'red'">
                  Education Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                  type specimen book.
                  </amexio-tab>
              </amexio-tab-view>
          </amexio-body>
      </amexio-card>
      
      <br>
      
      <amexio-card [header]="true" [footer]="true" [footer-align]="'left'">
          <amexio-header>
              Tab layout with action component(button) and tabs left aligned
          </amexio-header>
          <amexio-body>
          
              <amexio-tab-view #tab [closable]="false" [action]="true" [tab-position]="'top'" [header-align]="'left'">
                  <amexio-tab-action>
                      <amexio-button [label]="'Add Tab'" [type]="'theme-color'" (onClick)="addtab(tab)" [tooltip]="'Add Tab'">
                      </amexio-button>
                  </amexio-tab-action>
                  <amexio-tab title="Person" [active]="true" [amexio-color]="'red'" [closable]="true">
                      Personal Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                      type specimen book.
                  </amexio-tab>
                  <amexio-tab title="Work" [amexio-color]="'red'">
                      Work Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean
                      placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus
                      tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.
                  </amexio-tab>
                  <amexio-tab title="Profile" [amexio-color]="'red'">
                      Profile Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean
                      placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus
                      tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.
                  </amexio-tab>
                  <amexio-tab title="Education" [amexio-color]="'red'" [closable]="true">
                      Education Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean
                      placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus
                      tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.
                  </amexio-tab>
              </amexio-tab-view>
          </amexio-body>
      <amexio-action>
      <amexio-button [label]="'Close Tab'" [type]="'theme-color'" (onClick)="closeAllTabs(tab)" [tooltip]="'Add Tab'" >
          </amexio-button>
          &nbsp;
          <amexio-button [label]="'Active Number Tab'" [type]="'theme-color'" (onClick)="setActiveTabNumber(tab)" [tooltip]="'Activate Tab'" >
          </amexio-button>
          &nbsp;
          <amexio-button [label]="'Active Title Tab'" [type]="'theme-color'" (onClick)="setActiveTabTitle(tab)" [tooltip]="'Activate Tab'" >
          </amexio-button>
          &nbsp;
          <amexio-button [label]="'Close Other Tabs'" [type]="'theme-color'" (onClick)="closeOtherTabs(tab)" [tooltip]="'Close Tab'" >
          </amexio-button>
      </amexio-action>
      </amexio-card>
      <br>
      <amexio-card [header]="true" [footer]="false" [footer-align]="'right'">
          <amexio-header>
              Tab layout with action component(Rating) and tabs right aligned
          </amexio-header>
          <amexio-body>
              <amexio-tab-view [closable]="false" [action]="true" [tab-position]="'top'" [header-align]="'right'" [divide-header-equally]=false>
                  <amexio-tab-action>
                      <amexio-rating-input [(ngModel)]="rate" [max]="max" name="rate" [read-only]="isReadonly">
                      </amexio-rating-input>
                  </amexio-tab-action>
                  <amexio-tab title="Person" [active]="true" [amexio-color]="'red'">
                      Personal Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                      type specimen book.
                  </amexio-tab>
                  <amexio-tab title="Work" [amexio-color]="'blue'">
                      Work Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean
                      placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus
                      tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.
                  </amexio-tab>
                  <amexio-tab title="Profile" [amexio-color]="'green'">
                      Profile Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean
                      placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus
                      tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.
                  </amexio-tab>
                  <amexio-tab title="Education" [amexio-color]="'red'">
                      Education Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean
                      placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus
                      tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.
                  </amexio-tab>
              </amexio-tab-view>
          </amexio-body>
      
      </amexio-card>
      
      <br>
      
      <amexio-card [header]="true" [footer]="false" [footer-align]="'right'">
          <amexio-header>
              Tabs equally divided
          </amexio-header>
          <amexio-body>
              <amexio-tab-view [closable]="false" [tab-position]="'top'" [header-align]="'right'" [divide-header-equally]=true>
      
                  <amexio-tab title="Person" [active]="true" [amexio-color]="'red'">
                      Personal Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                      type specimen book.
                  </amexio-tab>
                  <amexio-tab title="Work" [amexio-color]="'blue'">
                      Work Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean
                      dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                      type specimen book.
                  </amexio-tab>
                  <amexio-tab title="Address" [amexio-color]="'green'">
                      Address Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean
                      placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus
                      tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.
                  </amexio-tab>
                  <amexio-tab title="Profile" [amexio-color]="'red'">
                      Profile Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean
                      placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus
                      tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.
                  </amexio-tab>
              </amexio-tab-view>
          </amexio-body>
      
      </amexio-card>
      
      <br>
      
      <amexio-card [header]="true" [footer]="false" [footer-align]="'right'">
          <amexio-header>
              Tab Layout with header and scrollable tabs
          </amexio-header>
          <amexio-body>
              <amexio-tab-view [closable]="false" header="Work Profile" [tab-position]="'top'" [header-align]="'right'" [divide-header-equally]=false>
      
                  <amexio-tab title="tab1" [active]="true" [amexio-color]="'red'">
                      Personal Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                      type specimen book.
                  </amexio-tab>
                  <amexio-tab title="tab2" [amexio-color]="'blue'">
                      Work Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean
                      placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus
                      tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.
                  </amexio-tab>
                  <amexio-tab title="tab3" [amexio-color]="'green'">
                      Tab3 Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean
                      placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus
                      tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.
                  </amexio-tab>
                  <amexio-tab title="tab4" [amexio-color]="'pink'">
                      Tab4 Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean
                      placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus
                      tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.
                  </amexio-tab>
                  <amexio-tab title="tab5" [amexio-color]="'brown'">
                      Tab5 Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean
                      placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus
                      tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.
                  </amexio-tab>
                  <amexio-tab title="tab6" [amexio-color]="'green'">
                      Tab6 Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean
                      placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus
                      tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.
                  </amexio-tab>
                  <amexio-tab title="tab7" [amexio-color]="'red'">
                      Tab7 Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean
                      placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus
                      tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.
                  </amexio-tab>
                  <amexio-tab title="tab8" [amexio-color]="'blue'">
                      Tab8 Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean
                      placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus
                      tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.
                  </amexio-tab>
                  <amexio-tab title="tab9" [amexio-color]="'orange'">
                      Tab9 Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean
                      placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus
                      tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.
                  </amexio-tab>
                  <amexio-tab title="tab10" [amexio-color]="'blue'">
                      Tab10 Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean
                      placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus
                      tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.
                  </amexio-tab>
                  <amexio-tab title="tab11" [amexio-color]="'green'">
                      Tab11 Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean
                      placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus
                      tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.
                  </amexio-tab>
                  <amexio-tab title="tab12" [amexio-color]="'red'">
                      Tab12 Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean
                      placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus
                      tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.
                  </amexio-tab>
                  <amexio-tab title="tab13" [amexio-color]="'pink'">
                      Tab13 Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean
                      placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus
                      tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.
                  </amexio-tab>
                  <amexio-tab title="tab14" [amexio-color]="'blue'">
                      Tab14 Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean
                      placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus
                      tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.
                  </amexio-tab>
                  <amexio-tab title="tab15" [amexio-color]="'red'">
                      Tab15 Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean
                      placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus
                      tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.
                  </amexio-tab>
                  <amexio-tab title="tab16" [amexio-color]="'green'">
                      Tab16 Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean
                      placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus
                      tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.
                  </amexio-tab>
              </amexio-tab-view>
          </amexio-body>
      </amexio-card>
        
                   </amexio-tab>

          <amexio-tab title="API Reference">
            <amexio-datagrid title="Tab View Properties" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/layout/tab/enhanced-tab/enhancedtab.json'"
                             [data-reader]="'properties'"
                             [enable-data-filter]="false" >
              <amexio-data-table-column [width]="15" [data-index]="'name'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
             <amexio-data-table-column [width]="20" [data-index]="'version'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Version'"></amexio-data-table-column>
              <amexio-data-table-column [width]="10" [data-index]="'type'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Type'"></amexio-data-table-column>
              <amexio-data-table-column [width]="10" [data-index]="'default'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Default'"></amexio-data-table-column>
              <amexio-data-table-column [width]="45" [data-index]="'description'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Description'"></amexio-data-table-column>
            </amexio-datagrid>
            <br>
            <amexio-datagrid title="Tab Properties" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/layout/tab/enhanced-tab/enhancedtab.json'"
                             [data-reader]="'tabproperties'"
                             [enable-data-filter]="false" >
              <amexio-data-table-column [width]="15" [data-index]="'name'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [width]="20" [data-index]="'version'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Version'"></amexio-data-table-column>
              <amexio-data-table-column [width]="10" [data-index]="'type'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Type'"></amexio-data-table-column>
              <amexio-data-table-column [width]="10" [data-index]="'default'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Default'"></amexio-data-table-column>
              <amexio-data-table-column [width]="45" [data-index]="'description'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Description'"></amexio-data-table-column>
            </amexio-datagrid>
            <br>
            <amexio-datagrid title="Tab Events" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/layout/tab/basic-tab/basictab.json'"
                             [data-reader]="'events'"
                             [enable-data-filter]="false" >
              <amexio-data-table-column [width]="40"[data-index]="'name'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [width]="60" [data-index]="'description'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Description'"></amexio-data-table-column>
            </amexio-datagrid>
            <br>
            <amexio-datagrid title="Tab Methods" [enable-column-fiter]="false"
            [http-method]="'get'"
            [http-url]="'assets/apireference/layout/tab/enhanced-tab/enhancedtab.json'"
            [data-reader]="'methods'"
            [enable-data-filter]="false" >
            <amexio-data-table-column [width]="40"[data-index]="'name'" [data-type]="'string'" [hidden]="false"
                       [text]="'Name'"></amexio-data-table-column>
             <amexio-data-table-column [width]="20" [data-index]="'version'" [data-type]="'string'" [hidden]="false"
                         [text]="'Version'"></amexio-data-table-column>
            <amexio-data-table-column [width]="40" [data-index]="'description'" [data-type]="'string'" [hidden]="false"
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
              <amexio-tab title="Dynamic Tab">
              <ng-container *ngIf="typeScriptCode2">
                <prism-block [code]="typeScriptCode2" [language]="'typescript'"></prism-block>
              </ng-container>
            </amexio-tab>
            </amexio-vertical-tab-view>
            </div>
          </amexio-tab>
          <amexio-tab title="Live">
          <p align="center">Amexio Sandbox</p>
          <iframe style="width: 100%; height: 600px" src="https://stackblitz.com/edit/amexio-v4-horizontal-enhanced-tab?embed=1&file=app/tabs/enhancedtab/enhancedtab.demo.html" frameborder="0" allowfullscren="allowfullscren"></iframe>          </amexio-tab>
        </amexio-tab-view>
      </amexio-body>
    </amexio-card>
    <!--<amexio-notification [data]="copyMsgArray"></amexio-notification>-->

  `
})
export class EnhancedTabDemo {
    htmlCode: string;
    tabArray: any;
    typeScriptCode: string;
    copyMsgArray: any[];
    radioGroupData: any;
    typeScriptCode2: string;
    public rate: number = 7;
    public max: number = 10;
    public isReadonly: boolean = false;
    constructor(private http: Http) {
        this.tabArray = [
            "work"
         ]
        this.getHtmlAndTypeScriptCode();
        this.radioGroupData = {
            response: {
                data: [{
                    gender: 'Male', genderId: 'male'
                }, {
                    gender: 'Female', genderId: 'female'
                },]
            }
        }
    }

    //TO LOAD HTML AND TYPESCRIPT CODE
    getHtmlAndTypeScriptCode() {
        let responseHtml: any;
        let responseTs: any;
        let code: any;
        //HTML FILE
        this.http.get('assets/data/code/layout/tab/enhancedtab/tab.html').subscribe(data => {
            responseHtml = data.text();
        }, error => {
        }, () => {
            this.htmlCode = responseHtml;
        });

        //TS FILE
        this.http.get('assets/data/code/layout/tab/enhancedtab/tab.text').subscribe(data => {
            responseTs = data.text();
        }, error => {
        }, () => {
            this.typeScriptCode = responseTs;
        });

        //TS FILE
        this.http.get('assets/data/code/layout/tab/enhancedtab/dynamictab.text').subscribe(data => {
            code = data.text();
        }, error => {
        }, () => {
            this.typeScriptCode2 = code;
        });

    }

    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    onCopyClick() {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        } else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    }

    tabcount: number = 4;
    addtab(tab: any) {
        this.tabcount++;
        let title = 'Tab ' + this.tabcount;
        let cmp = tab.addDynamicTab(title, "red", true, DyanmicTabComponent);
        cmp.content = "Content of " + title;
    }

    //Method to close all tabs alltogether

  closeAllTabs(tab: any) {
    tab.closeAllTabs();
  }

  //Method to set tab active on the basis of tab sequence.(2 is the tab position from left to right)

  setActiveTabNumber(tab: any){
    tab.setActiveTab(2);
  }

  //Method to set tab active on the basis of tab title.("profile" is the tab title)

  setActiveTabTitle(tab: any) {
    tab.setActiveTab("profile")
  }

   //Method to close tabs and keep open some of the required tabs.
   closeOtherTabs(tab: any){
   tab.closeTabs(this.tabArray);
  }
}


