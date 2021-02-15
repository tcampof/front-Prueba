import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }


  readonly baseURL = "https://localhost:44349/api/Clientes";

  crearCliente(clientes: any): Observable<any> {
    return this.http.post(this.baseURL, clientes);
  }

  obtenerCliente(): Observable<any> {
    return this.http.get(this.baseURL);
  }

  update(id:any, data:any): Observable<any> {
    return this.http.put<any>(this.baseURL, id, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  // deleteAll(): Observable<any> {
  //   return this.http.delete(baseUrl);
  // }

  // findByTitle(title: any): Observable<any> {
  //   return this.http.get(`${baseUrl}?title=${title}`);
  // }

}
