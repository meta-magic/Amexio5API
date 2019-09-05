/**
 * Created by Ashwini on 07/03/19.
 */

import {Component} from '@angular/core';
import { windowContainerService } from 'src/app/service/windowContainerService.service';


@Component({
  selector: 'window-ce-demo', templateUrl: './window.demo.html'
})
export class CreativeWindowDemo {
   

   constructor(private _windowService: windowContainerService) {
     
 }
 onDragWindowClick(){
  this. _windowService.showSideModal1 = !this. _windowService.showSideModal1;
 }
  onSideModalClick(){
   this. _windowService.showSideModal = !this. _windowService.showSideModal;
  }
  showInfoModalClick(){
   this. _windowService.showInfoModal = !this. _windowService.showInfoModal;
  } 
  onloginWindowClick(){
   this. _windowService.showLoginWindow = ! this. _windowService.showLoginWindow;
  }
  onCenterModalClick(){
    this. _windowService.showCenterModal = ! this. _windowService.showCenterModal;
  }
  onFrameModalClick(){
   this. _windowService.showFrameWindow =! this. _windowService.showFrameWindow;
  }
  onResizeWindowClick() {
    this. _windowService.showSideModal2 =! this. _windowService.showSideModal2;
  }
  onMinimizeWindowClick() {
    this. _windowService.minimizeWindow = !this. _windowService.minimizeWindow;
  }
  onMinimizeCEClick() {
    this. _windowService.minimizeCeDemo = !this. _windowService.minimizeCeDemo;
  }

  onMaximizeWindowClick() {
    this. _windowService.maximizeWindow = true;
  }
  onMinimizeModelWindowClick() {
    this. _windowService.modelCeDemo = !this. _windowService.modelCeDemo;
  }
} 

