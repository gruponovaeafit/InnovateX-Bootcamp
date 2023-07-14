import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryServiceService {

  private apiUrl: string = 'https://restcountries.com/v3.1';
  constructor(private http: HttpClient) { }

  searchCountry(termino: string) {
    const url: string = `${this.apiUrl}/name/${termino}`
    return this.http.get<Observable<Country[]>>(url);
  }
}