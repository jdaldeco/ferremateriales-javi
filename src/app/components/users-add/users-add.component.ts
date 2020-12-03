import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UsersService } from '../../services/users.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-users-add',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.css']
})
export class UsersAddComponent implements OnInit {

  listaClientes;
  idCliente: string;
  tipo: number;

  constructor(
    private usersService: UsersService,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.dataService.typeActual.subscribe(type => this.tipo = type);
    this.dataService.idctual.subscribe(id => this.idCliente = id);

    if (this.tipo == 2){
      this.usersService.getAllUsers().subscribe((data) => { 
        this.listaClientes = data['clientes']; 
        this.listaClientes.forEach(client => {
          if (client._id == this.idCliente){
            this.model.nombre = client.nombre;
            this.model.sector = client.sector;
            this.model.domicilio = client.domicilio;
            this.model.rfc = client.rfc;
            this.model.correo = client.correo;
          }
        });
      });
    } else {
      this.idCliente = "";
    }
  }

  model = new User("", "", "", "", "");

  submitted = false;

  onSubmit() { 
    this.submitted = true; 
    if (this.tipo == 1){
      this.usersService.createUser(this.model).subscribe((data) => {
        console.log(data);   
      });;
    } else {
      this.usersService.updateUser(this.idCliente, this.model).subscribe((data) => {
        console.log(data);   
      });;
    }
  }

  nuevoCliente() {
    this.model = new User("", "", "", "", "");
  }

}
