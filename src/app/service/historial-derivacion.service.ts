import { Historial } from '../admin/dashboard/dashboard.component';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistorialDerivacionService {

  historial: Historial[]=[
        {
            id:1,
            title:'Derivacion a Bienestar Estudiantil',
            motivo:'Problemas de asistencia recurrentes y bajo rendimiento académico en las últimas semanas.',
            answer:'Ese estudiante es malisimo saquenlo de ahi XD',
            derivator:'Anonimo',
            time:'Hace 15 minutos'
        },

        {
            id:2,
            title:'Derivación a Orientación Vocacional',
            motivo:'Dudas sobre continuidad en la carrera y posibles cambios de programa.',
            answer:'Que hace pensando la taradupida esa que se cambie de una vez',
            derivator:'Anonimo',
            time:'Hace 1 hora'
        },

        {
            id:3,
            title:'Derivación a Asuntos Academicos',
            motivo:'Solicitud de revisión de situación académica por problemas familiares que afectan rendimiento',
            answer:'5mentarios',
            derivator:'Anonimo',
            time:'Hace 3 hora'
        },

        {
            id:4,
            title:'Derivación a Asuntos Academicos',
            motivo:'Solicitud de revisión de situación académica por problemas familiares que afectan rendimiento',
            answer:'5mentarios',
            derivator:'Anonimo',
            time:'Hace 3 hora'
        },
    ]

    getHistorial(){
      return this.historial;
    }
}
