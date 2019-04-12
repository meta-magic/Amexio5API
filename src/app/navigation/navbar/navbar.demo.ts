/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core';

@Component({
  selector: 'navbar-demo', 
  templateUrl:'./navbar.demo.html',
  
})
export class NavbarDemo {
  topMenuData:any;
  navBarData: any;
  constructor() {
    this.topMenuData = JSON.parse(`[{
      "text": "About Us",
      "submenus": [{
        "text": "Amexio Canvas",
        "link": "https://amexio.tech/amexio-canvas"
         
      }, {
        "text": "Amexio Themes",
        "link": "https://amexio.tech/amexio-themes"
      }]
    }]
`);

  this.navBarData = JSON.parse(`[{
    "text": "File",
    "submenus": [{
      "text": "New",
      "link": "new",
      "submenus":[{
        "text": "Project",
        "link": "project"
      },
      {
        "text": "others",
        "link": "others"
                }]
    },
    {
     "text": "Open",
     "link": "open"
    },
    {
      "text": "Quit",
      "link": "quit"
    }
  ]},
   {
     "text": "Edit",
     "link": "edit",
     "submenus": [
       {
         "text": "Delete",
         "link": "delete"
       },
       {
         "text": "Refresh",
         "link": "refresh"
       }
     ]
   },
   {
     "text": "Help",
     "link": "help",
     "submenus":[
       {
         "text": "contents",
         "link": "contents"
       },
       {
         "text": "Search",
         "link": "search",
         "submenus": [
           {
             "text": "Text",
             "link": "text",
             "submenus":[
               {
                 "text": "workspace",
                 "link": "workspace"
               }
             ]
           },
          {
            "text": "File",
            "link": "file"
          }
        ]
       }
     ]

   },
   {
     "text": "Actions",
     "link": "actions",
     "submenus": [
       {
         "text": "Edit",
         "link": "edit",
         "submenus": [
           {
             "text": "Save",
             "link": "save"
           },
          {
            "text": "Update",
            "link": "update"
          }
          ]
       },
       {
         "text": "Others",
         "link": "others",
         "submenus": [
           {
             "text": "Delete",
             "link": "delete"
           }]
       }
     ]
   }
]
`);


  }
  
  onClick(event:any){
  }

  externalLink(event:any){
  }
}


