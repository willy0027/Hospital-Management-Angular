import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({ providedIn: 'root' })
export class AuthService {

  private apiUrl = 'http://localhost:8000/api/v1';

  constructor(private http: HttpClient) {}

  login(data: { email: string; password: string }) {
    return this.http.post<any>(`${this.apiUrl}/login`, data);
  }

  register(data: any) {
    return this.http.post<any>(`${this.apiUrl}/register`, data);
  }

  saveUser(token: string, role: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('role', role);
  }

  logout() {
    localStorage.clear();
  }
}
