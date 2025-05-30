import { Injectable } from "@angular/core";
import { Derivacion } from "../admin/derivacion/derivacion.component";

@Injectable({
  providedIn: 'root'
})

export class DerivacionItems {
    derivacion: Derivacion[]=[
        {
            id:125,
            imagen:'https://i.pinimg.com/736x/73/ce/7d/73ce7d2666204edceb3594eb192ceae0.jpg',
            estudiante:'Maria Lopez',
            curso:'Administracion',
            profesor:'Prof.Gonzalez',
            fecha:'15/06/2025',
            estado: '<i class="fas fa-exclamation-circle mr-1"></i> Urgente',
            motivo:'El estudiante ha mostrado dificultades significativas en la comprensión de los conceptos básicos del curso. Además, ha faltado a varias clases sin justificación y no ha entregado los últimos 3 trabajos asignados.',
            rpta:'Considero que el estudiante necesita apoyo adicional para ponerse al día con el material del curso. Sería beneficioso un plan de tutoría personalizada.',
        },
        {
            id:124,
            imagen:'https://i.pinimg.com/736x/73/ce/7d/73ce7d2666204edceb3594eb192ceae0.jpg',
            estudiante:'Julia Martinez',
            curso:'Mecanica Automotriz',
            profesor:'Prof.Martinez',
            fecha:'14/06/2025',
            estado: '<i class="fas fa-clock mr-1"></i> Pendiente',
            motivo:'El estudiante ha mostrado dificultades significativas en la comprensión de los conceptos básicos del curso. Además, ha faltado a varias clases sin justificación y no ha entregado los últimos 3 trabajos asignados.',
            rpta:'Considero que el estudiante necesita apoyo adicional para ponerse al día con el material del curso. Sería beneficioso un plan de tutoría personalizada.',
        },   
        {
            id:123,
            imagen:'https://randomuser.me/api/portraits/women/63.jpg',
            estudiante:'Ana Garcia',
            curso:'Cocinar',
            profesor:'Prof.TuMama',
            fecha:'12/06/2025',
            estado: '<i class="fas fa-check-circle mr-1"></i> Atendida',
            motivo:'El estudiante ha mostrado dificultades significativas en la comprensión de los conceptos básicos del curso. Además, ha faltado a varias clases sin justificación y no ha entregado los últimos 3 trabajos asignados.',
            rpta:'Considero que el estudiante necesita apoyo adicional para ponerse al día con el material del curso. Sería beneficioso un plan de tutoría personalizada.',
        },      

    ]

    getDerivacion(){
        return this.derivacion;
    }
}