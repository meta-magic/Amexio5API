import {Component, ViewChild} from '@angular/core';
import {RouteConfigLoadEnd, RouteConfigLoadStart, Router} from "@angular/router";
import {AmexioNavBarComponent} from "amexio-ng-extensions";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  
  `]
})
export class AppComponent {
  topMenuData:any[];
  amexiotechmenus : any[];
  isRouteLoading : boolean = false;
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

this.amexiotechmenus = [{"text":"Products","submenus":[{"text":"Amexio API","link":""},{"text":"Amexio Canvas","link":""},{"text":"Amexio Themes","link":""}]},{"text":"Start Using","submenus":[{"text":"Pricing","link":""},{"text":"Downloads","link":""},{"text":"Subscribe (Beta)","link":""},{"text":"Canvas Login (Beta)","link":""},{"text":"License and Other Docs","link":""}]},{"text":"Training","submenus":[{"text":"Amexio Training","link":""}]},{"text":"Engage","submenus":[{"text":"Events","link":""},{"text":"Forums","link":""},{"text":"Blogs","link":""},{"text":"Node Package Manager","link":""},{"text":"GitHub - Source Code","link":""}]},{"text":"About Us","submenus":[{"text":"Contact","link":""},{"text":"Company","link":""},{"text":"MetaMagic","link":""}]}];

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

  externalLink(link:any){
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
