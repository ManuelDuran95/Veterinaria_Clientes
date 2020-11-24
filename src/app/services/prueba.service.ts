import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {Prueba} from '../models/prueba';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class PruebaService {
  pruebaList: AngularFireList<any>;
selectedPrueba: Prueba;

  constructor(private firebase: AngularFireDatabase) { }
  getPrueba() { 
    return this.pruebaList = this.firebase.list('pruebas');
   }
   insertPrueba(nombre:string,talla:string,texto:string){
     this.pruebaList.push({
       Nombre:nombre,
       Talla:talla,
       Texto:texto
     });
   }
   
}
