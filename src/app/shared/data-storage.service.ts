import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { DashboardService } from "./dashboard.service";
import { resource } from "./addresource.model";
import { exhaustMap, map, take, tap } from "rxjs";
import { gtresources } from "./gtresource.service";

@Injectable({providedIn:'root'})

export class DataStorageService {
  constructor(
    private http: HttpClient,
    private dashboardservice: DashboardService,
    private gtresource: gtresources,
    ) {}

  storeDashSources(){
    const sources = this.dashboardservice.getDashResources();
    this.http.put(
      'https://gtproject-710aa-default-rtdb.firebaseio.com/my-sources.json',
      sources)
    .subscribe(response =>
      {console.log(response);
      });
  }

  fetchDashSources(){
      return this.http
      .get<resource[]>(
      'https://gtproject-710aa-default-rtdb.firebaseio.com/my-sources.json',
    )
    .pipe(
      map(sources => {
      return sources.map(this.mapSource)
    }),
      tap(theseSources => {
      this.dashboardservice.setSources(theseSources);
    }));

  }

  storeSources(){
    const sources = this.gtresource.getResource();
    this.http.put(
      'https://gtproject-710aa-default-rtdb.firebaseio.com/sources.json',
      sources)
    .subscribe(response =>
      {console.log(response);
      });
  }

  fetchSources(){
      return this.http
      .get<resource[]>(
      'https://gtproject-710aa-default-rtdb.firebaseio.com/sources.json',
    )
    .pipe(
      map(sources => {
      return sources.map(this.mapSource)
    }),
      tap(theseSources => {
      this.gtresource.setResources(theseSources);
    }));

  }
  mapSource(modelSource: resource, index:number){
    return {
      ...modelSource,
      id: index
    }
  }


}
