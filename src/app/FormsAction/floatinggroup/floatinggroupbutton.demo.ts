/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core';
@Component({
  selector: 'floating-group-button-demo',
  templateUrl :'./floatinggroupbutton.demo.html',
})
export class FloatingGroupButtonDemo {
  asyncFlag : boolean;
  floatingbuttongroup : any[];

  constructor() {
      this.floatingbuttongroup = [
        {'label':'Facebook', 'icon':'fa fa-facebook','type':'yellow'},
        {'label':'Twitter', 'icon':'fa fa-facebook','type':'green'},
        {'label':'Google', 'icon':'fa fa-google-plus','type':'theme-color'}
      ];
  }

  onFloatingClick(event:any){
  }

}


