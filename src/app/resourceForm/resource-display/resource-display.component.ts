import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/shared/dashboard.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { gtresources } from 'src/app/shared/gtresource.service';

@Component({
  selector: 'app-resource-display',
  templateUrl: './resource-display.component.html',
  styleUrls: ['./resource-display.component.css'],
})
export class ResourceDisplayComponent implements OnInit {
  listSources: any;

  constructor(
    private sources: gtresources,
    private dashboardService: DashboardService,
    private dataStorage: DataStorageService,
  ) {}

  ngOnInit(): void {
    // Fetch the resourcse here
    this.dataStorage.fetchSources();

    this.listSources = this.sources.getResource();
    this.sources.resourceChange.subscribe((updatedResources) => {
      this.listSources = updatedResources;
    });
  }

  onAddToDash(source: any) {
    console.log(this.listSources);
    console.log('TESTSTSTS');
    // this.sources.addSourcestoDash(this.listSources);
    // this.listSources

    this.dashboardService.addResource(source);
  }

  onDeleteSource(resourceIndex: number) {
    console.log('index: ', resourceIndex);
    // FIXME: deleteSource should emit an event interanlly from an Observable. We will need to tap into that event to receive the updated sources list.
    this.listSources.splice(resourceIndex, 1); // get rid after observable
    this.sources.deleteSource(resourceIndex);
  }
}
