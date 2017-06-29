import { NgModule } from '@angular/core';

import { SwiperModule } from './angular-swiper/swiper.module';

import { ContainerComponent } from './container/container.component';

import { AppService } from '../app.service';

@NgModule({
  imports: [
    SwiperModule
  ],
  declarations: [
    ContainerComponent
  ],
  providers: [
    AppService
  ],
  exports: [
    SwiperModule,
    ContainerComponent
  ]
})
export class ComponentsModule { }
