import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CitaService {
  citaList: AngularFireList<any>;
  constructor(private firebase: AngularFireDatabase) { }

  public getdatos() { 
    return this.citaList = this.firebase.list('citas');
   }
   insertdatos(num:number,fecha:string,hora:string,motivo:string,estado:string,mascota:string,propietario:string) {
    // agregar un dato al final de la lista
    //this.mascotaList = this.firebase.list('mascotas');
    this.citaList.push({
      Num:num,
      Fecha:fecha,
      Hora: hora,
      Motivo:motivo,
      Estado:estado,
      Mascota:mascota,
      Propietario:propietario
       });
       Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Mascota Ingresada', 
        showConfirmButton: false,
        timer: 1500
      })

      }
      deleteCita($key: string) {
        this.citaList.remove($key);
      }

  
}
