import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { PageOneComponent } from './pageone.component';
export const appRoutes:Routes=[
  { path: '', component: PageOneComponent},
  { path: '/lazy', loadChildren: './my.module#MyModule'}
];
export const lazyRoutes:ModuleWithProviders=RouterModule.forRoot(appRoutes);