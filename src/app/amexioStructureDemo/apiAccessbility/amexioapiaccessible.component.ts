
import {Component,Input} from '@angular/core';

@Component({
  selector: 'amexio-api-accessible',
   templateUrl: 'amexioapiaccessible.component.html',
})

export class AmexioApiAccessibleComponent {

  @Input('disabled') disabled: boolean;

  @Input('isAccessibility') isAccessibility: boolean;
  
  @Input('http-url') httpUrl: string;

  @Input('data') data: any[];
  constructor() {
    
  }
}