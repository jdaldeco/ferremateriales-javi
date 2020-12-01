import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private idProducto = new BehaviorSubject<string>("");
  idctual = this.idProducto.asObservable();

  private type = new BehaviorSubject<number>(1);
  typeActual = this.type.asObservable();

  constructor() {

  }

  changeId(nombre: string) {
    this.idProducto.next(nombre);
  }
  changeType(tipo: number) {
    this.type.next(tipo);
  }
}

