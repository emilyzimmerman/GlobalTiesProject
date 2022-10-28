import { Component, OnInit } from '@angular/core';
import { gtresources } from 'src/app/shared/gtresource.service';



@Component({
  selector: 'app-resource-display',
  templateUrl: './resource-display.component.html',
  styleUrls: ['./resource-display.component.css']
})
export class ResourceDisplayComponent implements OnInit {

listSources: any;

  constructor(private sources: gtresources) { }

  ngOnInit(): void {
    this.listSources = this.sources.getResource()
  }

}
