/**
 * Created by Ashwini on 07/03/19.
 */

import {Component} from '@angular/core';

@Component({
  selector: 'window-ce-demo', templateUrl: './window.demo.html'
})
export class CreativeWindowDemo {
   showSideModal: boolean;
   showSideModal1: boolean;
   showCenterModal:boolean;
   showLoginWindow:boolean;
   showInfoModal:boolean;
   showFrameWindow:boolean;
   showSideModal2: boolean;
   constructor() {
     
 }
 onDragWindowClick(){
  this.showSideModal1 = !this.showSideModal1;
 }
  onSideModalClick(){
   this.showSideModal = !this.showSideModal;
  }
  showInfoModalClick(){
   this.showInfoModal = !this.showInfoModal;
  } 
  onloginWindowClick(){
   this.showLoginWindow = ! this.showLoginWindow;
  }
  onCenterModalClick(){
    this.showCenterModal = ! this.showCenterModal;
  }
  onFrameModalClick(){
   this.showFrameWindow =! this.showFrameWindow;
  }
  onResizeWindowClick() {
    this.showSideModal2 =! this.showSideModal2;
  }
} 

