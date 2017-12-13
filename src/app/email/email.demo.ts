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
  selector: 'email-demo',
  template: `
    <h1>Email Input Demo</h1>
    <amexio-tab-view>
      <amexio-tab title="Demo" active="true">
        <div fxLayout="column">
          <div style="width: 300px;">
            <amexio-email-input [fieldLabel]="'Email Id'" name ="email"
                                [placeholder]="'Enter Email Id'"
                                [allowBlank]="false" [errorMsg] ="'Please enter Email Id'"
                                [iconFeedBack]="true">
            </amexio-email-input>
          </div>
        <!--Text Input with Font Style-->

          <div style="width: 300px;">
            <amexio-email-input [fieldLabel]="'Email Id'" name ="email"
                                [placeholder]="'Enter Email Id'"
                                [iconFeedBack]="true"
                                [fontStyle]="'italic'">
            </amexio-email-input>
          </div>

        <!--Text Input with Font Family-->

          <div style="width: 300px;">
            <amexio-email-input name ="email" [fieldLabel]="'Email Id'"
                                [placeholder]="'Enter Email Id'"
                                [fontFamily]="'Times New Roman'"
                                [fontSize]="'large'">
            </amexio-email-input>
          </div>

        <!--Text Input disabled Property-->

          <div style="width: 300px;">
            <amexio-email-input name ="email" [fieldLabel]="'Email Id'"
                                [placeholder]="'Enter Email Id'"
                                [disabled]="true">
            </amexio-email-input>
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
export class EmailDemo {
  name : string;
}

@NgModule({
  declarations: [EmailDemo],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    AmexioFormsModule,
    AmexioLayoutModule,
    RouterModule.forChild([
      { path: '', component: EmailDemo, pathMatch: 'full'}
    ])
  ],
  providers : []
})
export class EmailDemoModule {

}
