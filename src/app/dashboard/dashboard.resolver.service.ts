import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";

import { resource } from "../shared/addresource.model";
import { DashboardService } from "../shared/dashboard.service";
import { DataStorageService } from "../shared/data-storage.service";

@Injectable({providedIn:'root'})

export class DashboardResolverService implements Resolve<resource[]>{
  constructor(
    private dataStorageService: DataStorageService,
    private dashboardSerice: DashboardService) {}


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    const dashSources = this.dashboardSerice.getDashResources();

    if (dashSources.length === 0){
      return this.dataStorageService.fetchDashSources();
    }else{
      return dashSources;
    }
  }
}
