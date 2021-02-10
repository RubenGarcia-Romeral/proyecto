import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { accesoUsuario, User } from '../clases/user';
const url = 'http://localhost:3000/user/'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  
  registrar(usuario: User): Observable<any>{
    return this.http.post(url, usuario)
  }

  acceso (usuario: accesoUsuario): Observable<any>{
    return this.http.post(url+'login', usuario)
  }

  obtenerPerfil(): Observable<any>{
    return this.http.get(url)
  }

  editarPerfil(usuario:User): Observable<any>{
    return this.http.put(url, usuario)
  }

  eliminarUsuario(): Observable<any>{
    return this.http.delete(url)
  }

  guardarToken(token:string): void{
    localStorage.setItem('userToken', token)
  }

  isLogged(): boolean{
    return !!localStorage.getItem('userToken')
  }

  logOut(): void{
    localStorage.removeItem('userToken')
  }

  leerToken(): string{
    return localStorage.getItem('userToken')
  }
}
