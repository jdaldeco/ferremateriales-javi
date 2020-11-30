import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'localhost del mongo donde estén los usuarios xd';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.http.get<any>(baseUrl);
  }

  getUser(id): Observable<any> {
    return this.http.get<any>(`${baseUrl}/${id}`);
  }

  createUser(data): Observable<any> {
    return this.http.post<any>(baseUrl, data);
  }

  updateUser(id, data): Observable<any> {
    return this.http.put<any>(`${baseUrl}/${id}`, data);
  }

  deleteUser(id): Observable<any> {
    return this.http.delete<any>(`${baseUrl}/${id}`);
  }

  deleteAllUsers(): Observable<any> {
    return this.http.delete<any>(baseUrl);
  }

  findByUsername(username): Observable<any> {
    return this.http.get<any>(`${baseUrl}?username=${username}`);
  }
}
