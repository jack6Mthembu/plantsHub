import { Routes, RouterModule } from '@angular/router';
import { PlantListingComponent } from '../components/plant-listing/plant-listing.component';
import { PlantFilterComponent } from '../components/plant-filter/plant-filter.component';
import { CreateComponent } from '../components/create/create.component';
import { NgModule } from '@angular/core';

export const AppRoutes: Routes = [
  { path: '', redirectTo: '/listing', pathMatch: 'full' },
  { path: 'listing', component: PlantListingComponent },
  { path: 'filter', component: PlantFilterComponent },
  { path: 'create', component: CreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
