import { Component, OnInit, HostBinding, OnDestroy } from '@angular/core';
import { routeChangeTrigger } from '../../shared/animations';

import { AppService } from '../../app.service';
import { OverviewService } from './overview.service';

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

    profile: object

    @HostBinding('@routeChangeState') routeAnimation = true;

    constructor(
        private appService: AppService,
        private overviewService: OverviewService
    ) {
        this.profile = this.overviewService.getData();
    }

    ngOnInit() { }

    ngOnDestroy () {
        this.appService.changeState('gradient-state');
    }

}