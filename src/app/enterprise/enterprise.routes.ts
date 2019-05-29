import { Routes } from '@angular/router';

import { YoutubePlayerDemoComponent } from "./youtube-player/youtube.demo.component";
import { EECarouselDemoComponent } from "./multi-item-carousel/multi.item.carousel.demo";
import { EEContentDemoComponent } from "./content/content.compnent";
import { EEAppointmentDemoComponent } from "./appointment/appointment.component";
import { CalendarDemoComponent } from './calendar/calendar.demo.component';
import { StepWizardDemoComponent } from 'src/app/enterprise/steps-wizard/step-wizard.component';
import { ThemeSwitcherDemo } from './themeswitcher/themeswitcher.component';
import { TreeTabDemoComponent } from './tree-tab/tree-tab.component';
import { HomePageComponent } from './tree-tab/home-page/home-page.component';
export const ENTERPRISE_ROUTE: Routes = [

    {
        path: 'ee-video-demo', component: YoutubePlayerDemoComponent,
    },
    {
        path: 'multi-item-carousel-demo', component: EECarouselDemoComponent,
    },
    {
        path: 'ee-content-demo', component: EEContentDemoComponent,
    },
    {
        path: 'ee-appointment-demo', component: EEAppointmentDemoComponent,
    },
    {
        path: 'tree-tab-demo', component: TreeTabDemoComponent,
        children: [
            {
                path: 'home', component: HomePageComponent
            }
        ]
    },
    {
        path: 'ee-calendar-demo', component: CalendarDemoComponent,
    },
    {
        path: 'step-wizard-demo', component: StepWizardDemoComponent,
    },
    {
        path: 'theme-switcher-demo', component: ThemeSwitcherDemo,
    }, 
      

] 