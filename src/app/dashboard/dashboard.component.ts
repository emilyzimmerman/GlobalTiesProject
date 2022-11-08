import { Component, OnInit } from '@angular/core';
import { resource } from '../shared/addresource.model';
import { DashboardService } from '../shared/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  favResources: any;

  constructor(private dashboardService: DashboardService) {}
  listOfResources: resource[] = [];

  ngOnInit(): void {
    this.favResources = this.dashboardService.getDashResources();
    this.dashboardService.dashboardChanged.subscribe((updatedDash) => {
      this.favResources = updatedDash;
    });
  }

  onDelete(dashIndex: number) {
    console.log('onDelete works!');
    this.listOfResources.splice(dashIndex, 1);
    this.dashboardService.deleteDashSource(dashIndex);
  }
}
