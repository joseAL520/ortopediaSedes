import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, map, of } from "rxjs";
import { datosFormularioMock } from "./list-register.mock";
import { DatosFormulario } from "../interfaces/registrar";

/**
 * @description
 * @class
 */
@Injectable()
export class ListRegisterService {
  private datosSubject = new BehaviorSubject(datosFormularioMock);
  datos$ = this.datosSubject.asObservable();
  private apiUrl = 'https://ejemplo.com/api';
  constructor(private http: HttpClient) { }

  getList(): Observable<any> {
    return this.datos$;
  }
  editData(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/endpoint`, data);
  }
  eliminarDato(numeroIdentificacion: number) {
    const datosActuales = this.datosSubject.value;
    const nuevosDatos = datosActuales.filter(dato => dato.numeroIdentificacion !== numeroIdentificacion);
    this.datosSubject.next(nuevosDatos);
  }
}
function mapGenero(genero: number): string {
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
