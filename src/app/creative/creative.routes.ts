import { Routes } from '@angular/router';
import { CreativeCardDemo } from './cardce/card.demo';
import { CreativeWindowDemo } from './windowce/window.demo';
import { CreativeFormDemo } from './formce/form.demo';
import { CreativeCircularProgressBarDemo } from './progressce/progressce.component';
import { HomePageDemo } from './homepage/homepage.demo';
import { ViewportDemoComponent } from './viewport/viewport.demo';
import { CreativeCarouselComponent } from './carousel/carouselce.demo';
import { MenuDemoComponent } from './menu/menu.demo';

/**
 * Created by kedar on 6/2/19.
 */
export const CREATIVE_ROUTE: Routes = [

    {
        path: 'card-ce-demo', component: CreativeCardDemo,
    },
    {
        path: 'window-ce-demo', component: CreativeWindowDemo,
    },
    {
        path: 'form-ce-demo', component: CreativeFormDemo,
    },
    {
        path: 'progress-ce-demo', component: CreativeCircularProgressBarDemo,
    },
    {
        path: 'homepage-ce-demo', component: HomePageDemo
    },
    {
        path: 'viewport-demo', component: ViewportDemoComponent
    },
    {
        path: 'carousel-ce-demo', component: CreativeCarouselComponent 
    },
    {
        path: 'menu-ce-demo', component: MenuDemoComponent, 
    }
];
