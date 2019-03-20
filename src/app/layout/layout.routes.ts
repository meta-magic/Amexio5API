import { Routes } from '@angular/router';

import { verticalLayoutDemo } from './verticallayout/verticallayout.demo';
import { RowDemo } from './row/row.demo';
import { BoxDemo } from './box/box.demo';
import { horizontalLayoutDemo } from './horizontallayout/horizontallayout.demo';
import { CardImageDemo } from './card/cardimage/cardimage.demo';
import { CardFormDemo } from './card/cardform/cardform.demo';
import { ColumnDemo } from './column/column.demo';
import { BorderDemoComponent } from './border/border.demo.component';
import { AccordionDemoComponent } from './accordion/accordion.demo';
import { GridLayoutDemoTwo } from './gridlayout/gridlayouttwo/gridlayout.demo';
import { GridLayoutDemoThree } from './gridlayout/gridlayoutthree/gridlayout.demo';
import { GridLayoutDemoOne } from './gridlayout/gridlayoutone/gridlayout.demo';
import { GridLayoutDemo } from './gridlayout/gridlayoutbasic/gridlayout.demo';

export const LAYOUT_ROUTE: Routes = [
    {
        path: 'row-demo', component: RowDemo,
    },
    {
        path: 'box-demo', component: BoxDemo,
    },
    {
        path: 'vertical-layout', component: verticalLayoutDemo,
    }, 
    {
        path: 'horizontal-layout', component: horizontalLayoutDemo,
    },
    {
        path: 'card-image-demo', component: CardImageDemo,
    },
    {
        path: 'card-form-demo', component: CardFormDemo,
    },
    {
        path: 'column-demo', component: ColumnDemo,
    },
    {
        path: 'border-demo', component: BorderDemoComponent,
    },
    {
        path: 'accordion-demo', component: AccordionDemoComponent,
    },
    {
        path: 'gridlayout-demo', component: GridLayoutDemo,
    },
    {
        path: 'gridlayout-demo-exp1', component: GridLayoutDemoOne,
    },
    {
        path: 'gridlayout-demo-exp2', component: GridLayoutDemoTwo,
    },
    {
        path: 'gridlayout-demo-exp3', component: GridLayoutDemoThree,
    },
    
]