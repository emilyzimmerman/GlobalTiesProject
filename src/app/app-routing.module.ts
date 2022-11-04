import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomepageComponent } from "./homepage/homepage.component";
import { ResourcesComponent } from "./resourceForm/resources.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AuthComponent } from "./auth/auth.component";

const routes: Routes = [
  {
    path: '', redirectTo:'/homepage', pathMatch:'full'
  },
  {
  path: 'homepage', component: HomepageComponent},
  {
    path: 'resources', component: ResourcesComponent},
  {
    path: 'dashboard', component: DashboardComponent},

  { path:'auth', component: AuthComponent}
  ]

    @NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
    })

    export class AppRoutingModule {}
