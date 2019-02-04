import { NgModule } from "@angular/core";
import { AmexioWidgetModule } from "amexio-ng-extensions";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "../shared.module";
import { FORMS_ROUTE } from "./forms.routes";

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from "@angular/forms";

import { RouterModule } from "@angular/router";

import { HtmlReactiveFormComponent } from "./form-html/reactive-forms/reactiveform.demo.component";
import { reactiveFormComponent } from "./reactiveform/reactiveform.demo.component";
import { FormDemoComponent } from "./form/form.demo";
import { HtmlFormDemoComponent } from './form-html/template-driven/form.demo';


/**
 * Created by kedar on 1/2/19.
 */
@NgModule({
    declarations: [HtmlReactiveFormComponent, reactiveFormComponent, FormDemoComponent,
        HtmlFormDemoComponent],
    imports: [
        CommonModule, 
        FormsModule, 
        ReactiveFormsModule,
        HttpClientModule, 
        SharedModule, 
        AmexioWidgetModule,
        RouterModule.forChild(FORMS_ROUTE),
    ],
    providers: []
})
export class FormsDemoModule {

}
