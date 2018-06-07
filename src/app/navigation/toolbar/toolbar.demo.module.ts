import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AmexioWidgetModule} from "amexio-ng-extensions";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared.module";
import {ToolbarDemo} from './toolbar.demo';
import {HttpClientModule} from "@angular/common/http";
/**
 * Created by
 */
@NgModule({
  declarations: [ToolbarDemo],
  imports: [CommonModule, FormsModule, HttpClientModule,SharedModule, AmexioWidgetModule, RouterModule.forChild([{
    path: '', component: ToolbarDemo, pathMatch: 'full'
  }])],
  providers: []
})
export class ToolbarDemoModule {

}
