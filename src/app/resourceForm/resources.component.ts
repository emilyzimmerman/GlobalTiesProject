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
  source: any;

  constructor(private sources: gtresources) {}

  ngOnInit(): void {}

  onAddSource(InputRef: any) {
    const source = InputRef.value.answer;
    console.log(source);
    this.sources.addResource({
      name: source,
    });

    this.sources.resourceChange.subscribe((updatedResources: resource[]) => {
      this.source = updatedResources;
    });
  }
}
