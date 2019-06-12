export const MENUCONSTANT = {
  HOMEMENUS: [
    { text: "Concept", icon: "fab fa-leanpub", link: "concept-page" },
    { text: "Quick Start", icon: "fa fa-bars  ", link: "getting-started" },
    { text: "Themes", icon: "fa fa-snowflake-o", link: "amexio-colors" },
    { text: "D3 Charts", link: "d3-charts", icon: "fa fa-openid" },
    {
      text: "Accessibility",
      link: "amexio-accessibility",
      icon: "fa fa-universal-access"
    }
  ],

  DIRECTIVES: [
    {
      text: "Color Palette",
      icon: "fas fa-palette",
      link: "directive-demo/color-palette"
    },
    {text:"Input Mask",
    icon:"fa fa-file-text-o",
    badge: "NEW",
    link:"directive-demo/input-mask"}
  ],

  EEMENUS: [
    {
      text: "Layouts",
      icon: "fa fa-desktop  ",
      children: [
        {
          text: "Home Page",
          icon: "fa fa-home",
          link: "creative/homepage-ce-demo"
        }
      ]
    },
    {
      text: "Panels",
      icon: "fa fa-bars  ",
      children: [
        {
          text: "Amexio Runtime (ARC)",
          icon: "fa fa-th",
          link: "panes/arc-demo"
        },
        {
          text: "Steps Wizard",
          icon: "fa fa-step-forward",
          link: "enterprise/step-wizard-demo"
        }
      ]
    },
    {
      text: "Form Inputs",
      icon: "fa fa-clone  ",
      children: [
        {
          text: "Credit-Card",
          icon: "fa fa-credit-card",
          link: "forms-Input/credit-card-demo"
        },
        {
          text: "Multi DatePicker",
          icon: "fa fa-calendar  ",
          link: "forms-Input/multidatepicker-demo"
        },
        {
          text: "Facebook Login",
          icon: "fa fa-facebook  ",
          link: "forms-Input/facebook-login-demo"
        },
        {
          text: "Google Login",
          icon: "fa fa-google  ",
          link: "forms-Input/google-login-demo"
        },
        {
          text: "LinkedIn Login",
          icon: "fa fa-linkedin-square  ",
          link: "forms-Input/linkedin-login-demo"
        },
        {
          text: "Recaptcha",
          icon: "fa fa-recycle  ",
          link: "forms-Input/recaptcha-demo"
        }
      ]
    },
    {
      text: "Data",
      badge: "3",
      icon: "fa fa-database  ",
      children: [
        {
          text: "Appointment",
          icon: "fa fa-calendar  ",
          link: "enterprise/ee-appointment-demo"
        },
        {
          text: "Banner",
          icon: "fa fa-id-card-o  ",
          badge: "NEW",
          link: "layout/banner-demo"
        },
        {
          text: "Calendar",
          icon: "fa fa-calendar  ",
          link: "enterprise/ee-calendar-demo"
        },
        {
          text: "Theme Switcher",
          icon: "fas fa-palette  ",
          badge: "NEW",
          link: "enterprise/theme-switcher-demo"
        },
        {
          text: "Tree Tab",
          icon: "fa fa-tree",
          badge: "New",
          link: "enterprise/tree-tab-demo"
        }
      ]
    }
  ],

  SEMENUS: [
    {
      text: "Layouts",
      icon: "fa fa-desktop  ",
      children: [
        {
          text: "Accordion",
          icon: "fa fa-bars  ",
          link: "layout/accordion-demo"
        },
        {
          text: "Border Layout",
          icon: "fa fa-id-card-o  ",
          link: "layout/border-demo"
        },
        { text: "Box", link: "layout/box-demo", icon: "fa fa-square  " },
        { text: "Column", link: "layout/column-demo", icon: "fa fa-columns  " },
        {
          text: "Card",
          icon: "fa fa-id-card-o  ",
          children: [
            {
              text: "Form",
              link: "layout/card-form-demo",
              icon: "fa fa-leaf  "
            },
            {
              text: "Image",
              link: "layout/card-image-demo",
              icon: "fa fa-leaf  "
            }
          ]
        },
        {
          text: "Column Vertical",
          icon: "fa fa-pause  ",
          link: "layout/vertical-layout"
        },
        {
          text: "Column Horizontal",
          icon: "fa fa-align-justify  ",
          link: "layout/horizontal-layout"
        },
        {
          text: "Grid Layout",
          icon: "fa fa-th  ",
          children: [
            {
              text: "Grid Layout Basic",
              icon: "fa fa-indent  ",
              link: "layout/gridlayout-demo"
            },
            {
              text: "gridlayout-Ex1",
              icon: "fa fa-indent  ",
              link: "layout/gridlayout-demo-exp1"
            },
            {
              text: "gridlayout-Ex2",
              icon: "fa fa-indent  ",
              link: "layout/gridlayout-demo-exp2"
            },
            {
              text: "gridlayout-Ex3",
              icon: "fa fa-indent  ",
              link: "layout/gridlayout-demo-exp3"
            },
            {
              text: "Collapsible Grid",
              icon: "fa fa-compress  ",
              link: "layout/cgd"
            }
          ]
        },
        { text: "Row", link: "layout/row-demo", icon: "fa fa-bars  " }
      ]
    },
    {
      text: "Panels",
      icon: "fa fa-bars  ",
      badge: "4",
      children: [
        {
          text: "Carousel",
          icon: "fa fa-indent  ",
          link: "panes/carousel-demo"
        },
        {
          text: "Dark-Mode",
          icon: "fa fa-toggle-on",
          link: "panes/darkmode-demo"
        },
        {
          text: "Dialogue",
          icon: "fa fa-window-maximize  ",
          link: "panes/dialogue-demo"
        },
        {
          text: "Fieldset",
          icon: "fa fa-id-card-o  ",
          link: "panes/fieldset-demo"
        },
        {
          text: "Floating Panel",
          icon: "fa fa-bars",
          link: "panes/floatingpanel-demo",
          badge: "New"
        },
        { text: "Panel", icon: "fa fa-bars  ", link: "panes/panel-demo" },
        {
          text: "Steps",
          icon: "fa fa-step-forward  ",
          children: [
            {
              text: "Step Box",
              link: "panes/step-box-demo",
              icon: "fa fa-leaf  "
            },
            {
              text: "Step Box Icon",
              link: "panes/stepbox-icon-demo",
              icon: "fa fa-leaf  "
            }
          ]
        },
        {
          text: "Tab",
          icon: "fa fa-folder  ",
          badge: "2",
          children: [
            {
              text: "Horizontal",
              icon: "fa fa-indent  ",
              children: [
                {
                  text: "Basic",
                  link: "panes/basic-tab-demo",
                  icon: "fa fa-leaf  "
                },
                {
                  text: "Closable",
                  link: "panes/closable-tab-demo",
                  icon: "fa fa-leaf  "
                },
                {
                  text: "Tab with Icon",
                  link: "panes/icon-tab-demo",
                  icon: "fa fa-leaf  "
                },
                {
                  text: "Scrollable",
                  link: "panes/scrollable-tab-demo",
                  icon: "fa fa-leaf  "
                },
                {
                  text: "Enhanced",
                  link: "panes/enhanced-tab-demo",
                  icon: "fa fa-leaf  "
                },
                {
                  text: "With Context Menu",
                  icon: "fa fa-leaf  ",
                  link: "contextualmenu/contextual-menu-tab-demo"
                }
              ]
            },
            {
              text: "Vertical",
              badge: "2",
              icon: "fa fa-outdent  ",
              children: [
                {
                  text: "Left Aligned",
                  link: "panes/vertical-tab-demo",
                  icon: "fa fa-leaf",
                  badge: "U"
                },
                {
                  text: "Right Aligned",
                  link: "panes/verticalright-tab-demo",
                  icon: "fa fa-leaf  ",
                  badge: "U"
                },
                {
                  text: "Enhanced",
                  link: "panes/enhanced-vertical-tab-demo",
                  icon: "fa fa-leaf  "
                }
              ]
            }
          ]
        },
        {
          text: "Window",
          icon: "fa fa-window-maximize  ",
          link: "panes/window-demo",
          badge: "U",
        }
      ]
    },
    {
      text: "Forms",
      icon: "fa fa-clone  ",
      children: [
        {
          text: "Form (HTML)",
          icon: "fa fa-window-maximize  ",
          children: [
            {
              text: "Template Driven",
              icon: "fa fa-window-maximize  ",
              link: "forms/html-form-demo"
            },
            {
              text: "Reactive Forms",
              icon: "fa fa-window-maximize  ",
              link: "forms/html-reactive-form"
            }
          ]
        },
        {
          text: "Amexio Forms",
          icon: "fa fa-window-maximize  ",
          children: [
            {
              text: "Template Driven",
              icon: "fa fa-window-maximize  ",
              link: "forms/form-demo"
            },
            {
              text: "Reactive Forms",
              icon: "fa fa-window-maximize  ",
              link: "forms/reactive-form"
            }
          ]
        }
      ]
    },
    {
      text: "Form Inputs",
      icon: "fa fa-clone  ",
      badge: "1",
      children: [
        {
          text: "Badge",
          icon: "fa fa-id-badge  ",
          link: "forms-Input/badge-demo"
        },
        {
          text: "Checkbox",
          icon: "fa fa-check-square-o  ",
          link: "forms-Input/singlecheckbox-demo"
        },
        {
          text: "Checkbox Group",
          icon: "fa fa-list  ",
          link: "forms-Input/checkboxgroup-demo"
        },
        {
          text: "Chips",
          icon: "fa fa-chevron-circle-down  ",
          link: "forms-Input/chips-demo"
        },
        {
          text: "Date & Time Picker",
          icon: "fa fa-calendar  ",
          link: "forms-Input/date-picker-demo"
        },
        {
          text: "DropDown",
          icon: "fa fa-caret-square-o-down  ",
          children: [
            {
              text: "Basic",
              icon: "fa fa-caret-down  ",
              link: "forms-Input/dropdownbasic"
            },
            {
              text: "Filter Search",
              icon: "fa fa-arrow-circle-down  ",
              link: "forms-Input/dropdownfilter"
            },
            {
              text: "Multi Select",
              icon: "fa fa-chevron-circle-down  ",
              link: "forms-Input/dropdownmulti"
            },
            {
              text: "Template",
              icon: "fa fa-chevron-circle-down  ",
              link: "forms-Input/dropdowntemplate"
            }
          ]
        },
        {
          text: "Email Field",
          icon: "fa fa-envelope-o  ",
          link: "forms-Input/email-demo"
        },
        {
          text: "File Upload",
          icon: "fa fa-file  ",
          link: "forms-Input/fileupload-demo"
        },
        {
          text: "Label",
          icon: "fa fa-terminal  ",
          link: "forms-Input/label-demo",
          badge: "U"
        },
        {
          text: "Number Field",
          icon: "fa fa-phone  ",
          link: "forms-Input/number-demo"
        },
        {
          text: "Password Field",
          icon: "fa fa-text-width  ",
          link: "forms-Input/password-demo"
        },
        {
          text: "Radio Group",
          icon: "fa fa-stop-circle-o  ",
          link: "forms-Input/radiogroup-demo"
        },
        {
          text: "Rating",
          icon: "fa fa-star-half-empty  ",
          link: "forms-Input/rating-demo"
        },
        {
          text: "Search Box",
          icon: "fa fa-search  ",
          link: "forms-Input/searchbox-demo"
        },
        {
          text: "Slider",
          icon: "fa fa-sliders  ",
          link: "forms-Input/slider-demo"
        },
        {
          text: "Range Slider",
          icon: "fa fa-arrows-h  ",
          link: "forms-Input/value-range"
        },
        {
          text: "Type Ahead",
          icon: "fa fa-search-minus  ",
          link: "forms-Input/typeahead-demo"
        },
        {
          text: "Tag Field",
          icon: "fa fa-tags  ",
          link: "forms-Input/taginput-demo"
        },
        {
          text: "Text Field",
          link: "forms-Input/textinput",
          icon: "fa fa-file-text-o  "
        },
        {
          text: "TextArea Field",
          icon: "fa fa-text-width  ",
          link: "forms-Input/textarea-demo"
        },
        {
          text: "Toggle",
          icon: "fa fa-toggle-on  ",
          link: "forms-Input/toggle-demo"
        }
      ]
    },
    {
      text: "Form Actions",
      icon: "fa fa-keyboard-o  ",
      children: [
        {
          text: "Buttons",
          icon: "fa fa-keyboard-o  ",
          children: [
            {
              text: "Button",
              icon: "fa fa-building-o  ",
              link: "forms-Action/button-demo"
            },
            {
              text: "Button Group",
              icon: "fa fa-newspaper-o  ",
              link: "forms-Action/buttongroup-demo"
            },
            {
              text: "Button Dropdown",
              icon: "fa fa-building  ",
              link: "forms-Action/buttondropdown-demo"
            },
            {
              text: "Floating Button",
              icon: "fa fa-circle-o  ",
              link: "forms-Action/floatingbutton-demo"
            },
            {
              text: "Floating Group",
              icon: "fa fa-circle-o  ",
              link: "forms-Action/floatinggroupbutton-demo"
            }
          ]
        },
        {
          text: "Notification",
          icon: "fa fa-comments  ",
          link: "forms-Action/notification-demo"
        },
        {
          text: "Paginator",
          icon: "fa fa-arrows-h  ",
          link: "forms-Action/paginator-demo"
        },
        {
          text: "Progress Bar",
          icon: "fa fa-circle-o-notch  ",
          link: "forms-Action/progressbar-demo"
        }
      ]
    },
    {
      text: "Data",
      icon: "fa fa-database  ",
      badge: "1",
      children: [
        {
          text: "Data Loading Indicator",
          icon: "fa fa-spinner",
          link: "data/amexio-spinner-demo"
        },
        {
          text: "Item Selector",
          icon: "fa fa-exchange  ",
          link: "data/itemselector-demo"
        },
        {
          text: "Grid",
          icon: "fa fa-database  ",
          children: [
            {
              text: "Simple",
              icon: "fa fa-database  ",
              link: "data/simplegrid-demo"
            },
            {
              text: "Grid - Lazy Loading",
              icon: "fa fa-database  ",
              link: "data/server-side-pagination-demo"
            },
            {
              text: "Column Sizing",
              icon: "fa fa-database  ",
              link: "data/custom-col-grid-demo"
            },
            {
              text: "Template",
              icon: "fa fa-database  ",
              link: "data/template-grid-demo"
            },
            {
              text: "Filter",
              icon: "fa fa-database  ",
              link: "data/filter-grid-demo"
            },
            {
              text: "Filter-Global",
              icon: "fa fa-database  ",
              link: "data/global-filter-grid-demo"
            },
            {
              text: "Group By",
              icon: "fa fa-database  ",
              link: "data/groupby-grid-demo"
            },
            {
              text: "Header Template",
              icon: "fa fa-database  ",
              link: "data/header-template-demo"
            },
            {
              text: "Grid with scroll",
              icon: "fa fa-database  ",
              link: "data/scroll-grid-demo"
            },
            {
              text: "Grid with Toolbar",
              icon: "fa fa-database  ",
              link: "data/gridwithtoolbar-demo"
            },
            {
              text: "Grid with Context menu",
              icon: "fa fa-database  ",
              link: "data/grid-context-menu-demo"
            },
            {
              text: "Tree Data Grid",
              icon: "fa fa-database  ",
              link: "data/tree-data-grid-demo"
            },
            {
              text: "Tree Data Template",
              icon: "fa fa-database  ",
              link: "data/tree-data-template-demo"
            }
          ]
        },
        {
          text: "Tree",
          icon: "fa fa-tree  ",
          children: [
            {
              text: "Simple",
              icon: "fa fa-tree  ",
              link: "data/simple-tree-demo"
            },
            {
              text: "Collapse",
              icon: "fa fa-tree  ",
              link: "data/collapsetree-demo"
            },
            {
              text: "With Template",
              icon: "fa fa-tree  ",
              link: "data/template-tree-demo"
            },
            {
              text: "Filter",
              icon: "fa fa-tree  ",
              link: "data/filter-tree-demo"
            },
            {
              text: "With Checkbox",
              icon: "fa fa-tree  ",
              link: "data/checkbox-tree-demo"
            },
            {
              text: "With Drag Drop",
              icon: "fa fa-tree  ",
              link: "data/dragdrop-tree-demo"
            },
            {
              text: "With Badge",
              icon: "fa fa-tree  ",
              link: "data/badge-tree-demo"
            },
            {
              text: "With Context Menu",
              icon: "fa fa-tree  ",
              link: "data/context-menu-tree-demo"
            },
            {
              text: "Horizontal",
              icon: "fa fa-tree  ",
              link: "data/horizontal-tree-demo"
            }
          ]
        },
        { text: "Timeline", icon: "fa fa-history", link: "data/timeline-demo" },
        { text: "ListBox", icon: "fa fa-list  ", link: "data/listbox-demo" },
        {
          text: "Property Grid",
          icon: "fa fa-database",
          link: "data/propertygrid-demo"
        },  {
          text: "Virtual Scroller",
          badge: "NEW",
          icon: "fa fa-database",
          link: "data/virtual-scroller-demo"
        }
      ]
    },
    {
      text: "Drag and Drop",
      icon: "fa fa-arrows-alt",
      children: [
        {
          text: "Within Tree",
          icon: "fa fa-tree  ",
          link: "dragdrop/within-tree-demo"
        },
        {
          text: "Across Tree",
          icon: "fa fa-tree  ",
          link: "dragdrop/across-tree-demo"
        },
        {
          text: "Tree to Panel",
          icon: "fa fa-tree  ",
          link: "dragdrop/tree-to-panel-demo"
        },
        {
          text: "Within Item Selector",
          icon: "fa fa-exchange  ",
          link: "dragdrop/itemselectordragdrop-demo"
        }
      ]
    },
    {
      text: "Contextual Menus",
      icon: "fa fa-bars",
      children: [
        {
          text: "Card",
          icon: "fa fa-id-card-o  ",
          link: "contextualmenu/contextmenu-card-form-demo"
        },
        {
          text: "Grid",
          link: "contextualmenu/contextual-menu-grid-demo",
          icon: "fa fa-database  "
        },
        {
          text: "List Box",
          icon: "fa fa-list  ",
          link: "contextualmenu/contextual-menu-listbox-demo"
        },
        {
          text: "Panel",
          icon: "fa fa-bars  ",
          link: "contextualmenu/contextmenu-panel-demo"
        },
        {
          text: "Tab",
          icon: "fa fa-folder  ",
          link: "contextualmenu/contextual-menu-tab-demo"
        },
        {
          text: "Tree",
          icon: "fa fa-tree  ",
          link: "contextualmenu/contextual-menu-tree-demo"
        },
        {
          text: "Window",
          icon: "fa fa-window-maximize  ",
          link: "contextualmenu/contextmenu-window-demo"
        }
      ]
    },
    {
      text: "App Navigation",
      icon: "fa fa-bars  ",
      children: [
        {
          text: "Breadcrumb",
          icon: "fa fa-arrow-right  ",
          link: "navigation/breadcrumb-demo"
        },
        {
          text: "Dockbar",
          icon: "fa fa-th-large  ",
          link: "navigation/dockbar-demo"
        },
        {
          text: "Dropdown Menu",
          icon: "fa fa-chevron-circle-down  ",
          link: "navigation/dropdownmenu-demo"
        },
        {
          text: "Menu Bar",
          icon: "fa fa-bars",
          link: "navigation/menubar-demo"
        },
        { text: "Nav Bar", icon: "fa fa-bars", link: "navigation/navbar-demo" },
        {
          text: "Side Nav Bar",
          icon: "fa fa-bars  ",
          link: "navigation/sidenav-demo"
        },
        {
          text: " Side Panel",
          icon: "fa fa-bars  ",
          link: "navigation/sidenav-page-demo"
        },
        {
          text: "Tool Bar",
          icon: "fa fa-bars  ",
          link: "navigation/toolbar-demo"
        }
      ]
    },
    {
      text: "Media",
      icon: "fa fa-keyboard-o  ",
      children: [
        { text: "Image", icon: "fa fa-picture-o  ", link: "media-demo/image" },
        {
          text: "Video Player",
          icon: "fa fa-video-camera  ",
          link: "media-demo/video"
        }
      ]
    },
    {
      text: "Drillable Charts",
      icon: "fa fa-bar-chart  ",
      children: [
        {
          text: "Single Target",
          icon: "fa fa-bar-chart  ",
          link: "drillableD3Chart/drillable-with-single-target-demo"
        },
        {
          text: "Multiple Targets",
          icon: "fa fa-bar-chart  ",
          link: "drillableD3Chart/drillable-with-multiple-target-demo"
        }
      ]
    },
    {
      text: "Charts",
      icon: "fa fa-keyboard-o  ",
      children: [
        {
          text: "D3 Charts",
          icon: "fa fa-openid  ",
          children: [
            {
              text: "Bar Chart",
              icon: "fa fa-bar-chart  ",
              children: [
                {
                  text: "Bar chart-vertical",
                  icon: "fa fa-bar-chart  ",
                  link: "D3chart/amexio-d3-chart-bar"
                },
                {
                  text: "Bar chart-Horizontal",
                  icon: "fa fa-bar-chart  ",
                  link: "D3chart/amexio-d3-chart-horizontal"
                }
              ]
            },
            {
              text: "Bubble Chart ",
              icon: "fa fa-dot-circle-o  ",
              link: "D3chart/amexio-d3-chart-bubble"
            },
            {
              text: "Combo Chart",
              icon: "fa fa-area-chart  ",
              link: "D3chart/amexio-d3-chart-combo"
            },
            {
              text: "Donut Chart",
              icon: "fa fa-pie-chart  ",
              link: "D3chart/amexio-d3-chart-donut"
            },
            {
              text: "Histogram Chart",
              icon: "fa fa-bar-chart  ",
              link: "D3chart/amexio-d3-chart-histogram"
            },
            {
              text: "Line Chart",
              icon: "fa fa-line-chart  ",
              link: "D3chart/amexio-d3-chart-line"
            },
            {
              text: "Multi-Area Chart",
              icon: "fa fa-area-chart  ",
              link: "D3chart/amexio-d3-chart-multiarea"
            },
            {
              text: "MultiSeriesBar Chart",
              icon: "fa fa-bar-chart  ",
              link: "D3chart/amexio-d3-chart-multiseries"
            },
            {
              text: "Pie Chart",
              icon: "fa fa-pie-chart  ",
              link: "D3chart/amexio-d3-chart-pie"
            },
            {
              text: "Scatter Chart",
              icon: "fa fa-dot-circle-o  ",
              link: "D3chart/amexio-d3-chart-scatter"
            },
            {
              text: "Timeline Chart",
              icon: "fa fa-bar-chart  ",
              link: "D3chart/amexio-d3-chart-timeline"
            },
            {
              text: "Stack Bar Chart",
              icon: "fa fa-bar-chart  ",
              link: "D3chart/amexio-d3-chart-bar-stack"
            },
            {
              text: "Waterfall Chart",
              icon: "fa fa-line-chart  ",
              link: "D3chart/amexio-d3-chart-waterfall"
            }
          ]
        },
        {
          text: "Google Charts",
          icon: "fa fa-google  ",
          children: [
            {
              text: "Area Chart",
              icon: "fa fa-area-chart  ",
              link: "google-chart/area-chart-demo"
            },
            {
              text: "Bar Chart",
              icon: "fa fa-bar-chart  ",
              link: "google-chart/bar-chart-demo"
            },
            {
              text: "Bubble Chart",
              icon: "fa fa-circle  ",
              link: "google-chart/bubble-chart-demo"
            },
            {
              text: "Candlestick Chart",
              icon: "fa fa-stack-exchange  ",
              link: "google-chart/candlestick-chart-demo"
            },
            {
              text: "Candlestick Waterfall",
              icon: "fa fa-tint  ",
              link: "google-chart/candlestickwaterfall-chart-demo"
            },
            {
              text: "Column Chart",
              icon: "fa fa-columns  ",
              link: "google-chart/column-chart-demo"
            },
            {
              text: "Combo Chart",
              icon: "fa fa-area-chart  ",
              link: "google-chart/combo-chart-demo"
            },
            {
              text: "Donut Chart",
              icon: "fa fa-pie-chart  ",
              link: "google-chart/donut-chart-demo"
            },
            {
              text: "Gantt Chart",
              icon: "fa fa-calendar  ",
              link: "google-chart/gantt-chart-demo"
            },
            {
              text: "Histogram Chart",
              icon: "fa fa-bars  ",
              link: "google-chart/histogram-chart-demo"
            },
            {
              text: "Line Chart",
              icon: "fa fa-line-chart  ",
              link: "google-chart/line-chart-demo"
            },
            {
              text: "Pie Chart",
              icon: "fa fa-pie-chart  ",
              link: "google-chart/pie-chart-demo"
            },
            {
              text: "Scatter Chart",
              icon: "fa fa-dot-circle-o  ",
              link: "google-chart/scatter-chart-demo"
            },
            {
              text: "Timeline Chart",
              icon: "fa fa-calendar  ",
              link: "google-chart/timeline-chart-demo"
            }
          ]
        }
      ]
    },
    {
      text: "Dashboard",
      icon: "fa fa-dashcube  ",
      children: [
        {
          text: "Gauge Chart",
          icon: "fa fa-tachometer  ",
          link: "dashboard/gauge-dashboard-demo"
        },
        {
          text: "Data Points",
          icon: "fa fa-address-card-o  ",
          link: "dashboard/datapoint-demo"
        }
      ]
    },
    {
      text: "Maps",
      icon: "fa fa-globe  ",
      children: [
        {
          text: "Geo Chart",
          icon: "fa fa-globe  ",
          link: "map/geo-chart-demo"
        },
        { text: "Tree Map", icon: "fa fa-trello  ", link: "map/tree-map-demo" },
        {
          text: "Google Map",
          icon: "fa fa-map-marker",
          link: "map/googlemap-demo"
        }
      ]
    }
  ],

  CEMENUS: [
    {
      text: "Layouts",
      badge: "2",
      icon: "fa fa-desktop  ",
      children: [
        {
          text: "Creative Card",
          icon: "fa fa-credit-card",
          link: "creative/card-ce-demo"
        },
        {
          text: "Creative Card With Overlay Effects",
          icon: "fa fa-id-card",
          badge: "NEW",
          link: "creative/card-ce-demo-overlayeffect"
        },
      //   {
      //     text: "Creative Card With Flip Effect",
      //     icon: "fa fa-map",
      //     badge: "NEW",
      //     link: "creative/card-ce-demo-flipeffect"
      // },
        {
          text: "Polaroid Card",
          icon: "fa fa-image",
          link: "layout/polaroid-card-demo"
        },
        {
          text: "Ribbon Card",
          badge: "NEW",
          icon: "fa fa-camera",
          link: "creative/ribbon-card-demo"
        }
      ]
    },
    {
      text: "Panels",
      icon: "fa fa-bars  ",
      badge: "2",
      children: [
        {
          text: "Creative Carousel",
          icon: "fa fa-cc  ",
          badge: "NEW",
          link: "creative/carousel-ce-demo"
        },
        {
          text: "Multi-item Carousel",
          icon: "fa fa-calendar  ",
          link: "enterprise/multi-item-carousel-demo"
        },
        {
          text: "Creative Window",
          icon: "fa fa-window-maximize",
          link: "creative/window-ce-demo",
          badge: "U",
        },
        {
          text: "Viewport",
          icon: "fa fa-indent  ",
          link: "creative/viewport-demo"
        },
        {
          text: "Sliding-Panel",
          icon: "fa fa-bars  ",
          link: "panes/animatedsliding-demo"
        }
      ]
    },
    {
      text: "Forms",
      icon: "fa fa-clone  ",
      children: [
        {
          text: "Creative Form",
          icon: "fa fa-window-maximize",
          link: "creative/form-ce-demo"
        }
      ]
    },
    {
      text: "Form Inputs",
      badge: "1",
      icon: "fa fa-clone  ",
      children: [
        {
          text: "Color Picker",
          icon: "fas fa-palette  ",
          badge: "NEW",
          link: "creative/colorpicker-demo"
        }
      ]
    },
    {
      text: "Form Actions",
      icon: "fa fa-keyboard-o  ",
      children: [
        {
          text: "Creative ProgressBar",
          icon: "fa fa-eercast fa-fw",
          link: "creative/progress-ce-demo"
        }
      ]
    },
    {
      text: "App Navigation",
      icon: "fa fa-bars  ",
      children: [
        {
          text: "Creative Menu",
          icon: "fa fa-chevron-circle-down  ",
          link: "creative/menu-ce-demo"
        }
      ]
    },
    {
      text: "Media",
      icon: "fa fa-keyboard-o  ",
      children: [
        {
          text: "Media Content",
          icon: "fa fa-id-card-o  ",
          link: "enterprise/ee-content-demo"
        },
        {
          text: "YouTube Video Player",
          icon: "fa fa-video-camera  ",
          link: "enterprise/ee-video-demo"
        }
      ]
    }
  ]
};
