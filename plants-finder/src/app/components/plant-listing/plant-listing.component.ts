import { Component, OnInit } from '@angular/core';
import { PlantService } from 'src/app/services/plant.service';
import { IPlant } from 'src/app/interfaces/plant';

@Component({
  selector: 'app-plant-listing',
  templateUrl: './plant-listing.component.html',
  styleUrls: ['./plant-listing.component.css']
})
export class PlantListingComponent implements OnInit {

  constructor(private plantService: PlantService) { }
  plants: IPlant[];
  offset = 1;
  limit = 15;

  ngOnInit() {
    this.fetchPlants(15, this.offset);
  }

  fetchPlants(limit: number, rowNumber: number) {
    this.plantService.getPlants(this.limit, this.offset).subscribe((results: IPlant[]) => {
      this.plants = results;
   });
  }

  onNext() {
   this.offset++;
   this.fetchPlants(this.limit, this.offset);
  }

  onPrevious() {
    if (this.offset > 0) {
      this.offset--;
    }
    this.fetchPlants(this.limit, this.offset);
  }
}
