import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
      path: '',
      redirectTo: '/meeting-list',
      pathMatch: 'full'
  }
];
export const AppRoutesModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);

