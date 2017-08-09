import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';

import { PagesRoutingModule } from './pages.routing';
import { ComponentsModule } from '../components/components.module';

import { IndexComponent } from './index/index.component';
import { OverviewComponent } from './overview/overview.component';
import { LocationComponent } from './location/location.component';
import { TodosComponent } from './todos/todos.component';

import { EchartsMapDirective } from '../shared/echarts.directive';
import { HeightFixDirective } from './overview/height.fix.directive';

import { AppService } from '../app.service';
import { OverviewService } from './overview/overview.service';

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
    TodosComponent,
    EchartsMapDirective,
    HeightFixDirective,
  ],
  providers: [
    AppService,
    OverviewService,
  ],
})
export class PagesModule { }
