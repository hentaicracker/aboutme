import { NgModule } from '@angular/core';

import { SwiperModule } from './angular-swiper/swiper.module';

import { AppService } from '../app.service';

@NgModule({
  imports: [
    SwiperModule
  ],
  declarations: [

  ],
  providers: [
    AppService
  ],
})
export class ComponentsModule { }
