import { Component, OnInit, HostBinding } from '@angular/core';
import { routeChangeTrigger } from '../shared/animations';

@Component({
    selector: 'index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss'],
    animations: [
        routeChangeTrigger
    ]
})
export class IndexComponent implements OnInit {

    @HostBinding('@routeChangeTrigger') routeAnimation = true;

    ngOnInit() {

    }
    
}