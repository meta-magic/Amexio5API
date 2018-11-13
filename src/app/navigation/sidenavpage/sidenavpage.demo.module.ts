import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AmexioWidgetModule } from "amexio-ng-extensions";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared.module";
import { sideNavDemoPage } from './sidenavpage.demo';

/**
 * Created by kedar on 13/11/18.
 */
@NgModule({
    declarations: [sideNavDemoPage],
    imports: [CommonModule, FormsModule, SharedModule, AmexioWidgetModule, RouterModule.forChild([{
        path: '', component: sideNavDemoPage, pathMatch: 'full'
    }])],
    providers: []
})
export class sideNavDemoPageModule {

}
