import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EasyfarmaService } from 'src/app/services/easyfarma.service';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  u: Usuario;
  msg = [];
  viewmsg = false;

  constructor(private ef:EasyfarmaService, private router: Router) {
    this.u = new Usuario();
  }
  
  ngOnInit(): void {
  }

  login() {
    this.msg = [];
    this.viewmsg = false;

    if (this.u.correo == null || this.u.correo == "" ||
        this.u.contrasena == null || this.u.contrasena == "")
    {
      this.msg.push("Ingresar sus credenciales.");
      this.viewmsg = true;
      return;
    }

    this.ef.login(this.u).subscribe(
      (response) => {
        if (response){
          this.ef.guardarSesion(this.u.correo);
          this.router.navigate(['/home']);
        }
        else {
          this.msg.push("Error al iniciar sesión, verifique sus credenciales.");
          this.viewmsg = true;
        }
      },
      (err) => {
        this.msg.push(err);
      }
    );
  }

}
