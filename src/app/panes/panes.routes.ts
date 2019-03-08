import { Routes } from '@angular/router';
import { WindowDemoComponent } from './window/window.demo.component';
import { ClosableTabDemo } from './tab/closabletab/closabletab.demo';
import { StepBoxIconComponent } from './steps/stepbox-icon/stepbox.icon.demo';
import { StepBoxDemoComponent } from './steps/stepbox/stepbox.demo';
import { PanelDemoComponent } from './panel/panel.demo';
import { FieldSetDemoComponent } from './fieldset/fieldset.demo.component';
import { DialogueDemoComponent } from './dialogue/dialogue.demo.component';
import { CarouselDemoComponent } from './carousel/carousel.demo';
import { EnhancedTabDemo } from './tab/enhancedtab/enhancedtab.demo';
import { EnhancedVerticalTabDemo } from './tab/enhancedverticaltab/enhancedverticaltab.demo';
import { ScrollableTabDemo } from './tab/scrollabletab/scrollabletab.demo';
import { IconWithTabDemo } from './tab/iconwithtab/iconwithtab.demo';
import { VerticalRightTabDemo } from './tab/verticalrighttab/verticalrighttab.demo';
import { VerticalTabDemo } from './tab/verticaltab/verticaltab.demo';
import { TabDemo } from './tab/basictab/tab.demo';
import {OverlayDemoComponent} from './overlaycontainer/overlay.demo.component';


/**
 * Created by kedar on 1/2/19.
 */

export const PANES_ROUTE: Routes = [
    {
        path: 'window-demo', component: WindowDemoComponent,
    },
    {
        path: 'closable-tab-demo', component: ClosableTabDemo,
    },
    {
        path: 'stepbox-icon-demo', component: StepBoxIconComponent,
    },
    {
        path: 'step-box-demo', component: StepBoxDemoComponent,
    },
    {
        path: 'panel-demo', component: PanelDemoComponent,
    },
    {
        path: 'fieldset-demo', component: FieldSetDemoComponent,
    },
    {
        path: 'dialogue-demo', component: DialogueDemoComponent,
    },
    {
        path: 'carousel-demo', component: CarouselDemoComponent,
    },
    {
        path: 'enhanced-tab-demo', component: EnhancedTabDemo,
    },
    {
        path: 'enhanced-vertical-tab-demo', component: EnhancedVerticalTabDemo,
    },
    {
        path: 'scrollable-tab-demo', component: ScrollableTabDemo,
    },
    {
        path: 'icon-tab-demo', component:  IconWithTabDemo,
    },
    {
        path: 'verticalright-tab-demo', component: VerticalRightTabDemo,
    },
    {
        path: 'vertical-tab-demo', component: VerticalTabDemo,
    },
    {
        path: 'basic-tab-demo', component: TabDemo,
    },
    {
      path: 'overlay-demo', component: OverlayDemoComponent,
    },



];
