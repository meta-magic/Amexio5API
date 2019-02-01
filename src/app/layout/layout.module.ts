import { NgModule } from "@angular/core";
import { AmexioWidgetModule } from "amexio-ng-extensions";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "../shared.module";
import { LAYOUT_ROUTE } from "./layout.routes";
import { RouterModule } from "@angular/router";



import { RowDemo } from './row/row.demo';
import { verticalLayoutDemo } from './verticallayout/verticallayout.demo';
import { BoxDemo } from "./box/box.demo";
import { horizontalLayoutDemo } from "./horizontallayout/horizontallayout.demo";
import { CardImageDemo } from "./card/cardimage/cardimage.demo";
import { CardFormDemo } from "./card/cardform/cardform.demo";
import { ColumnDemo } from "./column/column.demo";
import { BorderDemoComponent } from "./border/border.demo.component";
import { AccordionDemoComponent } from "./accordion/accordion.demo";
import { GridLayoutDemoTwo } from "./gridlayout/gridlayouttwo/gridlayout.demo";
import { GridLayoutDemoThree } from "./gridlayout/gridlayoutthree/gridlayout.demo";
import { GridLayoutDemoOne } from "./gridlayout/gridlayoutone/gridlayout.demo";
import { GridLayoutDemo } from "./gridlayout/gridlayoutbasic/gridlayout.demo";


/**
 * Created by kedar on 31/1/19.
 */
@NgModule({
    declarations: [ RowDemo ,BoxDemo, verticalLayoutDemo,
         horizontalLayoutDemo, CardImageDemo,
          CardFormDemo,ColumnDemo,BorderDemoComponent,AccordionDemoComponent,
          GridLayoutDemo,GridLayoutDemoOne,GridLayoutDemoTwo,GridLayoutDemoThree



        ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        SharedModule.forRoot(),
        AmexioWidgetModule,
        RouterModule.forChild(LAYOUT_ROUTE),
    ],
    providers: []
})
export class LayoutModule {

}
