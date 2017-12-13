/**
 * Created by pratik on 4/12/17.
 */
import {NgModule, Component} from '@angular/core'
import {RouterModule} from '@angular/router'
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {CommonModule} from "@angular/common";
import {AmexioFormsModule, AmexioLayoutModule, AmexioWidgetModule} from "amexio-ng-extensions";

@Component({
  selector: 'text-demo',
  template: `
    <h1>Text Input Demo</h1>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
            <div fxLayout="column">
              <div style="width: 300px;">
                <amexio-text-input [fieldLabel]="'First Name'" name ="name"
                                   [placeholder]="'Enter First name'"
                                   [iconFeedBack]="true">
                </amexio-text-input>
              </div>

              <div style="width: 300px;">
                <amexio-text-input  [fieldLabel]="'Last Name'" name ="name"
                                    [placeholder]="'Enter Last name'"
                                    [allowBlank]="false" [errorMsg] ="'Please enter last name'"
                                    [minLength]="1" [minErrorMsg]="'Minimum 1 char required'"
                                    [maxLength]="10"  [maxErrorMsg]="'Maximum 10 char allowed'"
                                    [iconFeedBack]="true"  [enablePopOver]="true">
                </amexio-text-input>
              </div>

              <div style="width: 300px;">

                <amexio-text-input name ="name"
                                   [fieldLabel]="'Username'"
                                   [placeholder]="'Login'"
                                   [pattern]="'[a-z]'"
                                   [iconFeedBack]="true">
                </amexio-text-input>
              </div>
              
              <div style="width: 300px;">
                <amexio-text-input name ="name"
                                   [placeholder]="'Enter name'"
                                   [iconFeedBack]="false"
                                   [hasLabel]="false">
                </amexio-text-input>
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
export class TextDemo {
  name : string;
}

@NgModule({
  declarations: [TextDemo],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    AmexioLayoutModule,
    AmexioFormsModule,
    RouterModule.forChild([
      { path: '', component: TextDemo, pathMatch: 'full'}
    ])
  ],
  providers : []
})
export class TextDemoModule {

}
