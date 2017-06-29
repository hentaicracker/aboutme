import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app.routing';
import { PagesModule } from './pages/pages.module';

import { AppComponent } from './app.component';

import { AppService } from './app.service';

import '../styles/main.scss';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PagesModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
