import { Component, OnInit } from '@angular/core';
import { HistorialDerivacionService } from '../../service/historial-derivacion.service';


export type Historial = {
  id: number,
  title: string,
  motivo: string,
  answer: string,
  derivator: string,
  time: string
}

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  providers:[HistorialDerivacionService]
})
export default class DashboardComponent implements OnInit{

  historial?:Historial[];

  constructor(private readonly historialService:HistorialDerivacionService){}

  async ngOnInit(){
    console.log('...ngOnInit')
    this.historial = await this.historialService.getHistorial();
  }
}
