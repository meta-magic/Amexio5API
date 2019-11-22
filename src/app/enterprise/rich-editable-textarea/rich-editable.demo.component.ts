/**
 * Created by kedar on 27/9/19.
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rich-editable-textarea',
  templateUrl: './rich-editable.demo.component.html',
})

export class RichEditableDemoComponent implements OnInit {
  HTMLCodeDisplay : any;
  binding = "<h1><b>Good Morning, John Doe!</b></h1><div><b>&nbsp;Glad to see you, Greetings from Amexio Team.</b></div><div><b><br></b></div><div><b>&nbsp;Regards,</b></div><div><b>&nbsp;Amexio Team</b></div> ";

  constructor() {

  }
  ngOnInit() { 
  }

  onSourceCodeDisplay(data: any) {
    this.HTMLCodeDisplay = data;
  }
}
