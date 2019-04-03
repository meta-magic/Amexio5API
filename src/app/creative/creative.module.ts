import { NgModule } from "@angular/core";
import { AmexioWidgetModule } from "amexio-ng-extensions";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "../shared.module";
import { CREATIVE_ROUTE } from "./creative.routes";


import { RouterModule } from "@angular/router";
import { CreativeCardDemo } from "./cardce/card.demo";
import { CreativeWindowDemo } from "./windowce/window.demo";
import { CreativeFormDemo } from "./formce/form.demo";
import { CreativeCircularProgressBarDemo } from './progressce/progressce.component';
import { HomePageDemo } from './homepage/homepage.demo';

/**
 * Created by kedar on 6/2/19.
 */
@NgModule({
    declarations: [CreativeCardDemo, CreativeWindowDemo, CreativeFormDemo, CreativeCircularProgressBarDemo, HomePageDemo],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        SharedModule.forRoot(),
        AmexioWidgetModule,
        RouterModule.forChild(CREATIVE_ROUTE),
    ],
    providers: []
})
export class CreativeModule {

}
