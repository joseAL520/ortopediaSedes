import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DatosFormulario } from 'src/app/interfaces/registrar';
import { ListRegisterService } from 'src/app/services/list-register.service';

@Component({
  selector: 'app-lista-registrer-user',
  templateUrl: './lista-registrer-user.component.html',
  styleUrls: ['./lista-registrer-user.component.css']
})
export class ListaRegistrerUserComponent implements OnInit{
  columnas = ['# Iden.','Nombres', 'Genero', '# Celular', 'Diagnostico', 'Acciones']

  data: any[] = [];
  constructor(private apiMock: ListRegisterService){
  }
  ngOnInit(): void {
    this.apiMock.getList().subscribe(data => {
        this.data = Object.values(data); 
        console.log(data)
      }
    );
  }
  


  editar(data: DatosFormulario): void {
    // this.emitEditar.emit(data);
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
