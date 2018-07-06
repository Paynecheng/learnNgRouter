import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HeroListComponent} from './heroes/hero-list.component';
import {CrisisCenterComponent} from './crisis-center/crisis-center.component';
import {NotFountComponent} from './not-fount.component';
import {AppRoutingModule} from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    CrisisCenterComponent,
    NotFountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
