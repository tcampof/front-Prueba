import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente-model.model';
import { ClientesService } from 'src/app/servicios/clientes.service';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit {

  constructor(public service: ClientesService, public router: Router) { }

  ngOnInit(): void {
  }
  
  clientes: Cliente[];


  // deleteUser(user: User): void {
  //   this.apiService.deleteUser(user.id)
  //     .subscribe( data => {
  //       this.users = this.users.filter(u => u !== user);
  //     })
  // };

  // editUser(user: User): void {
  //   window.localStorage.removeItem("editUserId");
  //   window.localStorage.setItem("editUserId", user.id.toString());
  //   this.router.navigate(['edit-user']);
  // };

  addUser(): void {
    this.router.navigate(['add-user']);
  };

}
