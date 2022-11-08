import { Component, OnInit } from '@angular/core';
import { resource } from '../shared/addresource.model';
import { gtresources } from '../shared/gtresource.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css'],
})
export class ResourcesComponent implements OnInit {
  actionInputRef: any;
  source: any = {
    name: '',
    summary: '',
  };

  constructor(public sources: gtresources) {}

  ngOnInit(): void {
    this.sources.resourceChange.subscribe((updatedResources: resource[]) => {
      this.source = updatedResources;
    });
  }

  onAddSource(InputRef: any) {
    const source = InputRef.value.answer;
    const summary = InputRef.value.summary;
    const link = InputRef.value.link
    console.log(source);
    this.sources.addResource({
      name: source,
      summary: summary,
      link: link
    });
  }
}
