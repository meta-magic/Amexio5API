/**
 * Created by sagar on 04/02/19.
 */

import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'homepage-ce-demo', templateUrl: './homepage.demo.html',
  styles: [
  `
  .homepage-cursor {
    cursor:pointer;
  }
  `
  ],
})
export class HomePageDemo {
 
  DEMO_URL = 'https://meta-magic.github.io/amexio-ce-demo/#/home/dashboard?type=';
  constructor(private http: HttpClient) {
  }
  onHomePageClick(type: string) {
    window.open(this.DEMO_URL + type, '_blank');
  }
}


