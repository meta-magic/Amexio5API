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
  selector: 'number-demo',
  template: `
    <h1>Number Input Demo</h1>
    <amexio-tab-view>
      <amexio-tab title="Demo" active="true">
        <div fxLayout="column">
          <div style="width: 300px;">
        <amexio-number-input [fieldLabel]="'Number Input'" name ="age"
                             [placeholder]="'Enter Age'">
        </amexio-number-input>
          </div>


        <!--Text Input Without Label and Icon feedback-->
          <div style="width: 300px;">
        <amexio-number-input name ="age"
                             [placeholder]="'Enter age'"
                             [iconFeedBack]="false"
                             [hasLabel]="false">
        </amexio-number-input>
          </div>

        <!--Text Input with Validations-->
          <div style="width: 300px;">
        <amexio-number-input  [enablePopOver]="true" [fieldLabel]="'Age'" name ="age"
                              [placeholder]="'Enter age'"
                              [allowBlank]="false" [errorMsg] ="'Please enter age'"
                              [minValue]="1"
                              [minErrorMsg]="'age can not be less than 1'"
                              [maxValue]="100"  [maxErrorMsg]="'age can not be greater than 100'"
                              [iconFeedBack]="true"
        >
        </amexio-number-input>
          </div>

        <!--Text Input disabled Property-->
          <div style="width: 300px;">
        <amexio-number-input name ="age"
                             [fieldLabel]="'age'"
                             [placeholder]="'Enter age'"
                             [disabled]="true">
        </amexio-number-input>
          </div>
        <!--Text Input with Font Style : italic-->

          <div style="width: 300px;">
        <amexio-number-input name ="age"
                             [fieldLabel]="'age'"
                             [placeholder]="'Enter age'"
                             [fontStyle]="'italic'">
        </amexio-number-input>
          </div>
        <!--Text Input with Font Family : Times New Roman and Font Size : large-->

          <div style="width: 300px;">
        <amexio-number-input name ="age"
                             [fieldLabel]="'Age'"
                             [placeholder]="'Enter age'"
                             [fontFamily]="'Times New Roman'"
                             [fontSize]="'large'">
        </amexio-number-input>
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
export class NumberDemo {
  name : string;
}

@NgModule({
  declarations: [NumberDemo],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    AmexioFormsModule,
    AmexioLayoutModule,
    RouterModule.forChild([
      { path: '', component: NumberDemo, pathMatch: 'full'}
    ])
  ],
  providers : []
})
export class NumberDemoModule {

}
