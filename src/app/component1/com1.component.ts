import { Component } from '@angular/core';

@Component({
    selector: 'personas',
    templateUrl: "/com1.component.html"
})


export class Personas{

    personas: Persona[];
    
    constructor(){
        this.personas = [];
    }

    agregarPersonas(nombre: String, apellido: String, edad: Number){
        let persona: Persona;
        persona = new Persona(nombre, apellido, edad);
        if (persona.esValido) {
            this.personas.push(persona);
            console.log("Persona agregada"); 
        } else {
            console.log("persona no valida")
        }
    }

    isEmpty(){
        return this.personas.length === 0;
    }

}

class Persona {
    
    nombre: String;
    apellido: String;
    edad: Number;

    constructor(nombre: String, apellido: String, edad: Number){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    esValido(){
        if (this.nombre == "" || this.apellido === "" || this.edad.toString() === "") return false
        return true
    }

    nombreCompleto(){
        return `${this.nombre} ${this.apellido}`;
    }

    mostrarInfo() {
        return `Edad: ${this.edad}`
    }

}