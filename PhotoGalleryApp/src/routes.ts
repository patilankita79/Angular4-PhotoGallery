import { Routes } from '@angular/router';
import { GalleryComponent } from './app/gallery/gallery.comonent';
import { ImageDetailComponent } from './app/image/image-detail.component';

export const appRoutes: Routes = [

    { path: 'gallery', component: GalleryComponent},
    // When we go to particular image, :id is a route parameter
    { path: 'image/:id', component: ImageDetailComponent },

    // When there is nothing, redirect to gallery
    { path: '', redirectTo: '/gallery', pathMatch: 'full'}

]