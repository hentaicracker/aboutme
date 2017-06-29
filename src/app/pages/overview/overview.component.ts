import { Component, OnInit, HostBinding, OnDestroy } from '@angular/core';
import { routeChangeTrigger } from '../../shared/animations';

import { AppService } from '../../app.service';

const states = ['default-state', 'violet-state', 'orange-state', 'black-state'];

@Component({
    selector: 'overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.scss'],
    animations: [
        routeChangeTrigger
    ]
})
export class OverviewComponent implements OnInit, OnDestroy {

    @HostBinding('@routeChangeState') routeAnimation = true;

    constructor(private appService: AppService) { }

    ngOnInit() { }

    ngOnDestroy () {
        this.appService.changeState('gradient-state');
    }

}