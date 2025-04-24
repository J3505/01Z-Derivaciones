import { Routes } from '@angular/router';

export const ADMIN_ROUTES: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadComponent: () => import('../admin/dashboard/dashboard.component'),
  },
  {
    path: 'derivacion',
    loadComponent: () => import('../admin/derivacion/derivacion.component'),
  },
  {
    path: 'estudiantes',
    loadComponent: () => import('../admin/estudiantes/estudiantes.component'),
  },
];
