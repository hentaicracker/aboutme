import { Component, OnInit } from '@angular/core';

import { AppService } from './app.service';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    host: {
        '(document:visibilitychange)': 'onVisiChange($event)'
    }
})
export class AppComponent implements OnInit {

    title = document.title

    constructor(private appService: AppService) {}

    ngOnInit() {
        this.appService.getInstance();
    }

    onVisiChange(e: Event) {
        if(document.visibilityState  === 'hidden') {
            document.title = '你快回来！';
        } else {
            document.title = this.title;
        }
    }
    
}