import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'imageFilter'})

export class ImageFilterPipe implements PipeTransform {
    // take certain items and criteria
    transform(items: any[], criteria: string): any {
        if(criteria == 'all') {
            return items;
        } else {
            return items.filter(item => {
                return item.category == criteria;
            });
        }
    }
}