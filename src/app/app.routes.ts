import { Routes } from '@angular/router';
import { PROFESOR_ROUTES } from './routes/profesor.routes';
import { TUTOR_ROUTES } from './routes/tutor.routes';
import { ADMIN_ROUTES } from './routes/admin.routes';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () => import('./auth/login/login.component'),
  },
  {
    path: 'admin',
    loadComponent: ()=>import('./layout/admin/layout-admin/layout-admin.component'),
    children: ADMIN_ROUTES,
  },
  {
    path: 'profesor',
    loadComponent: () => import('./layout/profesor/layout-profesor/layout-profesor.component'),
    children: PROFESOR_ROUTES,
  },
  {
    path: 'tutor',
    loadComponent: () => import('./layout/tutor/layout-tutor/layout-tutor.component'),
    children: TUTOR_ROUTES,
  },
  { path: '**', redirectTo: 'login' },
];
