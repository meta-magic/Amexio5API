import { Component, OnInit } from '@angular/core';
import { windowContainerService } from '../service/windowContainerService.service';
@Component({
    selector: 'api-window-container',
    templateUrl: 'apiWindowContainer.component.html'
})

export class ApiWindowContainerComponent implements OnInit {

    constructor(public windowService: windowContainerService) { }

    ngOnInit() { }
}