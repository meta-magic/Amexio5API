/**
 * Created by pratik on 4/12/17.
 */
import {NgModule, Component} from '@angular/core'
import {RouterModule} from '@angular/router'
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {CommonModule} from "@angular/common";
import {AmexioFormsModule, AmexioLayoutModule, CommonDataService, DeviceQueryService} from "amexio-ng-extensions";

@Component({
  selector: 'dropdown-demo',
  template: `
    <h1>Dropdown Input Demo</h1>

    <amexio-tab-view>
      <amexio-tab title="Demo" active="true">
        <div fxLayout="column">
          <div style="width: 300px;">
        <amexio-dropdown [httpMethod]="'get'" [httpUrl]="'assets/fruits.json'"
                         [displayField]="'fruitName'" [valueField]="'code'"
                         [dataReader]="'data'"
                         [(ngModel)]="name1">
        </amexio-dropdown>
        <p>{{name1}}</p>
          </div>
        </div>

        <div fxLayout="column">
          <div style="width: 300px;">
        <amexio-dropdown [httpMethod]="'get'" [httpUrl]="'assets/fruits.json'"
                         [displayField]="'fruitName'" [valueField]="'code'"
                         [dataReader]="'data'"
                         [multiSelect]="true"
                         [(ngModel)]="name">
        </amexio-dropdown>
        <p>{{name}}</p>
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
export class DropDown {
  name : string;
  name1 : string;
}

@NgModule({
  declarations: [DropDown],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    AmexioFormsModule,
    AmexioLayoutModule,
    RouterModule.forChild([
      { path: '', component: DropDown, pathMatch: 'full'}
    ])
  ],
  providers : [CommonDataService,DeviceQueryService]
})
export class DropDownDemoModule {

}
