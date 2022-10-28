import { Component, OnInit } from '@angular/core';
import { gtresources } from '../shared/gtresource.service';


@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  actionInputRef: any;

  constructor( private sources: gtresources) {}

  ngOnInit(): void {
  }

  onAddSource(InputRef: any){
    const source = InputRef.value.answer
    console.log(source)
    this.sources.addResource({
      name: source
    })

  }
 }
