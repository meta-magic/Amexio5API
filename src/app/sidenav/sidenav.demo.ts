/**
 * Created by pratik on 4/12/17.
 */
import {NgModule, Component} from '@angular/core'
import {RouterModule} from '@angular/router'
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {CommonModule} from "@angular/common";
import {AmexioLayoutModule, AmexioNavModule} from "amexio-ng-extensions";

@Component({
  selector: 'side-nav-demo',
  template: `
    <h1>Side Nav Demo</h1>
    <amexio-tab-view>
      <amexio-tab title="Demo" active="true">
        <div class="container">
          <amexio-side-nav
            [sidenavtitle]="'Components'"
            [position]="'relative'"
            [httpUrl]="'assets/menu.json'"
            [httpMethod]="'get'"
            [dataReader]="'data'">
          </amexio-side-nav>
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
export class SideNavDemo {
  name : string;
}

@NgModule({
  declarations: [SideNavDemo],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    AmexioLayoutModule,
    AmexioNavModule,
    RouterModule.forChild([
      { path: '', component: SideNavDemo, pathMatch: 'full'}
    ])
  ],
  providers : []
})
export class SideNavDemoModule {

}
