import { Component, OnInit } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EstudiantesService } from '../../core/services/estudiantes.service';
import { Estudiante } from '../../core/model/estudiante.model';

@Component({
  selector: 'app-estudiantes',
  imports: [Dialog, ButtonModule, InputTextModule, CommonModule, FormsModule],
  templateUrl: './estudiantes.component.html',
  styleUrl: './estudiantes.component.scss',
})
export default class EstudiantesComponent implements OnInit {
  visible: boolean = false;
  estudiantes: Estudiante[] = [];
  isModalOpen: boolean = false;
  periodo: string = '2025-10';
  curso: string = 'Seminario';
  cfp: string = 'Ayacucho';
  semestre: string = 'V';
  carrera: string = 'nose';

  nuevoEstudiante: Estudiante = {
    foto: 'https://res.cloudinary.com/dsadfgmfn/image/upload/v1745129247/descarga_cqtwkw.jpg',
    nombre: '',
    apellido: '',
    telefono: '',
    correo: '',
    cfp: '',
    semestre: '',
    carrera: '',
    curso: '',
    periodo: '',
  };

  showDialog() {
    this.visible = true;
  }

  constructor(private readonly estudianteService: EstudiantesService) {}

  ngOnInit() {
    this.loadEstudiantes();
  }

  loadEstudiantes() {
    this.estudianteService.getEstudiantes().subscribe((data) => {
      this.estudiantes = data;
    });
  }

  saveEstudiante(estudiante: Estudiante) {
    this.estudianteService.addEstudiante(estudiante).subscribe(() => {
      this.loadEstudiantes();

      this.nuevoEstudiante = {
        foto: 'https://res.cloudinary.com/dsadfgmfn/image/upload/v1745129247/descarga_cqtwkw.jpg',
        nombre: '',
        apellido: '',
        telefono: '',
        correo: '',
        cfp: '',
        semestre: '',
        carrera: '',
        curso: '',
        periodo: '',
      };
      this.visible = false;
    });
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.visible = false;
    this.nuevoEstudiante = {
      foto: 'https://res.cloudinary.com/dsadfgmfn/image/upload/v1745129247/descarga_cqtwkw.jpg',
      nombre: '',
      apellido: '',
      telefono: '',
      correo: '',
      cfp: '',
      semestre: '',
      carrera: '',
      curso: '',
      periodo: '',
    };
  }

  // saveEstudiante(estudiante: Estudiante) {
  //   this.dataService.addEstudiante(estudiante);
  //   this.estudiantes = this.dataService.getEstudiantes();
  //   this.closeModal();
  // }

  // importFromExcel() {
  //   this.dataService.importEstudiantesFromExcel();
  //   this.estudiantes = this.dataService.getEstudiantes();
  // }

  searchEstudiante() {
    // Simulación de búsqueda (puedes implementarla según necesites)
    console.log('Buscar estudiante');
  }
}
