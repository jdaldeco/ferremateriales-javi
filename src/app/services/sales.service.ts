import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = '/api/ventas/';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(private http: HttpClient) { }

  getAllSales(): Observable<any> {
    return this.http.get<any>(baseUrl);
  }

  getSale(id): Observable<any> {
    return this.http.get<any>(`${baseUrl}/${id}`);
  }

  createSale(data): Observable<any> {
    return this.http.post<any>(baseUrl, data);
  }

  updateSale(id, data): Observable<any> {
    return this.http.put<any>(`${baseUrl}/${id}`, data);
  }

  deleteSale(id): Observable<any> {
    return this.http.delete<any>(`${baseUrl}/${id}`);
  }

  deleteAllSales(): Observable<any> {
    return this.http.delete<any>(baseUrl);
  }

  findByFolio(folio): Observable<any> {
    return this.http.get<any>(`${baseUrl}?folio=${folio}`);
  }
}
