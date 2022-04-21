import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentLayoutComponent } from "./layout/content-layout/content-layout.component";

import { AuthGuardService, AdminGuardService } from './service/auth-guard.service';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    component: ContentLayoutComponent,
    canActivate: [AuthGuardService],
    loadChildren: () =>
      import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '',
    component: ContentLayoutComponent,
    canActivateChild: [AuthGuardService],
    children: [


    ]
  },
  { path: '**', redirectTo: '/auth/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
