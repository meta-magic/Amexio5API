import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AmexioWidgetModule} from 'amexio-ng-extensions';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../../shared.module';
import {HttpClientModule} from '@angular/common/http';
import { GoogleLoginDemo } from './googlelogin.demo';
/**
 * Created by sagar on 25/1/19.
 */
@NgModule({
  declarations: [GoogleLoginDemo],
  imports: [CommonModule, FormsModule, HttpClientModule, SharedModule, AmexioWidgetModule, RouterModule.forChild([{
    path: '', component: GoogleLoginDemo, pathMatch: 'full'
  }])],
  providers: []
})
export class GoogleLoginModule {

}
