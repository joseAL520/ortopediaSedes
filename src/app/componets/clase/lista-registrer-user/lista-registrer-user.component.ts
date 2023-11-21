import { Component, EventEmitter, Output } from '@angular/core';
import { DatosFormulario } from 'src/app/interfaces/registrar';
import { ListRegisterService } from 'src/app/services/list-register.service';

@Component({
  selector: 'app-lista-registrer-user',
  templateUrl: './lista-registrer-user.component.html',
  styleUrls: ['./lista-registrer-user.component.css']
})
export class ListaRegistrerUserComponent {
  @Output() emitEditar = new EventEmitter<DatosFormulario>();
  columnas = ['# Iden.','Nombres', 'Genero', '# Celular', 'Diagnostico', 'Acciones']
  datos$ = this.apiMock.datos$;
  constructor(private apiMock: ListRegisterService){
  }

  editar(data: DatosFormulario): void {
    this.emitEditar.emit(data);
  }

  eliminar(numeroIdentificacion: number): void {
    this.apiMock.eliminarDato(numeroIdentificacion);
  }

  mapGenero(genero: number): string {
    switch (genero) {
      case 1:
        return 'Masculino';
      case 2:
        return 'Femenino';
      case 3:
        return 'Otro';
      default:
        return 'Desconocido';
    }
  }
}
