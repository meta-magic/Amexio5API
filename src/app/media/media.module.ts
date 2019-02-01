import { NgModule } from "@angular/core";
import { AmexioWidgetModule } from "amexio-ng-extensions";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "../shared.module";
import { MEDIA_ROUTE } from "./media.routes";



import { VideoDemo } from './video/video.demo';
import { ImageDemo } from './image/image.demo'
import { RouterModule } from "@angular/router";

/**
 * Created by kedar on 31/1/19.
 */
@NgModule({
    declarations: [VideoDemo, ImageDemo],
    imports: [
        CommonModule, 
        FormsModule, 
        HttpClientModule, 
        SharedModule.forRoot(), 
        AmexioWidgetModule,
        RouterModule.forChild(MEDIA_ROUTE),
    ],
    providers: []
})
export class MediaModule {

}
