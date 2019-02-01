
import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'amexio-api-livedemo',
   templateUrl: 'apilivedemo.component.html',
})

export class AmexioApiLiveDemoComponent implements OnInit {


  @Input('disabled') disabled : boolean;
  @Input('stackblitz-url') stackblitzUrl: string;

  constructor() {

  }

  ngOnInit() {

  }

}
