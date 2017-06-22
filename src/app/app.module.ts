import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { SwiperModule } from './angular-swiper/swiper.module';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { OverviewComponent } from './overview/overview.component';
import { LocationComponent } from './location/location.component';

import { EchartsMapDirective } from './shared/echarts.directive'

import { AppService } from './app.service';


import '../styles/main.scss';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SwiperModule
  ],
  declarations: [
    AppComponent,
    IndexComponent,
    OverviewComponent,
    LocationComponent,
    EchartsMapDirective,
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
