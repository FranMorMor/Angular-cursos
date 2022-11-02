import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// importamos la clase/componente del nuevo archivo que hemos creado (contador.component.ts)
/*import { ContadorComponent } from './contador/contador/contador.component';*/
/*import { HeroeComponent } from './heroes/heroe/heroe.component';
import { ListadoComponent } from './heroes/listado/listado.component';*/
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';

@NgModule({
  declarations: [
    AppComponent,
//añadimos la declaración de esa nueva clase/componente    
/*  ContadorComponent,
    HeroeComponent,
    ListadoComponent*/
  ],
      
  imports: [
  // se añadiran todas las carpetas que hacen referncias a modulos
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  // hacen referencia a servicios especificos a un módulo
  providers: [],
  // hace referencia al componente principal que se ejecutará 1º.
  bootstrap: [AppComponent]
})
export class AppModule { }
