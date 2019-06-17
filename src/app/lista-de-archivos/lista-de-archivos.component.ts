import { Component, OnInit, Inject, NgZone } from '@angular/core'; // Cargamos los modulos Inject y NgZone
import{ListaDeArchivosService} from '../services/lista-de-archivos.service';
import {RutasdearchivosService} from '../services/rutasdearchivos.service';
// Importamos varias librerías del modulo ngx:
import { UploadOutput, UploadInput, UploadFile, humanizeBytes, UploaderOptions, UploadStatus } from 'ngx-uploader';

@Component({
  selector: 'app-lista-de-archivos',
  templateUrl: './lista-de-archivos.component.html',
  styleUrls: ['./lista-de-archivos.component.css']
})
export class ListaDeArchivosComponent implements OnInit {
  archivos: object;
  // Creamos una variable de tipo opciones:
  options: UploaderOptions;

  // Le pasamos al constructor un nuevo objeto zone con Inject:
  constructor(@Inject(NgZone) private zone: NgZone, private listaDeArchivos: ListaDeArchivosService, private rutasDeArchivos: RutasdearchivosService) { 
    this.rutasDeArchivos.definirRuta('../archivos');
    // Incluimos las opciones de ngx en el constructor:
    this.options = { concurrency: 1, maxUploads: 3 };
  }

  mostrarRuta():string{
    return this.rutasDeArchivos.obtenerRuta();
  }

  mostrarSuperior(){
    return this.rutasDeArchivos.obtenerSuperior();
  }

  irASuperior(){
    this.rutasDeArchivos.definirRuta(this.mostrarSuperior()); // El método obtenerSuperior devuelve la ruta raiz si se encuentra en un nivel inferior.
    this.peticionExterna();
  }

  ngOnInit() {
    this.peticionExterna();
  }

  refrescar():void{
    this.peticionExterna();
  }

  peticionExterna():void{
    this.listaDeArchivos.getLista(this.mostrarRuta()).subscribe( data =>{
      this.archivos = data;
    });
  }

}
