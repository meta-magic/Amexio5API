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


  /** Navigation*/
  {
    path: 'dockbar-demo', loadChildren: './navigation/dockbar/dockbar.demo.module#DockbarDemoModule'
  },

  {
    path: 'sidenav-demo', loadChildren: './navigation/sidenav/sidenav.demo.module#SideNavDemoModule'
  },
  {
    path: 'sidenav-page', loadChildren: './navigation/sidenavpage/sidenavpage.demo.module#sideNavDemoPageModule'
  },
  {
    path: 'navbar-demo', loadChildren: './navigation/navbar/navbar.demo.module#NavBarDemoModule'
  },
  {
    path: 'menubar-demo', loadChildren: './navigation/menubar/menubar.demo.module#MenuBarDemoModule'
  },
  {
    path: 'toolbar-demo', loadChildren: './navigation/toolbar/toolbar.demo.module#ToolbarDemoModule'
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

  {
    path: 'form-demo', loadChildren: './Forms/form/form.demo.module#FormDemoModule'
  },
  {
    path: 'reactive-form', loadChildren: './Forms/reactiveform/reactiveform.demo.module#ReactiveFormComponentModule'
  },
  {
    path:'html-reactive-form',loadChildren:'./Forms/form-html/reactive-forms/reactiveform.demo.module#HtmlReactiveFormComponentModule'
  },
  {
    path:'html-form-demo',loadChildren :'./Forms/form-html/template-driven/form.demo.module#HtmlFormDemoModule'
  },

  /**Chart Routes*/
  {
    path: 'area-chart-demo', loadChildren: './charts/googlechart/areachart/areachart.demo.module#AreaChartDemoModule'
  }, {
    path: 'bar-chart-demo', loadChildren: './charts/googlechart/barchart/barchart.demo.module#BarChartDemoModule'
  }, {
    path: 'bubble-chart-demo', loadChildren: './charts/googlechart/bubblechart/bubblechart.demo.module#BubbleChartDemoModule'
  }, {
    path: 'candlestick-chart-demo',
    loadChildren: './charts/googlechart/candlestickchart/candlestickchart.demo.module#CandlestickChartDemoModule'
  }, {
    path: 'candlestickwaterfall-chart-demo',
    loadChildren: './charts/googlechart/candlestickwaterfallchart/candlestickchartwaterfall.demo.module#CandlestickWaterfallChartDemoModule'
  }, {
    path: 'column-chart-demo', loadChildren: './charts/googlechart/columnchart/columnchart.demo.module#ColumnChartDemoModule'
  }, {
    path: 'combo-chart-demo', loadChildren: './charts/googlechart/combochart/combochart.demo.module#ComboChartDemoModule'
  }, {
    path: 'donut-chart-demo', loadChildren: './charts/googlechart/donutchart/donutchart.demo.module#DonutChartDemoModule'
  }, {
    path: 'gantt-chart-demo', loadChildren: './charts/googlechart/ganttchart/ganttchart.demo.module#GanttChartDemoModule'
  }, {
    path: 'histogram-chart-demo',
    loadChildren: './charts/googlechart/histogramchart/histogramchart.demo.module#HistogramChartDemoModule'
  }, {
    path: 'line-chart-demo', loadChildren: './charts/googlechart/linechart/linechart.demo.module#LineChartDemoModule'
  }, {
    path: 'pie-chart-demo', loadChildren: './charts/googlechart/piechart/piechart.demo.module#PieChartDemoModule'
  }, {
    path: 'scatter-chart-demo', loadChildren: './charts/googlechart/scatterchart/scatterchart.demo.module#ScatterChartDemoModule'
  }, {
    path: 'timeline-chart-demo',
    loadChildren: './charts/googlechart/timelinechart/timelinechart.demo.module#TimelineChartDemoModule'
  },

  /**Dashboard Routes*/
  {
    path: 'gauge-dashboard-demo', loadChildren: './dashboard/gauge/gauge.demo.module#GaugeDemoModule'
  }, {
    path: 'datapoint', loadChildren: './dashboard/datapoints/datapoint.demo.module#DatapointsModule'
  },

  /**Map Routes*/
  {
    path: 'geo-chart-demo', loadChildren: './map/geochart/geochart.demo.module#GeoChartDemoModule'
  }, {
    path: 'tree-map-demo', loadChildren: './map/treemap/treemap.demo.module#TreeMapDemoModule'
  },

  /**Data Routes*/
  
  {
    path: 'breadcrumb-demo', loadChildren: './navigation/breadcrumb/breadcrumb.demo.module#BreadcrumbDemoModule'
  },
  {
    path: 'google-map-demo', loadChildren: './data/googlemap/googlemap.demo.module#GoogleMapModule'
  },
  {
    path: 'multi-item-carousel', loadChildren: './enterprise/multi-item-carousel/multi.item.carousel#EECarouselDemoRoutingModule'
  },
  {
    path: 'ee-content', loadChildren: './enterprise/content/content.demo.module#ContentRoutingModule'
  },
  {
    path: 'ee-appointment', loadChildren: './enterprise/appointment/appointment.demo.module#EEAppointmentRoutingModule'
  },
  {
    path: 'ee-video', loadChildren: './enterprise/youtube-player/youtube.demo.module#YoutubePlayerModule'
  },
  {
    path: 'license', loadChildren: './license/license.module#LicenseModule'
  },
  {
    path: 'dropdownmenu', loadChildren: './navigation/dropdownmenu/dropdownmenu.demo.module#DropDownMenuDemoModule'
  },
  // Grid Layout
  /*Drag and Drop*/
  {
    path: 'within-tree', loadChildren: './draganddrop/withintree/withintree.demo.module#WithinTreeDemoModule'
  },
  {
    path: 'across-tree', loadChildren: './draganddrop/acrosstree/acrosstree.demo.module#AcrossTreeDemoModule'
  },
  {
    path: 'tree-to-panel', loadChildren: './draganddrop/treetopanel/treetopanel.demo.module#TreeToPanelDemoModule'
  },
  {
    path: 'itemselectordragdrop-demo', loadChildren: './draganddrop/itemselectordragdrop/itemselectordragdrop.demo.module#ItemSelectorDragdropDemoModule'
  },
  {
    path: 'selectordragdrop-panel', loadChildren: './draganddrop/selectordragdroppanel/selectordragdroppanel.demo.module#ItemSelectorDragdropPanelModule'
  },

  /*Contextual Menus*/
  {
    path: 'contextual-menu-tree', loadChildren: './contextualmenu/tree/contextmenutree.demo.module#ContextualMenuTreeDemoModule'
  },
  // {
  //   path: 'contextual-menu-grid', loadChildren: './contextualmenu/grid/contextmenugrid.demo.module#ContextualMenuGridDemoModule'
  // },
  {
    path: 'contextual-menu-listbox', loadChildren: './contextualmenu/listbox/contextmenulistbox.demo.module#ContextualMenuListBoxDemoModule'
  },
  {
    path: 'contextual-menu-tab', loadChildren: './contextualmenu/tab/contextmenutab.demo.module#ContextMenuTabDemoModule'
  },

  {
    path: 'contextmenu-card-form', loadChildren: './contextualmenu/card/contextmenucardform.demo.module#ContextMenuCardFormDemoModule'
  },
  {
    path: 'contextual-menu-tab', loadChildren: './contextualmenu/tab/contextmenutab.demo.module#ContextMenuTabDemoModule'
  },
  {
    path: 'contextmenu-panel', loadChildren: './contextualmenu/panel/contextmenupanel.demo.module#ContextMenuPanelDemoModule'
  },
  {
    path: 'contextmenu-window', loadChildren: './contextualmenu/window/contextmenuwindow.demo.module#ContextMenuWindowDemoModule'
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
  },
  {
    path: 'drillable-with-single-target-demo', loadChildren: './charts/D3charts/d3drillablesingletarget/d3drillablesingletarget.demo.module#D3DrillableSingleTargetDemoModule'
  },
  {
    path: 'drillable-with-multiple-target-demo', loadChildren: './charts/D3charts/d3drillablemultipletarget/d3drillablemultipletarget.demo.module#D3DrillableMultipleTargetDemoModule'
  },

];
