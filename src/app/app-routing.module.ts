import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'aktuality', data: { title: 'TOP 09 ÚVALY' }, loadChildren: () => import('./pages/aktuality/aktuality.module').then(m => m.AktualityModule) },
  { path: 'program', data: { title: 'TOP 09 ÚVALY' }, loadChildren: () => import('./pages/program/program.module').then(m => m.ProgramModule) },
  { path: 'doma', data: { title: 'TOP 09 ÚVALY' }, loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'lide', data: { title: 'TOP 09 ÚVALY' }, loadChildren: () => import('./pages/people/people.module').then(m => m.PeopleModule) },
  { path: '', data: { title: 'TOP 09 ÚVALY' }, loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
