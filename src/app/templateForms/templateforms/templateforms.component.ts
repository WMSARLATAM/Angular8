import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateforms',
  templateUrl: './templateforms.component.html',
  styleUrls: ['./templateforms.component.css']
})
export class TemplateformsComponent implements OnInit {

  usuarios: Usuario[];

  constructor() {
    this.usuarios = [];
  }

  agregarUsuario(nuevo_usuario){
    let usuario: Usuario;
    usuario = new Usuario(
      nuevo_usuario.value.nombres, 
      nuevo_usuario.value.email, 
      nuevo_usuario.value.edad, 
      nuevo_usuario.value.mensaje
    );
    this.usuarios.push(usuario);
  }

  ngOnInit() {
  }

}


class Usuario {

  nombre: String;
  email: String;
  edad: Number;
  mensaje: String;

  constructor(
    nombre: String, 
    email: String,
    edad: Number,
    mensaje: String
  )
  {
    this.nombre = nombre;
    this.email = email;
    this.edad = edad;
    this.mensaje = mensaje;
  };

  nombreCompleto(){
    return `${this.nombre}`;
  }

  mostrarInfo() {
      return `Edad: ${this.edad}, Mensaje: ${this.mensaje}`;
  }

}