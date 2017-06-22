import { Component, SimpleChanges } from '@angular/core';
import { OnInit, OnChanges, OnDestroy } from '@angular/core';
import { Input, ElementRef } from '@angular/core';

import * as Swiper from 'swiper';

@Component({
    selector: 'swiper',
    template: `
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <ng-content></ng-content>
            </div>
            <ng-content select=".swiper-pagination"></ng-content>
            <ng-content select=".swiper-button-prev"></ng-content>
            <ng-content select=".swiper-button-next"></ng-content>
            <ng-content select=".swiper-scrollbar"></ng-content>
        </div>
    `,
    styleUrls: ['./swiper.scss'],
})
export class SwiperComponent implements OnInit, OnChanges, OnDestroy {

    swiper: Swiper;

    @Input() options: SwiperOptions;

    constructor(private el: ElementRef) { }

    ngOnChanges (changes: SimpleChanges) {
        this.update();
    }

    ngOnInit () {
        this.swiper = new Swiper(this.el.nativeElement, this.options);
    }

    ngOnDestroy () {
        if(this.swiper) {
            this.swiper.destroy(true, false);
        }
    }

    update() {
        if(this.swiper) {
            this.swiper.update();
        }
    }
 
}