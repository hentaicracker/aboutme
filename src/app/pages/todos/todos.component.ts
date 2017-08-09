import { Component, OnInit, HostBinding, OnDestroy } from '@angular/core';
import { routeChangeTrigger } from '../../shared/animations';

import { AppService } from '../../app.service';

@Component({
    selector: 'todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.scss'],
    animations: [
        routeChangeTrigger
    ]
})
export class TodosComponent implements OnInit, OnDestroy {

    @HostBinding('@routeChangeState') routeAnimation = true;

    constructor(
        private appService: AppService,
    ) {
    }

    ngOnInit() { }

    ngOnDestroy () {
        this.appService.changeState('gradient-state');
    }

}