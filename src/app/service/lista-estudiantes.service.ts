import { Injectable } from '@angular/core';
import { Estudiante } from '../admin/estudiantes/estudiantes.component';

@Injectable({
  providedIn: 'root'
})
export class ListaEstudiantesService {

  estudiantes: Estudiante[] = [
    {
      id: 1,
      name: 'user',
      lastname:'noseque',
      telf:987654321,
      correo:'nose@gmail.com',
      curso:'Mecanica Automotriz'
    },
    {
      id: 2,
      name: 'anonimo',
      lastname:'null',
      telf:987654321,
      correo:'anonimo@gmail.com',
      curso:'Administracion'
    },
    {
      id: 3,
      name: 'test1',
      lastname:'nose1',
      telf:987654321,
      correo:'nose1@gmail.com',
      curso:'Electricista'
    },
    {
      id: 4,
      name: 'test2',
      lastname:'nose2',
      telf:123456789,
      correo:'nose2@gmail.com',
      curso:'Mecanica Automotriz'
    },
  ]

  getListaEstudiantes(){
    return this.estudiantes;
  }
}
