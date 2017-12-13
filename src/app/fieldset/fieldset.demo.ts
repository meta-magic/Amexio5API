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
    <h1>FieldSet Demo</h1>
    <amexio-tab-view>
      <amexio-tab title="Demo" active="true">
        <amexio-fieldset [collapsible]="true" title="Form">
          <amexio-button label="Next" ></amexio-button>
        </amexio-fieldset>

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
export class FieldsetDemo {
  name : string;
}

@NgModule({
  declarations: [FieldsetDemo],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    AmexioFormsModule,
    AmexioLayoutModule,
    RouterModule.forChild([
      { path: '', component: FieldsetDemo, pathMatch: 'full'}
    ])
  ],
  providers : []
})
export class FieldSetDemoModule {

}
