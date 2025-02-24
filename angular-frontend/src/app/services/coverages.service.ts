import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Coverage } from '../model/coverage.type';
import { Observable, map, catchError, throwError, of } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CoveragesService {
  private apiUrl = 'http://localhost:3000/api/product'; // Fixed URL (added "http://")

  private http = inject(HttpClient); // Correct field injection in Angular 16+

  async checkCoverage(developerName: string, productName: string) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    })

    return this.http
      .post(this.apiUrl,
        { productName, developerName},
       
      )
      .pipe(
        map((res) => res), // Send the res to the suscriber if there's no error.
        catchError(() => of(false))
      )
      .subscribe((res: any) => {
        if (res) {
          if (res.status == 201) {
            console.log(res.message);
            return true;
          }
        }
        return false; // If recieved a falsy value, then return false.
      });
  }

  getCoverages() {
    // return [
    //   {id: 1, name: 'Para tu amigo', available: false},
    //   {id: 2, name: 'Para tu salud', available: false},
    //   {id: 3, name: 'Para tu bici', available: false},
    // ]
    return this.http.get<Array<Coverage>>(this.apiUrl); // Fixed variable reference
  }
}
