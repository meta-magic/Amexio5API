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
 
  DEMO_FIRST_URL = 'https://meta-magic.github.io/amexio-ce-demo/#/home/dashboard?type=1';
  DEMO_SEC_URL = 'https://meta-magic.github.io/amexio-ce-demo/#/home/dashboardtwo?type=2';
  constructor(private http: HttpClient) {
  }
  onDemoFirstClick() {
    window.open(this.DEMO_FIRST_URL);
  }
  onDemoSecondClick() {
    window.open(this.DEMO_SEC_URL);

  }
}


