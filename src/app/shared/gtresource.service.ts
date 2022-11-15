import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { resource } from "./addresource.model";
import { DashboardService } from "./dashboard.service";

@Injectable ({providedIn:'root'})

export class gtresources {
  resourceChange = new Subject<resource[]>()
    private source: resource[] = [{
      name: 'Test 1',
      summary: 'This is a test',
      link: 'Pretend link'},

    {
      name: 'Test 2',
      summary:'This is a test',
      link: 'Pretend link'
    }];

    constructor (private dashservice: DashboardService){

    }

    getResource() {
      return this.source.slice();
    }

    addResource(newResource: resource){
      this.source.push(newResource);
      // send broadcast to those who are subscribed
      this.resourceChange.next(this.getResource())
    }

    deleteSource(index: number){
      this.source.splice(index, 1);
      this.resourceChange.next(this.getResource())
    }

    setResources(newSource: resource[]) {
      this.source = newSource;
      this.resourceChange.next(this.source.slice());
    }
    // addSourcestoDash(resources: resource []){
    //   this.dashservice.addResourceDisplay(resources)
    // }

}
