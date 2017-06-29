import { Component, HostBinding, OnDestroy } from '@angular/core';
import { routeChangeTrigger } from '../../shared/animations';

import { mapOptions } from './map-options';

import { AppService } from '../../app.service';

const states = ['default-state', 'violet-state', 'orange-state', 'black-state'];

@Component({
    selector: 'location',
    templateUrl: './location.component.html',
    styleUrls: ['./location.component.scss'],
    animations: [
        routeChangeTrigger
    ]
})
export class LocationComponent implements OnDestroy {

    chartOption = mapOptions;

    @HostBinding('@routeChangeState') routeAnimation = true;

    constructor(private appService: AppService) { }

    ngOnDestroy () {
        this.appService.changeState('violet-state');
    }

}