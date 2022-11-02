// importa un componente desde el core de Angular
import { Component } from "@angular/core";

//añadimos un decorador del Componente
@Component({
    selector: 'app-contador',
//añadimos todo el código que tenemos el nuestro archivo '.html':
    template: `
        <h1>{{titulo}}</h1>
        <h3> La base es: <strong> {{base}} </strong></h3>

        <button (click)="acumular(base);"> +{{base}} </button>
        <span>{{ numero }}</span>
        <button (click)="acumular(-base);"> -{{base}} </button>
    `
})
export class ContadorComponent {
//public titulo: string = 'Contador App';
    titulo: string = 'Contador App';
    numero: number = 10;
    base  : number = 5;
  
  /*  sumar() {
      this.numero += 1;
    }
  
    restar() {
      this.numero  -= 1;
    }
  */
    acumular(valor: number) {
      this.numero += valor;
    }
}