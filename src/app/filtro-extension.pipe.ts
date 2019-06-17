import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroExtension'
})
export class FiltroExtensionPipe implements PipeTransform {
  // Transform toma las variables de cualquier tipo y las transforma:
  transform(value: any, args?: any): any {
    // Creamos una variable local llamada iconoClase:
    let iconoClase:string;
    // Hacemos un switch para verificar el formato de archivo y ofrecer diferentes resultados:
    switch(value){
      case 'zip':
        iconoClase = "fa-file-archive-o";
        break;
      case 'pdf':
        iconoClase = "fa-file-pdf-o";
        break;
      case 'pptx':
        iconoClase = "fa-file-powerpoint-o";
        break;
      case 'dir':
        iconoClase = "fa-folder";
        break;
      default:
        iconoClase = "fa-file";

    }
    // Devolvemos como valor el iconoClase:
    return iconoClase;
  }

}
