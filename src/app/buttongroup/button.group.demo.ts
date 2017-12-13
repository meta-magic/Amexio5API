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
  selector: 'button-grp-demo',
  template: `
    <h1>Button grp Input Demo</h1>
    <amexio-tab-view>
      <amexio-tab title="Demo" active="true">
        <amexio-btn-group>
          <amexio-button label="Play" ></amexio-button>
          <amexio-button label="Pause" ></amexio-button>
          <amexio-button label="Repeat" ></amexio-button>
        </amexio-btn-group>
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
export class ButtonGroupDemo {
  name : string;
}

@NgModule({
  declarations: [ButtonGroupDemo],
  imports: [
    CommonModule,
    FormsModule,
    AmexioLayoutModule,
    AmexioFormsModule,
    HttpModule,
    RouterModule.forChild([
      { path: '', component: ButtonGroupDemo, pathMatch: 'full'}
    ])
  ],
  providers : []
})
export class ButtonGroupDemoModule {

}
