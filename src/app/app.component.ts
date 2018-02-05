import {Component, ViewChild} from '@angular/core';
import {RouteConfigLoadEnd, RouteConfigLoadStart, Router} from "@angular/router";
import {AmexioNavBarComponent} from "amexio-ng-extensions";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  topMenuData:any[];
  isRouteLoading : boolean;
  @ViewChild(AmexioNavBarComponent) amexioNav;
  constructor(public router : Router){
    this.topMenuData = JSON.parse(`[
    {
      "label" : "Home",
      "link" : "https://amexio.tech"
    },
    {
      "label" : "Features",
      "link" : "https://amexio.tech/features"
    },{
      "label" : "Roadmap",
      "link" : "https://amexio.tech/roadmap"
    },
    {
      "label" : "Downloads",
      "link" : "https://amexio.tech/download"
    },
    {
      "label" : "Forum",
      "link" : "http://forum.metamagicglobal.com/"
    },
    {
      "label" : "Blogs",
      "link" : "https://www.metamagicglobal.com/blogs"
    },
    {
      "label" : "MetaMagic",
      "link" : "http://www.metamagicglobal.com"
    }
  ]
`);


  }

  ngOnInit () {
    this.router.events.subscribe(event => {
      if (event instanceof RouteConfigLoadStart) {
        this.isRouteLoading = true;
      } else if (event instanceof RouteConfigLoadEnd) {
        this.isRouteLoading = false;
      }
    });
  }

  //TO CLOSE NABVAR IN MOBILE
  onMenuClick(){
    this.amexioNav.close();
  }
  onNodeClick(node : any){
    if(node.hasOwnProperty('link'))
      this.router.navigate([node.link])
  }
}
