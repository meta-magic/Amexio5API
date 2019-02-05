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
    http.get('assets/data/enterprise/eee.json')
      .subscribe((response : any) => {
        this.newreleases = response;
      });
    this.http.get('assets/data/enterprise/topratedcontent.json').subscribe((res : any) => this.topRateContent = res);
  }
  
  ngOnInit() {
  }
}
