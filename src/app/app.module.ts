import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DynamicLoaderModule } from 'angular-dynamic-loader';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DynamicLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
