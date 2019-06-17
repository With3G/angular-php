import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListaDeArchivosService {
  // Modificamos la ruta para que reciba un parámetro:
  private apiURL = 'http://localhost/API/servicios/leer-carpeta.php?ruta=' ;
  constructor(private http: HttpClient) { }
  // El método recibirá ahora un parámetro que se sumará a la ruta:
  getLista(ruta:any){
    // Devolvemos el valor ahora con la ruta añadida:
    return this.http.get(this.apiURL + ruta);
  }
}
