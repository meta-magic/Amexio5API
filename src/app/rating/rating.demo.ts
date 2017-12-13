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
  selector: 'rating-demo',
  template: `
    <h1>Rating Input Demo</h1>

    <amexio-tab-view>
      <amexio-tab title="Demo" active="true">
        <amexio-rating-input [(ngModel)]="rate"
                             [max]="10" name="rate">
        </amexio-rating-input>
        <p>Rated : {{rate}}</p>
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
export class RatingDemo {
  rate : any;
}

@NgModule({
  declarations: [RatingDemo],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    AmexioLayoutModule,
    AmexioFormsModule,
    RouterModule.forChild([
      { path: '', component: RatingDemo, pathMatch: 'full'}
    ])
  ],
  providers : []
})
export class RatingDemoModule {

}
