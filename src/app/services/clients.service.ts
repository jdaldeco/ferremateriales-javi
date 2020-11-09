import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'localhost del mongo donde estén los clientes xd';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http: HttpClient) { }

  getAllClients(): Observable<any> {
    return this.http.get(baseUrl);
  }

  getClient(id): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  createClient(data): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  updateClient(id, data): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  deleteClient(id): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAllClients(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByName(name): Observable<any> {
    return this.http.get(`${baseUrl}?name=${name}`);
  }
}