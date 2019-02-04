/**
 * Created by pratik on 11/12/17.
 */
import { Routes } from '@angular/router';

export const APP_ROUTE: Routes = [/**Forms Routes*/
  {
    path: '', redirectTo: 'getting-started', pathMatch: 'full'
  },
  {
    path: 'getting-started', loadChildren: './gettingstarted/gettingstarted#GettingStatedModule'
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







  {
    path: 'form-demo', loadChildren: './Forms/form/form.demo.module#FormDemoModule'
  },
  {
    path: 'reactive-form', loadChildren: './Forms/reactiveform/reactiveform.demo.module#ReactiveFormComponentModule'
  },
  {
    path: 'html-reactive-form', loadChildren: './Forms/form-html/reactive-forms/reactiveform.demo.module#HtmlReactiveFormComponentModule'
  },
  {
    path: 'html-form-demo', loadChildren: './Forms/form-html/template-driven/form.demo.module#HtmlFormDemoModule'
  },

  
  /* D3-Charts */

  {
    path: 'amexio-d3-chart-bar', loadChildren: './charts/D3charts/d3barchart/d3barchart.demo.module#D3BarChartDemoModule'
  },
  {
    path: 'amexio-d3-chart-horizontal', loadChildren: './charts/D3charts/d3horizontalbarchart/d3horizontalbarchart.demo.module#D3HorizontalBarChartComponentModule'
  },
  {
    path: 'amexio-d3-chart-bubble', loadChildren: './charts/D3charts/d3bubblechart/d3bubblechart.demo.module#D3BubbleChartDemoModule'
  },
  {
    path: 'amexio-d3-chart-waterfall', loadChildren: './charts/D3charts/d3waterfallchart/d3waterfallchart.demo.module#D3WaterfallChartDemoModule'
  },
  {
    path: 'amexio-d3-chart-scatter', loadChildren: './charts/D3charts/d3scatterchart/d3scatterchart.demo.module#D3ScatterChartDemoModule'
  },
  {
    path: 'amexio-d3-chart-combo', loadChildren: './charts/D3charts/d3combochart/d3combochart.demo.module#D3ComboChartDemoModule'
  },
  {
    path: 'amexio-d3-chart-bar-stack', loadChildren: './charts/D3charts/d3barstackchart/d3barstackchart.demo.module#D3BarStackChartDemoModule'
  },
  {
    path: 'amexio-d3-chart-line', loadChildren: './charts/D3charts/d3linechart/d3linechart.demo.module#D3LineChartDemoModule'
  },
  {
    path: 'amexio-d3-chart-donut', loadChildren: './charts/D3charts/d3donutchart/d3donutchart.demo.module#D3DonutChartDemoModule'
  },
  {
    path: 'amexio-d3-chart-pie', loadChildren: './charts/D3charts/d3piechart/d3piechart.demo.module#D3PieChartDemoModule'
  },

  {
    path: 'amexio-d3-chart-multiseries', loadChildren: './charts/D3charts/d3multiserieschart/d3multiserieschart.demo.module#D3MultiSeriesChartDemoModule'
  },
  {
    path: 'amexio-d3-chart-histogram', loadChildren: './charts/D3charts/d3histogramchart/d3histogramchart.demo.module#D3HistogramChartDemoModule'
  },
  {
    path: 'amexio-d3-chart-multiarea', loadChildren: './charts/D3charts/d3multiareachart/d3multiareachart.demo.module#D3MultiAreaChartDemoModule'
  },
  {
    path: 'amexio-d3-chart-timeline', loadChildren: './charts/D3charts/d3timelinechart/d3timelinechart.demo.module#D3TimelineChartDemoModule'
  }

];
