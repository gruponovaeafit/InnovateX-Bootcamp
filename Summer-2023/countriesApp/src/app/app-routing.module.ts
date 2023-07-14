import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByCountryComponent } from './country/pages/by-country/by-country.component';
import { ByCapitalComponent } from './country/pages/by-capital/by-capital.component';
import { CountryDetailsComponent } from './country/pages/country-details/country-details.component';
import { ByRegionComponent } from './country/pages/by-region/by-region.component';

const routes: Routes = [
  {
    path: '',
    component: ByCountryComponent,
    pathMatch: 'full'
  },
  {
    path: 'bycapital',
    component: ByCapitalComponent
  },
  {
    path: 'byregion',
    component: ByRegionComponent
  },
  {
    path: 'countrydetails',
    component: CountryDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
