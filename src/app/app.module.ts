import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { Board } from './homepage/board/board';
import { Conditions } from './homepage/board/conditions';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ColorPickerModule
  ],
  providers: [Board, Conditions],
  bootstrap: [AppComponent]
})
export class AppModule { }
