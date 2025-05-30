import { Component,OnInit,inject } from '@angular/core';
import { ListaEstudiantesService } from '../../service/lista-estudiantes.service';
import { NgClass } from '@angular/common';

export type Estudiante = {
  id: number,
  name: string,
  lastname: string,
  telf: number,
  correo: string,
  curso: string
}

@Component({
  selector: 'app-estudiantes',
  imports: [NgClass],
  templateUrl: './estudiantes.component.html',
  styleUrl: './estudiantes.component.scss',
  providers:[ListaEstudiantesService]

})
export default class EstudiantesComponent implements OnInit{

  estudiantes?:Estudiante[];

  constructor(private readonly listaestudianteService:ListaEstudiantesService){}

  async ngOnInit(){
    console.log('...ngOnInit');
    this.estudiantes = await this.listaestudianteService.getListaEstudiantes();
  }
}