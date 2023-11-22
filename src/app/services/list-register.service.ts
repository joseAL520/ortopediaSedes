import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, map, of } from "rxjs";
import { datosFormularioMock } from "./list-register.mock";
import { DatosFormulario } from "../interfaces/registrar";
import { environment } from "src/environments/environment";

/**
 * @description
 * @class
 */
@Injectable()
export class ListRegisterService {
  private datosSubject = new BehaviorSubject(datosFormularioMock);
  datos$ = this.datosSubject.asObservable();
  private apiUrl : string = environment.app.apiUrlBase;
  constructor(private http: HttpClient) { }

  getList(): Observable<any> {
   return this.http.get(`${this.apiUrl}/register.json`)
    
  }
  editData(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register.json`, data);
  }
  eliminarDato(numeroIdentificacion: number) {
    const datosActuales = this.datosSubject.value;
    const nuevosDatos = datosActuales.filter(dato => dato.numeroIdentificacion !== numeroIdentificacion);
    this.datosSubject.next(nuevosDatos);
  }

  registrar(data: DatosFormulario) {
    const datosActuales = this.datosSubject.value;
    const newData = [...datosActuales, data];
    this.datosSubject.next(newData);
  }

  editar(data: DatosFormulario) {
    this.eliminarDato(data.numeroIdentificacion);
    const datosActuales = this.datosSubject.value;
    const newData = [...datosActuales, data];
    this.datosSubject.next(newData);
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
