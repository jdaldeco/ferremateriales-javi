import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrls: ['./products-add.component.css']
})
export class ProductsAddComponent implements OnInit {

  listaProductos;
  idProducto:string;
  tipo:number;

  constructor(private productsService: ProductsService, private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.typeActual.subscribe(type => this.tipo = type);
    this.dataService.idctual.subscribe(id => this.idProducto = id);
    if (this.tipo == 2){
      this.productsService.getAllProducts().subscribe((data) => { 
        this.listaProductos = data['productos']; 
        this.listaProductos.forEach(prod => {
          if (prod._id == this.idProducto){
            this.model.nombre = prod.nombre;
            this.model.precio = prod.precio;
            this.model.descripcion = prod.descripcion;
          }
        });
      });
    } else {
      this.idProducto = "";
    }
  }

  model = new Product("",0,"");

  submitted = false;

  onSubmit() { 
    this.submitted = true; 
    if (this.tipo == 1){
      this.productsService.createProduct(this.model).subscribe((data) => {
        console.log(data);   
      });;
    } else {
      this.productsService.updateProduct(this.idProducto, this.model).subscribe((data) => {
        console.log(data);   
      });;
    }
  }

  nuevoProducto() {
    this.model = new Product("",0,"");
  }

}
