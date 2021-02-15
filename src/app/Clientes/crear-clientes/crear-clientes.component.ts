import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from 'src/app/servicios/clientes.service';

@Component({
  selector: 'app-crear-clientes',
  templateUrl: './crear-clientes.component.html',
  styleUrls: ['./crear-clientes.component.css'],
})
export class CrearClientesComponent implements OnInit {
  @ViewChild('_nombre') _nombre: ElementRef;
  constructor(public service: ClientesService, public router: Router) {}
  clientes: any;
  Nombre: string;
  Apellido: string;
  Identificacion: string;
  Direccion: string;
  Id: string;
  _nombreBoton: string;
  _editar:string;

  ngOnInit(): void {
    this._nombreBoton = 'Crear';
    this.obtenerClientes();
  }

  crearCliente() {
    if (this._nombreBoton == 'Crear') {
      const _cliente = {
        Nombre: this.Nombre,
        Apellido: this.Apellido,
        Identificacion: this.Identificacion,
        Direccion: this.Direccion,
      };
      this.service.crearCliente(_cliente).subscribe((data) => {
        this.obtenerClientes();
      });
      this.Nombre = '';
      this.Apellido = '';
      this.Identificacion = '';
      this.Direccion = '';
    }
  }

  obtenerClientes() {
    this.service.obtenerCliente().subscribe((data) => {
      this.clientes = data;
    });
  }

  seleccionarItem(item: any) {
    
    this.Id = item.id;
    this.Nombre = item.nombre;
    this.Apellido = item.apellido;
    this.Identificacion = item.identificacion;
    this.Direccion = item.direccion;
    this._nombreBoton = 'Editar';
  }

  editar() {
    if (this._nombreBoton === 'Editar') {
      alert(this._nombreBoton)
      const _cliente = {
        Id:this.Id,
        Nombre: this.Nombre,
        Apellido: this.Apellido,
        Identificacion: this.Identificacion,
        Direccion: this.Direccion,
      };
      this.service.update(this.Id, _cliente).subscribe((data) => {
        this.obtenerClientes();
      });
      this.Nombre = '';
      this.Apellido = '';
      this.Identificacion = '';
      this.Direccion = '';
    }
  }
}
