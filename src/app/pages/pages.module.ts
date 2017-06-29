import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';

import { PagesRoutingModule } from './pages.routing';
import { ComponentsModule } from '../components/components.module';

import { IndexComponent } from './index/index.component';
import { OverviewComponent } from './overview/overview.component';
import { LocationComponent } from './location/location.component';

import { EchartsMapDirective } from '../shared/echarts.directive'

import { AppService } from '../app.service';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    PagesRoutingModule,
  ],
  declarations: [
    IndexComponent,
    OverviewComponent,
    LocationComponent,
    EchartsMapDirective,
  ],
  providers: [
    AppService
  ],
})
export class PagesModule { }
