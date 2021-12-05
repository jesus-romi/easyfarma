import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PacienteComponent } from './pages/paciente/paciente.component';
import { FarmaciaComponent } from './pages/farmacia/farmacia.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { RecetaComponent } from './pages/receta/receta.component';
import { MenuComponent } from './pages/menu/menu.component';
import { SubmenuComponent } from './pages/submenu/submenu.component';
import { RecetadtlComponent } from './pages/recetadtl/recetadtl.component';

@NgModule({
  declarations: [
    AppComponent,
    PacienteComponent,
    FarmaciaComponent,
    LoginComponent,
    HomeComponent,
    RecetaComponent,
    MenuComponent,
    SubmenuComponent,
    RecetadtlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
