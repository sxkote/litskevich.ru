import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {CardModule} from "primeng/card";
import {AppComponent} from "./app/app.component";
import { AppCardComponent } from './app-card/app-card.component';

@NgModule({
  declarations: [
    AppComponent,
    AppCardComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    RippleModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class RootModule { }
