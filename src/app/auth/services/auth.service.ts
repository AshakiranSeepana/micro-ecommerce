import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators'
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}
  private tokenKey = 'authToken';
  private rolprieKey = 'userRole';
  private apiUrl = 'http://localhost:3000/api/auth'; // backend API

  login(credentials: { email: string; password: string }) {
    return this.http.post<{ token: string; role: string }>(`${this.apiUrl}/login`, credentials)
      .pipe(
        tap(res => {
          localStorage.setItem('token', res.token);
          localStorage.setItem('role', res.role);
        })
      );
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}