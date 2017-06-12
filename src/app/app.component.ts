import { Component, OnInit } from '@angular/core';

const dontGo = require('dont-go');

import { AppService } from './app.service';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(private appService: AppService) {}

    ngOnInit() {
        this.appService.getInstance();
        dontGo({
            title: '你快回来！'
        });
    }
    
}