/**
 * Created by pratik on 18/1/18.
 */
import { Component, OnInit } from '@angular/core';
import { RouteComponent } from './router-component';
import { ComponentDataStructure } from '../../apimetadata/models/component.structure';

@Component({
  selector: 'tree-tab-demo', templateUrl: 'tree-tab.component.html'
})

export class TreeTabDemoComponent implements OnInit {
  menus: any;
  customSourceData: ComponentDataStructure;

  constructor() {
    
    this.customSourceData = new ComponentDataStructure();

    this.menus = [
      {
        "text": "Home",
        "icon": "fa fa-home fa-fw",
        "mdaIcon": "home",
        "link": "/home/dashboard",
        "selected": true,
        "badge": "12",
        "tabData": {
          "closable": true,
          "color": "red"
        }
      },
      {
        "text": "Email",
        "icon": "fa fa-envelope fa-fw",
        "mdaIcon": "email",
        "link": "/home/email",
        "badge": "21",
        "tabData": {
          "closable": true,
          "color": "red"
        }
      },
      {
        "text": "Profile",
        "icon": "fa fa-user fa-fw",
        "mdaIcon": "account_box",
        "link": "/home/profile",
        "badge": "32",
        "tabData": {
          "closable": true,
          "color": "red"
        }
      },
      {
        "text": "Pages",
        "icon": "fa fa-id-card-o fa-fw",
        "mdaIcon": "pages",
        "expand": false,
        "badge": "45",
        "children": [
          {
            "text": "Sample Form",
            "icon": "fa fa-laptop fa-fw",
            "mdaIcon": "create",
            "link": "/home/sample",
            "badge": "46",
            "tabData": {
              "closable": true,
              "color": "red"
            }
          },
          {
            "text": "Login",
            "mdaIcon": "open_in_browser",
            "icon": "fa fa-sign-in fa-fw",
            "link": "/home/login",
            "badge": "47",
            "tabData": {
              "closable": true,
              "color": "red"
            }
          },
          {
            "text": "Register Employee",
            "icon": "fa fa-address-book-o fa-fw",
            "mdaIcon": "perm_contact_calendar",
            "link": "/home/employee-registration",
            "tabData": {
              "closable": true,
              "color": "red"
            }
          },
          {
            "text": "Issue Status",
            "icon": "fa fa-exclamation fa-fw",
            "mdaIcon": "playlist_add_check",
            "link": "/home/issue-status",
            "tabData": {
              "closable": true,
              "color": "red"
            }
          }
        ]
      },
      {
        "text": "Reports",
        "icon": "fa fa-picture-o fa-fw",
        "mdaIcon": "assignment",
        "expand": false,
        "children": [
          {
            "text": "Issue",
            "icon": "fa fa-ticket fa-fw",
            "mdaIcon": "bug_report",
            "link": "/home/issue",
            "tabData": {
              "closable": true,
              "color": "red"
            }
          },
          {
            "text": "Group By Issue",
            "icon": "fa fa-ticket fa-fw",
            "mdaIcon": "link",
            "link": "/home/group-by-issue",
            "tabData": {
              "closable": true,
              "color": "red"
            }
          }
        ]
      },
      {
        "text": "Charts",
        "icon": "fa fa-bar-chart fa-fw",
        "mdaIcon": "insert_chart",
        "link": "/home/charts"
      },
      {
        "text": "Maps",
        "icon": "fa fa-map-marker fa-fw",
        "mdaIcon": "location_on",
        "link": "/home/maps"
      }, {
        "text": "Dashboard",
        "icon": "fa fa-television fa-fw",
        "mdaIcon": "dashboard",
        "link": "/home/dashboard-template"
      }
    ]
  }
  ngOnInit() {
    this.createCustomSourceData();
  }
  createCustomSourceData() {
    this.customSourceData.title = 'Tree Tab ';
    this.customSourceData.description = 'Amexio Tree Tab enterprise component provides builtin feature to render Menus on left hand side and Dynamic tabs on Right hand side.';
    this.customSourceData.sourceMetadata.htmlUrl = 'enterprise/tree-tab/ee.html';
    this.customSourceData.sourceMetadata.tsUrl = 'enterprise/tree-tab/ee.text';
    this.customSourceData.sourceMetadata.dynamicUrl = 'enterprise/tree-tab/router.text';
}

  onNodeClick(event: any) {
    if (event.data.link) {
      const cmp = event.tabData.addDynamicTab(event.data.text, event.data.tabData.color, event.data.tabData.closable, RouteComponent);
      cmp.navigate(event.data.link);
    }
  }
}
