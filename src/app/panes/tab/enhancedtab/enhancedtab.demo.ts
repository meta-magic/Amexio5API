/**
 * Created by Rashmi on 30/4/18.
 */

import { Component } from '@angular/core'
import { DyanmicTabComponent } from './dynamictabdemo.component';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'enhanced-tab-demo', 
    templateUrl: './enhancedtab.demo.html',
})
export class EnhancedTabDemo {
    htmlCode: string;
    tabArray: any;
    typeScriptCode: string;
    copyMsgArray: any[];
    radioGroupData: any;
    typeScriptCode2: string;
    public rate: number = 7;
    public max: number = 10;
    public isReadonly: boolean = false;
    constructor(private http: HttpClient) {
        this.tabArray = [
            "work"
         ]
        this.getHtmlAndTypeScriptCode();
        this.radioGroupData = {
            response: {
                data: [{
                    gender: 'Male', genderId: 'male'
                }, {
                    gender: 'Female', genderId: 'female'
                },]
            }
        }
    }

    //TO LOAD HTML AND TYPESCRIPT CODE
    getHtmlAndTypeScriptCode() {
        let responseHtml: any;
        let responseTs: any;
        let code: any;
        //HTML FILE
        this.http.get('assets/data/code/layout/tab/enhancedtab/tab.html',{ responseType: 'text' }).subscribe(data => {
            responseHtml = data;
        }, error => {
        }, () => {
            this.htmlCode = responseHtml;
        });

        //TS FILE
        this.http.get('assets/data/code/layout/tab/enhancedtab/tab.text',{ responseType: 'text' }).subscribe(data => {
            responseTs = data;
        }, error => {
        }, () => {
            this.typeScriptCode = responseTs;
        });

        //TS FILE
        this.http.get('assets/data/code/layout/tab/enhancedtab/dynamictab.text',{ responseType: 'text' }).subscribe(data => {
            code = data;
        }, error => {
        }, () => {
            this.typeScriptCode2 = code;
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

    tabcount: number = 4;
    addtab(tab: any) {
        this.tabcount++;
        let title = 'Tab ' + this.tabcount;
        let cmp = tab.addDynamicTab(title, "red", true, DyanmicTabComponent);
        cmp.content = "Content of " + title;
    }

    //Method to close all tabs alltogether

  closeAllTabs(tab: any) {
    tab.closeAllTabs();
  }

  //Method to set tab active on the basis of tab sequence.(2 is the tab position from left to right)

  setActiveTabNumber(tab: any){
    tab.setActiveTab(2);
  }

  //Method to set tab active on the basis of tab title.("profile" is the tab title)

  setActiveTabTitle(tab: any) {
    tab.setActiveTab("profile")
  }

   //Method to close tabs and keep open some of the required tabs.
   closeOtherTabs(tab: any){
   tab.closeTabs(this.tabArray);
  }
}


