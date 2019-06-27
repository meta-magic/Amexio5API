
import {Component, OnInit, Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CODE_BASE_PATH, DATASOURCE_BASE_PATH} from '../../apimetadata/constants/service.constant';

@Component({
  selector: 'amexio-api-sourcecode',
   templateUrl: 'apisourcecode.component.html',
})

export class AmexioApiSourceCodeComponent implements OnInit {
// 
@Input('component-ts-url') componentTsUrl: string;
@Input('component-html-url') componentHtmlUrl: string;
  @Input('ts-url') tsUrl: string;
  @Input('html-url') htmlUrl: string;
  @Input('data-source-url') dataSourceUrl: string;
  @Input('data-source-url1') dataSourceUrl1: string;
  @Input('data-source-url2') dataSourceUrl2: string;
  @Input('dynamic-url') dynamicUrl: string;
  @Input('module-url') moduleUrl: string;
  
  htmlCode: any;
  typeScriptCode: any;
  componentHtmlCode: any;
  componentTypeScriptCode: any;
  dataSource: any;
  dataSource1: any;
  dataSource2: any;

  dynamicCode: any;
  moduleCode: any;

  constructor(private _httpClient: HttpClient) {
  }

  ngOnInit() {
    if (this.htmlUrl) {
      this.loadHtmlUrl();
    }
    if (this.tsUrl) {
      this.loadTsUrl();
    }
    if (this.componentHtmlUrl) {
      this.loadComponentHtmlUrl();
    }
    if (this.componentTsUrl) {
      this.loadComponentTsUrl();
    }
    if (this.dataSourceUrl) {
      this.loadDataSourceUrl();
    }
    if (this.dataSourceUrl1) {
      this.loadDataSourceUrl1();
    }
    if (this.dataSourceUrl2) {
      this.loadDataSourceUrl2();
    }
    if (this.dynamicUrl) {
      this.loadDynamicUrl();
    }
    if (this.moduleUrl) {
      this.loadModuleUrl();
    }
  }
  // LOADING HTML URL
  loadHtmlUrl() {
    this._httpClient.get(CODE_BASE_PATH + this.htmlUrl, { responseType: 'text' }).subscribe(data => {
      this.htmlCode = data;
    });
  }
  // LOADING TYPESCRIPT URL
  loadTsUrl() {
    this._httpClient.get(CODE_BASE_PATH + this.tsUrl, { responseType: 'text' }).subscribe(data => {
      this.typeScriptCode = data;
    });
  }
    // LOADING HTML URL
    loadComponentHtmlUrl() {
      this._httpClient.get(CODE_BASE_PATH + this.componentHtmlUrl, { responseType: 'text' }).subscribe(data => {
        this.componentHtmlCode = data;
      });
    }
    // LOADING TYPESCRIPT URL
    loadComponentTsUrl() {
      this._httpClient.get(CODE_BASE_PATH + this.componentTsUrl, { responseType: 'text' }).subscribe(data => {
        this.componentTypeScriptCode = data;
      });
    }
// LOADING DATA SOURCE URL
  loadDataSourceUrl() {
    this._httpClient.get(DATASOURCE_BASE_PATH + this.dataSourceUrl, { responseType: 'text' }).subscribe(data => {
      this.dataSource = data;
    });
  }

  // LOADING DATA SOURCE URL 2nd 
  loadDataSourceUrl1() {
    this._httpClient.get(DATASOURCE_BASE_PATH + this.dataSourceUrl1, { responseType: 'text' }).subscribe(data => {
      this.dataSource1 = data;
    });
  }
  
    // LOADING DATA SOURCE URL 3nd 
  loadDataSourceUrl2() {
    this._httpClient.get(DATASOURCE_BASE_PATH + this.dataSourceUrl2, { responseType: 'text' }).subscribe(data => {
      this.dataSource2 = data;
    });
  }

   // LOADING DYNAMIC URL
   loadDynamicUrl() {
    this._httpClient.get(CODE_BASE_PATH + this.dynamicUrl, { responseType: 'text' }).subscribe(data => {
      this.dynamicCode = data;
    });
  }

   // LOADING MODULE URL
   loadModuleUrl() {
    this._httpClient.get(CODE_BASE_PATH + this.moduleUrl, { responseType: 'text' }).subscribe(data => {
      this.moduleCode = data;
    });
  }
}
