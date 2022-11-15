import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomepageComponent } from "./homepage/homepage.component";
import { ResourcesComponent } from "./resourceForm/resources.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AuthComponent } from "./auth/auth.component";
import { AuthGuard } from "./auth/auth.guard";
import { ResourceDisplayComponent } from "./resourceForm/resource-display/resource-display.component";

const routes: Routes = [
  {
    path: '', redirectTo:'/homepage', pathMatch:'full'
  },
  {
  path: 'homepage', component: HomepageComponent, canActivate: [AuthGuard]},
  {
    path: 'resources', component: ResourcesComponent, canActivate: [AuthGuard]},
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]}, //resolve: [DashboardResolverService] --> won't work

  { path:'auth', component: AuthComponent},

  { path:'edit', component: ResourceDisplayComponent}
  ]

    @NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
    })

    export class AppRoutingModule {}
