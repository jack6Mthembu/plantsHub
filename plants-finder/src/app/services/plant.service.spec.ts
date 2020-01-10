import { TestBed, inject} from '@angular/core/testing';

import { PlantService } from './plant.service';
import { IPlant } from '../interfaces/plant';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('PlantService', () => {
  let getPlantsSpy: jasmine.Spy;
  let filterPlantsSpy: jasmine.Spy;
  const limit = 1;
  const offSet = 1;
  const columnName = 'comonName';
  const filterValue = 'cactus';

  const testData: IPlant[] = [{ latin_name: 'testing o1', common_name: 'cactus',
  family_name: 'green', plant_type: 'long', bloom_time: 'summer',
  size_at_maturity: '', climate_appropriate_plants: '',
  suitable_site_conditions: '', water_needs: '', stormwater_benefit: '', stormwater_int: '', appropriate_location: '',
  suggested_green_connection_routes: '', street_tree_list: '', additional_characteristices_notes: '', photocredit01: '',
  photocredit02: '', photocredit03: '', photocredit04: '', sidewalk_landscaping_plants: '', sidewalk_landscaping_plants_int: 100
  }];

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  }).compileComponents());

  it('should be created', () => {
    const service: PlantService = TestBed.get(PlantService);
    expect(service).toBeTruthy();
  });

  it('should return return a list of plants for a given limit', inject([PlantService], (service: PlantService ) => {
    service.getPlants(limit, offSet).subscribe(response => {
      expect(response).toEqual(testData);
      expect(getPlantsSpy).toHaveBeenCalledWith(limit, offSet);
      expect(response.length).toEqual(limit);
    });
  }));

  // tslint:disable-next-line:max-line-length
  it('should return return a list of similar plants for a a given search column and value', inject([PlantService ], (service: PlantService ) => {
    service.getPlantsByColumnName(columnName, filterValue).subscribe(response => {
      expect(response).toEqual(testData);
      expect(filterPlantsSpy ).toHaveBeenCalledWith(columnName, filterValue);
      expect(response[0].common_name).toEqual(testData[0].common_name);
    });
  }));
});
