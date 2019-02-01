import { NgModule } from "@angular/core";
import { AmexioWidgetModule } from "amexio-ng-extensions";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "../shared.module";
import { PANES_ROUTE } from "./panes.routes";
import { RouterModule } from "@angular/router";
import {WindowDemoComponent} from './window/window.demo.component';

/**
 * Created by kedar on 31/1/19.
 */
@NgModule({
    declarations: [WindowDemoComponent
        
        
        ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        SharedModule,
        AmexioWidgetModule,
        RouterModule.forChild(PANES_ROUTE),
    ],
    providers: []
})
export class PanesModule {

}
