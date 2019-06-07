import { NgModule } from "@angular/core";
import { AmexioWidgetModule } from "amexio-ng-extensions";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "../shared.module";
import { PANES_ROUTE } from "./panes.routes";
import { RouterModule } from "@angular/router";

import { WindowDemoComponent } from './window/window.demo.component';
import { StepBoxDemoComponent } from './steps/stepbox/stepbox.demo'
import { StepBoxIconComponent } from "./steps/stepbox-icon/stepbox.icon.demo";
import { ClosableTabDemo } from "./tab/closabletab/closabletab.demo";
import { PanelDemoComponent } from "./panel/panel.demo";
import { FieldSetDemoComponent } from "./fieldset/fieldset.demo.component";
import { DialogueDemoComponent } from "./dialogue/dialogue.demo.component";
import { CarouselDemoComponent } from "./carousel/carousel.demo";
import { EnhancedTabDemo } from "./tab/enhancedtab/enhancedtab.demo";
import { EnhancedVerticalTabDemo } from "./tab/enhancedverticaltab/enhancedverticaltab.demo";
import { ScrollableTabDemo } from "./tab/scrollabletab/scrollabletab.demo";
import { IconWithTabDemo } from "./tab/iconwithtab/iconwithtab.demo";
import { VerticalRightTabDemo } from "./tab/verticalrighttab/verticalrighttab.demo";
import { VerticalTabDemo } from "./tab/verticaltab/verticaltab.demo";
import {TabDemo} from './tab/basictab/tab.demo';
import { DyanmicTabComponent } from "./tab/enhancedtab/dynamictabdemo.component";
import { DyanmicVerticalTabComponent } from "./tab/enhancedverticaltab/dynamicverticaltabdemo.component";
import {OverlayDemoComponent} from "./overlaycontainer/overlay.demo.component";
import { ArcDemoComponent } from "./arc/arc.demo.component";
import {DarkmodeDemoComponent} from "./darkmode/darkmode.demo.component";
import {SlidingPanelDemo} from "./slidingpanel/animatedslidingpane.demo";
import {FloatingPanelDemoComponent} from "./floatingpanel/floatingpanel.demo"
/**
 * Created by kedar on 1/2/19.
 */
@NgModule({
    declarations: [WindowDemoComponent, DarkmodeDemoComponent, StepBoxIconComponent, StepBoxDemoComponent,
        ClosableTabDemo, PanelDemoComponent, FloatingPanelDemoComponent,FieldSetDemoComponent,DialogueDemoComponent,
        CarouselDemoComponent, EnhancedTabDemo,EnhancedVerticalTabDemo,ScrollableTabDemo,
        IconWithTabDemo, VerticalRightTabDemo,VerticalTabDemo, TabDemo, DyanmicTabComponent,
        DyanmicVerticalTabComponent, OverlayDemoComponent, ArcDemoComponent, SlidingPanelDemo


    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        SharedModule.forRoot(),
        AmexioWidgetModule,
        RouterModule.forChild(PANES_ROUTE),
    ],
    providers: [],
    entryComponents:[DyanmicTabComponent, DyanmicVerticalTabComponent, ArcDemoComponent]
})
export class PanesModule {

}
