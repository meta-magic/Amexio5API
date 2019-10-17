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
import { FullScreenDemo } from  './fullscreen/full-screen';
import { RouterModule } from "@angular/router";
import { RouterAnimationDemo } from './routinganimation/router-animation';
import { ChildRouteDemo } from './routinganimation/childroute'
import {RouterService} from 'amexio-ng-extensions';
import {ChildRoute2Demo} from './routinganimation/childroute2';
import {ChildRoute3Demo} from './routinganimation/childroute3';
import {ChildRoute4Demo} from './routinganimation/childroute4';
import { DynamicTextDemo } from './dynamic-text/dynamic-text';


/**
 * Created by kedar on 31/1/19.
 */
@NgModule({
    declarations: [ColorPaletteDemo, DynamicTextDemo, InputMaskDemo, RoundEdgeDemo, FullScreenDemo, RouterAnimationDemo, ChildRouteDemo, ChildRoute2Demo, ChildRoute3Demo, ChildRoute4Demo],
    imports: [
        CommonModule, 
        FormsModule, 
        HttpClientModule, 
        SharedModule.forRoot(), 
        AmexioWidgetModule,
        RouterModule.forChild(DIRECTIVE_ROUTE),
    ],
    providers: [RouterService]
})
export class DirectiveModule {

}
