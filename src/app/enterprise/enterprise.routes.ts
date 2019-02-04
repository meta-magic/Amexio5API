import { Routes } from '@angular/router';


import { YoutubePlayerDemoComponent } from "./youtube-player/youtube.demo.component";
import { EECarouselDemoComponent } from "./multi-item-carousel/multi.item.carousel.demo";
import { EEContentDemoComponent } from "./content/content.compnent";
import { EEAppointmentDemoComponent } from "./appointment/appointment.component";

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
    }
]