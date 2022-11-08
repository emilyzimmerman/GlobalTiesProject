import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { DashboardService } from "./dashboard.service";
import { resource } from "./addresource.model";

@Injectable({providedIn:'root'})

export class DataStorageService {
  constructor(private http: HttpClient, private dashboardservice: DashboardService) {}

  storeSources(){
    const sources = this.dashboardservice.getDashResources();
    this.http.put('https://gtproject-710aa-default-rtdb.firebaseio.com/sources.json', sources)
    .subscribe(response =>
      {console.log(response);
      });
  }

  fetchSources(){
    this.http.get<resource[]>('https://gtproject-710aa-default-rtdb.firebaseio.com/sources.json')
    .subscribe(sources => {
      this.dashboardservice.setSources(sources);
    });
  }
}
