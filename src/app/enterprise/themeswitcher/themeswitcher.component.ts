import { Component, OnInit } from "@angular/core";

@Component({
    selector : 'theme-switcher',
    templateUrl : './themeswitcher.component.html'
})
export class ThemeSwitcherDemo implements OnInit{

    toggle = false;
    relative = true;

    vpos = 'top';
    hpos = 'left';
    colsize = 3;

    vposdata = [];
    hposdata = [];
    colsizedata = [];

    constructor(){        
        this.colsizedata.push({"colsize":3});
        this.colsizedata.push({"colsize":2});
        this.colsizedata.push({"colsize":1});
        
        this.hposdata.push({'display':'Right','value':'right'});
        this.hposdata.push({'display':'Left','value':'left'});
        
        this.vposdata.push({'display':'Top','value':'top'});
        this.vposdata.push({'display':'Bottom','value':'bottom'});
        
    }

    ngOnInit(){
        
    }

    switchTheme(){
        this.toggle = !this.toggle;
    }

    onClose(event:any){
        this.toggle = false;
    }
    showTS(event:any){
        this.toggle = true;
    }
}