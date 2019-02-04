import { NgModule } from "@angular/core";
import { AmexioWidgetModule } from "amexio-ng-extensions";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "../shared.module";
import { DRAGDROP_ROUTE } from "./DragDrop.routes";

import { RouterModule } from "@angular/router";

 
/**
 * Created by kedar on 4/2/19.
 */
@NgModule({
    declarations: [ 
    
    ],
    imports: [
        CommonModule, 
        FormsModule, 
        HttpClientModule, 
        SharedModule.forRoot(),
        AmexioWidgetModule,
        RouterModule.forChild(DRAGDROP_ROUTE),
    ],
    providers: []
})
export class FormsActionModule {

}
