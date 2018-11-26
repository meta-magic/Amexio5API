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
    {
      path: 'textinput', loadChildren: './forms/text/text.demo.module#TextDemoModule'
    },
    {
      path: 'amexio-colors', loadChildren: './theme/theme.module#ThemeModule'
    },
    {
      path: 'd3-charts', loadChildren: './chartd3/chartd3.demo.module#ChartD3DemoModule'
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
      path: 'recaptcha-demo', loadChildren: './forms/recaptcha/recaptcha.demo.module#RecaptchaDemoModule'
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
      path: 'chips-demo', loadChildren: './forms/chips/chips.demo.module#ChipsDemoModule'
    },
    {
      path: 'radiogroup-demo', loadChildren: './forms/radiogroup/radiogroup.demo.module#RadioGroupDemoModule'
    },
    {
      path: 'typeahead-demo', loadChildren: './forms/typeahead/typeahead.demo.module#TypeAheadDemoModule'
    },
    {
      path: 'searchbox-demo', loadChildren: './forms/searchbox/searchbox.demo.module#SearchBoxDemoModule'
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
    {
      path: 'credit-card-demo', loadChildren: './forms/creditcard/creditcard.demo.module#CreditCardDemoModule'
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
    {
      path: 'dropdowntemplate', loadChildren: './forms/dropdowntemplate/dropdowntemplate.demo.module#DropDownTemplateDemoModule'
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
    {
      path: 'floatinggroupbutton-demo', loadChildren: './forms/floatinggroup/floatinggroupbutton.demo.module#FloatingGroupButtonDemoModule'
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
      path: 'vertical-layout', loadChildren: './layout/verticallayout/verticallayout.demo.module#VerticalLayoutDemoModule'
    },
    {
      path: 'horizontal-layout', loadChildren: './layout/horizontallayout/horizontallayout.demo.module#horizontalLayoutDemoModule'
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
      path: 'box-demo', loadChildren: './layout/box/box.demo.module#BoxDemoModule'
    },
    {
      path: 'scrollable-tab-demo', loadChildren: './layout/tab/scrollabletab/scrollabletab.demo.module#ScrollableTabDemoModule'
    },
    {
      path: 'enhanced-tab-demo', loadChildren: './layout/tab/enhancedtab/enhancedtab.demo.module#EnhancedTabDemoModule'
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
      path: 'step-box-icon', loadChildren: './layout/steps/stepbox-icon/stepbox.icon.demo.module#StepBoxIconDemoModule'
    },
    {
      path: 'timeline', loadChildren: './panes/timeline/timeline.demo.module#TimelineDemoModule'
    },
    {
      path: 'accordion', loadChildren: './panes/accordion/accordion.demo.module#AccordionDemoModule'
    },
    {
      path: 'panel', loadChildren: './panes/panel/panel.demo.module#PanelDemoModule'
    },

    {
      path: 'carousel', loadChildren: './panes/carousel/carousel.demo.module#CarouselDemoModule'
    },
    {
      path: 'fieldset', loadChildren: './panes/fieldset/fieldset.demo.module#FieldSetDemoModule'
    },
    {
      path: 'window', loadChildren: './panes/window/window.demo.module#WindowDemoModule'
    },

    {
      path: 'form-demo', loadChildren: './panes/form/form.demo.module#FormDemoModule'
    },

    {
      path: 'reactive-form', loadChildren: './panes/reactiveform/reactiveform.demo.module#ReactiveFormComponentModule'
    },
    {
      path:'html-reactive-form',loadChildren:'./panes/form-html/reactive-forms/reactiveform.demo.module#HtmlReactiveFormComponentModule'
    },
    {
      path:'html-form-demo',loadChildren :'./panes/form-html/template-driven/form.demo.module#HtmlFormDemoModule'
    },
    {
      path: 'dialouge', loadChildren: './panes/dialogue/dialogue.demo.module#DialogueDemoModule'
    },
    {
      path: 'border', loadChildren: './layout/border/border.demo.module#BorderDemoRoutingModule'
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
      path: 'paginator-demo', loadChildren: './data/paginator/paginator.demo.module#PaginatorDemoModule'
    },
    {
      path: 'listbox-demo', loadChildren: './data/listbox/listbox.demo.module#ListBoxDemoModule'
    },
    {
      path: 'breadcrumb-demo', loadChildren: './navigation/breadcrumb/breadcrumb.demo.module#BreadcrumbDemoModule'
    },
    /*grid....*/
    {
      path: 'simple-grid', loadChildren: './data/simplegrid/simplegrid.demo.module#SimpleGridDemoModule'
    },
    {
      path: 'gridwithtoolbar-demo', loadChildren: './data/gridwithtoolbar/gridwithtoolbar.demo.module#GridWithToolBarDemoModule'
    },
    {
      path: 'template-grid', loadChildren: './data/gridwithtemplate/gridwithtemplate.demo.module#GridWithTemplateDemoModule'
    },
    {
      path: 'header-template', loadChildren: './data/headertemplate/headertemplate.demo.module#HeaderTemplateDemoModule'
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
      path: 'global-filter-grid', loadChildren: './data/globalfiltergrid/globalfilter.demo.module#GlobalFilterDemoModule'
    },
    {
      path: 'tree-data-grid', loadChildren: './data/treedatagrid/treedatagrid.demo.module#TreeDataGridDemoModule'
    },
    {
      path: 'tree-data-template', loadChildren: './data/treedatatemplate/treedatatemplate.demo.module#TreeDataTemplateDemoModule'
    },

    /*Tree*/
    {
      path: 'simple-tree', loadChildren: './data/tree/simpletree/simpletree.demo.module#SimpleTreeDemoModule'
    },
    {
      path: 'collapsetree-demo', loadChildren: './data/tree/collapsetree/collapsetree.demo.module#CollapseTreeDemoModule'
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
      path: 'dragdrop-tree', loadChildren: './data/tree/treedragdrop/treedragdrop.demo.module#DragDropTreeDemoModule'
    },
    {
      path: 'badge-tree', loadChildren: './data/tree/treewithbadge/treewithbadge.demo.module#TreeWithBadgeDemoModule'
    },
    {
      path: 'horizontal-tree', loadChildren: './data/tree/horizontaltree/horizontaltree.demo.module#HorizontalTreeDemoModule'
    },
    /*Progress bar*/
    {
      path: 'progressbar-demo', loadChildren: './data/progressbar/progressbar.demo.module#ProgressBarDemoModule'
    },
    {
      path: 'amexio-spinner-demo', loadChildren: './data/spinner/spinner.demo.module#AmexioSpinnerDemoModule'
    },
    {
      path: 'multi-item-carousel', loadChildren: './enterprise/multi-item-carousel/multi.item.carousel#EECarouselDemoRoutingModule'
    },
    {
      path: 'ee-content', loadChildren: './enterprise/content/content.demo.module#ContentRoutingModule'
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
    {
      path: 'gridlayout-demo', loadChildren: './layout/gridlayout/gridlayoutbasic/gridlayout.demo.module#GridLayoutDemoModule'
    },
    {
      path: 'gridlayout-demo-exp1', loadChildren: './layout/gridlayout/gridlayoutone/gridlayout.demo.module#GridLayoutDemoModule'
    },
    {
      path: 'gridlayout-demo-exp2', loadChildren: './layout/gridlayout/gridlayouttwo/gridlayout.demo.module#GridLayoutDemoModule'
    },
    {
      path: 'gridlayout-demo-exp3', loadChildren: './layout/gridlayout/gridlayoutthree/gridlayout.demo.module#GridLayoutDemoModule'
    },
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
    {
      path: 'contextual-menu-grid', loadChildren: './contextualmenu/grid/contextmenugrid.demo.module#ContextualMenuGridDemoModule'
    },
    {
      path: 'contextual-menu-listbox', loadChildren: './contextualmenu/listbox/contextmenulistbox.demo.module#ContextualMenuListBoxDemoModule'
    },
    {
      path: 'contextual-menu-tab', loadChildren: './contextualmenu/tab/contextmenutab.demo.module#ContextMenuTabDemoModule'
    },
    {
      path: 'context-menu-grid', loadChildren: './data/gridwithcontextmenu/gridwithcontextmenu.demo.module#GridWithScrollDemoModule'
    },
    {
      path: 'context-menu-tree', loadChildren: './data/tree/contextmenutree/contextmenutree.demo.module#ContextMenuTreeDemoModule'
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
      path: 'drillable-with-single-target-demo', loadChildren: './charts/D3charts/d3drillablesingletarget/d3drillablesingletarget.demo.module#D3DrillableSingleTargetDemoModule'
    },
    {
      path: 'drillable-with-multiple-target-demo', loadChildren: './charts/D3charts/d3drillablemultipletarget/d3drillablemultipletarget.demo.module#D3DrillableMultipleTargetDemoModule'
    },

  ];
