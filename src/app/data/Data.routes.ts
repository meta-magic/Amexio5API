import { Routes } from '@angular/router';

import { ItemSelectorDemo } from './itemselector/itemselector.demo';
import { ListBoxDemo } from "./listbox/listbox.demo";
import { TimelineDemoComponent } from "./timeline/timeline.demo";
import { AmexioSpinnerDemo } from "./spinner/spinner.demo";
import { SimpleTreeDemo } from './tree/simpletree/simpletree.demo';
import { CheckboxTreeDemo } from "./tree/checkboxtree/checkboxtree.demo";
import { CollapseTreeDemo } from "./tree/collapsetree/collapsetree.demo";
import { ContextMenuTreeDemo } from "./tree/contextmenutree/contextmenutree.demo.component";
import { FilterTreeDemo } from "./tree/filtertree/filtertree.demo";
import { HorizontalTreeDemo } from "./tree/horizontaltree/horizontaltree.demo";
import { TreeWithBadgeDemo } from "./tree/treewithbadge/treewithbadge.demo.component";
import { DragDropTreeDemo } from "./tree/treedragdrop/treedragdrop.demo";
import { TreeWithTemplateDemo } from './tree/treewithtemplate/treewithtemplate.demo';


export const DATA_ROUTE: Routes = [

    {
        path: 'itemselector-demo', component: ItemSelectorDemo,
    },
    {
        path: 'listbox-demo', component: ListBoxDemo,
    },
    {
        path: 'timeline-demo', component: TimelineDemoComponent,
    },
    {
        path: 'amexio-spinner-demo', component: AmexioSpinnerDemo,
    },
    {
        path: 'simple-tree-demo', component: SimpleTreeDemo,
    },
    {
        path: 'collapsetree-demo', component: CollapseTreeDemo,
    },
    {
        path: 'template-tree-demo', component: TreeWithTemplateDemo,
    },
    {
        path: 'filter-tree-demo', component: FilterTreeDemo,
    },
    {
        path: 'checkbox-tree-demo', component: CheckboxTreeDemo,
    },
    {
        path: 'dragdrop-tree-demo', component: DragDropTreeDemo,
    },
    {
        path: 'badge-tree-demo', component: TreeWithBadgeDemo,
    },
    {
        path: 'context-menu-tree-demo', component: ContextMenuTreeDemo,
    },
    {
        path: 'horizontal-tree-demo', component: HorizontalTreeDemo,
    },
]