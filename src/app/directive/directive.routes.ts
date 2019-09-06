import { Routes } from '@angular/router';
import { ColorPaletteDemo } from './colorpalette/color-palette';
import { InputMaskDemo } from './inputmask/input-mask.demo';
import { RoundEdgeDemo } from './roundedge/round-edge'; 
import { FullScreenDemo } from './fullscreen/full-screen';
import { RouterAnimationDemo } from './routinganimation/router-animation';
import { ChildRouteDemo } from './routinganimation/childroute';
import { ChildRoute2Demo } from './routinganimation/childroute2'
import { ChildRoute3Demo } from './routinganimation/childroute3'
import { ChildRoute4Demo } from './routinganimation/childroute4'

export const DIRECTIVE_ROUTE: Routes = [

    {
        path: 'color-palette', component: ColorPaletteDemo,
    },
    {
        path: 'input-mask', component: InputMaskDemo,
    },
    {
        path: 'round-edge', component: RoundEdgeDemo,
    },
    {
        path: 'full-screen', component: FullScreenDemo,
    },
    {
        path: 'router-animation', component: RouterAnimationDemo,
        children: [
            { path: '', redirectTo: 'child-route-right', pathMatch: 'full' },

            { path: 'child-route-left', component: ChildRouteDemo },
            { path: 'child-route-right', component: ChildRoute2Demo },
            { path: 'child-route-top', component: ChildRoute3Demo },
            { path: 'child-route-bottom', component: ChildRoute4Demo }
        ]
    },

]