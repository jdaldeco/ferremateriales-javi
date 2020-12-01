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

  nombreCliente:string;

  constructor(
    private usersService: UsersService,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.dataService.idctual.subscribe(nombreCliente => this.nombreCliente = nombreCliente)
  }

  model = new User("", "", "", "", "");

  submitted = false;

  nuevoCliente() {
    this.model = new User("", "", "", "", "");
  }

}
