import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterService} from 'amexio-ng-extensions'
@Component({
        selector: 'router-animation-demo',
        templateUrl: './router-animation.html',
 })
export class RouterAnimationDemo {
  title = 'routinglink';
  alterflag: boolean = false;
  constructor(  public router: Router, private rs: RouterService ) {
rs.initializeRouter(router);

  }
 
  alter() {
      // this.router.navigate(['router-animation/input-mask']);
      this.router.navigate(['/child-route']);
    this.alterflag = !this.alterflag;
  }
}
