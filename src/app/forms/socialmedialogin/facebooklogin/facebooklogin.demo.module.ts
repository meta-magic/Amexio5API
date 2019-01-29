import { FacebookLoginDemo } from './facebooklogin.demo';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AmexioWidgetModule} from 'amexio-ng-extensions';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../../shared.module';
import {HttpClientModule} from '@angular/common/http';
/**
 * Created by sagar on 25/1/19.
 */
@NgModule({
  declarations: [FacebookLoginDemo],
  imports: [CommonModule, FormsModule, HttpClientModule, SharedModule, AmexioWidgetModule, RouterModule.forChild([{
    path: '', component: FacebookLoginDemo, pathMatch: 'full'
  }])],
  providers: []
})
export class FacebookLoginModule {

}
