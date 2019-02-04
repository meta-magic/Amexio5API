import { Routes } from '@angular/router';

import {NotificationDemo } from './notification/notification.demo';
import { ProgressBarDemo } from './progressbar/progressbar.demo';
import { PaginatorDemo } from './paginator/paginator.demo';
import { FloatingGroupButtonDemo } from './floatinggroup/floatinggroupbutton.demo';
import { FloatingButtonDemo } from './floatingbutton/floatingbutton.demo';
import { ButtonGroupDemo } from './buttongroup/buttongroup.demo';
import { ButtonDropDownDemo } from './buttondropdown/buttondropdown.demo';
import { ButtonDemo } from './button/button.demo';


export const FORMSACTION_ROUTE: Routes = [

    {
        path: 'notification-demo', component: NotificationDemo,
    },

    {
        path: 'progressbar-demo', component: ProgressBarDemo,
    },

    {
        path: 'paginator-demo', component: PaginatorDemo,
    }, 
    {
        path: 'floatinggroupbutton-demo', component: FloatingGroupButtonDemo,
    },
    {
        path: 'floatingbutton-demo', component: FloatingButtonDemo,
    },
    {
        path: 'buttongroup-demo', component: ButtonGroupDemo,
    },
    {
        path: 'buttondropdown-demo', component: ButtonDropDownDemo,
    },
    {
        path: 'button-demo', component: ButtonDemo,
    },
]