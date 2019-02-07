/**
 * Created by pratik on 11/12/17.
 */
import { Routes } from '@angular/router';

export const APP_ROUTE: Routes = [/**Forms Routes*/
  {
    path: '', redirectTo: 'getting-started', pathMatch: 'full'
  },

  

  /** Getting Started  Page */
  {
    path: 'getting-started', loadChildren: './gettingstarted/gettingstarted#GettingStatedModule'
  },

  /** Amexio Color  Page */
  {
    path: 'amexio-colors', loadChildren: './theme/theme.module#ThemeModule'
  },
  /** D3 Chart Page */

  {
    path: 'd3-charts', loadChildren: './chartd3/chartd3.demo.module#ChartD3DemoModule'
  },

  /** Forms Input */
  {
    path: 'forms-Input', loadChildren: './FormsInput/FormsInput.module#FormsInputModule'
  },

  /** Forms Action */

  {
    path: 'forms-Action', loadChildren: './FormsAction/FormsAction.module#FormsActionModule'
  },

  /** DATA contain grid and Tree*/

  {
    path: 'data', loadChildren: './data/Data.module#DataModule'
  },

  /** Drag and Drop Tree*/

  {
    path: 'dragdrop', loadChildren: './draganddrop/DragDrop.module#DragDropModule'
  },

  /** Navigation*/

  {
    path: 'navigation', loadChildren: './navigation/navigation.module#NavigationModule'
  },

  /** Media Routes*/
  {
    path: 'media-demo', loadChildren: './media/media.module#MediaModule'
  },
  /**Layout Routes*/
  {
    path: 'layout', loadChildren: './layout/layout.module#LayoutModule'
  },
  /** panes Routes*/
  {
    path: 'panes', loadChildren: './panes/panes.module#PanesModule'
  },

  /** Contextual Menu Routes*/
  {
    path: 'contextualmenu', loadChildren: './contextualmenu/contextualmenu.module#ContextualMenuModule'
  },

  /**Dashboard Routes*/
  {
    path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'
  },


  /**Map Routes*/
  {
    path: 'map', loadChildren: './map/map.module#MapModule'
  },

  /** Enterprise */
  {
    path: 'enterprise', loadChildren: './enterprise/enterprise.module#EnterpriseModule'
  },

  /** drillableD3Chart */
  {
    path: 'drillableD3Chart', loadChildren: './drillableChart/drillablechart.module#DrillableD3ChartModule'
  },
  /** Google Chart Routes*/
  {
    path: 'google-chart', loadChildren: './charts/googlechart/googlechart.module#GoogleChartModule'
  },

  /* D3-Charts */

  {
    path: 'D3chart', loadChildren: './charts/D3charts/D3charts.module#D3ChartModule'
  },


  /** Forms HTML AND REACTIVE */

  {
    path: 'forms', loadChildren: './Forms/forms.module#FormsDemoModule'
  },


  {
    path: 'creative', loadChildren: './creative/creative.module#CreativeModule'
  },


];
