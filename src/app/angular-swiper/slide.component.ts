import { Component, SimpleChanges, Injectable, Host, Inject } from '@angular/core';
import { OnInit, OnChanges } from '@angular/core';
import { SwiperComponent } from './swiper.component';

import * as Swiper from 'swiper';

@Injectable()
@Component({
    selector: 'slide',
    template: `
        <div [class]="slideClass">
            <ng-content></ng-content>
        </div>
    `
})
export class SlideComponent implements OnInit {

    slideClass: string = 'swiper-slide'

    @Host() @Inject(SwiperComponent) swiper: SwiperComponent

    constructor() { }

    ngOnInit () {
        if(this.swiper.options.slideClass) {
            this.slideClass = this.swiper.options.slideClass;
        }
        this.swiper.update();
    }

}