import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public baseUrl = "https://localhost:5001";

  constructor(private http: HttpClient) { }

  public composeHeaders() {
    const token = sessionStorage.getItem('token');
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      return headers;
    } else {
      return null;
    }
  }

  public getTodayTodos() {
    return this.http.get(`${this.baseUrl}/v1/todos/undone/today`, { headers: this.composeHeaders() });
  }

  public getTomorrowTodos() {
    return this.http.get(`${this.baseUrl}/v1/todos/undone/tomorrow`, { headers: this.composeHeaders() });
  }

  public getAllTodos() {
    return this.http.get(`${this.baseUrl}/v1/todos`, { headers: this.composeHeaders() });
  }

  public postTodo(data) {
    return this.http.post(`${this.baseUrl}/v1/todos`, data, { headers: this.composeHeaders() });
  }

  public markAsDone(data) {
    return this.http.put(`${this.baseUrl}/v1/todos/mark-as-done`, data, { headers: this.composeHeaders() });
  }
}
