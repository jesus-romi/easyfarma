import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EasyfarmaService } from 'src/app/services/easyfarma.service';
import { Recetadet } from '../../models/recetadet';

@Component({
  selector: 'app-recetadtl',
  templateUrl: './recetadtl.component.html',
  styleUrls: ['./recetadtl.component.css']
})
export class RecetadtlComponent implements OnInit {
  list_rd:any = [];
  id_cabecera;

  rd: Recetadet;
  msg = [];
  viewmsg = false;
  url ="";


  constructor(private ef:EasyfarmaService, private router: Router, private routerparam:ActivatedRoute) {
    this.rd = new Recetadet();
    this.rd.udm = "UN";
   }

  ngOnInit(): void {
    this.routerparam.params.subscribe(paramsId => {
      this.id_cabecera = paramsId['id'];
    });

    this.getMisRecetasDetalle(this.id_cabecera);
  }

  registrar_recetadetalle()
  {
    this.rd.id_cabecera = this.id_cabecera;
    this.validate();

    if (this.viewmsg == true)
    {
      return;
    }

    this.ef.newrecetadetalle(this.rd).subscribe(
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

    if (this.rd.medicamento_id == null || this.rd.medicamento_id == "" || this.rd.medicamento_desc == null || this.rd.medicamento_desc == "")
    {
      this.msg.push("Ingresar un Medicamento valido.");
      this.viewmsg = true;
    }

    if (this.rd.cantidad == null || this.rd.cantidad == 0)
    {
      this.msg.push("Ingresar una Cantidad valido.");
      this.viewmsg = true;
    }

    if (this.rd.udm == null || this.rd.udm == "")
    {
      this.msg.push("Ingresar una UDM valido.");
      this.viewmsg = true;
    }

    if (this.rd.medicamento_pres == true && this.rd.foto == "")
    {
      this.msg.push("El medicamento requiere que adjunte una receta médica.");
      this.viewmsg = true;
    }

  }

  getMisRecetasDetalle(id_cabecera:number)
  {
    this.ef.getMisRecetasDetalle(id_cabecera).subscribe(
      res => {
        //console.log(res);
        this.list_rd = res;
      },
      err => console.log(err)
    );
  }

  selectFile(event)
  {
    //console.log("aa");
    if(event.target.files)
    {
      //console.log("bb");
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event:any) => {
        this.url = event.target.result;
        this.rd.foto = this.url;
        //console.log(this.url);
      }
    }
  }

}
