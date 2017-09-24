import { Component, OnInit } from '@angular/core';
import { ImageService } from './shared/image.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    // selector: 'app-image-detail',
    templateUrl: './image-detail.component.html',
    styleUrls: ['./image-detail.component.css']
})

export class ImageDetailComponent implements OnInit {
    image: any;

   
    constructor(private imageService: ImageService, private route: ActivatedRoute) {

    }
    ngOnInit() {
        // + sign converts id to number, this.route.snapshot provides initial value of route parameter
        this.image = this.imageService.getImage(
            +this.route.snapshot.params['id']);
    }
}