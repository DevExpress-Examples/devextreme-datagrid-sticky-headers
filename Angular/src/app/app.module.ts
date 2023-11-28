import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {DxDataGridModule} from "devextreme-angular";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxDataGridModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
