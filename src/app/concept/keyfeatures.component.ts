import { Component } from "@angular/core";

@Component({
    selector : 'key-features',
    templateUrl : './keyfeatures.component.html'
})
export class KeyFeaturesComponent{

    features: any[];

    constructor(){
        this.features = [{"image":"https://img1.wsimg.com/isteam/stock/d4YwmOa/:/cr=t:0%25,l:11.32%25,w:81.34%25,h:100%25/rs=w:730,h:730,cg:true","title":" Responsive Design","desc":"Angular 7 UI Components are powered by HTML5 and CSS3 with Responsive design enabled by default."},{"image":"https://img1.wsimg.com/isteam/stock/5zw4Aq8/:/cr=t:0%25,l:4.06%25,w:66.67%25,h:100%25/rs=w:730,h:730,cg:true","title":" Amexio Charts / D3 Charts","desc":"Charts based on Angular Platform, contains all basic chart types like Pie, Bar, Line, Bubbles etc, with Drillable and Zoomable capabilities."},{"image":"https://img1.wsimg.com/isteam/stock/378/:/cr=t:0%25,l:12.67%25,w:69.36%25,h:100%25/rs=w:730,h:730,cg:true","title":" Amexio UI Components","desc":"Amexio Varanasi v1.0 is our first release (june 2017) with 30 UI components. With v5.5 release in Dec 2018, we touched 160+ UI Comonents."},{"image":"https://img1.wsimg.com/isteam/stock/2445/:/cr=t:0%25,l:19.13%25,w:66.67%25,h:100%25/rs=w:730,h:730,cg:true","title":" Amexio Dashboard","desc":"Amexio Dashboard will contain Gauges, Data Point Widgets, Data POint Charts with built-in dashboard templates."},{"image":"https://img1.wsimg.com/isteam/stock/76021/:/rs=w:1200,h:600,cg:true,m/cr=w:1200,h:600","title":" Themes","desc":"80+ Material Design themes out of box. Support for gradient header and night mode."},{"image":"https://img1.wsimg.com/isteam/stock/93676/:/cr=t:0%25,l:0%25,w:66.67%25,h:100%25/rs=w:730,h:730,cg:true","title":" Amexio Maps","desc":"Map will Help you plot your enterprise data on Google Map."}];
    }
}