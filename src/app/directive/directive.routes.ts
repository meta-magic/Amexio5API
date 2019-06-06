import { Routes } from '@angular/router';
import { ColorPaletteDemo } from './colorpalette/color-palette';
import { InputMaskDemo } from './inputmask/input-mask.demo';

export const DIRECTIVE_ROUTE: Routes = [

    {
        path: 'color-palette', component: ColorPaletteDemo,
    },
    {
        path: 'input-mask', component: InputMaskDemo,
    }

]