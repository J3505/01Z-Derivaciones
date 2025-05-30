import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Dialog } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { DerivacionItems } from '../../service/derivacion-items.service';

export type Derivacion = {
  id: number,
  imagen: string,
  estudiante: string,
  curso: string,
  profesor: string,
  fecha: string,
  estado: string,
  motivo: string,
  rpta: string,
}

@Component({
  selector: 'app-derivacion',
  imports: [Dialog, ButtonModule, InputTextModule, CommonModule, FormsModule],
  templateUrl: './derivacion.component.html',
  styleUrl: './derivacion.component.scss'
})
export default class DerivacionComponent implements OnInit{

  derivacion?:Derivacion[];
  
  constructor(private readonly derivacionService: DerivacionItems){}

  async ngOnInit(){
    console.log('...ngOnInit');
    this.derivacion = await this.derivacionService.getDerivacion();
  }

  visible: boolean = false;
  showDialog() {
    this.visible = true;
}

}
