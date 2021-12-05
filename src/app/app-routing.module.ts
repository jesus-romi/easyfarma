import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacienteComponent } from './pages/paciente/paciente.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { RecetaComponent } from './pages/receta/receta.component';
import { MenuComponent } from './pages/menu/menu.component';
import { SubmenuComponent } from './pages/submenu/submenu.component';
import { RecetadtlComponent } from './pages/recetadtl/recetadtl.component';

const routes: Routes = [
  {path: 'menu', component: MenuComponent},
  {path: 'submenu', component: SubmenuComponent},

  {path: 'paciente', component: PacienteComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'receta', component: RecetaComponent},
  {path: 'recetadtl/:id', component: RecetadtlComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
