
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-historial',
  imports: [FormsModule],
  templateUrl: './historial.component.html',
  styleUrl: './historial.component.scss',
})
export default class HistorialComponent {
  searchTerm = '';
  tarjetas = [
    { id: 1, contenido: 'Derivación 1', visible: false },
    { id: 2, contenido: 'Otra derivación', visible: false },
    { id: 3, contenido: 'Ejemplo', visible: false },
  ];

  toggleDetails(tarjeta: any) {
    tarjeta.visible = !tarjeta.visible;
  }

  get derivacionesFiltradas() {
    return this.tarjetas.filter((t) =>
      t.contenido.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
