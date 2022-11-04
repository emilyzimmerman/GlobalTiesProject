import { Component, OnInit } from '@angular/core';
import { resource } from '../shared/addresource.model';
import { gtresources } from '../shared/gtresource.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  favResources: any;

  constructor(private gtresourceClass: gtresources) { }
    listOfResources: resource [] = []

  ngOnInit(): void {
  }



}
