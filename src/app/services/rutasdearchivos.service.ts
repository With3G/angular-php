import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RutasdearchivosService {
  // Definimos dos atributos string:
  ruta: string;
  rutaOriginal: string;

  constructor() { }

  // Ahora generamos un método para definir las rutas:
  definirRuta(ruta){
    // Evaluamos si no existe el valor ruta para asignarle la ruta a la ruta original:
    if(!this.ruta){
      this.rutaOriginal = ruta;
    }
    this.ruta = ruta;
  }

  // Vamos a usar otro método que devolverá la ruta definida:
  obtenerRuta():string{
    return this.ruta;
  }

  // Vamos a definir un método para sacar la ruta superior:
  obtenerSuperior():any{
    // Preguntamos si estamos en una ruta distinta a la ruta original:
    if(this.ruta != this.rutaOriginal){
      // Devolvemos el resultado después  de /:
      return this.ruta.substr(0, this.ruta.lastIndexOf('/'));
    }else{
      return false;
    }
  }
}
