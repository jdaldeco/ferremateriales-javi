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

  nombreProducto:string;

  constructor(private productsService: ProductsService, private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.idctual.subscribe(nombreProducto => this.nombreProducto = nombreProducto);
  }

  model = new Product("",0,"");

  submitted = false;

  onSubmit() { 
    this.submitted = true; 
    this.productsService.createProduct(this.model).subscribe((data) => {
      console.log(data);   
    });;
  }

  nuevoProducto() {
    this.model = new Product("",0,"");
  }

}
