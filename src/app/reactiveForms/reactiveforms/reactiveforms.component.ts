import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
})
export class ReactiveformsComponent implements OnInit {

  form;

  constructor(private formBuilder: FormBuilder){
    this.form = formBuilder.group({
      nombres: ['', Validators.required, Validators.maxLength(21)],
      email: ['', Validators.required, Validators.email],
      edad: ['', Validators.required, Validators.maxLength(2)],
      mensaje: ['', Validators.required, Validators.maxLength(150)],
    });
  }

  agregarUsuario(){
    if (this.form.valid) {
      console.log(this.form.value)
    } else {
      console.log(this.form.get('nombres').hasError('required'))
      console.log(this.form.get('email').hasError('email'))
      console.log(this.form.get('edad').hasError('maxlength'))
    }
  }

  ngOnInit() {
  }

}
