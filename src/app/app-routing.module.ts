import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CrearClientesComponent } from './Clientes/crear-clientes/crear-clientes.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', component: LoginComponent,  pathMatch: 'full'},
  { path: 'Clientes', component: CrearClientesComponent,  pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
