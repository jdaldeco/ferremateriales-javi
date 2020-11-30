import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = '/api/clientes/';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }

  getAllClients(): Observable<any> {
    return this.http.get<any>(baseUrl);
  }

  getClient(id): Observable<any> {
    return this.http.get<any>(`${baseUrl}/${id}`);
  }

  createClient(data): Observable<any> {
    return this.http.post<any>(baseUrl, data);
  }

  updateClient(id, data): Observable<any> {
    return this.http.put<any>(`${baseUrl}/${id}`, data);
  }

  deleteClient(id): Observable<any> {
    return this.http.delete<any>(`${baseUrl}/${id}`);
  }

  deleteAllClients(): Observable<any> {
    return this.http.delete<any>(baseUrl);
  }

  findByName(name): Observable<any> {
    return this.http.get<any>(`${baseUrl}?name=${name}`);
  }
}