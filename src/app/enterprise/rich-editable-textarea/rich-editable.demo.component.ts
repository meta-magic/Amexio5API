/**
 * Created by kedar on 27/9/19.
 */
import { Component, OnInit } from '@angular/core';

@Component({
 selector: 'rich-editable-textarea',
 templateUrl :'./rich-editable.demo.component.html',
})

export class RichEditableDemoComponent implements OnInit {
  HTMLCodeDisplay: any;
  constructor() {
  
  }
 ngOnInit() { }

 onHTMLCodeDisplay(data: any) {
   this.HTMLCodeDisplay = data;
 }
}
