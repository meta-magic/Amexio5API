import { Routes } from '@angular/router';
import { ColorPaletteDemo } from './colorpalette/color-palette';
import { InputMaskDemo } from './inputmask/input-mask.demo';
import { RoundEdgeDemo } from './roundedge/round-edge'; 

export const DIRECTIVE_ROUTE: Routes = [

    {
        path: 'color-palette', component: ColorPaletteDemo,
    },
    {
        path: 'input-mask', component: InputMaskDemo,
    },
    {
        path: 'round-edge', component: RoundEdgeDemo,
    }

]