import { Component } from '@angular/core';
import { TablasDerivacionesComponent } from "../../components/tablas-derivaciones/tablas-derivaciones.component";



@Component({
  selector: 'app-historial',
  imports: [TablasDerivacionesComponent],
  templateUrl: './historial.component.html',
  styleUrl: './historial.component.scss'
})
export default class HistorialComponent {

}
