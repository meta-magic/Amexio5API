/**
 * Created by ketangote on 1/4/18.
 */

import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'amexio-test-nav-action', 
  template: 
  `
    <a *ngIf="(type=='link')" (click)="onClick($event)"><i *ngIf="icon" [ngClass]="icon"></i> {{title}}</a>
    
    <button *ngIf="(type=='button')" class="top-nav-button"  (click)="onClick($event)"><i *ngIf="icon" [ngClass]="icon"></i> {{title}}</button>
  `
})
export class AmexioTestNavActionComponent implements OnInit {

  @Input() type : string;

  @Input() title : string;

  @Input() icon : string;

  @Output() navLinkClick: any = new EventEmitter<any>();

  constructor() {

  }

  ngOnInit() {
  }

  onClick(event:any){
      let node = {
        'title': this.title,
        'type' : this.type,
        'icon' : this.icon
      };
      this.navLinkClick.emit({'data':node,'event':event});

  }

}
