/**
 * Created by pratik on 4/12/17.
 */
import {NgModule, Component} from '@angular/core'
import {RouterModule} from '@angular/router'
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {CommonModule} from "@angular/common";
import {
  AmexioDataModule, AmexioFormsModule, AmexioLayoutModule, CommonDataService,
  DeviceQueryService
} from "amexio-ng-extensions";

@Component({
  selector: 'list-demo',
  template: `
    <h1>List Input Demo</h1>
    <amexio-tab-view>
      <amexio-tab title="Demo" active="true">
        <amexio-listbox [filter]="true"
                        [httpMethod]="'get'" [httpUrl]="'assets/listdata.json'"
                        [enableCheckBox] = "false" [dataReader]="'response.data'"
                        [displayField]="'name'">
        </amexio-listbox>
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
export class ListDemo {
  name : string;
}

@NgModule({
  declarations: [ListDemo],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    AmexioDataModule,
    AmexioLayoutModule,
    AmexioFormsModule,
    RouterModule.forChild([
      { path: '', component: ListDemo, pathMatch: 'full'}
    ])
  ],
  providers : [CommonDataService,DeviceQueryService]
})
export class ListDemoModule {

}
