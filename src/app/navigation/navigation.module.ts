import { NgModule } from "@angular/core";
import { AmexioWidgetModule  } from "amexio-ng-extensions";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "../shared.module";
import { NAVIGATION_ROUTE } from "./navigation.routes";

import { RouterModule } from "@angular/router";


import { MenuBarDemo } from './menubar/menubar.demo';
import { ToolbarDemo } from './toolbar/toolbar.demo';
import { SideNavRightDemo } from './sidenav/sidenavright/sidenavright.demo';
import { sideNavDemoPage } from './sidenavpage/sidenavpage.demo';
import { SideNavDemo } from './sidenav/sidenav.demo';
import { NavbarDemo } from './navbar/navbar.demo';
import { DropDownMenuDemo } from './dropdownmenu/dropdownmenu.demo';
import { DockbarDemo } from './dockbar/dockbar.demo';
import { BreadcrumbDemo } from './breadcrumb/breadcrumb.demo';

/**
 * Created by kedar on 4/2/19.
 */
@NgModule({
    declarations: [ MenuBarDemo, ToolbarDemo, SideNavRightDemo, sideNavDemoPage,
        SideNavDemo, NavbarDemo, DropDownMenuDemo, DockbarDemo, BreadcrumbDemo

    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        SharedModule.forRoot(),
        AmexioWidgetModule,
        RouterModule.forChild(NAVIGATION_ROUTE),
    ],
    providers: []
})
export class NavigationModule {

}
