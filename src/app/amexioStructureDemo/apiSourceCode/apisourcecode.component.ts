
import {Component, OnInit, Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'amexio-api-sourcecode',
   templateUrl: 'apisourcecode.component.html',
})

export class AmexioApiSourceCodeComponent implements OnInit {

  @Input('ts-url') tsUrl: string;
  @Input('html-url') htmlUrl: string;
  @Input('datacode-url') datacodeUrl: string;

  htmlCode: any;
  typeScriptCode: any;
  dataSource: any;

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.loadHtmlUrl();
    this.loadTsUrl();
    this.loadDataSourceUrl();

  }
  loadHtmlUrl() {
    this.http.get(this.htmlUrl, { responseType: 'text' }).subscribe(data => {
      this.htmlCode = data;
    });
  }
  loadTsUrl() {
    this.http.get(this.tsUrl, { responseType: 'text' }).subscribe(data => {
      this.typeScriptCode = data;
    });
  }

  loadDataSourceUrl() {
    this.http.get(this.datacodeUrl, { responseType: 'text' }).subscribe(data => {
      this.dataSource = data;
    });
  }
}
