import { Component, ViewChild, Inject } from '@angular/core';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router } from "@angular/router";
import { AmexioNavBarComponent } from "amexio-ng-extensions";
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  .BgColor {
    
  }
  `]
})
export class AppComponent {
  topMenuData: any[];
  amexiotechmenus: any[];
  isRouteLoading: boolean = false;

  @ViewChild(AmexioNavBarComponent) amexioNav;

  constructor(public router: Router, @Inject(DOCUMENT) private document: any) {
    this.topMenuData = JSON.parse(`[
    {
      "label" : "Features",
      "link" : "https://amexio.tech/features"
    },
    {
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
    this.amexiotechmenus = [
      {
        "text": "Home",
        "icon": "fa fa-home fa-fw fa-lg ",
        "link": 'http://api.amexio.org',
        "submenus": [
          {
            "text": "Version 5.4",
            "link": "../v5.4/index.html"
          },
          {
            "text": "Version 5.3",
            "link": "../v5.3/index.html"
          },
          {
            "text": "Version 5.2",
            "link": "../v5.2/index.html"
          },
          {
            "text": "Version 5.1",
            "link": "../v5.1/index.html"
          },
          {
            "text": "Version 5.0",
            "link": "../v5.0/index.html"
          },
          {
            "text": "Version 4.0",
            "link": "../v4/index.html"
          },
          {
            "text": "Version 3.0",
            "link": "../v3/index.html"
          },
          {
            "text": "Version 2.0",
            "link": "../v2/index.html"
          },
          {
            "text": "Version 1.0",
            "link": "../v1/index.html"
          }
        ]
      },
      {
        "text": "Products",
        "icon": "fa fa-snowflake-o fa-fw",
        "submenus": [
          {
            "text": "Amexio API",
            "link": "https://amexio.tech/amexio-api"
          },
          {
            "text": "Amexio D3 Charts",
            "link": " https://amexio.tech/amexio-d3-charts"
          },
          {
            "text": "Amexio Canvas",
            "link": "https://amexio.tech/amexio-canvas"
          }, {
            "text": "Amexio Colors",
            "link": "https://amexio.tech/amexio-colors"
          }, {
            "text": "Amexio Plugins",
            "link": "https://amexio.tech/amexio-plugins-1"
          },
          {
            "text": "Amexio Demo Apps",
            "link": " https://demo.amexio.org/se/v5.1/index.html"
          }
        ]
      },
      {
        "text": "Start Using",
        "icon": "fa fa-television fa-fw",
        "submenus": [
          {
            "text": "Pricing",
            "link": "https://amexio.tech/pricing"
          },
          {
            "text": "Quality-Assurance",
            "link": "https://amexio.tech/quality-assurance"
          },
          {
            "text": "Downloads",
            "link": "https://amexio.tech/download"
          }, {
            "text": "Subscribe ",
            "link": "https://canvas.amexio.org/#/user/signup"
          },
          {
            "text": "Support",
            "link": "https://amexio.tech/support"
          }, {
            "text": "Canvas Login (Beta)",
            "link": "https://canvas.amexio.org/"
          }, {
            "text": "License and Other Docs",
            "link": "https://amexio.tech/license-and-other-docs-1"
          },
          {
            "text" : "Roadmap",
            "link" : "https://amexio.tech/roadmap"
          }]
      },
      {
        "text": "Training",
        "icon": "fa fa-user fa-fw",
        "submenus": [
          {
            "text": "Component Example",
            "link": "http://demo.amexio.tech/"
          }, {
            "text": "Amexio Training",
            "link": "http://metaarivu.com/amexio-training"
          }]
      },
      {
        "text": "Case Studies",
        "icon": "fa fa-clone fa-fw",
        "submenus": [
          { "text": "Shopping Portal", "link": "https://demo.amexio.org/se/shoppingportal/#/home" },
          { "text": "US Election Results", "link": "https://demo.amexio.org/se/us-election/ " },
          { "text": "Insurance Portal", "link": "https://demo.amexio.org/se/insuranceportal/#/home" },
          { "text": "Movie Portal", "link": "https://demo.amexio.org/ee/" },
          { "text": "NpmStats", "link": "https://www.npmstats.com/" }
        ]
      },
      {
        "text": "Engage",
        "icon": "fa fa-envelope fa-fw",
        "submenus": [{
          "text": "Events",
          "link": "https://metamagicglobal.com/events"
        }, {
          "text": "Forums",
          "link": "http://forum.metamagicglobal.com/"
        }, {
          "text": "Blogs",
          "link": "http://blog.metamagicglobal.com/"
        }, {
          "text": "Node Package Manager",
          "link": "https://www.npmjs.com/package/amexio-ng-extensions"
        }, {
          "text": "GitHub - Source Code",
          "link": "https://github.com/meta-magic/amexio.github.io"
        }]
      },
      {
        "text": "About Us",
        "icon": "fa fa-address-book-o fa-fw",
        "submenus": [{
          "text": "Contact",
          "link": "https://metamagicglobal.com/contact"
        }, {
          "text": "Company",
          "link": "http://www.metamagicglobal.com/company"
        }, {
          "text": "MetaMagic",
          "link": "https://www.metamagicglobal.com/"
        }]
      }];
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof RouteConfigLoadStart) {
        this.isRouteLoading = true;
      } else if (event instanceof RouteConfigLoadEnd) {
        this.isRouteLoading = false;
      }
    });
  }

  externalLink(event: any) {
    if (event.data.node.link)
      //this.document.location.href=event.data.node.link;
      window.open(event.data.node.link, '_blank');
  }

  homeLink(link: any) {
    this.document.location.href = link;
  }
  //TO CLOSE NABVAR IN MOBILE
  onMenuClick() {
    this.amexioNav.close();
  }
  onNodeClick(node: any) {
    if (node.hasOwnProperty('link'))
      this.router.navigate([node.link])
  }
}
