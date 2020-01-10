import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantListingComponent } from './plant-listing.component';

describe('PlantListingComponent', () => {
  let component: PlantListingComponent;
  let fixture: ComponentFixture<PlantListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
