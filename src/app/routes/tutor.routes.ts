import { Routes } from '@angular/router';

export const TUTOR_ROUTES: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  {
    path: 'inicio',
    loadComponent: () => import('../tutor/inicio/inicio.component'),
  },
  {
    path: 'ver-derivaciones',
    loadComponent: () => import ('../tutor/ver-derivaciones/ver-derivaciones.component'),
  },
  {
    path: 'historial',
    loadComponent: () => import ('../tutor/historial/historial.component'),
  }
];
