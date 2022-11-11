import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResourcesComponent } from './resourceForm/resources.component';
import { SharedComponent } from './shared/shared.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SavedresourceComponent } from './dashboard/savedresource/savedresource.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ResourceDisplayComponent } from './resourceForm/resource-display/resource-display.component';
import { AuthComponent } from './auth/auth.component';
import { DashboardService } from './shared/dashboard.service';
import { loadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ResourcesComponent,
    SharedComponent,
    HeaderComponent,
    HomepageComponent,
    SavedresourceComponent,
    ResourceDisplayComponent,
    AuthComponent,
    loadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
