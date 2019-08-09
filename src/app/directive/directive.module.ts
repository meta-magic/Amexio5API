import { NgModule } from "@angular/core";
import { AmexioWidgetModule } from "amexio-ng-extensions";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "../shared.module";
import { DIRECTIVE_ROUTE } from "./directive.routes";
import { InputMaskDemo } from './inputmask/input-mask.demo';
import { ColorPaletteDemo } from './colorpalette/color-palette';
import { RoundEdgeDemo } from './roundedge/round-edge';
import { RouterModule } from "@angular/router";

/**
 * Created by kedar on 31/1/19.
 */
@NgModule({
    declarations: [ColorPaletteDemo, InputMaskDemo, RoundEdgeDemo],
    imports: [
        CommonModule, 
        FormsModule, 
        HttpClientModule, 
        SharedModule.forRoot(), 
        AmexioWidgetModule,
        RouterModule.forChild(DIRECTIVE_ROUTE),
    ],
    providers: []
})
export class DirectiveModule {

}
