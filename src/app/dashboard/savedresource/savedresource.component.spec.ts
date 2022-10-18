import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedresourceComponent } from './savedresource.component';

describe('SavedresourceComponent', () => {
  let component: SavedresourceComponent;
  let fixture: ComponentFixture<SavedresourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedresourceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedresourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
