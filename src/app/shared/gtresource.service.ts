import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { resource } from "./addresource.model";

@Injectable ({providedIn:'root'})

export class gtresources {
  resourceChange = new Subject<resource[]>()
    private source: resource[] = [

    ];

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

}
