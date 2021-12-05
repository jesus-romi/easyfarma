import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Recetacab } from '../models/recetacab';
import { Recetadet } from '../models/recetadet';

@Injectable({
  providedIn: 'root'
})
export class EasyfarmaService {
  wcf_url = "http://localhost:61575/Farma.svc/";

  constructor(private http: HttpClient) { }

  // Usuario
  newpaciente(u: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.wcf_url + "newpaciente", u);
  }

  login(u: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.wcf_url + "login", u);
  }

  getPerfil(correo:string)
  {
    return this.http.get( this.wcf_url + "perfil/" + correo);
  }

  correoexist(u: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.wcf_url + "correoexist", u);
  }

  guardarSesion( correo: string ) {
    localStorage.setItem('correo', correo);
    //console.log(correo);
  }

  cerrarSesion() {
    localStorage.removeItem('correo');
  }

  autenticado():boolean {
    if ( localStorage.getItem('correo') ) {
      return true;
    }
    else {
      return false;
    }
  }

  // Receta
  newrecetacabecera(rc: Recetacab): Observable<Recetacab> {
    return this.http.post<Recetacab>(this.wcf_url + "newrecetacabecera", rc);
  }

  getMisRecetas(correo:string)
  {
    return this.http.get( this.wcf_url + "misrecetas/" + correo);
  }

  newrecetadetalle(rd: Recetadet): Observable<Recetadet> {
    return this.http.post<Recetadet>(this.wcf_url + "newrecetadetalle", rd);
  }

  getMisRecetasDetalle(id_cabecera:number)
  {
    return this.http.get( this.wcf_url + "misrecetasdetalle/" + id_cabecera);
  }
}
