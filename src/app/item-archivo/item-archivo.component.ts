import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RutasdearchivosService } from '../services/rutasdearchivos.service';
// Importamos una librería de ngx:
import {NgxUploaderModule} from 'ngx-uploader';

@Component({
  selector: 'app-item-archivo',
  templateUrl: './item-archivo.component.html',
  styleUrls: ['./item-archivo.component.css']
})
export class ItemArchivoComponent implements OnInit {
  @Input()
  itemInfo:any; 

  @Output()
  cambioArchivo: EventEmitter<number> = new EventEmitter(); // El outoput tendra un objeto de tipo eventemitter

  edicionActiva:Boolean;
  modelItem:any;
  constructor(private http: HttpClient, private rutasDeArchivos: RutasdearchivosService) {
    this.modelItem = {}
   }

  ngOnInit() {
  }

  borrar(item):void{
    this.http.get('http://localhost/api/servicios/borrar-archivos.php?ruta-archivo=' + item.ruta + '/' + item.nombre).subscribe(
      (res: Response) => { 
        this.cambioArchivo.emit();
      }
    );
  }

  activarEdicion(nombre:string):void{
    this.edicionActiva = true;
    this.modelItem.nuevoNombre = nombre;
  }

  desactivarEdicion():void{
    this.edicionActiva = false;
  }

  renombrar(item):void{
    let rutaArchivo = item.ruta + '/' + item.nombre;
    let nuevoNombre = item.ruta + '/' + this.modelItem.nuevoNombre;
    this.http.get('http://localhost/api/servicios/renombrar-archivos.php?ruta-archivo=' + rutaArchivo + '&nuevo-archivo=' + nuevoNombre).subscribe(
      (res: Response) => { 
        this.cambioArchivo.emit();
      }
    );
  }

  nuevaRuta():void{
    this.rutasDeArchivos.definirRuta('../archivos/Otracarpeta');
    this.cambioArchivo.emit();
  }
  

}
