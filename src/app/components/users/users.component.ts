import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  clientes;

  constructor(
    private usersService: UsersService,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.usersService.getAllUsers().subscribe((data) => {
      console.log(data);
      this.clientes = data['clientes'];
    });
  }

  enviarDatos(index, type) {
    this.dataService.changeId(this.clientes[index]._id);
    this.dataService.changeType(type);
  }

  eliminarCliente(index) {
    this.usersService.deleteUser(this.clientes[index]._id).subscribe((data) => {
      console.log(data);
    });
    window.location.reload();
  }

}
