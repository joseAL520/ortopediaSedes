import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatosFormulario } from 'src/app/interfaces/registrar';

@Component({
  selector: 'app-registrer-user',
  templateUrl: './registrer-user.component.html',
  styleUrls: ['./registrer-user.component.css']
})
export class RegistrerUserComponent implements OnInit {
  @Input() editMode = false;
  @Input() dataEdit!: DatosFormulario;
  formulario!: FormGroup;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      numeroIdentificacion: [this.editMode ? this.dataEdit.numeroIdentificacion : null, Validators.required],
      nombres: [this.editMode ? this.dataEdit.nombres : null, Validators.required],
      apellidos: [this.editMode ? this.dataEdit.apellidos : null, Validators.required],
      genero: [this.editMode ? this.dataEdit.genero : null, Validators.required],
      numeroCelular: [this.editMode ? this.dataEdit.numeroCelular : null, Validators.required],
      diagnostico: [this.editMode ? this.dataEdit.diagnostico : null]
    });
  }

  enviarDatos() {
    if (this.formulario.valid) {
      const datos: DatosFormulario = this.formulario.value;
      console.log(datos);
    } else {
    }
  }

}
