import { Component, ViewChild, Inject } from '@angular/core';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router } from "@angular/router";
import { AmexioNavBarComponent } from "amexio-ng-extensions";
import { DOCUMENT } from '@angular/platform-browser';
import {CookieService} from "ngx-cookie-service";
import {HttpClient} from "@angular/common/http";

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

  mdThemeData: any[] = [];

  newThemePath = '';
  type="2";
  @ViewChild(AmexioNavBarComponent) amexioNav;

  constructor(public router: Router, @Inject(DOCUMENT) private document: any,
              private _httpClient: HttpClient,
              private _cookieService: CookieService) {
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
            "text": "Version 5.6",
            "link": "../v5.6/index.html"
          },
          {
            "text": "Version 5.5",
            "link": "../v5.5/index.html"
          },
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
          { "text": "NpmStats", "link": "https://www.npmstats.com/" },
          { "text": "Creative Demo", "link": "https://meta-magic.github.io/amexio-ce-demo/#/home/dashboard" }
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
    this.changeTheme();
    this.router.events.subscribe(event => {
      if (event instanceof RouteConfigLoadStart) {
        this.isRouteLoading = true;
      } else if (event instanceof RouteConfigLoadEnd) {
        this.isRouteLoading = false;
      }
    });
  }


  changeTheme() {
    this._httpClient.get('assets/data/theme/material-themes.json').subscribe((res: any) => {
      this.mdThemeData = res.bestThemes;
      },
      (error: any)=>{
      console.log(error)},
      ()=>{
      let themeRef: any;
      let themeId = 1;
        if (this._cookieService.check('theme-info')) {
          themeId = JSON.parse(this._cookieService.get('theme-info')).id + 1;
          themeId = this.mdThemeData.length - 1 < themeId ? 0 : themeId;
          themeRef = this.mdThemeData[themeId];
        } else {
          themeId = 0;
          themeRef = this.mdThemeData[0];
        }
        this._cookieService.set('theme-info', JSON.stringify({id: themeId, themeName: themeRef.themeCssFile}));
        this.themeChange(themeRef);
    });
  }

  addNewTheme(newTheme: any,existingTheme : any) {
    let linkEl = document.createElement('link');
    linkEl.onload = ()=>{
      this.removeExistingTheme(existingTheme);

    };
    linkEl.setAttribute('rel', 'stylesheet');
    linkEl.id = 'themeid';
    linkEl.href = newTheme;
    document.head.appendChild(linkEl);
  }

  //removed old theme css
  removeExistingTheme(keyList: any) {
    if (keyList != null && keyList && keyList.length != 0) {
      for (let i=0; i<keyList.length; i++) {
        let key = keyList[i];
        if (key.id == 'themeid') {
          document.head.removeChild(key);
        }
      }
    }
  }

  themeChange(theme: any) {
    this.newThemePath = 'assets/themes/' + theme.themeCssFile + '.css';
    let currentTheme = document.head.querySelectorAll(`link[rel="stylesheet"]`);
    // this.removeExistingTheme(currentTheme);
    this.addNewTheme(this.newThemePath,currentTheme);
    const themeObj = {
      id: Math.floor(Math.random() * 9) + 1  ,
      themeName: theme.themeCssFile
    };
   // this._cookieService.set('theme-info', JSON.stringify(themeObj));
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
    if (node.hasOwnProperty('link')){
      this.router.navigate([node.link]);
    }
  }
}
