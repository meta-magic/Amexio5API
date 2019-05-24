import { Component, OnInit } from "@angular/core";

@Component({
    selector : 'theme-switcher',
    templateUrl : './themeswitcher.component.html'
})
export class ThemeSwitcherDemo implements OnInit{

    toggle = false;
    
    constructor(){

    }

    ngOnInit(){
        
    }

    switchTheme(){
        this.toggle = !this.toggle;
    }
}