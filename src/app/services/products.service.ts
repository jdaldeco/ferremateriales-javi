import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'localhost del mongo donde estén los productos xd';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<any> {
    return this.http.get(baseUrl);
  }

  getProduct(id): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  createProduct(data): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  updateProduct(id, data): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  deleteProduct(id): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAllProducts(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByCode(code): Observable<any> {
    return this.http.get(`${baseUrl}?code=${code}`);
  }
}

