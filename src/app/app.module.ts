import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ListaDeArchivosComponent } from './lista-de-archivos/lista-de-archivos.component';
import { ItemArchivoComponent } from './item-archivo/item-archivo.component';
import { FiltroExtensionPipe } from './filtro-extension.pipe';

// Importamos la librería ngx:
import{ NgxUploaderModule } from 'ngx-uploader';

@NgModule({
  declarations: [
    AppComponent,
    ListaDeArchivosComponent,
    ItemArchivoComponent,
    FiltroExtensionPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxUploaderModule // Y lo importamos en la aplicación
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
