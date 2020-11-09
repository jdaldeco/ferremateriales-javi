import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'localhost del mongo donde estén los usuarios xd';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.http.get(baseUrl);
  }

  getUser(id): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  createUser(data): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  updateUser(id, data): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  deleteUser(id): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAllUsers(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByUsername(username): Observable<any> {
    return this.http.get(`${baseUrl}?username=${username}`);
  }
}
