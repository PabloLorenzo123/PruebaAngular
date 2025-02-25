import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from '../model/user.type';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `http://localhost:3000/api/auth`;
  private accessTokenKey = `accessToken`;
  private refreshTokenKey = `refreshToken`;
  user = signal<User | null>(null);

  constructor(private http: HttpClient) { }

  signUp(user: User | FormData) {
    return this.http.post<{ user: User, accessToken: string, refreshToken: string }>(`${this.apiUrl}/signup`, user).pipe(
      map(response => {
        localStorage.setItem(
          this.accessTokenKey,
          response.accessToken
        );
        localStorage.setItem(
          this.refreshTokenKey,
          response.refreshToken
        );
        this.setUser(response.user);
        return response;
      })
    )
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post<{ accessToken: string, refreshToken: string, user: any }>(`${this.apiUrl}/login`, { username, password }).pipe(
      map(response => {
        if (response.accessToken) {
          localStorage.setItem(
            this.accessTokenKey,
            response.accessToken
          );
        };
        if (response.refreshToken) {
          localStorage.setItem(
            this.refreshTokenKey,
            response.refreshToken
          );
        };
        this.setUser(response.user);
        return response;
      })
    );
  }

  logout() {
    localStorage.removeItem(this.accessTokenKey);
    localStorage.removeItem(this.refreshTokenKey);
  }

  fetchUser() {
    return this.http.get(`${this.apiUrl}/`).subscribe((user) => {
      this.setUser(user);
    });
  }

  getUser() {
    return this.user();
  }

  // Set the user data
  setUser(user: any) {
    this.user.set(user);
  }

  getAccessToken() {
    return localStorage.getItem(this.accessTokenKey);
  }

  getRefreshToken() {
    return localStorage.getItem(this.refreshTokenKey);
  }
}