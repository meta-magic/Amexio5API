import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AmexioWidgetModule } from "amexio-ng-extensions";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared.module";
import { ChipsDemo } from "./chips.demo";
import { HttpClientModule } from "@angular/common/http";
/**
 * Created by rashmi on 19/10/18.
 */
@NgModule({
    declarations: [ChipsDemo],
    imports: [CommonModule, FormsModule, HttpClientModule, SharedModule, AmexioWidgetModule, RouterModule.forChild([{
        path: '', component: ChipsDemo, pathMatch: 'full'
    }])],
    providers: []
})
export class ChipsDemoModule {

}
