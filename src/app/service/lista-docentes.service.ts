import { Injectable } from '@angular/core';
import { Docente } from '../admin/docentes/docentes.component';

@Injectable({
  providedIn: 'root'
})
export class ListaDocentesService {

  estudiantes: Docente[] = [
    {
      id: 1,
      name: 'user',
      lastname:'noseque',
      telf:987654321,
      correo:'nose@gmail.com',
      curso:'Mecanica Automotriz',
    },
    {
      id: 2,
      name: 'user1',
      lastname:'noseque1',
      telf:987654321,
      correo:'nose1@gmail.com',
      curso:'Aministracion',
    },
    {
      id: 3,
      name: 'user2',
      lastname:'noseque2',
      telf:987654321,
      correo:'nose2@gmail.com',
      curso:'Aministracion',
    },
    {
      id: 4,
      name: 'user3',
      lastname:'noseque3',
      telf:987654321,
      correo:'nose3@gmail.com',
      curso:'Nose',
    }
  ]

  getDocentes(){
    return this.estudiantes;
  }
  
}
