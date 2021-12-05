import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { EasyfarmaService } from 'src/app/services/easyfarma.service';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {
  u: Usuario;
  msg = [];
  viewmsg = false;
  url ="assets/img/image.png";

  constructor(private ef:EasyfarmaService, private router: Router) {
    this.u = new Usuario();
  }

  ngOnInit(): void {
  }

  registrar_paciente()
  {
    this.validate();

    if (this.viewmsg == true)
    {
      return;
    }

    this.u.tipo = "PAC";

    this.ef.newpaciente(this.u).subscribe(
      (response) => {
        if (response){
          //console.log("exito");
          this.router.navigate(['/login']);
        }
        //console.log(response);
      },
      (err) => {
        this.msg = err;
        //console.log(err);
      }
    );
  }

  validate()
  {
    this.msg = [];
    this.viewmsg = false;

    if (this.u.nombre == null || this.u.nombre == "")
    {
      this.msg.push("Ingresar un Nombre valido.");
      this.viewmsg = true;
    }
    if (this.u.nombre != null && this.u.nombre.length > 100)
    {
      this.msg.push("El Nombre no puede ser mayor a 100 caracteres.");
      this.viewmsg = true;
    }

    if (this.u.correo == null || this.u.correo == "")
    {
      this.msg.push("Ingresar un Correo valido.");
      this.viewmsg = true;
    }
    if (this.u.correo != null && this.u.correo.length > 50)
    {
      this.msg.push("El Correo no puede ser mayor a 50 caracteres.");
      this.viewmsg = true;
    }

    if (this.u.contrasena == null || this.u.contrasena == "")
    {
      this.msg.push("Ingresar una Contraseña valido.");
      this.viewmsg = true;
    }
    if (this.u.contrasena != null && this.u.contrasena.length > 30)
    {
      this.msg.push("La Contraseña no puede ser mayor a 30 caracteres.");
      this.viewmsg = true;
    }

    if (this.u.nro_documento == null || this.u.nro_documento == "")
    {
      this.msg.push("Ingresar un Nro DNI valido.");
      this.viewmsg = true;
    }
    if (this.u.nro_documento != null && this.u.nro_documento.length < 8)
    {
      this.msg.push("El número de DNI debe tener mínimo 8 dígitos.");
      this.viewmsg = true;
    }

    if (this.u.fec_nacimiento == null)
    {
      this.msg.push("Ingresar una Fecha de Nacimiento valido.");
      this.viewmsg = true;
    }

    if (this.u.correo != "")
    {
      this.ef.correoexist(this.u).subscribe(
        (response) => {
          if (response){
            this.msg.push("El correo electrónico ya está siendo usado.");
            this.viewmsg = true;
          }
        },
        (err) => {
          this.msg = err;
        }
      );
    }

    if (this.u.contrasena != "")
    {
        let hasNumber = /\d/.test(this.u.contrasena);
        let hasUpper = /[A-Z]/.test(this.u.contrasena);
        let hasLower = /[a-z]/.test(this.u.contrasena);
        const valid = hasNumber && hasUpper && hasLower;
        //console.log(valid);
        if (!valid) {
          this.msg.push("Se ha establecido una contraseña no segura.");
          this.viewmsg = true;
        }
    }
  }

  selectFile(event)
  {
    if(event.target.files)
    {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event:any) => {
        this.url = event.target.result;
        this.u.foto = this.url;
        //console.log(this.url);
      }
    }
  }
}
