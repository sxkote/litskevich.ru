import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterOutlet} from "@angular/router";

import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {CardModule} from "primeng/card";

import {RootRoutingModule} from "./root-routing.module";

import {AppView} from './views/app/app.view';
import {HomeView} from "./views/home/home.view";

import {ItemCardComponent} from "./components/app-card/item-card.component";
import {ApplicationsView} from './views/applications/applications.view';
import { ListFamilyComponent } from './components/list-family/list-family.component';
import { ListAppsComponent } from './components/list-apps/list-apps.component';
import { FamilyView } from './views/family/family.view';

@NgModule({
  declarations: [
    HomeView,
    ItemCardComponent,
    AppView,
    ApplicationsView,
    ListFamilyComponent,
    ListAppsComponent,
    FamilyView
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    RippleModule,
    CardModule,
    RouterOutlet,
    RootRoutingModule
  ],
  providers: [],
  bootstrap: [AppView]
})
export class RootModule {
}
