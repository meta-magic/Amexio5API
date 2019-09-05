import { Component, OnInit } from '@angular/core';
import { windowContainerService } from '../service/windowContainerService.service';
@Component({
    selector: 'ce-api-window-container',
    templateUrl: 'ceapiWindowContainer.component.html'
})

export class CreativeApiWindowContainerComponent implements OnInit {

    constructor(public windowService: windowContainerService) { }

    ngOnInit() { }
}