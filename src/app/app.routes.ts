import { Routes } from '@angular/router';

import { ROUTES } from '@constants/routes.constants';

import { HomeComponent } from './views/home/home.component';

export const appRoutes: Routes = [
  {
    path: ROUTES.HOME,
    component: HomeComponent
  },
  {
    path: '**',
    redirectTo: ROUTES.HOME,
    pathMatch: 'full'
  }
];
