/**
 * Created by kedar on 26/09/18.
 */

import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'breadcrumb-demo',
  templateUrl: './breadcrumb.demo.html',

})
export class BreadcrumbDemo {
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  localData: any;
  onRowClickData: any;
  selectedData: any;
  JsonData: any;

  constructor(private http: HttpClient) {

    this.getHtmlAndTypeScriptCode();

    this.JsonData =
      {
        "data": [

          {
            "text": "Amexio Modules",
            "icon": "fa fa-snowflake-o",
            "expand": false,
            "show": false,
            "children": [
              {
                "text": "App Navigation",

                "badge": "3",
                "children": [
                  {
                    "text": "Dockbar",

                    "link": "dockbar-demo"
                  },
                  {
                    "text": "Dropdown Menu",

                    "link": "dropdownmenu",
                    "badge": "N"
                  },
                  {
                    "text": "Nav Bar",
                    "icon": "fa fa-bars fa-fw",
                    "link": "navbar-demo"
                  },
                  {
                    "text": "Side Nav Bar",
                    "icon": "fa fa-bars fa-fw",
                    "link": "sidenav-demo",
                    "badge": "U"
                  },
                  {
                    "text": "Menu Bar",
                    "icon": "fa fa-bars fa-fw",
                    "link": "menubar-demo"
                  },
                  {
                    "text": "Tool Bar",
                    "icon": "fa fa-bars fa-fw",
                    "link": "toolbar-demo",
                    "badge": "N"
                  },
                  {
                    "text": "Breadcrumb",
                    "icon": "fa fa-arrow-right fa-fw",
                    "link": "breadcrumb-demo",
                    "badge": "N"
                  }
                ]
              },
              {
                "text": "Charts",
                "icon": "fa fa-keyboard-o fa-fw",
                "badge": "7",
                "children": [
                  {
                    "text": "D3 Charts",
                    "icon": "fa fa-openid fa-fw",
                    "badge": "New",
                    "children": [
                      {
                        "text": "Bar Chart",
                        "icon": "fa fa-bar-chart fa-fw",
                        "badge": "New",
                        "link": "amexio-d3-chart-bar"
                      },
                      {
                        "text": "Stack Chart",
                        "icon": "fa fa-bar-chart fa-fw",
                        "badge": "New",
                        "link": "amexio-d3-chart-bar-stack"
                      },
                      {
                        "text": "Donut Chart",
                        "icon": "fa fa-pie-chart fa-fw",
                        "badge": "New",
                        "link": "amexio-d3-chart-donut"
                      },
                      {
                        "text": "Line Chart",
                        "icon": "fa fa-line-chart fa-fw",
                        "badge": "New",
                        "link": "amexio-d3-chart-line"
                      },
                      {
                        "text": "Pie Chart",
                        "icon": "fa fa-pie-chart fa-fw",
                        "badge": "New",
                        "link": "amexio-d3-chart-pie"
                      },
                      {
                        "text": "MultiSeriesBar Chart",
                        "icon": "fa fa-bar-chart fa-fw",
                        "badge": "New",
                        "link": "amexio-d3-chart-multiseries"
                      }
                    ]
                  },
                  {
                    "text": "Google Charts",
                    "icon": "fa fa-google fa-fw",
                    "badge": "U",
                    "children": [
                      {
                        "text": "Area Chart",
                        "icon": "fa fa-area-chart fa-fw",
                        "link": "area-chart-demo"
                      },
                      {
                        "text": "Bar Chart",
                        "icon": "fa fa-bar-chart fa-fw",
                        "link": "bar-chart-demo"
                      },
                      {
                        "text": "Bubble Chart",
                        "icon": "fa fa-circle fa-fw",
                        "link": "bubble-chart-demo"
                      },
                      {
                        "text": "Candlestick Chart",
                        "icon": "fa fa-stack-exchange fa-fw",
                        "link": "candlestick-chart-demo"
                      },
                      {
                        "text": "Candlestick Waterfall",
                        "icon": "fa fa-tint fa-fw",
                        "link": "candlestickwaterfall-chart-demo"
                      },
                      {
                        "text": "Column Chart",
                        "icon": "fa fa-columns fa-fw",
                        "link": "column-chart-demo"
                      },
                      {
                        "text": "Combo Chart",
                        "icon": "fa fa-area-chart fa-fw",
                        "link": "combo-chart-demo"
                      },
                      {
                        "text": "Donut Chart",
                        "icon": "fa fa-pie-chart fa-fw",
                        "link": "donut-chart-demo"
                      },
                      {
                        "text": "Gantt Chart",
                        "icon": "fa fa-calendar fa-fw",
                        "link": "gantt-chart-demo",
                        "badge": "New"
                      },
                      {
                        "text": "Histogram Chart",
                        "icon": "fa fa-bars fa-fw",
                        "link": "histogram-chart-demo"
                      },
                      {
                        "text": "Line Chart",
                        "icon": "fa fa-line-chart fa-fw",
                        "link": "line-chart-demo"
                      },
                      {
                        "text": "Pie Chart",
                        "icon": "fa fa-pie-chart fa-fw",
                        "link": "pie-chart-demo"
                      },
                      {
                        "text": "Scatter Chart",
                        "icon": "fa fa-dot-circle-o fa-fw",
                        "link": "scatter-chart-demo"
                      },
                      {
                        "text": "Timeline Chart",
                        "icon": "fa fa-calendar fa-fw",
                        "link": "timeline-chart-demo"
                      }
                    ]
                  }
                ]
              },
              {
                "text": "Contextual Menus",
                "icon": "fa fa-bars",
                "badge": "New",
                "children": [
                  {
                    "text": "Card",
                    "icon": "fa fa-id-card-o fa-fw",
                    "badge": "N",
                    "link": "contextmenu-card-form"
                  },
                  {
                    "text": "Grid",
                    "icon": "fa fa-database fa-fw",
                    "link": "contextual-menu-grid"
                  },
                  {
                    "text": "List Box",
                    "icon": "fa fa-list fa-fw",
                    "link": "contextual-menu-listbox"
                  },
                  {
                    "text": "Panel",
                    "icon": "fa fa-bars fa-fw",
                    "badge": "N",
                    "link": "contextmenu-panel"
                  },
                  {
                    "text": "Tab",
                    "icon": "fa fa-folder fa-fw",
                    "link": "contextual-menu-tab"
                  },
                  {
                    "text": "Tree",
                    "icon": "fa fa-tree fa-fw",
                    "link": "contextual-menu-tree"
                  },
                  {
                    "text": "Window",
                    "icon": "fa fa-window-maximize fa-fw",
                    "badge": "N",
                    "link": "contextmenu-window"
                  }
                ]
              },
              {
                "text": "Dashboard",
                "icon": "fa fa-dashcube fa-fw",
                "children": [
                  {
                    "text": "Gauge Chart",
                    "icon": "fa fa-tachometer fa-fw",
                    "link": "gauge-dashboard-demo"
                  },
                  {
                    "text": "Data Points",
                    "icon": "fa fa-address-card-o fa-fw",
                    "link": "datapoint"
                  }
                ]
              },
              {
                "text": "Enterprise",
                "icon": "fa fa-medium",
                "children": [
                  {
                    "text": "Media Content",
                    "icon": "fa fa-id-card-o fa-fw",
                    "link": "ee-content"
                  },
                  {
                    "text": "YouTube Video Player",
                    "icon": "fa fa-video-camera fa-fw",
                    "link": "ee-video"
                  },
                  {
                    "text": "Multi-item Carousel",
                    "icon": "fa fa-television fa-fw",
                    "link": "multi-item-carousel"
                  }
                ]
              },
              {
                "text": "Maps",
                "icon": "fa fa-globe fa-fw",
                "children": [
                  {
                    "text": "Geo Chart",
                    "icon": "fa fa-globe fa-fw",
                    "link": "geo-chart-demo"
                  },
                  {
                    "text": "Tree Map",
                    "icon": "fa fa-trello fa-fw",
                    "link": "tree-map-demo"
                  }
                ]
              },
              {
                "text": "Media",
                "icon": "fa fa-keyboard-o fa-fw",
                "children": [
                  {
                    "text": "Image",
                    "icon": "fa fa-picture-o fa-fw",
                    "link": "image-demo"
                  },
                  {
                    "text": "Video Player",
                    "icon": "fa fa-video-camera fa-fw",
                    "link": "video-demo"
                  }
                ]
              }
            ]
          }

        ]


      }
  }

  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;

    //HTML FILE
    this.http.get('assets/data/code/navigation/breadcrumb/breadcrumb.html', { responseType: 'text' }).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/navigation/breadcrumb/breadcrumb.text', { responseType: 'text' }).subscribe(data => {
      responseTs = data;
    }, error => {
    }, () => {
      this.typeScriptCode = responseTs;
    });

  }

  //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
  onCopyClick() {
    if (this.copyMsgArray.length >= 1) {
      this.copyMsgArray = [];
      this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
    } else {
      this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
    }
  }


  getSelectedData(data: any) {
    this.selectedData = data;
  }

}
