import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { EasyfarmaService } from 'src/app/services/easyfarma.service';
import { Recetacab } from '../../models/recetacab';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.css']
})
export class RecetaComponent implements OnInit {
  u: any;
  list_rc:any = [];

  correo_st;
  rc: Recetacab;
  today = new Date();
  msg = [];
  viewmsg = false;

  constructor(private ef:EasyfarmaService, private router: Router) { 
    this.rc = new Recetacab();
    this.u = new Usuario();
  }

  ngOnInit(): void {
    this.correo_st = localStorage.getItem('correo');
    this.rc.correo = this.correo_st;
    //console.log( this.correo_st);
    this.getPerfil(this.correo_st);
    this.getMisRecetas(this.correo_st);
  }

  getPerfil(correo:string)
  {
    this.ef.getPerfil(correo).subscribe(
      res => {
        this.u = res;
        //console.log(this.u);
      },
      err => console.log(err)
    );
  }

  registrar_recetacabecera()
  {
    this.rc.fecha_registro =  this.today;
    this.rc.estado = "01 - Registrado";

    this.validate();

    if (this.viewmsg == true)
    {
      return;
    }

    this.ef.newrecetacabecera(this.rc).subscribe(
      (response) => {
        if (response){
          //console.log("exito");
          this.router.navigate(['/receta']);
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

    if (this.rc.correo == null || this.rc.correo == "")
    {
      this.msg.push("Ingresar un Correo valido.");
      this.viewmsg = true;
    }

    if (this.rc.fecha_necesidad == null)
    {
      this.msg.push("Ingresar una Fecha de Necesidad valido.");
      this.viewmsg = true;
    }
  }

  getMisRecetas(correo:string)
  {
    this.ef.getMisRecetas(correo).subscribe(
      res => {
        //console.log(res);
        this.list_rc = res;
      },
      err => console.log(err)
    );
  }
}
