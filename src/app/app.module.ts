import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Comp2 } from './component2/com2.component';
import { Personas } from './component1/com1.component';
import { APP_ROUTING } from './appRoutes';

import { FormsModule } from '@angular/forms';
import { FilterPipe } from './component2/filter.pipe'

@NgModule({
  declarations: [
    AppComponent,
    Personas,
    Comp2,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
