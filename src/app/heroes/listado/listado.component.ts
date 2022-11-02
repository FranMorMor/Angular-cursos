//import { Component, OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  })

// OnInit => 1er ciclo de vida de Angular. Los ciclos de vida con su contructor son ciertos pasos 
// o métodos que dispara Angular de forma automática
/*  export class ListadoComponent implements OnInit {

  constructor() { 
    console.log('Constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

}
*/
export class ListadoComponent {

// heroes es un arreglo de tipo string inicializado  
  heroes: string[] = ['Spiderman', 'Superman', 'Ironman', 'Thor'];

// tenemos que crear una propiedad o metodo en la clase para poder imprimirla por el html.   
  heroeliminadoP: string = '';

  borrarHeroe(){
  // elimina del arreglo a partir de una posición inicial las posiciones indicadas en el 2º parámetro.
  //  this.heroes.splice(0,1)
  // elimina el 1er elemento del arreglo
     const heroeliminado = this.heroes.shift() 
     || '';
     
     this.heroeliminadoP = heroeliminado;
  }
  }
