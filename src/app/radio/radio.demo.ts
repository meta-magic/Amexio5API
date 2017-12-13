/**
 * Created by pratik on 4/12/17.
 */
import {NgModule, Component} from '@angular/core'
import {RouterModule} from '@angular/router'
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {CommonModule} from "@angular/common";
import {AmexioFormsModule, AmexioLayoutModule, CommonDataService} from "amexio-ng-extensions";

@Component({
  selector: 'radio-demo',
  template: `
    <h1>Radio Input Demo</h1>
    <amexio-tab-view>
      <amexio-tab title="Demo" active="true">
        <amexio-radio-group [data]="data"
                            [dataReader]="'response.data'"
                            [displayField]="'gender'"
                            [valueField]="'genderId'">
        </amexio-radio-group>
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
export class RadioDemo {
  name : string;
  data : any;

  constructor(){
    this.data = [
      {
          gender:'Male',
          genderId:'male'
      },
      {
          gender:'Female',
          genderId:'female'
      }
        ]
  }
}

@NgModule({
  declarations: [RadioDemo],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    AmexioFormsModule,
    AmexioLayoutModule,
    RouterModule.forChild([
      { path: '', component: RadioDemo, pathMatch: 'full'}
    ])
  ],
  providers : [CommonDataService]
})
export class RadioDemoModule {

}
