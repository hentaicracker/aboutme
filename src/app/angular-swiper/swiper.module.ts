import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwiperComponent } from './swiper.component';
import { SlideComponent } from './slide.component';

@NgModule({
    imports: [ CommonModule ],
    declarations: [SwiperComponent, SlideComponent],
    exports: [SwiperComponent, SlideComponent]
})
export class SwiperModule {

}