import { AmexioVirtualScrollDemo2 } from './virtualscroll/demo2/virtualscroll.demo';
import { Routes } from '@angular/router';

import { ItemSelectorDemo } from './itemselector/itemselector.demo';
import { ListBoxDemo } from './listbox/listbox.demo';
import { TimelineDemoComponent } from './timeline/timeline.demo';
import { AmexioSpinnerDemo } from './spinner/spinner.demo';
//  Tree
import { SimpleTreeDemo } from './tree/simpletree/simpletree.demo';
import { CheckboxTreeDemo } from './tree/checkboxtree/checkboxtree.demo';
import { CollapseTreeDemo } from './tree/collapsetree/collapsetree.demo';
import { ContextMenuTreeDemo } from './tree/contextmenutree/contextmenutree.demo.component';
import { FilterTreeDemo } from './tree/filtertree/filtertree.demo';
import { HorizontalTreeDemo } from './tree/horizontaltree/horizontaltree.demo';
import { TreeWithBadgeDemo } from './tree/treewithbadge/treewithbadge.demo.component';
import { DragDropTreeDemo } from './tree/treedragdrop/treedragdrop.demo';
import { TreeWithTemplateDemo } from './tree/treewithtemplate/treewithtemplate.demo';
// Grid
import { SimpleGridDemo } from './simplegrid/simplegrid.demo';
import { CustomColSizeDemo } from './customcolsize/customcolsizegrid.demo';
import { FilterGridDemo } from './filtergrid/filtergrid.demo';
import { GlobalFilterDemo } from './globalfiltergrid/globalfilter.demo';
import { GridWithTemplateDemo } from './gridwithtemplate/gridwithtemplate.demo';
import { GridWithContextMenuDemo } from './gridwithcontextmenu/gridwithcontextmenu.demo';

import { GridWithScrollDemo } from './gridwithscroll/gridwithscroll.demo';
import { GridWithToolBarDemo } from './gridwithtoolbar/gridwithtoolbar.demo';
import { GroupByGridDemo } from './groupby/groupbygrid.demo';
import { HeaderTemplateDemo } from './headertemplate/headertemplate.demo';
import { TreeDataGridDemo } from './treedatagrid/treedatagrid.demo';
import { TreeDataTemplateDemo } from './treedatatemplate/treedatatemplate.demo';
import { ServerSidePaginationDemo } from './serversidepagination/serversidepagination.demo';
import { PropertyGridDemoComponent } from "./propertygrid/propertygrid.demo";
import { AmexioVirtualScrollDemo } from "./virtualscroll/virtualscroll.demo";



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
    // Tree demo
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

    // Grid Demo
    {
        path: 'simplegrid-demo', component: SimpleGridDemo,
    },
    {
        path: 'custom-col-grid-demo', component: CustomColSizeDemo,
    },
    {
        path: 'filter-grid-demo', component: FilterGridDemo,
    },
    {
        path: 'global-filter-grid-demo', component: GlobalFilterDemo,
    },
    {
        path: 'template-grid-demo', component: GridWithTemplateDemo,
    },
    {
        path: 'scroll-grid-demo', component: GridWithScrollDemo,
    },
    {
        path: 'gridwithtoolbar-demo', component: GridWithToolBarDemo,
    },
    {
        path: 'groupby-grid-demo', component: GroupByGridDemo,
    },
    {
        path: 'header-template-demo', component: HeaderTemplateDemo,
    },
    {
        path: 'tree-data-grid-demo', component: TreeDataGridDemo,
    },
    {
        path: 'tree-data-template-demo', component: TreeDataTemplateDemo,
    },
    {
        path: 'grid-context-menu-demo', component: GridWithContextMenuDemo,
    },
    {
        path: 'server-side-pagination-demo', component: ServerSidePaginationDemo,
    },
    {
        path: 'propertygrid-demo', component: PropertyGridDemoComponent,
    },  {
        path: 'virtual-scroller-demo', component: AmexioVirtualScrollDemo,
    },
    {
      path: 'virtual-scroller-demo-2', component: AmexioVirtualScrollDemo2,
  },
];
