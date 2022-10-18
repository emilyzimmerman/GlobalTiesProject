import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResourcesComponent } from './resourceForm/resources.component';
import { SharedComponent } from './shared/shared.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SavedresourceComponent } from './dashboard/savedresource/savedresource.component';
import { GTresourcesComponent } from './shared/gtresources/gtresources.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ResourcesComponent,
    SharedComponent,
    HeaderComponent,
    HomepageComponent,
    SavedresourceComponent,
    GTresourcesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
