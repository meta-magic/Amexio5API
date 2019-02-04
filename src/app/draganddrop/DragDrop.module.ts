import { NgModule } from "@angular/core";
import { AmexioWidgetModule } from "amexio-ng-extensions";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "../shared.module";
import { DRAGDROP_ROUTE } from "./DragDrop.routes";

import { RouterModule } from "@angular/router";

import { AcrossTreeDemo } from "./acrosstree/acrosstree.demo.component";
import { ItemSelectorDragdropDemo } from "./itemselectordragdrop/itemselectordragdrop.demo";
import { WithinTreeDemo } from "./withintree/withintree.demo.component";
import { TreeToPanelDemo } from "./treetopanel/treetopanel.demo.component";
import { ItemSelectorDragdropPanel } from "./selectordragdroppanel/selectordragdroppanel.demo";

 
/**
 * Created by kedar on 4/2/19.
 */
@NgModule({
    declarations: [ AcrossTreeDemo, WithinTreeDemo, TreeToPanelDemo ,ItemSelectorDragdropPanel, 
        ItemSelectorDragdropDemo
    
    ],
    imports: [
        CommonModule, 
        FormsModule, 
        HttpClientModule, 
        SharedModule.forRoot(),
        AmexioWidgetModule,
        RouterModule.forChild(DRAGDROP_ROUTE),
    ],
    providers: []
})
export class DragDropModule {

}
