import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { CountryDetailsComponent } from './pages/country-details/country-details.component';




@NgModule({
  declarations: [
    ByCountryComponent,
    ByCapitalComponent,
    CountryDetailsComponent,
    ByRegionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    ByCountryComponent
  ]
})
export class CountryModule { }
