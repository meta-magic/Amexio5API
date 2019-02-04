import { Routes } from '@angular/router';


import { ContextMenuCardFormDemo } from "./card/contextmenucardform.demo";
import { GridWithContextMenuDemo } from "./grid/contextmenugrid.demo";
import { ContextMenuListBoxDemo } from "./listbox/contextmenulistbox.demo";
import { ContextMenuPanelDemoComponent } from "./panel/contextmenupanel.demo";
import { ContextMenuTabDemo } from "./tab/contextmenutab.demo";
import { ContextMenuWindowDemoComponent } from "./window/contextmenuwindow.demo.component";
import { ContextMenuTreeDemo } from "./tree/contextmenutree.demo";

export const CONTEXTUALMENU_ROUTE: Routes = [

    {
        path: 'contextmenu-card-form-demo', component: ContextMenuCardFormDemo,
    },
    {
        path: 'contextual-menu-grid-demo', component: GridWithContextMenuDemo,
    },
    {
        path: 'contextual-menu-listbox-demo', component: ContextMenuListBoxDemo,
    },
    {
        path: 'contextmenu-panel-demo', component: ContextMenuPanelDemoComponent,
    },
    {
        path: 'contextual-menu-tab-demo', component: ContextMenuTabDemo,
    },
    {
        path: 'contextmenu-window-demo', component: ContextMenuWindowDemoComponent,
    },
    {
        path: 'contextual-menu-tree-demo', component: ContextMenuTreeDemo,
    },
]