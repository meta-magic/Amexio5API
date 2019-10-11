import { Component, ViewChild, Inject, ViewContainerRef } from '@angular/core';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router } from "@angular/router";
import { AmexioNavBarComponent, AmexioSideNavComponent } from "amexio-ng-extensions";
import { DOCUMENT } from '@angular/platform-browser';
import { CookieService } from "ngx-cookie-service";
import { HttpClient } from "@angular/common/http";
import { MENUCONSTANT } from './menuconstant';
import { ThemeServiceService } from './theme-service.service';

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

  semenus: any;
  eemenus: any;
  cemenus: any;
  homemenus: any;
  directives: any;

  amexiotechmenus: any[];
  isRouteLoading: boolean = false;

  mdThemeData: any[] = [];

  newThemePath = '';
  type = "2";
  @ViewChild(AmexioNavBarComponent) amexioNav;

  @ViewChild('sidenav1') sidenav1: AmexioSideNavComponent;

  @ViewChild('sidenav2') sidenav2: AmexioSideNavComponent;

  @ViewChild('sidenav3') sidenav3: AmexioSideNavComponent;

  @ViewChild('sidenav4') sidenav4: AmexioSideNavComponent;

  @ViewChild('sidenav5') sidenav5: AmexioSideNavComponent;


  constructor(public router: Router, @Inject(DOCUMENT) private document: any,
    private _httpClient: HttpClient,
    private themeServiceService: ThemeServiceService,
    private _cookieService: CookieService) {

    this.homemenus = MENUCONSTANT.HOMEMENUS;
    this.directives = MENUCONSTANT.DIRECTIVES;
    this.semenus = MENUCONSTANT.SEMENUS;
    this.eemenus = MENUCONSTANT.EEMENUS;
    this.cemenus = MENUCONSTANT.CEMENUS;

    this.topMenuData = [
      {
        "label": "Features",
        "link": "https://amexio.tech/features"
      },
      {
        "label": "Roadmap",
        "link": "https://amexio.tech/roadmap"
      },
      {
        "label": "Downloads",
        "link": "https://amexio.tech/download"
      },
      {
        "label": "Forum",
        "link": "http://forum.metamagicglobal.com/"
      },
      {
        "label": "Blogs",
        "link": "https://www.metamagicglobal.com/blogs"
      },
      {
        "label": "MetaMagic",
        "link": "http://www.metamagicglobal.com"
      }
    ];

    this.amexiotechmenus =
      [
        {
          "text": "Versions",
          "icon": "fa fa-code-fork fa-fw fa-lg",
          "link": 'http://api.amexio.org',
          "submenus": [
            {
              "text": "Beta Version",
              "link": "http://beta.amexio.org/"
            },
            {
              "text": "Version 5.0",
              "link": "../v5.0/index.html",
              "separator": true,
              "submenus": [
                {
                  "text": "Version 5.18",
                  "link": "../v5.18/index.html"
                },
                {
                  "text": "Version 5.17",
                  "link": "../v5.17/index.html"
                },
                {
                  "text": "Version 5.16",
                  "link": "../v5.16/index.html"
                },
                {
                  "text": "Version 5.15",
                  "link": "../v5.15/index.html"
                },
                {
                  "text": "Version 5.14",
                  "link": "../v5.14/index.html"
                },
                {
                  "text": "Version 5.13",
                  "link": "../v5.13/index.html"
                },
                {
                  "text": "Version 5.12",
                  "link": "../v5.12/index.html"
                },
                {
                  "text": "Version 5.11",
                  "link": "../v5.11/index.html"
                },
                {
                  "text": "Version 5.10",
                  "link": "../v5.10/index.html"
                },
                {
                  "text": "Version 5.9",
                  "link": "../v5.9/index.html"
                },
                {
                  "text": "Version 5.8",
                  "link": "../v5.8/index.html"
                },
                {
                  "text": "Version 5.7",
                  "link": "../v5.7/index.html"
                },
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
                }
              ]
            },
            {
              "text": "Version 4.0",
              "link": "../v4/index.html"

            },

            {
              "text": "Version 3.0",
              "link": "../v3/index.html",
              "separator": true
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
              "text": "Amexio Colors",
              "link": "https://amexio.tech/amexio-colors"
            },

            {
              "text": "Amexio Plugins",
              "link": "https://amexio.tech/amexio-plugins-1"

            },
            {
              "text": "Amexio Canvas",
              "link": "https://amexio.tech/amexio-canvas",
              "separator": true
            }
          ]
        },
        {
          "text": "Start Using",
          "icon": "fa fa-television fa-fw",
          "submenus": [
            {
              "text": "Roadmap",
              "link": "https://amexio.tech/roadmap"
            },
            {
              "text": "Support",
              "link": "https://amexio.tech/support"
            },
            {
              "text": "Pricing",
              "link": "https://amexio.tech/pricing"
            },
            {
              "text": "Downloads",
              "link": "https://amexio.tech/download"

            },
            {
              "text": "Video Tutorials",
              "link": "https://youtu.be/zpfpfnOV6Y0?list=PLi505KVOMPrGRUgJF4C3QoXbrhFGEOI4j",
              "separator": true,
              "separatorHeader": "Amexio Training"
            },
            {
              "text": "Component Example",
              "link": "http://demo.amexio.tech/"

            },
            {
              "text": "Quality-Assurance",
              "link": "https://amexio.tech/quality-assurance",
              "separator": true

            },
            {
              "text": "License and Other Docs",
              "link": "https://amexio.tech/license-and-other-docs-1"

            },
            {
              "text": "Amexio Canvas",
              "link": "https://amexio.tech/quality-assurance",
              "separator": true,
              "submenus": [
                {
                  "text": " Subscribe Canvas ",
                  "link": "https://canvas.amexio.org/#/user/signup"
                },
                {
                  "text": " Canvas Login ",
                  "link": "https://canvas.amexio.org/#/login"
                }
              ]
            },
            {
              "text": "Engage",
              "submenus": [
                {
                  "text": "Events",
                  "link": "https://metamagicglobal.com/events"
                },

                {
                  "text": "Blogs",
                  "link": "http://blog.metamagicglobal.com/"
                },
                {
                  "text": "Node Package Manager",
                  "link": "https://www.npmjs.com/package/amexio-ng-extensions"
                },
                {
                  "text": "GitHub - Source Code",
                  "link": "https://github.com/meta-magic/amexio.github.io"
                }
              ]
            }
          ]
        },
        {
          "text": "Case Studies",
          "icon": "fa fa-clone fa-fw",
          "submenus": [
            {
              "text": "Showcase",
              "link": "https://showcase.amexio.org/#/landingPage-app"
            },
            {
              "text": "Traffic Analysis",
              "link": "https://eedemo.amexio.org/#/home/dashboard",
              "separatorHeader": "Enterprise Edition Apps",
              "separator": true
            },
            {
              "text": "City Analysis",
              "link": "https://eedemo.amexio.org/#/home/dashboardtwo"
            },
            {
              "text": "Creative Home Page",
              "link": "https://cedemo.amexio.org/amexio-ce-demo-app/index.html#/ce-demo-app",
              "separator": true,
              "separatorHeader": "Creative Edition Apps"
            },
            {
              "text": "Movie Portal",
              "link": "https://cedemo.amexio.org/Virtual-Scroller/#/sc"

            },
            {
              "text": "TecMFlix",
              "link": "https://cedemo.amexio.org/tecmflix/"
            },
            {
              "text": "Components App",
              "link": "https://demo.amexio.org/se/v5.12/index.html#/home",
              "separator": true,
              "separatorHeader": "Standard Edition Apps"
            },
            {
              "text": "Insurance Portal",
              "link": "https://sedemo.amexio.org/se/insuranceportal/#/home"
            },
            {
              "text": "Shopping Portal",
              "link": "https://sedemo.amexio.org/se/shoppingportal/#/home"
            },
            {
              "text": "US Election Results",
              "link": "https://sedemo.amexio.org/se/us-election/ "
            },
            {
              "text": "NpmStats",
              "link": "https://www.npmstats.com/"
            }
          ]
        },

        {
          "text": "About Us",
          "submenus": [
            {
              "text": "Contact",
              "link": "https://metamagicglobal.com/contact"
            }, {
              "text": "Company",
              "link": "http://www.metamagicglobal.com/company"
            }, {
              "text": "MetaMagic",
              "link": "https://www.metamagicglobal.com/"
            }
          ]
        }
      ];
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
      (error: any) => {
        console.log(error)
      },
      () => {
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
        this._cookieService.set('theme-info', JSON.stringify({ id: themeId, themeName: themeRef.themeCssFile }));
        this.themeServiceService.switchTheme(themeRef);
      });
  }

  addNewTheme(newTheme: any, existingTheme: any) {
    let linkEl = document.createElement('link');
    linkEl.onload = () => {
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
      for (let i = 0; i < keyList.length; i++) {
        let key = keyList[i];
        if (key.id == 'themeid') {
          document.head.removeChild(key);
        }
      }
    }
  }

  externalLink(event: any, node: any) {
    if (event.data.link)
      //this.document.location.href=event.data.node.link;
      window.open(event.data.link, '_blank');
  }

  homeLink(link: any) {
    this.document.location.href = link;
  }
  //TO CLOSE NABVAR IN MOBILE
  onMenuClick() {
    this.amexioNav.close();
  }
  onNodeClick(node: any, index: number) {
    if (node.hasOwnProperty('link')) {
      this.router.navigate([node.link]);
    }
    this.sidenav1.activateNode(this.homemenus, (index === 1) ? node : null);
    this.sidenav2.activateNode(this.directives, (index === 2) ? node : null);
    this.sidenav3.activateNode(this.semenus, (index === 3) ? node : null);
    this.sidenav4.activateNode(this.eemenus, (index === 4) ? node : null);
    this.sidenav5.activateNode(this.cemenus, (index === 5) ? node : null);
  }

  themeClick(event: any) {
    this.themeServiceService.getColorCode(event);
  }

  onHomeIconClick() {
    window.open("https://amexio.tech/", "_blank");
  }
}

