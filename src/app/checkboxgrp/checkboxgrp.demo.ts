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
  selector: 'checkbox-demo-group',
  template: `
    <h1>Checkbox Group Demo</h1>
    <amexio-tab-view>
      <amexio-tab title="Demo" active="true">
        <amexio-checkbox-group [dataReader]="'data'"
                               [displayField]="'language'"
                               [valueField]="'checked'"
                               [data]="chkData">
        </amexio-checkbox-group>
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
export class CheckboxDownGroup {
  name : string;

  chkData ={data : [
  {
    language:'Angular 2',
    checked: false
  },
  {
    language:'JAVA',
    checked: false
  },
  {
    language:'C++',
    checked: false
  }
]};
}

@NgModule({
  declarations: [CheckboxDownGroup],
  imports: [
    CommonModule,
    FormsModule,
    AmexioFormsModule,
    AmexioLayoutModule,
    HttpModule,
    RouterModule.forChild([
      { path: '', component: CheckboxDownGroup, pathMatch: 'full'}
    ])
  ],
  providers : []
})
export class CheckBoxGroupDemoModule {

}
