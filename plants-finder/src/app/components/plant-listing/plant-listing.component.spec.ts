import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantListingComponent } from './plant-listing.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PlantService } from 'src/app/services/plant.service';
import { IPlant } from 'src/app/interfaces/plant';
import { of } from 'rxjs';

describe('PlantListingComponent', () => {
  let component: PlantListingComponent;
  let fixture: ComponentFixture<PlantListingComponent>;
  let getPlantsSpy: jasmine.Spy;
  const testData: IPlant[] = [{ latin_name: 'testing o1', common_name: 'cactus',
  family_name: 'green', plant_type: 'long', bloom_time: 'summer',
  size_at_maturity: '', climate_appropriate_plants: '',
  suitable_site_conditions: '', water_needs: '', stormwater_benefit: '', stormwater_int: '', appropriate_location: '',
  suggested_green_connection_routes: '', street_tree_list: '', additional_characteristices_notes: '', photocredit01: '',
  photocredit02: '', photocredit03: '', photocredit04: '', sidewalk_landscaping_plants: '', sidewalk_landscaping_plants_int: 100
  }];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantListingComponent ],
      imports: [HttpClientModule, FormsModule],
      providers: [PlantService],
    })
    .compileComponents();
    const plantsService = TestBed.get(PlantService);
    getPlantsSpy = spyOn(plantsService, 'getPlants').and.returnValue(of(testData));
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('--Setup--', () => {
    it('should call Plants Service', () => {
        expect(getPlantsSpy).toHaveBeenCalled();
    });
  });

  describe('--display--', () => {
    it('should display plants', () => {
      expect(component.plants.length).toEqual(testData.length);
    });
  });
});
