import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable, map, catchError, throwError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoveragesService {
  private apiUrl = 'http://localhost:5000/api/coverages'; // Fixed URL (added "http://")

  private http = inject(HttpClient); // Correct field injection in Angular 16+

  checkCoverage(developer: string, productName: string) {
      this.http
        .post(this.apiUrl, { developer, productName })
        .pipe(
          catchError((err) => {
            console.log(err);
            return throwError(() => err);
          }),
        ).subscribe()
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
