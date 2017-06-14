import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { OverviewComponent } from './overview/overview.component';
import { LocationComponent } from './location/location.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/index',
        pathMatch: 'full'
    },
    {
        path: 'index',
        component: IndexComponent
    },
    {
        path: 'overview',
        component: OverviewComponent
    },
    {
        path: 'location',
        component: LocationComponent
    },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}