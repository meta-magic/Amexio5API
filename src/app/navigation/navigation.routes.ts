import { Routes } from '@angular/router';

import { MenuBarDemo } from './menubar/menubar.demo';
import { ToolbarDemo } from './toolbar/toolbar.demo';
import { sideNavDemoPage } from './sidenavpage/sidenavpage.demo';
import { SideNavDemo } from './sidenav/sidenav.demo';
import { NavbarDemo } from './navbar/navbar.demo';
import { DropDownMenuDemo } from './dropdownmenu/dropdownmenu.demo';
import { DockbarDemo } from './dockbar/dockbar.demo';
import { BreadcrumbDemo } from './breadcrumb/breadcrumb.demo';
import { TaskbarDemo } from './taskbar/taskbar.demo';


export const NAVIGATION_ROUTE: Routes = [

    {
        path: 'menubar-demo', component: MenuBarDemo,
    },
    {
        path: 'breadcrumb-demo', component: BreadcrumbDemo,
    },
    {
        path: 'dockbar-demo', component: DockbarDemo,
    },
    {
        path: 'dropdownmenu-demo', component: DropDownMenuDemo,
    },
    {
        path: 'navbar-demo', component: NavbarDemo,
    },
    {
        path: 'sidenav-demo', component: SideNavDemo,
    },
    {
        path: 'sidenav-page-demo', component: sideNavDemoPage,
    },
    {
        path: 'toolbar-demo', component: ToolbarDemo,
    },
    {
        path: 'taskbar-demo', component: TaskbarDemo,
    },


]