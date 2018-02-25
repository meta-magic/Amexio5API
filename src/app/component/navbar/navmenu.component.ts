/**
 * Created by ketangote on 1/4/18.
 */

import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'amexio-test-nav-menu', 
  template: 
  `
  <div class="nav-dropdown">
    <a class="nav-dropbtn"  (click)="onHeaderClick($event)">
      <i [ngClass]="icon"></i> {{title}} <i class="dropdownicon fa fa-angle-down"></i>
    </a>
    <div class="nav-dropdown-content">
      <a *ngFor="let node of data" (click)="onClick(node)"><i [ngClass]="node.icon"></i> &nbsp;{{node.text}}</a>
    </div>
  </div>



  `
})
export class AmexioTestNavMenuComponent implements OnInit {

  @Input() title : string;

  @Input() data : string;

  @Input() icon : string;

  @Output() navLinkClick: any = new EventEmitter<any>();
  
  mobilemode : boolean = false;

  constructor() {

  }

  ngOnInit() {
    debugger;
    console.log(this.data);
  }

  setMobileMode(flag : boolean){
    debugger;
    this.mobilemode = flag;
  }
  onClick(event:any){
    debugger;
    this.navLinkClick.emit(event);
  }
  onHeaderClick(event:any){
    this.onClick({
      'header': true,
      'title' : this.title,
      'icon'  : this.icon
    });
  }
}
