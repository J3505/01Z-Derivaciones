import { Routes } from '@angular/router';

export const PROFESOR_ROUTES: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  {
    path: 'inicio',
    loadComponent: () => import('../profesor/inicio/inicio.component'),
  },
  {
    path: 'estudiantes',
    loadComponent: () =>
      import('../profesor/estudiantes/estudiantes.component'),
  },
  {
    path: 'derivaciones',
    loadComponent: () =>
      import('../profesor/derivaciones/derivaciones.component'),
  },
  // falta el componente de id:derivaciones
  {
    path: 'historial',
    loadComponent: () => import('../profesor/historial/historial.component'),
  },
];
