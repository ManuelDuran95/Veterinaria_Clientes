import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { ServiciosComponent } from './componentes/servicios/servicios.component';
import { OfertasComponent } from './componentes/ofertas/ofertas.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { SignInComponent } from './componentes/sign-in/sign-in.component';
import { SignUpComponent } from './componentes/sign-up/sign-up.component';
import { VerifyEmailComponent } from './componentes/verify-email/verify-email.component';
//servicios
//import{MascotaService} from './services/mascota.service';
import{CitaService} from './services/cita.service';
//import {EmpleadoService} from './services/empleado.service';
//import {ServicioService} from './services/servicio.service';
import {PropietarioService} from './services/propietario.service';
//import { ConsultaService } from './services/consulta.service';
// Firebase services + enviorment module
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { CitasComponent } from './componentes/citas/citas.component';
import { AuthService } from "./services/auth.service";
import { AuthGuard } from "./guard/auth.guard";
import { FormsModule } from '@angular/forms';
import { PropietariosComponent } from './componentes/propietarios/propietarios.component';
import { MascotasComponent } from './componentes/mascotas/mascotas.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    NosotrosComponent,
    ServiciosComponent,
    OfertasComponent,
    FooterComponent,
    SignInComponent,
    SignUpComponent,
    VerifyEmailComponent,
    CitasComponent,
    PropietariosComponent,
    MascotasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
AngularFireAuthModule,
AngularFirestoreModule,
FormsModule
  ],
  providers: [AuthService,
   
    CitaService,
    
   
    PropietarioService, 
    AuthGuard,],
  bootstrap: [AppComponent]
})
export class AppModule { }
