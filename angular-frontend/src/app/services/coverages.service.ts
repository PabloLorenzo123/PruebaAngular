import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Coverage } from '../model/coverage.type';

@Injectable({
  providedIn: 'root',
})
export class CoveragesService {
  private apiUrl = 'http://localhost:5000/api/coverages'; // Fixed URL (added "http://")

  private http = inject(HttpClient); // Correct field injection in Angular 16+

  getCoverages() {
    return [
      {id: 1, name: 'Para tu amigo'},
      {id: 2, name: 'Para tu salud'},
      {id: 3, name: 'Para tu bici'},
    ]
    // return this.http.get<Array<Coverage>>(this.apiUrl); // Fixed variable reference
  }
}
