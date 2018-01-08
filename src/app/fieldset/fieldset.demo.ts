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
  selector: 'email-demo',
  template: `    
    <amexio-card>
      <amexio-pane-header>
        <h1>Accordion</h1>
      </amexio-pane-header>
      <amexio-pane-body>
        <span>Accordion provides an easy way to organize big forms by grouping the fields in accordion tabs</span>
        <br><br>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
            <amexio-card>
              <amexio-pane-header>Amexio Accordion</amexio-pane-header>
              <amexio-pane-body>
                <amexio-accordion>
                  <amexio-accordion-tab [header]="'Section 1'">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </amexio-accordion-tab>
                  <amexio-accordion-tab [header]="'Section 2'">
                    Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum. Vestibulum tempus, urna non ultrices aliquam, ex ex blandit lacus, at porttitor odio ligula sed lacus. Praesent in luctus odio, at sodales orci. Vivamus vitae ullamcorper lectus.

                  </amexio-accordion-tab>
                </amexio-accordion>
              </amexio-pane-body>
            </amexio-card>
          </amexio-tab>
          <amexio-tab title="API Reference">

          </amexio-tab>
          <amexio-tab title="CSS Reference">

          </amexio-tab>
          <amexio-tab title="Source Code">

          </amexio-tab>
          <amexio-tab title="Plunker">

          </amexio-tab>
        </amexio-tab-view>
      </amexio-pane-body>
    </amexio-card>
  `
})
export class FieldsetDemo {
  name : string;
}

@NgModule({
  declarations: [FieldsetDemo],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    AmexioFormsModule,
    AmexioLayoutModule,
    RouterModule.forChild([
      { path: '', component: FieldsetDemo, pathMatch: 'full'}
    ])
  ],
  providers : []
})
export class FieldSetDemoModule {

}
