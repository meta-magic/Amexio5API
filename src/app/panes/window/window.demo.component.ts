/**
 * Created by Kedar on 5/09/2019.
 */
import { Component, OnInit } from '@angular/core';

import { windowContainerService } from 'src/app/service/windowContainerService.service';

@Component({
  selector: 'window-demo',
  templateUrl:'./window.demo.component.html'
})

export class WindowDemoComponent {

  constructor(private _windowService: windowContainerService) {}

  toggleBasicWindow(data: any) {
    if (data == 'material') {
      this._windowService.showBasicWindowMaterial = !this._windowService.showBasicWindowMaterial;
    }
    else if (data == 'nonmaterial') {
      this._windowService.showBasicWindowNonMaterial = !this._windowService.showBasicWindowNonMaterial;
    }
    else if (data == 'nonmaterialround') {
      this._windowService.showBasicWindowNonMaterialRound = !this._windowService.showBasicWindowNonMaterialRound;
    }
    else {
      this._windowService.showBasicWindowNonMateialToolbar = !this._windowService.showBasicWindowNonMateialToolbar;
    }
  }
  toggleMaxWindow(data: any) {
    if (data == 'material') {
      this._windowService.showMaxWindowMaterial = !this._windowService.showMaxWindowMaterial;
    }
    else {
      this._windowService.showMaxWindowNonMaterial = !this._windowService.showMaxWindowNonMaterial;
    }
  }
  toggleClosable(data: any) {
    if (data == 'material') {
      this._windowService.showClosableMaterial = !this._windowService.showClosableMaterial;
    }
    else {
      this._windowService.showClosableNonMaterial = !this._windowService.showClosableNonMaterial;
    }
  }
  toggleDraggableWindow(data: any) {
    if (data == 'material') {
      this._windowService.showBasicDraggableWindowMaterial = !this._windowService.showBasicDraggableWindowMaterial;
    }
    else if(data == 'nonmaterial') {
      this._windowService.showDraggableNonMaterial =! this._windowService.showDraggableNonMaterial;
    }
    
  }
  toggleMinimizeWindow(data: any) {
    if (data == 'material') {
      this._windowService.showBasicMinimizeWindowMaterial = !this._windowService.showBasicMinimizeWindowMaterial;
    }
  }
  toggleMinimizeSecondWindow(data: any) {
    if (data == 'material') {
      this._windowService.showBasicMinimizeSecondWindowMaterial = !this._windowService.showBasicMinimizeSecondWindowMaterial;
    }
  }
  toggleModelWindow(data: any) {
    if(data === 'model') {
      this._windowService.showMinimizeModelWindow = !this._windowService.showMinimizeModelWindow;

    }

  }
 
}
