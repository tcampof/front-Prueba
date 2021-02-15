import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

const baseUrl = "https://localhost:44349/api/Usuarios/";
@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(private http: HttpClient) {}

  login(nombre: any, password: any): Observable<any> {
    return this.http.get(`${baseUrl}?nombre=${nombre}&password=${password}`);
  }
}