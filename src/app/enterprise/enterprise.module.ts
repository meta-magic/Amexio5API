import { NgModule } from "@angular/core";
import { AmexioWidgetModule, AmexioEnterpriseModule } from "amexio-ng-extensions";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "../shared.module";
import { ENTERPRISE_ROUTE } from "./enterprise.routes";


import { RouterModule } from "@angular/router";
import { YoutubePlayerDemoComponent } from "./youtube-player/youtube.demo.component";
import { EECarouselDemoComponent } from "./multi-item-carousel/multi.item.carousel.demo";
import { EEContentDemoComponent } from "./content/content.compnent";
import { EEAppointmentDemoComponent } from "./appointment/appointment.component";
import { CalendarDemoComponent } from "./calendar/calendar.demo.component";
import { CalendarDemoComponent1 } from "./calendar-demo-1/calendar.demo.component";

import { StepWizardDemoComponent } from './steps-wizard/step-wizard.component';
import { ThemeSwitcherDemo } from "./themeswitcher/themeswitcher.component";
import { TreeTabDemoComponent } from './tree-tab/tree-tab.component';

import { RouteComponent } from './tree-tab/router-component';

import { HomePageComponent } from './tree-tab/home-page/home-page.component';
// import {APP_ROUTE} from '../../app/enterprise/tree-tab/router-component';

/**
 * Created by kedar on 4/2/19.
 */
@NgModule({
    declarations: [RouteComponent, ThemeSwitcherDemo, YoutubePlayerDemoComponent, EECarouselDemoComponent, EEContentDemoComponent,
        EEAppointmentDemoComponent, CalendarDemoComponent,CalendarDemoComponent1 , StepWizardDemoComponent, TreeTabDemoComponent, HomePageComponent],
    imports: [
        CommonModule,
        AmexioEnterpriseModule,
        FormsModule,
        HttpClientModule,
        SharedModule.forRoot(),
        AmexioWidgetModule,
        RouterModule.forChild(ENTERPRISE_ROUTE),
        // RouterModule.forChild(APP_ROUTE, { useHash: true})
    ],

    entryComponents: [RouteComponent],
    providers: [],
})
export class EnterpriseModule {

}
