import { Component, OnInit } from '@angular/core';
import { DataService, Derivacion } from '../../core/services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ver-derivaciones',
  imports: [CommonModule],
  templateUrl: './ver-derivaciones.component.html',
  styleUrl: './ver-derivaciones.component.scss'
})
export default class VerDerivacionesComponent implements OnInit {
  derivaciones : Derivacion[]=[];

  constructor(private dataService: DataService) { }

  ngOnInit(){
    this.derivaciones = this.dataService.getDerivaciones();
  }


}
