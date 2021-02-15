import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearClientesComponent } from './Clientes/crear-clientes/crear-clientes.component';
import { CrearProductosComponent } from './Productos/crear-productos/crear-productos.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ListarClientesComponent } from './Clientes/listar-clientes/listar-clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearClientesComponent,
    CrearProductosComponent,
    LoginComponent,
    ListarClientesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
