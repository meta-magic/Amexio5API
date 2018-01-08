/**
 * Created by pratik on 4/12/17.
 */
import {NgModule, Component} from '@angular/core'
import {RouterModule} from '@angular/router'
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {CommonModule} from "@angular/common";
import {AmexioFormsModule, AmexioLayoutModule, AmexioWidgetModule} from "amexio-ng-extensions";

@Component({
  selector: 'text-demo',
  template: `
     <amexio-card>
        <amexio-pane-header>
          <h1>Getting Started</h1>
        </amexio-pane-header>
        <amexio-pane-body>
          <div style="padding-left: 400px;">
            <img alt="Amexio" src="https://image.ibb.co/kdy6Ev/logo.png" width="200">
          </div>
          <div style="padding-left: 325px;">
            <h2>Amexio Angular Extensions V4.0 </h2>
          </div>
          

        </amexio-pane-body>
      </amexio-card>
    
  `
})
export class TextDemo {
  name : string;
}

@NgModule({
  declarations: [TextDemo],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    AmexioLayoutModule,
    AmexioFormsModule,
    RouterModule.forChild([
      { path: '', component: TextDemo, pathMatch: 'full'}
    ])
  ],
  providers : []
})
export class TextDemoModule {

}
