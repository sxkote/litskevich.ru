import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ExtraOptions, RouterModule, Routes} from "@angular/router";

import {HomeView} from "./views/home/home.view";
import {FamilyView} from "./views/family/family.view";
import {ApplicationsView} from "./views/applications/applications.view";

const routes: Routes = [
  {path: '', component: HomeView},

  {path: 'family', component: FamilyView},

  {path: 'applications', component: ApplicationsView},
  {path: 'apps', component: ApplicationsView},
  {path: 'app', component: ApplicationsView},
];

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
  // ...any other options you'd like to use
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, routerOptions)
  ],
  exports: [RouterModule]
})
export class RootRoutingModule {
}
