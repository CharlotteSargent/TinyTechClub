import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'outreach',
    pathMatch: 'full'
  },
  {
    path: 'outreach',
    loadChildren: () => import('./pages/outreach/outreach.module').then( m => m.OutreachPageModule)
  },
  {
    path: 'careers',
    loadChildren: () => import('./pages/careers/careers.module').then( m => m.CareersPageModule)
  },
  {
    path: 'overview',
    loadChildren: () => import('./pages/careers/careers.module').then( m => m.CareersPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/careers/careers.module').then( m => m.CareersPageModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./pages/careers/careers.module').then( m => m.CareersPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
