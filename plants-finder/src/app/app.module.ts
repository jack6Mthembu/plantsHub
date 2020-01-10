import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlantListingComponent } from './components/plant-listing/plant-listing.component';
import { PlantFilterComponent } from './components/plant-filter/plant-filter.component';
import { CreateComponent } from './components/create/create.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    PlantListingComponent,
    PlantFilterComponent,
    CreateComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
