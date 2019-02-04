import { Routes } from '@angular/router';

import { AcrossTreeDemo } from './acrosstree/acrosstree.demo.component';
import { ItemSelectorDragdropDemo } from "./itemselectordragdrop/itemselectordragdrop.demo";
import { WithinTreeDemo } from "./withintree/withintree.demo.component";
import { TreeToPanelDemo } from "./treetopanel/treetopanel.demo.component";

 


export const DRAGDROP_ROUTE: Routes = [

    {
        path: 'across-tree-demo', component: AcrossTreeDemo,
    },
    {
        path: 'itemselectordragdrop-demo', component: ItemSelectorDragdropDemo,
    },
    {
        path: 'within-tree-demo', component: WithinTreeDemo,
    },
    {
        path: 'tree-to-panel-demo', component: TreeToPanelDemo,
    },

]