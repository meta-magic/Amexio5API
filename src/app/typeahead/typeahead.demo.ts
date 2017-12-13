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
  selector: 'typeahead-demo',
  template: `
    <h1>Typeahead Input Demo</h1>
    <amexio-tab-view>
      <amexio-tab title="Demo" active="true">
        <div fxLayout="column">
          <div style="width: 300px;">
        <amexio-typeahead [httpMethod]="'get'" [httpUrl]="'assets/fruits.json'"
                           fieldLabel ='Fruits'
                           [triggerChar]="1"
                           [key]="'fruitName'"
                           [displayField]="'fruitName'" [valueField]="'code'"
                           [dataReader]="'data'"
                           [(ngModel)]="name">
        </amexio-typeahead>
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
export class TypeAheadDemo {
  name : string;
}

@NgModule({
  declarations: [TypeAheadDemo],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    AmexioLayoutModule,
    AmexioFormsModule,
    RouterModule.forChild([
      { path: '', component: TypeAheadDemo, pathMatch: 'full'}
    ])
  ],
  providers : [CommonDataService,DeviceQueryService]
})
export class TypeAheadDemoModule {

}
