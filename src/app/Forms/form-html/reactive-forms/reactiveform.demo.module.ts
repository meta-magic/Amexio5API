/**
 * Created by kedar kokil on 22/11/18.
 */

import { NgModule } from '@angular/core';
import { HtmlReactiveFormComponent } from './reactiveform.demo.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../../shared.module';
import { AmexioWidgetModule } from 'amexio-ng-extensions';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
    {  path:'', component: HtmlReactiveFormComponent }
]
@NgModule({
    imports: [CommonModule, FormsModule,HttpClientModule,SharedModule,ReactiveFormsModule,
      ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
        AmexioWidgetModule,RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [HtmlReactiveFormComponent],
    providers: [],
})
export class HtmlReactiveFormComponentModule { }