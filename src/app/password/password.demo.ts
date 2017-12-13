/**
 * Created by pratik on 4/12/17.
 */
import {NgModule, Component} from '@angular/core'
import {RouterModule} from '@angular/router'
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {CommonModule} from "@angular/common";
import {AmexioFormsModule, AmexioLayoutModule} from "amexio-ng-extensions";

@Component({
  selector: 'password-demo',
  template: `
    <h1>Password Input Demo</h1>
    <amexio-tab-view>
      <amexio-tab title="Demo" active="true">
        <div fxLayout="column">
          <div style="width: 300px;">
        <amexio-password-input [enablePopOver]="true"  [fieldLabel]="'Password Input'" name ="password"
                               [placeholder]="'Enter Password'"
                               [allowBlank]="false"
                               [errorMsg] ="'Please enter password'"
                               [minLength]="6"
                               [minErrorMsg]="'Minimum 6 char required'"
                               [maxLength]="32"
                               [maxErrorMsg]="'Maximum 32 char allowed'"
                               [iconFeedBack]="true">
        </amexio-password-input>
          </div>

        <!--Password Input without label-->
          <div style="width: 300px;">
        <amexio-password-input name ="password"
                               [placeholder]="'Enter Password'"
                               [allowBlank]="false"
                               [errorMsg] ="'Please enter password'"
                               [minLength]="6"
                               [minErrorMsg]="'Minimum 6 char required'"
                               [maxLength]="32"
                               [maxErrorMsg]="'Maximum 32 char allowed'"
                               [iconFeedBack]="true"
                               [hasLabel]="false">
        </amexio-password-input>
          </div>
        </div>
      </amexio-tab>
      <amexio-tab title="Source">
        Code
      </amexio-tab>
      <amexio-tab title="Live">
        Live
      </amexio-tab>
    </amexio-tab-view>
  `
})
export class PasswordDemo {
  name : string;
}

@NgModule({
  declarations: [PasswordDemo],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    AmexioLayoutModule,
    AmexioFormsModule,
    RouterModule.forChild([
      { path: '', component: PasswordDemo, pathMatch: 'full'}
    ])
  ],
  providers : []
})
export class PasswordDemoModule {

}
