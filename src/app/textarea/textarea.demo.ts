/**
 * Created by pratik on 4/12/17.
 */
import {NgModule, Component} from '@angular/core'
import {RouterModule} from '@angular/router'
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {CommonModule} from "@angular/common";
import {AmexioFormsModule, AmexioLayoutModule, AmexioNavModule} from "amexio-ng-extensions";

@Component({
  selector: 'textarea-demo',
  template: `
    <h1>Textarea Input Demo</h1>
    <amexio-tab-view>
      <amexio-tab title="Demo" active="true">
        <div style="width: 300px;">
        <amexio-textarea-input [fieldLabel]="'Textarea Input'" name ="Address"
                               [placeholder]="'permanent Address'"
                               [allowBlank]="true" [errorMsg] ="'Please enter Address'"
                               [iconFeedBack]="true" [noOfrows]="'4'" [noOfCols]="'2'">
        </amexio-textarea-input>
        </div>

        <!--TextArea Input with rows 7 and columns 4-->
        <div style="width: 500px;">

        <amexio-textarea-input [fieldLabel]="'Textarea Input'" name ="Address"
                               [placeholder]="'permanent Address'"
                               [allowBlank]="true" [errorMsg] ="'Please enter Address'"
                               [iconFeedBack]="true" [noOfrows]="'7'" [noOfCols]="'4'">
        </amexio-textarea-input>
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
export class TextAreaDemo {
  name : string;
}

@NgModule({
  declarations: [TextAreaDemo],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    AmexioLayoutModule,
    AmexioFormsModule,
    RouterModule.forChild([
      { path: '', component: TextAreaDemo, pathMatch: 'full'}
    ])
  ],
  providers : []
})
export class TextAreaDemoModule {

}
