
import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'searchbox-demo',
  templateUrl : './searchbox.demo.html',
})
export class SearchBox implements OnInit {
  copyMsgArray: any[];

  subject: string = "";
  from: string = "";
  to: string = "";
  localData: any;
  searchdata: any[];
  bindData: any[] = [];
  constructor( private element: ElementRef) {
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

    if (sub1 == "" && frm1 == "" && to1 == "") {
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
