import { Component, OnInit } from '@angular/core';
import { DataService, Estudiante } from '../../core/services/data.service';

import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-estudiantes',
  imports: [Dialog, ButtonModule, InputTextModule, CommonModule, FormsModule],
  templateUrl: './estudiantes.component.html',
  styleUrl: './estudiantes.component.scss'
})
export default class EstudiantesComponent implements OnInit {

  visible: boolean = false;
  showDialog() {
    this.visible = true;
}

  estudiantes: Estudiante[] = [];
  isModalOpen: boolean = false;
  periodo: string = '2025-10';
  curso: string = 'Seminario';
  cfp: string = 'Ayacucho';
  semestre: string = 'V';
  carrera: string = 'nose';

  constructor(
    private dataService:DataService
  ) {}

  ngOnInit() {
    this.estudiantes = this.dataService.getEstudiantes();
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  saveEstudiante(estudiante: Estudiante) {
    this.dataService.addEstudiante(estudiante);
    this.estudiantes = this.dataService.getEstudiantes();
    this.closeModal();
  }

  importFromExcel() {
    this.dataService.importEstudiantesFromExcel();
    this.estudiantes = this.dataService.getEstudiantes();
  }

  searchEstudiante() {
    // Simulación de búsqueda (puedes implementarla según necesites)
    console.log('Buscar estudiante');
  }


}
