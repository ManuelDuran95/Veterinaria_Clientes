import { Component, OnInit } from '@angular/core';
import {Prueba} from '../../models/prueba';
import{PruebaService} from '../../services/prueba.service';
import Swal from 'sweetalert2';
//prueba
import { AngularFireDatabase, AngularFireAction,AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent implements OnInit {
  pruebaList: Prueba[];
  Nombre:string;
  Talla:string;
  Texto:string;
  //fiklter
  //items$: Observable<AngularFireAction<firebase.database.DataSnapshot>[]>;
  size$: BehaviorSubject<string|null>;
  
  constructor( public pruebaservice: PruebaService,db: AngularFireDatabase) { 
     
  
  
  }
 
  
filterBy(size: string|null) {
  this.size$.next(size);
}

  ngOnInit() {
    return this.pruebaservice.getPrueba()
    .snapshotChanges().subscribe(item => {
      this.pruebaList = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.pruebaList.push(x as Prueba);
      });
      console.log(this.pruebaList);
    });
  }
  onSubmit(){
    this.pruebaservice.insertPrueba(this.Nombre,this.Talla,this.Texto);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Agregado', 
      showConfirmButton: false,
      timer: 1000
    })
    this.resetForm();
  }
  resetForm() {
    this.Nombre ='';
    this.Talla = '';
    this.Texto = '';
    
    }

}
