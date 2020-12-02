import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:3000/api/productos/';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<any> {
    return this.http.get<any>(baseUrl);
  }

  getProduct(id): Observable<any> {
    return this.http.get<any>(`${baseUrl}${id}`);
  }

  createProduct(data): Observable<any> {
    return this.http.post<any>(baseUrl, data);
  }

  updateProduct(id, data): Observable<any> {
    return this.http.put<any>(`${baseUrl}${id}`, data);
  }

  deleteProduct(id): Observable<any> {
    return this.http.delete<any>(`${baseUrl}${id}`);
  }

  deleteAllProducts(): Observable<any> {
    return this.http.delete<any>(baseUrl);
  }

  findByCode(code): Observable<any> {
    return this.http.get<any>(`${baseUrl}?code=${code}`);
  }
}

