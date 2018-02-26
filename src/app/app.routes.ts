/**
 * Created by pratik on 11/12/17.
 */
import {Routes} from '@angular/router';

export const APP_ROUTE: Routes = [/**Forms Routes*/
  {
    path: '', redirectTo: 'getting-started', pathMatch: 'full'
  }, {
    path: 'getting-started', loadChildren: './gettingstarted/gettingstarted#GettingStatedModule'
  }, {
    path: 'textinput', loadChildren: './forms/text/text.demo.module#TextDemoModule'
  },
  {
    path: 'email-demo', loadChildren: './forms/email/email.demo.module#EmailDemoModule'
  },
  {
    path: 'number-demo', loadChildren: './forms/number/number.demo.module#NumberDemoModule'
  },
  {
    path: 'label-demo', loadChildren: './forms/label/label.demo.module#LabelDemoModule'
  },
  {
    path: 'password-demo', loadChildren: './forms/password/password.demo.module#PasswordDemoModule'
  },
  {
    path: 'textarea-demo', loadChildren: './forms/textarea/textarea.demo.module#TextareaDemoModule'
  },
  {
    path: 'checkboxgroup-demo', loadChildren: './forms/checkboxgroup/checkboxgroup.demo.module#CheckBoxGroupDemoModule'
  },
  {
    path: 'radiogroup-demo', loadChildren: './forms/radiogroup/radiogroup.demo.module#RadioGroupDemoModule'
  },
  {
    path: 'typeahead-demo', loadChildren: './forms/typeahead/typeahead.demo.module#TypeAheadDemoModule'
  },
  {
    path: 'rating-demo', loadChildren: './forms/rating/rating.demo.module#RatingDemoModule'
  },
  {
    path: 'toggle-demo', loadChildren: './forms/toggle/toggle.demo.module#ToggleDemoModule'
  },
  {
    path: 'fileupload-demo', loadChildren: './forms/fileupload/fileupload.demo.module#FileUploadDemoModule'
  },
  {
    path: 'slider-demo', loadChildren: './forms/slider/slider.demo.module#SliderDemoModule'
  },
  {
    path: 'singlecheckbox-demo', loadChildren: './forms/singlecheckbox/singlecheckbox.demo.module#SinglecheckboxDemoModule'
  },
  {
    path: 'date-picker-demo', loadChildren: './forms/datepicker/datepicker.demo.module#DateTimeDemoModule'
  },
  {
    path: 'taginput-demo', loadChildren: './forms/taginput/taginput.demo.module#TagInputDemoModule'
  },
  {
    path: 'itemselector-demo', loadChildren: './forms/itemselector/itemselector.demo.module#ItemSelectorDemoModule'
  },
  /** Drop Down*/
  {
    path: 'dropdownbasic', loadChildren: './forms/dropdown/dropdown.demo.module#DropDownDemoModule'
  },
  {
    path: 'dropdownfilter', loadChildren: './forms/dropdownfilter/dropdownfilter.demo.module#DropDownFilterDemoModule'
  },
  {
    path: 'dropdownmulti', loadChildren: './forms/dropdownmulti/dropdownmulti.demo.module#DropDownMultiDemoModule'
  },
  /**Button */
  {
    path: 'button-demo', loadChildren: './forms/button/button.demo.module#ButtonDemoModule'
  },
  {
    path: 'buttongroup-demo', loadChildren: './forms/buttongroup/buttongroup.demo.module#ButtonGroupDemoModule'
  },
  {
    path: 'buttondropdown-demo', loadChildren: './forms/buttondropdown/buttondropdown.demo.module#ButtonDropDownDemoModule'
  },
  {
    path: 'floatingbutton-demo', loadChildren: './forms/floatingbutton/floatingbutton.demo.module#FloatingButtonDemoModule'
  },
  /** Navigation*/
  {
    path: 'dockbar-demo', loadChildren: './navigation/dockbar/dockbar.demo.module#DockbarDemoModule'
  },
  {
    path: 'notification-demo', loadChildren: './navigation/notification/notification.demo.module#NotificationDemoModule'
  },
  {
    path: 'sidenav-demo', loadChildren: './navigation/sidenav/sidenav.demo.module#SideNavDemoModule'
  },
  {
    path: 'navbar-demo', loadChildren: './navigation/navbar/navbar.demo.module#NavBarDemoModule'
  },
  {
    path: 'menubar-demo', loadChildren: './navigation/menubar/menubar.demo.module#MenuBarDemoModule'
  },
  /** Media*/
  {
    path: 'image-demo', loadChildren: './media/image/image.demo.module#ImageDemoModule'
  },
  {
    path: 'video-demo', loadChildren: './media/video/video.demo.module#VideoDemoModule'
  },
  /**Layout Routes*/
  {
    path: 'card-form-demo', loadChildren: './layout/card/cardform/cardform.demo.module#CardFormDemoModule'
  },
  {
    path: 'card-image-demo', loadChildren: './layout/card/cardimage/cardimage.demo.module#CardImageDemoModule'
  },
  {
    path: 'column-demo', loadChildren: './layout/column/column.demo.module#ColumnDemoModule'
  },
  {
    path: 'row-demo', loadChildren: './layout/row/row.demo.module#RowDemoModule'
  },
  {
    path: 'basic-tab-demo', loadChildren: './layout/tab/tab.demo.module#TabDemoModule'
  },
  {
    path: 'closable-tab-demo', loadChildren: './layout/tab/closabletab/closabletab.demo.module#ClosableTabDemoModule'
  },
  {
    path: 'icon-tab-demo', loadChildren: './layout/tab/iconwithtab/iconwithtab.demo.module#IconWithTabDemoModule'
  },
  {
    path: 'scrollable-tab-demo', loadChildren: './layout/tab/scrollabletab/scrollabletab.demo.module#ScrollableTabDemoModule'
  },
  {
    path: 'vertical-tab-demo', loadChildren: './layout/tab/verticaltab/verticaltab.demo.module#VerticalTabDemoModule'
  },
  {
    path: 'verticalright-tab-demo', loadChildren: './layout/tab/verticalrighttab/verticalrighttab.demo.module#VerticalRightTabDemoModule'
  },
  {
    path: 'step-box', loadChildren: './layout/steps/stepbox/stepbox.demo.module#StepBoxDemoModule'
  },
  {
    path : 'step-box-icon', loadChildren : './layout/steps/stepbox-icon/stepbox.icon.demo.module#StepBoxIconDemoModule'
  },
  {
    path : 'accordion', loadChildren : './panes/accordion/accordion.demo.module#AccordionDemoModule'
  },
  {
    path : 'panel', loadChildren : './panes/panel/panel.demo.module#PanelDemoModule'
  },
  {
    path : 'carousel', loadChildren : './panes/carousel/carousel.demo.module#CarouselDemoModule'
  },
  {
    path : 'fieldset', loadChildren : './panes/fieldset/fieldset.demo.module#FieldSetDemoModule'
  },
  {
    path : 'window', loadChildren : './panes/window/window.demo.module#WindowDemoModule'
  },
  {
    path : 'dialouge', loadChildren : './panes/dialogue/dialogue.demo.module#DialogueDemoModule'
  },
  {
    path : 'border', loadChildren : './layout/border/border.demo.module#BorderDemoRoutingModule'
  },


  /**Chart Routes*/
  {
    path: 'area-chart-demo', loadChildren: './charts/areachart/areachart.demo.module#AreaChartDemoModule'
  }, {
    path: 'bar-chart-demo', loadChildren: './charts/barchart/barchart.demo.module#BarChartDemoModule'
  }, {
    path: 'bubble-chart-demo', loadChildren: './charts/bubblechart/bubblechart.demo.module#BubbleChartDemoModule'
  }, {
    path: 'candlestick-chart-demo',
    loadChildren: './charts/candlestickchart/candlestickchart.demo.module#CandlestickChartDemoModule'
  }, {
    path: 'candlestickwaterfall-chart-demo',
    loadChildren: './charts/candlestickwaterfallchart/candlestickchartwaterfall.demo.module#CandlestickWaterfallChartDemoModule'
  }, {
    path: 'column-chart-demo', loadChildren: './charts/columnchart/columnchart.demo.module#ColumnChartDemoModule'
  }, {
    path: 'combo-chart-demo', loadChildren: './charts/combochart/combochart.demo.module#ComboChartDemoModule'
  }, {
    path: 'donut-chart-demo', loadChildren: './charts/donutchart/donutchart.demo.module#DonutChartDemoModule'
  }, {
    path: 'histogram-chart-demo',
    loadChildren: './charts/histogramchart/histogramchart.demo.module#HistogramChartDemoModule'
  }, {
    path: 'line-chart-demo', loadChildren: './charts/linechart/linechart.demo.module#LineChartDemoModule'
  }, {
    path: 'pie-chart-demo', loadChildren: './charts/piechart/piechart.demo.module#PieChartDemoModule'
  }, {
    path: 'scatter-chart-demo', loadChildren: './charts/scatterchart/scatterchart.demo.module#ScatterChartDemoModule'
  }, {
    path: 'timeline-chart-demo',
    loadChildren: './charts/timelinechart/timelinechart.demo.module#TimelineChartDemoModule'
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
    path: 'paginator-demo', loadChildren: './data/paginator/paginator.demo.module#PaginatorDemoModule'
  },
  {
    path: 'listbox-demo', loadChildren: './data/listbox/listbox.demo.module#ListBoxDemoModule'
  },

  /*grid....*/

  {
    path: 'simple-grid', loadChildren: './data/simplegrid/simplegrid.demo.module#SimpleGridDemoModule'
  },
  {
    path: 'template-grid', loadChildren: './data/gridwithtemplate/gridwithtemplate.demo.module#GridWithTemplateDemoModule'
  },
  {
    path: 'filter-grid', loadChildren: './data/filtergrid/filtergrid.demo.module#FilterGridDemoModule'
  },
  {
    path: 'groupby-grid', loadChildren: './data/groupby/groupbygrid.demo.module#GroupByGridDemoModule'
  },
  {
    path: 'custom-col-grid', loadChildren: './data/customcolsize/customcolsizegrid.demo.module#CustomColSizeDemoModule'
  },
  {
    path: 'scroll-grid', loadChildren: './data/gridwithscroll/gridwithscroll.demo.module#GridWithScrollDemoModule'
  },
  {
    path: 'tree-data-grid', loadChildren: './data/treedatagrid/treedatagrid.demo.module#TreeDataGridDemoModule'
  },

  /*Tree*/

  {
    path: 'simple-tree', loadChildren: './data/tree/simpletree/simpletree.demo.module#SimpleTreeDemoModule'
  },
  {
    path: 'template-tree', loadChildren: './data/tree/treewithtemplate/treewithtemplate.demo.module#TreeWithTemplateDemoModule'
  },
  {
    path: 'filter-tree', loadChildren: './data/tree/filtertree/filtertree.demo.module#FilterTreeDemoModule'
  },
  {
    path: 'checkbox-tree', loadChildren: './data/tree/checkboxtree/checkboxtree.demo.module#CheckboxTreeDemoModule'
  },
  {
    path: 'horizontal-tree', loadChildren: './data/tree/horizontaltree/horizontaltree.demo.module#HorizontalTreeDemoModule'
  },
/*Progress bar*/
  {
    path: 'progressbar-demo', loadChildren: './data/progressbar/progressbar.demo.module#ProgressBarDemoModule'
  },
  {
    path : 'multi-item-carousel', loadChildren : './enterprise/multi-item-carousel/multi.item.carousel#EECarouselDemoRoutingModule'
  },
  {
    path : 'ee-content', loadChildren : './enterprise/content/content.demo.module#ContentRoutingModule'
  },
  {
    path : 'ee-video', loadChildren : './enterprise/youtube-player/youtube.demo.module#YoutubePlayerModule'
  },
  {
    path : 'license', loadChildren : './license/license.module#LicenseModule'
  }

];
