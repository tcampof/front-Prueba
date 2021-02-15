import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../servicios/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public userService: UsersService, public router: Router) { }

  usuario: string;
  password: string;

  login() {
    const user = {usuario: this.usuario, password: this.password};
    this.userService.login(this.usuario, this.password).subscribe( data => {
      console.log(data);
      this.router.navigateByUrl('Clientes')
    });
  }
}
