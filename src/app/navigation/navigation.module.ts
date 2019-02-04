import { NgModule } from "@angular/core";
import { AmexioWidgetModule  } from "amexio-ng-extensions";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "../shared.module";
import { NAVIGATION_ROUTE } from "./navigation.routes";

import { RouterModule } from "@angular/router";
import { MenuBarDemo } from "./menubar/menubar.demo";


/**
 * Created by kedar on 4/2/19.
 */
@NgModule({
    declarations: [ MenuBarDemo
    
    ],
    imports: [
        CommonModule, 
        FormsModule, 
        HttpClientModule, 
        SharedModule.forRoot(),
        AmexioWidgetModule,
        RouterModule.forChild(NAVIGATION_ROUTE),
    ],
    providers: []
})
export class FormsActionModule {

}
