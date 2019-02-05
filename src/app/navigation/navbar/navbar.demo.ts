/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core';

@Component({
  selector: 'navbar-demo', 
  templateUrl:'./navbar.demo.html',
  
})
export class NavbarDemo {
  topMenuData:any;
  constructor() {
    this.topMenuData = JSON.parse(`[{
      "text": "About Us",
      "submenus": [{
        "text": "Amexio Canvas",
        "link": "https://amexio.tech/amexio-canvas"
      }, {
        "text": "Amexio Themes",
        "link": "https://amexio.tech/amexio-themes"
      }]
    }]
`);
  }
  
  onClick(event:any){
  }

  externalLink(event:any){
  }
}


