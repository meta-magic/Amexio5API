
import {Component, OnInit, Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CODE_BASE_PATH, DATASOURCE_BASE_PATH} from '../../apimetadata/constants/service.constant';

@Component({
  selector: 'amexio-api-sourcecode',
   templateUrl: 'apisourcecode.component.html',
})

export class AmexioApiSourceCodeComponent implements OnInit {

  @Input('ts-url') tsUrl: string;
  @Input('html-url') htmlUrl: string;
  @Input('data-source-url') dataSourceUrl: string;
  @Input('dynamic-url') dynamicUrl: string;
  @Input('module-url') moduleUrl: string;
  


  htmlCode: any;
  typeScriptCode: any;
  dataSource: any;

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
    if (this.dataSourceUrl) {
      this.loadDataSourceUrl();
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
// LOADING DATA SOURCE URL
  loadDataSourceUrl() {
    this._httpClient.get(DATASOURCE_BASE_PATH + this.dataSourceUrl, { responseType: 'text' }).subscribe(data => {
      this.dataSource = data;
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
