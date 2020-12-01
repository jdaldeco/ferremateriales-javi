import { Component, OnInit } from '@angular/core';
import { SalesService } from '../../services/sales.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  ventas;

  constructor(
    private salesService: SalesService, 
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.salesService.getAllSales().subscribe((data) => {
      console.log(data);   
      this.ventas = data['ventas']; 
    });
  }

  enviarDatos(index, type){
    this.dataService.changeId(this.ventas[index]._id);
    this.dataService.changeType(type);
  }

  eliminarVenta(index){
    this.salesService.deleteSale(this.ventas[index]._id).subscribe((data) => {
      console.log(data);
    });
    window.location.reload();
  }

}
