import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GTresourcesComponent } from './gtresources.component';

describe('GTresourcesComponent', () => {
  let component: GTresourcesComponent;
  let fixture: ComponentFixture<GTresourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GTresourcesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GTresourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
