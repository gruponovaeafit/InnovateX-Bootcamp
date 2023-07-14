import { Component } from '@angular/core';
import { CountryServiceService } from '../../services/country-service.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.scss']
})
export class ByCountryComponent {
  termino: string = ''
  constructor(private countryService: CountryServiceService) {}

  buscarPais() {

  }
  

}
