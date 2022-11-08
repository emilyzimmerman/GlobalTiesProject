import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { resource } from './addresource.model';

@Injectable({ providedIn: 'root' })
export class DashboardService {
  dashboardChanged = new Subject<resource[]>();
  public sources: resource[] = [
    {
      name: 'DashTest 1',
      summary: 'This is a test',
      link: 'pretend link'
    },
    {
      name: 'DashTest 2',
      summary: 'This is a test',
      link: 'pretend link'
    },
  ];

  addResource(source: any) {
    this.sources.push(source);
  }

  setSources(source: resource[]) {
    this.sources = source;
    this.dashboardChanged.next(this.sources.slice());
  }

  getDashResources() {
    return this.sources.slice();
  }

  addResourceDisplay(sourcedisplay: resource[]) {
    this.sources.push(...sourcedisplay);
    this.dashboardChanged.next(this.sources.slice());
  }

  deleteDashSource(index: number) {
    this.sources.splice(index, 1);
    this.dashboardChanged.next(this.getDashResources());
  }
}
