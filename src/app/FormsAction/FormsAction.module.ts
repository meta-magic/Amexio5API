import { NgModule } from "@angular/core";
import { AmexioWidgetModule  } from "amexio-ng-extensions";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "../shared.module";
import { FORMSACTION_ROUTE } from "./FormsAction.routes";

import { RouterModule } from "@angular/router";



import {NotificationDemo } from './notification/notification.demo';
import { ProgressBarDemo } from "./progressbar/progressbar.demo";
import { PaginatorDemo } from "./paginator/paginator.demo";
import { FloatingGroupButtonDemo } from "./floatinggroup/floatinggroupbutton.demo";
import { FloatingButtonDemo } from './floatingbutton/floatingbutton.demo';
import { ButtonGroupDemo } from './buttongroup/buttongroup.demo';
import { ButtonDropDownDemo } from './buttondropdown/buttondropdown.demo';
import { ButtonDemo } from './button/button.demo';

 
/**
 * Created by kedar on 4/2/19.
 */
@NgModule({
    declarations: [ NotificationDemo , ProgressBarDemo , PaginatorDemo, FloatingGroupButtonDemo,
        FloatingButtonDemo,ButtonGroupDemo, ButtonDropDownDemo, ButtonDemo
    
    ],
    imports: [
        CommonModule, 
        FormsModule, 
        HttpClientModule, 
        SharedModule.forRoot(),
        AmexioWidgetModule,
        RouterModule.forChild(FORMSACTION_ROUTE),
    ],
    providers: []
})
export class FormsActionModule {

}
