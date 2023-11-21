import { DatosFormulario } from "../interfaces/registrar";

export const datosFormularioMock: DatosFormulario[] = [
  {
    numeroIdentificacion: 123456789,
    nombres: 'John',
    apellidos: 'Doe',
    genero: 1,
    numeroCelular: 987654321,
    diagnostico: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    numeroIdentificacion: 987654321,
    nombres: 'Jane',
    apellidos: 'Doe',
    genero: 2,
    numeroCelular: 123456789,
    diagnostico: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    numeroIdentificacion: 555555555,
    nombres: 'Alice',
    apellidos: 'Smith',
    genero: 2,
    numeroCelular: 111111111,
    diagnostico: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    numeroIdentificacion: 999888777,
    nombres: 'Bob',
    apellidos: 'Johnson',
    genero: 1,
    numeroCelular: 333444555,
    diagnostico: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  }
];
