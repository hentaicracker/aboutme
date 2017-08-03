import { NgModule } from '@angular/core';

import { SwiperModule } from './angular-swiper/swiper.module';

import { ContainerComponent } from './container/container.component';
import { NextComponent } from './next/next.component';

import { AppService } from '../app.service';

@NgModule({
  imports: [
    SwiperModule
  ],
  declarations: [
    ContainerComponent,
    NextComponent
  ],
  providers: [
    AppService
  ],
  exports: [
    SwiperModule,
    ContainerComponent,
    NextComponent
  ]
})
export class ComponentsModule { }
