/**
 * Created by Rashmi on 30/4/18.
 */

import { Component, OnInit } from '@angular/core'
import { DyanmicTabComponent } from './dynamictabdemo.component';
import { HttpClient } from '@angular/common/http';


import { ComponentDataStructure } from '../../../apimetadata/models/component.structure';


@Component({
    selector: 'enhanced-tab-demo',
    templateUrl: './enhancedtab.demo.html',
})
export class EnhancedTabDemo implements OnInit {

    tabArray: any;

    copyMsgArray: any[];
    radioGroupData: any;

    public rate: number = 7;
    public max: number = 10;
    public isReadonly: boolean = false;



    customSourceData: ComponentDataStructure;

    constructor(private http: HttpClient) {
        this.customSourceData = new ComponentDataStructure();
        this.tabArray = [
            "work"
        ]
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


    ngOnInit(): void {
        this.createCustomSourceData();
    }
    createCustomSourceData() {
        this.customSourceData.title = 'Enhanced Tab ';
        this.customSourceData.description = 'Enhanced Tab  component for Angular Apps with multiple configurations such as Tab, Icon support, Scrollable tabs, Closable tab, Vertical Tabs.';
        this.customSourceData.sourceMetadata.htmlUrl = 'layout/tab/enhancedtab/tab.html';
        this.customSourceData.sourceMetadata.tsUrl = 'layout/tab/enhancedtab/tab.text';
        this.customSourceData.sourceMetadata.dynamicUrl = 'layout/tab/enhancedtab/dynamictab.text';
        this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v4-horizontal-enhanced-tab?embed=1&file=app/tabs/enhancedtab/enhancedtab.demo.html&view=editor';
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

    setActiveTabNumber(tab: any) {
        tab.setActiveTab(2);
    }

    //Method to set tab active on the basis of tab title.("profile" is the tab title)

    setActiveTabTitle(tab: any) {
        tab.setActiveTab("profile")
    }

    //Method to close tabs and keep open some of the required tabs.
    closeOtherTabs(tab: any) {
        tab.closeTabs(this.tabArray);
    }
    showClickTab(tab: any) {
        tab.showTab("work");
    }
    hideClickTab(tab: any) {
        tab.hideTab(2);
    }
    disabledClickTab(tab: any) {
        tab.disableTab(["work", "education"]);
    };
    disabledClickTab2(tab: any) {
        tab.disableTab(2);
    }
    deleteTabClick(tab) {
        tab.deleteTab(["work", "education"]);
    }
    deleteTabClick2(tab) {
        tab.deleteTab(2);
    }
    replaceTabClick(tab) {
        tab.replaceTab(2,"Demo");
    }
}


