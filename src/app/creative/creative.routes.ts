import { Routes } from '@angular/router';
import { CreativeCardDemo } from './cardce/card.demo';
import { CreativeWindowDemo } from "./windowce/window.demo";
import { CreativeCircularProgressBarDemo } from './progressce/progressce.component';


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
        path: 'progress-ce-demo', component: CreativeCircularProgressBarDemo,
    }
   
]