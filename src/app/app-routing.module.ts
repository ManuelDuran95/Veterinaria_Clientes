import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '././componentes/dashboard/dashboard.component';
import { NosotrosComponent } from '././componentes/nosotros/nosotros.component';
import {ServiciosComponent} from '././componentes/servicios/servicios.component';
import{ OfertasComponent} from '././componentes/ofertas/ofertas.component';
import {CitasComponent} from './componentes/citas/citas.component';
// Import all the components for which navigation service has to be activated
import { SignInComponent } from '././componentes/sign-in/sign-in.component';
import { SignUpComponent } from '././componentes/sign-up/sign-up.component';
import { AuthGuard } from "./guard/auth.guard";
import {PropietariosComponent} from './componentes/propietarios/propietarios.component';
import {MascotasComponent} from './componentes/mascotas/mascotas.component';




import { VerifyEmailComponent } from '././componentes/verify-email/verify-email.component';
import { combineChange } from '@angular/fire/firestore';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'nosotros', component: NosotrosComponent },
  {path: 'servicios', component: ServiciosComponent},
  {path: 'ofertas', component: OfertasComponent},
  {path:'citas',component:CitasComponent,canActivate:[AuthGuard]},
  {path:'sign-in', component: SignInComponent},
  {path: 'sign-up',component:SignUpComponent},
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'propietarios', component: PropietariosComponent },
  { path: 'mascotas', component: MascotasComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
