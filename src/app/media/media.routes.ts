import { Routes } from '@angular/router';
import { ImageDemo } from './image/image.demo';
import { VideoDemo } from './video/video.demo';

export const MEDIA_ROUTE: Routes = [

    {
        path: 'image', component: ImageDemo,
    },
    {
        path: 'video', component: VideoDemo,
    }
]