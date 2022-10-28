import { Injectable } from "@angular/core";
import { TestBed } from "@angular/core/testing";
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
      this.resourceChange.next
    }

}
