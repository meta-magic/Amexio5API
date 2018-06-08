
import { Component, HostListener, ElementRef, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'searchbox-demo',
  template: `
      <amexio-card header="true">
        <amexio-header>
           Search Box
        </amexio-header>
        <amexio-body>
        
          <p>Search Box component can be  used to search data with auto complete recommmendation list and advance search facility providing advance search form.</p>
          <amexio-tab-view>
            <amexio-tab title="Demo" active="true">
            <amexio-row>
            <amexio-column [size]=12>
                <amexio-card [header]="true" [footer]="false" [body-height]="'500px'">
                    <amexio-header>
                        Search Box 
                    </amexio-header>
                    <amexio-body>

                    <amexio-searchbox 
                    [place-holder]="'Search'" 
                    [display-field]="'subject'"
                    [data]="bindData"
                     [width]="250"
                    >
                    <amexio-searchbox-options #search [title]="'Advance search'">    
                    
                        <amexio-text-input field-label="Subject:"
                   name="subject"
                   place-holder="Enter subject"
                   icon-feedback="true"
                   [(ngModel)]="subject"
                   >
                     </amexio-text-input>
                     <amexio-text-input field-label="From:"
                   name="from"
                   place-holder="Emailid"
                   icon-feedback="true"
                   [(ngModel)]="from"
                   >
                     </amexio-text-input>
                     <amexio-text-input field-label="To:"
                   name="To"
                   place-holder="Emailid"
                   icon-feedback="true"
                   [(ngModel)]="to"
                   >
                     </amexio-text-input>
                        <amexio-row><amexio-column [size]="'12'"></amexio-column></amexio-row>
                        <amexio-button
                        [label]="'Filter'"
                        [type]="'theme-color'"
                        [tooltip]="'toolTip'"
                        [size]="'medium'"
                        (onClick)="filter(search)"
                        >
                   </amexio-button>
                    </amexio-searchbox-options>
  

                    
                    </amexio-searchbox>
                      
                    
        </amexio-body>
                </amexio-card>
                
            </amexio-column>
        </amexio-row>    
            </amexio-tab>
            <amexio-tab title="API Reference">
              <amexio-datagrid title="Properties <amexio-searchbox> " [enable-column-fiter]="false"
                               [http-method]="'get'"
                               [http-url]="'assets/apireference/forms/searchbox.json'" 
                               [data-reader]="'properties'"
                               [enable-data-filter]="false" >
                <amexio-data-table-column [width]="15" [data-index]="'name'" [data-type]="'string'" [hidden]="false"
                                          [text]="'Name'"></amexio-data-table-column>
                <amexio-data-table-column [width]="20" [data-index]="'version'" [data-type]="'string'" [hidden]="false"
                                          [text]="'Version'"></amexio-data-table-column>                                                  
                <amexio-data-table-column [width]="10" [data-index]="'type'" [data-type]="'string'" [hidden]="false"
                                          [text]="'Type'"></amexio-data-table-column>
                <amexio-data-table-column [width]="10" [data-index]="'default'" [data-type]="'string'" [hidden]="false"
                                          [text]="'Default'"></amexio-data-table-column>
                <amexio-data-table-column [width]="65" [data-index]="'description'" [data-type]="'string'" [hidden]="false"
                                          [text]="'Description'"></amexio-data-table-column>
              </amexio-datagrid>
              <br>
              <amexio-datagrid title="Events" [http-method]="'get'" 
                               [http-url]="'assets/apireference/forms/searchbox.json'" [data-reader]="'events'"
                               [enable-data-filter]="false">
                <amexio-data-table-column [width]="20"[data-index]="'name'" [data-type]="'string'" [hidden]="false"
                                          [text]="'Name'"></amexio-data-table-column>
                <amexio-data-table-column [width]="80" [data-index]="'description'" [data-type]="'string'" [hidden]="false"
                                          [text]="'Description'"></amexio-data-table-column>
              </amexio-datagrid>
              
            </amexio-tab>
            <amexio-tab title="Source">
              <div style="overflow-y: scroll">
              <amexio-vertical-tab-view>
                <amexio-tab title="HTML" [active]="true">
                  <ng-container *ngIf="htmlCode">
                    <!--<clip-copy [htmlCode]="htmlCode" (onClick)="onCopyClick()"></clip-copy>-->
                    <prism-block [code]="htmlCode" [language]="'html'"></prism-block>
                  </ng-container>
                </amexio-tab>
                <amexio-tab title="Type Script">
                  <ng-container *ngIf="typeScriptCode">
                    <prism-block [code]="typeScriptCode" [language]="'typescript'"></prism-block>
                  </ng-container>
                </amexio-tab>
              </amexio-vertical-tab-view>
              </div>
            </amexio-tab>
            <amexio-tab title="Live">
             <p align="center">Amexio Sandbox</p>
  <iframe style="width: 100%; height: 600px" src=""></iframe>
            </amexio-tab>
          </amexio-tab-view>
        </amexio-body>
      </amexio-card>
   
    `
})

export class SearchBox implements OnInit {
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];

  subject: string = "";
  from: string = "";
  to: string = "";
  localData: any;
  searchdata: any[];
  bindData: any[] = [];
  constructor(private http: HttpClient, private element: ElementRef) {
    this.localData = [
      {
        "from": "araf.karsh@metamagic.in",
        "subject": "amexio release plans",
        "to": "ketan.gote@metamagic.in"
      },
      {
        "from": "araf.karsh@metamagic.in",
        "subject": "visual studio extension",
        "to": "engineering@metamagic.in"
      },
      {
        "from": "ketan.gote@metamagic.in",
        "subject": "amexio on angular.io",
        "to": "engineering@metamagic.in "
      },
      {
        "from": "deepali.arvind@metamagic.in",
        "subject": "amexio npm download spike",
        "to": "ketan.gote@metamagic.in"
      },{
        "from": "dattaram.gawas@metamagic.in ",
        "subject": "building web components",
        "to": "ketan.gote@metamagic.in"
      },
      {
        "from": "sagar.jadhav@metamagic.in",
        "subject": "showcase app url",
        "to": "deepali.arvind@metamagic.in"
      },
      {
        "from": "ketan.gote@metamagic.in",
        "subject": "spring cloud stream demo",
        "to": "deepali.arvind@metamagic.in"
      },
      {
        "from": "ketan.gote@metamagic.in",
        "subject": "spring microservice demo",
        "to": "deepali.arvind@metamagic.in"
      },
      {
        "from": "ketan.gote@metamagic.in",
        "subject": "spring kafka integration",
        "to": "sagar.jadhav@metamagic.in"
      },
      {
        "from": "ankita.Jain@metamagic.in",
        "subject": "jsr Implementation",
        "to": "ketan.gote@metamagic.in"
      },
      {
        "from": "mahesh.pardeshi@metamagic.in",
        "subject": "axon cqrs demo",
        "to": "ketan.gote@metamagic.in"
      },
      {
        "from": "pratik.kelwalkar@metamagic.in",
        "subject": "angular routing",
        "to": "sagar.jadhav@metamagic.in"
      },
      {
        "from": "dattaram.gawas@metamagic.in",
        "subject": "angular pipes",
        "to": "ashwini.agre@metamagic.in"
      },
      {
        "from": "ketan.gote@metamagic.in",
        "subject": "ribbon, hysterix",
        "to": "dattaram.gawas@metamagic.in "
      },
      {
        "from": "deepali.arvind@metamagic.in",
        "subject": "eureka server using spring cloud",
        "to": "ketan.gote@metamagic.in"
      },
      {
        "from": "kedar.kokil@metamagic.in",
        "subject": "rx java",
        "to": "ashwini.agre@metamgic.in"
      },
      {
        "from": "manisha.boddu@metamgic.in",
        "subject": "spring + mongo db",
        "to": "ketan.gote@metamagic.in"
      },{
        "from": "araf.karsh@metamagic.in",
        "subject": "flux / redux architecture",
        "to": "ketan.gote@metamgic.in"
      },{
        "from": "ketan.gote@metamagic.in",
        "subject": "desire platform git repos",
        "to": "rashmi.thakkar@metamagic.in"
      },{
        "from": "ashwini.agre@metamagic.in",
        "subject": "pwa from react to angular/ionic",
        "to": "sagar.jadhav@metamagic.in"
      },{
        "from": "rashmi.thakkar@metamagic.in",
        "subject": "messages in platform",
        "to": "ankita.jain@metamagic.in"
      },{
        "from": "araf.karsh@metamagic.in",
        "subject": "typeScript secret weapon...",
        "to": "sagar.jadhav@metamagic.in"
      },{
        "from": "araf.karsh@metamagic.in",
        "subject": "visual studio code plugin",
        "to": "sagar.jadhav@metamagic.in"
      },{
        "from": "kedar.kokil@metamagic.in",
        "subject": "hashing algo",
        "to": "dattaram.gawas@metamagic.in "
      },{
        "from": "sagar.jadhav@metamagic.in ",
        "subject": "vs code for windows, linux and mac os",
        "to": "dattaram.gawas@metamagic.in "
      },{
        "from": "dattaram.gawas@metamagic.in",
        "subject": "chart library - open source",
        "to": "rashmi.thakkar@metamagic.in"
      },{
        "from": "ankita.jain@metamagic.in",
        "subject": "tdom uptos in angular",
        "to": "manisha.boddu@metamagic.in"
      },{
        "from": "dattaram.gawas@metamagic.in ",
        "subject": "hampi release",
        "to": "sagar.jadhav@metamagic.in"
      },{
        "from": "manisha.boddu@metamagic.in",
        "subject": "building web components",
        "to": "ankita.jain@metamagic.in"
      },{
        "from": "ketan.gote@metamagic.in",
        "subject": "spring + redis ",
        "to": "deepali.arvind@metamagic.in"
      },{
        "from": "rashmi.thakkar@metamgic.in",
        "subject": "amexio plans",
        "to": "ketan.gote@metamagic.in"
      }

    ];
    this.getHtmlAndTypeScriptCode();
    this.searchdata = this.localData;
   }

  //this function is called on hit of filter and it filters entered data 
  filter(search: any) {

    this.bindData = [];
    let sub1 = this.subject;
    let to1 = this.to;
    let frm1 = this.from;
    debugger;
    if (sub1 == "" && frm1 == "" && to1 == "") {
      debugger;
      this.bindData = this.searchdata;

    }
    else {
      this.searchdata.forEach(element => {
        //st
        if ((sub1.length > 0 && to1.length > 0)) {
          if (this.contains(element.subject, sub1) && this.contains(element.to, to1)) {
            this.bindData.push(element);
          }
        }
        else if ((sub1.length > 0) && (this.contains(element.subject, sub1))) {
          this.bindData.push(element);
        }
        else if ((to1.length > 0) && (this.contains(element.to, to1))) {
          this.bindData.push(element);
        }

        else if ((frm1.length > 0 && to1.length > 0)) {
          if (this.contains(element.from, frm1) && this.contains(element.to, to1)) {
            this.bindData.push(element);
          }
        }

        else if ((sub1.length > 0 && frm1.length > 0 && to1.length > 0)) {
          if (this.contains(element.from, frm1) && this.contains(element.to, to1) && this.contains(element.subject, sub1)) {
            this.bindData.push(element);
          }
        }
      });

    }
    search.closeSearchForm();
  }
//compares data with entered data
  contains(value1: any, value2: string) {
    return ((value1 + "").startsWith(value2))
  }


  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;

    //HTML FILE
    this.http.get('assets/data/code/forms/searchbox/form.html', { responseType: 'text' }).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/forms/searchbox/form.text', { responseType: 'text' }).subscribe(data => {
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

  ngOnInit() {
    this.bindData = JSON.parse(JSON.stringify(this.localData))
  }
}