import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:3000/api/clientes/';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.http.get<any>(baseUrl);
  }

  getUser(id): Observable<any> {
    return this.http.get<any>(`${baseUrl}${id}`);
  }

  createUser(data): Observable<any> {
    return this.http.post<any>(baseUrl, data);
  }

  updateUser(id, data): Observable<any> {
    return this.http.put<any>(`${baseUrl}${id}`, data);
  }

  deleteUser(id): Observable<any> {
    return this.http.delete<any>(`${baseUrl}${id}`);
  }

  deleteAllUsers(): Observable<any> {
    return this.http.delete<any>(baseUrl);
  }

  findByUsername(nombre): Observable<any> {
    return this.http.get<any>(`${baseUrl}/name/${nombre}`);
  }
}
