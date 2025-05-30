import { Component,OnInit,inject } from '@angular/core';
import { ListaDocentesService } from '../../service/lista-docentes.service';
import { NgClass } from '@angular/common';

export type Docente = {
  id: number,
  name: string,
  lastname: string,
  telf: number,
  correo: string,
  curso: string
}

@Component({
  selector: 'app-docentes',
  imports: [NgClass],
  templateUrl: './docentes.component.html',
  styleUrl: './docentes.component.scss',
  providers:[ListaDocentesService]
})
export class DocentesComponent implements OnInit{

  docentes?: Docente[];

  constructor(private readonly listadocenteService: ListaDocentesService){}

  async ngOnInit(){
    console.log('...ngOnInit');
    this.docentes = await this.listadocenteService.getDocentes(); 
  }
}
