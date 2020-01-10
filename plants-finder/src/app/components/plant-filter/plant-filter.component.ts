import { Component, OnInit } from '@angular/core';
import { IPlant } from 'src/app/interfaces/plant';
import { PlantService } from 'src/app/services/plant.service';

@Component({
  selector: 'app-plant-filter',
  templateUrl: './plant-filter.component.html',
  styleUrls: ['./plant-filter.component.css']
})
export class PlantFilterComponent implements OnInit {

  constructor(private plantService: PlantService) { }

  filterValue: string;
  selectedFilterOftion: number;
  filterColumn: string;
  plants: IPlant[];
  plant: IPlant;

  ngOnInit() {
    this.selectedFilterOftion = 1;
  }

  onFilter() {
    if (this.selectedFilterOftion === 1 ) {
      this.filterColumn = 'bloom_time';
    } else if (this.selectedFilterOftion === 2) {
      this.filterColumn = 'plant_type';
    } else if (this.selectedFilterOftion === 3) {
      this.filterColumn = 'appropriate_location';
    } else {
      this.filterColumn = 'habitat_value';
    }
      this.plantService.getPlantsByColumnName(this.filterColumn, this.filterValue).subscribe(results => {
        this.plants = results;
      // tslint:disable-next-line:no-unused-expression
      }), error => {
        console.log(error);
      };
  }

  getSelectedPlant(index: number) {
  this.plant = this.plants[index];
  }
}
