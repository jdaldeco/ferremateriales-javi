import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productos;

  constructor(private productsService: ProductsService, private dataService: DataService) { }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe((data) => {
      console.log(data);   
      this.productos = data['productos']; 
    });
  }

  enviarDatos(index, type){
    this.dataService.changeId(this.productos[index]._id);
    this.dataService.changeType(type);
  }

  eliminarProducto(index){
    this.productsService.deleteProduct(this.productos[index]._id).subscribe((data) => {
      console.log(data);
    });
    window.location.reload();
  }

}
