/**
 * Created by pratik on 4/12/17.
 */
import {NgModule, Component} from '@angular/core'
import {RouterModule} from '@angular/router'
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {CommonModule} from "@angular/common";
import {AmexioLayoutModule} from "amexio-ng-extensions";

@Component({
  selector: 'rvtab-demo',
  template: `
    <h1>Right Aligned Tab Demo</h1>

    <amexio-right-vertical-tab-view>
      <amexio-tab title="User" [active]="true" [icon]="'fa fa-user-circle'">
        <h4>User</h4>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </amexio-tab>
      <amexio-tab title="Work" [icon]="'fa fa-user-circle'">
        <h4>Work</h4>
        Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum. Vestibulum tempus, urna non ultrices aliquam, ex ex blandit lacus, at porttitor odio ligula sed lacus. Praesent in luctus odio, at sodales orci. Vivamus vitae ullamcorper lectus. Etiam mattis fermentum arcu eu feugiat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam porttitor, erat sit amet pharetra aliquam, ex leo tincidunt erat, in commodo leo magna quis mauris. Maecenas aliquet fringilla dui, id molestie mi pellentesque sit amet. Praesent vel erat commodo, luctus metus id, dapibus nulla.
      </amexio-tab>
      <amexio-tab title="Team" [icon]="'fa fa-user-circle'">
        <h4>Team</h4>
        Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum. Vestibulum tempus, urna non ultrices aliquam, ex ex blandit lacus, at porttitor odio ligula sed lacus. Praesent in luctus odio, at sodales orci. Vivamus vitae ullamcorper lectus. Etiam mattis fermentum arcu eu feugiat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam porttitor, erat sit amet pharetra aliquam, ex leo tincidunt erat, in commodo leo magna quis mauris. Maecenas aliquet fringilla dui, id molestie mi pellentesque sit amet. Praesent vel erat commodo, luctus metus id, dapibus nulla.
      </amexio-tab>
    </amexio-right-vertical-tab-view>

  `
})
export class RVTab {
  name : string;
}

@NgModule({
  declarations: [RVTab],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    AmexioLayoutModule,
    RouterModule.forChild([
      { path: '', component: RVTab, pathMatch: 'full'}
    ])
  ],
  providers : []
})
export class RVTabDemoModule {

}
