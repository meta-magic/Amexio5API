import { Injectable } from '@angular/core';

@Injectable()
export class windowContainerService {

    showBasicWindowMaterial: boolean;
    showBasicDraggableWindowMaterial: boolean;
    showBasicWindowNonMaterial: boolean;
    showBasicWindowNonMateialToolbar: boolean;

    showMaxWindowMaterial: boolean;
    showMaxWindowNonMaterial: boolean;

    showClosableMaterial: boolean;
    showClosableNonMaterial: boolean;
    showDraggableNonMaterial: boolean;

    showBasicMinimizeWindowMaterial: boolean;
    showBasicMinimizeSecondWindowMaterial: boolean;

    showMinimizeModelWindow: boolean;
    showBasicWindowNonMaterialRound: boolean;

    showSideModal: boolean;
   showSideModal1: boolean;
   showCenterModal:boolean;
   showLoginWindow:boolean;
   showInfoModal:boolean;
   showFrameWindow:boolean;
   showSideModal2: boolean;
   minimizeWindow: boolean;
   minimizeCeDemo: boolean;
   maximizeWindow: boolean;
   modelCeDemo: boolean;
    constructor() { }


}