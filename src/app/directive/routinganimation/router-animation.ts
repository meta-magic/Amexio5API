import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterService } from 'amexio-ng-extensions'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'router-animation-demo',
  templateUrl: './router-animation.html',
})
export class RouterAnimationDemo {
  title = 'routinglink';
  alterflag: boolean = false;
  radioGroupData: any;
  styleType: string = '';

  typeScriptCode: string;
  htmlCode: string;
  sourceData: any;
  stackData: any;
  copyMsgArray: any[];
  inputData: any;
  constructor(public router: Router,
    public acR: ActivatedRoute,
     private rs: RouterService) {
      this.inputData =
      [{
              "name": "style-type",
              "description": "adds animation [slide-left / slide-right / slide-top / slide-bottom] to route",
              "version": "5.19 onwards",
              "type": "any",
              "default": ""
      }
      ]
    rs.initializeRouter(router);
    this.radioGroupData = {
      data: [{
        "routertype": "slide-left",
        "route":"child-route-left"
      },
      {
        "routertype": "slide-right",
        "route":"child-route-right"
      },
      {
        "routertype": "slide-top",
        "route":"child-route-top"
      },
      {
        "routertype": "slide-bottom",
        "route":"child-route-bottom"
      }]
    }
  }
  setSelectedType(event: any) {
setTimeout(() => {
  this.styleType = event.routertype;
  this.router.navigate([event.route],{relativeTo: this.acR});
}, 0);
 
  }
  alter() {
    // this.router.navigate(['router-animation/input-mask']);
   // this.router.navigate(['/child-route']);
    this.alterflag = !this.alterflag;
  }
}
