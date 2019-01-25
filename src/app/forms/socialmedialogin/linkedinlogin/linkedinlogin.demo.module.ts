import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AmexioWidgetModule} from 'amexio-ng-extensions';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../../shared.module';
import {HttpClientModule} from '@angular/common/http';
import { LinkedinLoginDemo } from './linkedinlogin.demo';
/**
 * Created by sagar on 25/1/19.
 */
@NgModule({
  declarations: [LinkedinLoginDemo],
  imports: [CommonModule, FormsModule, HttpClientModule, SharedModule, AmexioWidgetModule, RouterModule.forChild([{
    path: '', component: LinkedinLoginDemo, pathMatch: 'full'
  }])],
  providers: []
})
export class LinkedinLoginModule {

}
