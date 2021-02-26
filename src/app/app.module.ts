import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { Board } from './homepage/board/board';
import { Conditions } from './homepage/board/conditions';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalConfigComponent } from './modal-config/modal-config.component';
import { Config } from './homepage/config';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ModalConfigComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ColorPickerModule,
    NgbModule
  ],
  providers: [Board, Conditions, Config],
  bootstrap: [AppComponent]
})
export class AppModule { }
