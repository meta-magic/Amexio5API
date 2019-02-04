import { NgModule } from "@angular/core";
import { AmexioWidgetModule ,LoadRecaptchaService } from "amexio-ng-extensions";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "../shared.module";
import { DATA_ROUTE } from "./Data.routes";

import { RouterModule } from "@angular/router";


import { ItemSelectorDemo } from "./itemselector/itemselector.demo";
import { ListBoxDemo } from "./listbox/listbox.demo";
import { TimelineDemoComponent } from "./timeline/timeline.demo";
import { AmexioSpinnerDemo } from "./spinner/spinner.demo";

import { SimpleTreeDemo } from "./tree/simpletree/simpletree.demo";
import { CheckboxTreeDemo } from "./tree/checkboxtree/checkboxtree.demo";
import { CollapseTreeDemo } from "./tree/collapsetree/collapsetree.demo";
import { ContextMenuTreeDemo } from "./tree/contextmenutree/contextmenutree.demo.component";
import { FilterTreeDemo } from "./tree/filtertree/filtertree.demo";
import { HorizontalTreeDemo } from "./tree/horizontaltree/horizontaltree.demo";
import { TreeWithBadgeDemo } from "./tree/treewithbadge/treewithbadge.demo.component";
import { DragDropTreeDemo } from "./tree/treedragdrop/treedragdrop.demo";
import { TreeWithTemplateDemo } from "./tree/treewithtemplate/treewithtemplate.demo";

 
/**
 * Created by kedar on 4/2/19.
 */
@NgModule({
    declarations: [ ItemSelectorDemo , ListBoxDemo, TimelineDemoComponent , AmexioSpinnerDemo,
        SimpleTreeDemo, CheckboxTreeDemo, CollapseTreeDemo,ContextMenuTreeDemo,FilterTreeDemo,
        HorizontalTreeDemo,TreeWithBadgeDemo,DragDropTreeDemo,TreeWithTemplateDemo
    
    ],
    imports: [
        CommonModule, 
        FormsModule, 
        HttpClientModule, 
        SharedModule.forRoot(),
        AmexioWidgetModule,
        RouterModule.forChild(DATA_ROUTE),
    ],
    providers: [LoadRecaptchaService]
})
export class DataModule {

}
