/**
 * Created by kedar on 28/8/19.
 */

import { Component } from '@angular/core';
import { windowContainerService } from 'src/app/service/windowContainerService.service';

@Component({
  selector: 'taskbar-demo',
  templateUrl: './taskbar.demo.html',
})
export class TaskbarDemo {

  display = false;
 constructor(public _taskBarService: windowContainerService) {

 }

 showName() {

  this._taskBarService.displayTaskbar = true;
 }
 hideName() {
  this._taskBarService.displayTaskbar = false;
   
 }


}



