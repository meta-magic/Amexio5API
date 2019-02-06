import { NgModule } from "@angular/core";
import { AmexioWidgetModule } from "amexio-ng-extensions";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "../shared.module";
import { CREATIVE_ROUTE } from "./creative.routes";


import { RouterModule } from "@angular/router";
import { CreativeCardDemo } from "./cardce/card.demo";

/**
 * Created by kedar on 6/2/19.
 */
@NgModule({
    declarations: [CreativeCardDemo],
    imports: [
        CommonModule, 
        FormsModule, 
        HttpClientModule, 
        SharedModule.forRoot(), 
        AmexioWidgetModule,
        RouterModule.forChild(CREATIVE_ROUTE),
    ],
    providers: []
})
export class CreativeModule {

}
