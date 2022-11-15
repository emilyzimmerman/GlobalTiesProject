import { Component, OnInit } from '@angular/core';
import { resource } from '../shared/addresource.model';
import { DataStorageService } from '../shared/data-storage.service';
import { gtresources } from '../shared/gtresource.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css'],
})
export class ResourcesComponent implements OnInit {
onFetchDashData() {
throw new Error('Method not implemented.');
}
onStoreDashSources() {
throw new Error('Method not implemented.');
}
  actionInputRef: any;
  source: any = {
    name: '',
    summary: '',
    link: ''
  };

  constructor(public sources: gtresources, private dataStorageService: DataStorageService) {}

  ngOnInit(): void {
    this.sources.resourceChange.subscribe((updatedResources: resource[]) => {
      this.source = updatedResources;
    });
  }

  onAddSource(InputRef: any) {
    const source = InputRef.value.answer;
    const summary = InputRef.value.summary;
    const link = InputRef.value.url
    console.log(link);
    this.sources.addResource({
      name: source,
      summary: summary,
      link: link
    });
  }
  onStoreSources(){
    this.dataStorageService.storeSources();
  }

  onFetchData(){
    this.dataStorageService.fetchSources().subscribe();
  }
}
