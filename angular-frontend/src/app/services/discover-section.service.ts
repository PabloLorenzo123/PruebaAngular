import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { discoverArticle } from '../model/discoverArticle.type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiscoverSectionService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api/discover';

  getArticles() : Observable<discoverArticle[]> {
    return this.http.get<discoverArticle[]>(this.apiUrl);
  }

}
