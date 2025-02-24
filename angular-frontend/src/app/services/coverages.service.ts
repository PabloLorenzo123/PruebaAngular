import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable, map, catchError, throwError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoveragesService {
  private apiUrl = 'http://localhost:3000/api/product'; // Fixed URL (added "http://")

  private http = inject(HttpClient); // Correct field injection in Angular 16+

  async checkCoverage(developer: string, productName: string) {
    try {
        const res = await fetch(this.apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            developer,
            productName
          })
        })

        return res.ok ? true: false;
    } catch (error){
      console.log(error);
      return false;
    }
    
    // return this.http.post(this.apiUrl, { developer, productName }).pipe(
    //   map(() => true), // If the request succeeds, return true
    //   catchError(() => of(false)) // If an error occurs, return false
    // );
  }

  getCoverages() {
    return [
      {id: 1, name: 'Para tu amigo', available: false},
      {id: 2, name: 'Para tu salud', available: false},
      {id: 3, name: 'Para tu bici', available: false},
    ]
    // return this.http.get<Array<Coverage>>(this.apiUrl); // Fixed variable reference
  }
}
