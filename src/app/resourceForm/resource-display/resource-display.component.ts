import { Component, OnInit } from '@angular/core';
import { gtresources } from 'src/app/shared/gtresource.service';



@Component({
  selector: 'app-resource-display',
  templateUrl: './resource-display.component.html',
  styleUrls: ['./resource-display.component.css'],
})
export class ResourceDisplayComponent implements OnInit {
  listSources: any;

  constructor(private sources: gtresources) {}

  ngOnInit(): void {
    this.listSources = this.sources.getResource();
    this.sources.resourceChange.subscribe((updatedResources)=>{
      this.listSources = updatedResources
    })
  }


  //FIX ME: Do I need output? How do I communicate this info
  onAddSource() {
    console.log('add source works')


  }

  onDeleteSource(resourceIndex: number) {
    console.log("index: ",resourceIndex)
    // FIXME: deleteSource should emit an event interanlly from an Observable. We will need to tap into that event to receive the updated sources list.
    this.listSources.splice(resourceIndex, 1); // get rid after observable
    this.sources.deleteSource(resourceIndex);
  }
}
