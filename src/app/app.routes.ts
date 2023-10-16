import { Routes } from '@angular/router';
import { loginGuard } from './guards/login-guard.service';
import { authGuard } from './guards/auth-guard.service';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'ingreso',
    loadComponent: () => import('./pages/ingreso/ingreso.page').then( m => m.IngresoPage),
    canActivate: [loginGuard]
  },

  {
    path: 'home',
    loadChildren: () => import('./pages/home/tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [authGuard]
  },
  
  {
    path: 'correo',
    loadChildren: () => import('./pages/login/correo/correo.module').then( m => m.CorreoPageModule)
  },
  {
    path: 'login/pregunta/pregunta/:email',
    loadChildren: () => import('./pages/login/pregunta/pregunta/pregunta.module').then(m => m.PreguntaPageModule)
  },
  {
    path: 'correcto/:email',
    loadChildren: () => import('./pages/login/correcto/correcto.module').then( m => m.CorrectoPageModule)
  },
  {
    path: 'incorrecto',
    loadChildren: () => import('./pages/login/incorrecto/incorrecto.module').then( m => m.IncorrectoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/ingreso/ingreso.module').then( m => m.IngresoPageModule)
  }
];
