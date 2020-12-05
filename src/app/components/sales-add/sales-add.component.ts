import { Component, OnInit } from '@angular/core';
import { Sale } from '../../models/sale';
import { DataService } from 'src/app/services/data.service';
import { SalesService } from 'src/app/services/sales.service';
import { ProductsService } from 'src/app/services/products.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-sales-add',
  templateUrl: './sales-add.component.html',
  styleUrls: ['./sales-add.component.css']
})
export class SalesAddComponent implements OnInit {

  listaProductos = [];
  listaClientes = [];
  productoComprado:any = [];
  tipo: number;

  constructor(private salesService: SalesService, private dataService: DataService,
    private productsService: ProductsService, private clientesService: UsersService) { }

  ngOnInit(): void {
    this.salesService.getAllSales().subscribe((data) => {
      var i = 1;
      data['ventas'].forEach(sale => {
        i++;
      })

      var folio = "000" + i;

      if (folio.length > 4) {
        folio = folio.substring(1, folio.length);
      }

      this.model.folio = folio;
    });

    this.productsService.getAllProducts().subscribe((prod) => {
      this.listaProductos = prod['productos'];
    });

    this.clientesService.getAllUsers().subscribe((client) => {
      client['clientes'].forEach(cliente => {
        this.listaClientes.push(cliente.nombre);
      });;
    });
  }

  model = new Sale("", [], "", 0, new Date());

  submitted = false;

  onSubmit() {
    this.submitted = true;

    this.model.fecha = new Date();

    this.listaProductos.forEach(producto => {
      if (this.model.productos.valueOf() == producto.nombre){
        this.model.importe = producto.precio;
        this.productoComprado.push(producto.descripcion);
        this.model.productos = this.productoComprado;
      }
    });

    console.log(this.model);
    
    this.salesService.createSale(this.model).subscribe((data) => {
      console.log(data);
    });
  }

  nuevaVenta() {
    this.model = new Sale("", [], "", 0, new Date());
  }

}
