import { Component, OnInit } from "@angular/core";

@Component({
    selector : 'theme-switcher',
    templateUrl : './themeswitcher.component.html'
})
export class ThemeSwitcherDemo implements OnInit{

    toggle = false;
    colsize = 3;
    colsizedata : any[];
    constructor(){
        this.colsizedata = [];
        this.colsizedata.push({"colsize":3});
        this.colsizedata.push({"colsize":2});
        this.colsizedata.push({"colsize":1});
    }

    ngOnInit(){
        
    }

    switchTheme(){
        this.toggle = !this.toggle;
    }

    onColSizeSelected(event:any){

    }
}