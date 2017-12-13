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
  selector: 'checkbox-demo',
  template: `
    <h1>Checkbox Input Demo</h1>
    <amexio-tab-view>
      <amexio-tab title="Demo" active="true">
       <amexio-checkbox fieldLabel="Agree"></amexio-checkbox>
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
export class CheckboxDown {
  name : string;
}

@NgModule({
  declarations: [CheckboxDown],
  imports: [
    CommonModule,
    FormsModule,
    AmexioFormsModule,
    AmexioLayoutModule,
    HttpModule,
    RouterModule.forChild([
      { path: '', component: CheckboxDown, pathMatch: 'full'}
    ])
  ],
  providers : []
})
export class CheckBoxDemoModule {

}
