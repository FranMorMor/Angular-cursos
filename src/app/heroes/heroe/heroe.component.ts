import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
// es un template que tenemos en otro archivo, no se indica directamente en el decorador.    
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent {
    nombre: string = 'Ironman';
    edad  : number = 45;

// get es crear mediante código una propiedad que al 
// llamarla se procesará.
    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }    


    obtenerNombre(): string {
// los badticks sirven para crear templates 
// de un string.
        return `${this.nombre} - ${this.edad}`;
//      return this.nombre + '-' + this.edad;
    }

    cambiarNombre(): void {
        this.nombre = 'Spiderman';
    }

    cambiarEdad(): void {
        this.edad = 50;
    }
}