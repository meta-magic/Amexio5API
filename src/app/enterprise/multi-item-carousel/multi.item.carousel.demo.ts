/**
 * Created by pratik on 18/1/18.
 */
import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'ee-carousel-demo',
  templateUrl :'./multi.item.carousel.demo.html',
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
