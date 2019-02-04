import { Routes } from '@angular/router';



import { HtmlReactiveFormComponent } from "./form-html/reactive-forms/reactiveform.demo.component";
import { reactiveFormComponent } from "./reactiveform/reactiveform.demo.component";
import { FormDemoComponent } from "./form/form.demo";
import { HtmlFormDemoComponent } from './form-html/template-driven/form.demo';

export const FORMS_ROUTE: Routes = [

    {
        path: 'html-reactive-form', component: HtmlReactiveFormComponent,
    },
    {
        path: 'reactive-form', component: reactiveFormComponent,
    },
    {
        path: 'form-demo', component: FormDemoComponent,
    },
    {
        path: 'html-form-demo', component: HtmlFormDemoComponent,
    }

]