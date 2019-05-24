import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector : 'concept-page',
    templateUrl : './concept.component.html'
})
export class ConceptPage {

    constructor(public router: Router){
        
    }

    previous(){

    }

    next(){
        this.router.navigate(['getting-started']);
    }
}