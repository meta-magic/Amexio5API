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
  selector: 'paginator-demo',
  template: `
    <h1>Paginator Demo</h1>
    <amexio-tab-view>
      <amexio-tab title="Demo" active="true">
        <amexio-paginator [pages]="50" [rows]="5"></amexio-paginator>

        <amexio-paginator [pages]="100" [rows]="10"></amexio-paginator>
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
export class PaginatorDemo {
  name : string;
}

@NgModule({
  declarations: [PaginatorDemo],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    AmexioLayoutModule,
    AmexioNavModule,
    RouterModule.forChild([
      { path: '', component: PaginatorDemo, pathMatch: 'full'}
    ])
  ],
  providers : []
})
export class PaginatorDemoModule {

}
