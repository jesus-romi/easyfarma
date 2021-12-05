import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EasyfarmaService } from 'src/app/services/easyfarma.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  correo_st = "";

  constructor(private ef:EasyfarmaService, private router: Router) { 

  }

  ngOnInit(): void {
    this.correo_st = localStorage.getItem('correo');
  }

  cerrarSesion()
  {
    this.ef.cerrarSesion();
    this.router.navigate(['/login']);
  }

}
