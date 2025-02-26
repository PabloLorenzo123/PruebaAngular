import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Product } from '../model/product.type';
import { Observable, map, catchError, throwError, of, firstValueFrom } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api/product';

  sendPostRequest(developerName: string, productName: string) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    })
    return this.http.post(this.apiUrl, {productName, developerName}, {headers});
  }

  getCoverages() {
    return this.http.get<Array<Product>>(this.apiUrl);
  }

}
