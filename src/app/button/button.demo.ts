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
  selector: 'button-demo',
  template: `
    <h1>Button Input Demo</h1>
    <amexio-tab-view>
      <amexio-tab title="Demo" active="true">
        <amexio-button label="Next" type="primary"></amexio-button>
        <amexio-button label="Previous" type="danger"></amexio-button>
        <amexio-button label="Login" type="success"></amexio-button>

        <amexio-button label="Next" size="large"></amexio-button>
        <amexio-button label="Previous" size="small"></amexio-button>
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
export class ButtonDemo {
  name : string;
}

@NgModule({
  declarations: [ButtonDemo],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    AmexioFormsModule,
    AmexioLayoutModule,
    RouterModule.forChild([
      { path: '', component: ButtonDemo, pathMatch: 'full'}
    ])
  ],
  providers : []
})
export class ButtonDemoModule {

}
