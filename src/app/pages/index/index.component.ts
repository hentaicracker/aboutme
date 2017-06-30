import { Component, OnInit, HostBinding, OnDestroy } from '@angular/core';
import { routeChangeTrigger } from '../../shared/animations';

import { AppService } from '../../app.service';

const states = ['default-state', 'violet-state', 'orange-state', 'black-state'];

@Component({
    selector: 'index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss'],
    animations: [
        routeChangeTrigger
    ]
})
export class IndexComponent implements OnInit, OnDestroy {

    @HostBinding('@routeChangeState') routeAnimation = true;

    constructor(private appService: AppService) { }

    ngOnInit() { }

    onPlay() {
        this.appService.play();
    }

    onPause() {
        this.appService.pause();
    }

    onClear() {
        this.appService.clear();
    }

    onSwitch() {
        let num = Math.floor(Math.random() * 4);
        this.appService.changeState(states[num]);
    }

    ngOnDestroy () {
        this.appService.changeState('orange-state');
    }

}