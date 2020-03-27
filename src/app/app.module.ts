import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Comp2 } from './component2/com2.component';
import { Personas } from './component1/com1.component';
import { APP_ROUTING } from './appRoutes';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './component2/filter.pipe';
import { TemplateformsComponent } from './templateForms/templateforms/templateforms.component';
import { ReactiveformsComponent } from './reactiveForms/reactiveforms/reactiveforms.component'

@NgModule({
  declarations: [
    AppComponent,
    Personas,
    Comp2,
    FilterPipe,
    TemplateformsComponent,
    ReactiveformsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
