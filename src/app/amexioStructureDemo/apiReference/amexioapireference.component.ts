
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'amexio-api-reference',
  templateUrl: './amexioapireference.component.html',
})

export class AmexioApiReferenceComponent {

  @Input('http-url') httpUrl: string;

  @Input('data') data: any[];

  constructor() {
  }
}

