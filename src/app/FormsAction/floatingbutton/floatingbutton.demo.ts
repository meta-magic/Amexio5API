/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core';

@Component({
  selector: 'floating-button-demo',
  templateUrl:  './floatingbutton.demo.html',
})
export class FloatingButtonDemo {
  asyncFlag: boolean;
  toggle1 = false;
  toggle2 = false;
    constructor() {}
  onFloatingButtonClick1(event :any){
    this.toggle1 = !this.toggle1;
    this.toggle2 = false;
  }

  onFloatingButtonClick2(event :any){
    this.toggle2 = !this.toggle2;
    this.toggle1 = false;
  }

}


