import { Component, Input, OnChanges } from '@angular/core';
import { ImageService } from '../image/shared/image.service';
import { ImageFilterPipe } from '../image/shared/filter.pipe';


@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnChanges {
    title = 'Recent Photos';
    visibleImages: any[] = [];

    // Create an input
    @Input() filterBy?: string = 'all';

    constructor(private imageService: ImageService) {
        this.visibleImages = this.imageService.getImages();
        
    }

    ngOnChanges() {
        this.visibleImages = this.imageService.getImages();
    }
}