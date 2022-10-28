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
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ResourceDisplayComponent } from './resourceForm/resource-display/resource-display.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ResourcesComponent,
    SharedComponent,
    HeaderComponent,
    HomepageComponent,
    SavedresourceComponent,
    GTresourcesComponent,
    ResourceDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
