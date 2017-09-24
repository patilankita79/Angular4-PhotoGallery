import { selector } from 'rxjs/operator/multicast';
import { Component } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
    title = 'Photo Gallery';
}