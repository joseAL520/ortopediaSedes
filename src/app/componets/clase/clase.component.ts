import { Component } from '@angular/core';
import { DatosFormulario } from 'src/app/interfaces/registrar';

@Component({
  selector: 'app-clase',
  templateUrl: './clase.component.html',
  styleUrls: ['./clase.component.css']
})
export class ClaseComponent {
  openRegistrer:boolean | undefined;
  openListRegistrer: boolean | undefined;
  editMode = false;
  dataEdit!:DatosFormulario;

  openModalLogin(){
    this.openRegistrer = true;
    this.openListRegistrer=false;
    this.editMode = false;
  }

  openRegistrerUser(){
    this.openListRegistrer=true;
    this.openRegistrer = false;
    this.editMode = false;
  }

  editarMode(event:DatosFormulario):void {
    this.editMode = true;
    this.dataEdit = event;
    this.openRegistrer = true;
    this.openListRegistrer=false;
  }
}
