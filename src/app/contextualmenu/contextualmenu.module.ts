import { NgModule } from "@angular/core";
import { AmexioWidgetModule } from "amexio-ng-extensions";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "../shared.module";
import { CONTEXTUALMENU_ROUTE } from "./contextualmenu.routes";

import { RouterModule } from "@angular/router";

import { ContextMenuCardFormDemo } from "./card/contextmenucardform.demo";
import { GridWithContextMenuDemo } from "./grid/contextmenugrid.demo";
import { ContextMenuListBoxDemo } from "./listbox/contextmenulistbox.demo";
import { ContextMenuPanelDemoComponent } from "./panel/contextmenupanel.demo";
import { ContextMenuTabDemo } from "./tab/contextmenutab.demo";
import { ContextMenuWindowDemoComponent } from "./window/contextmenuwindow.demo.component";
import { ContextMenuTreeDemo } from "./tree/contextmenutree.demo";

/**
 * Created by kedar on 4/2/19.
 */
@NgModule({
    declarations: [ContextMenuCardFormDemo, GridWithContextMenuDemo, ContextMenuListBoxDemo, 
        ContextMenuPanelDemoComponent, ContextMenuTabDemo, ContextMenuTreeDemo,ContextMenuWindowDemoComponent
    
    ],
    imports: [
        CommonModule, 
        FormsModule, 
        HttpClientModule, 
        SharedModule.forRoot(), 
        AmexioWidgetModule,
        RouterModule.forChild(CONTEXTUALMENU_ROUTE),
    ],
    providers: []
})
export class ContextualMenuModule {

}
