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
    path: '',
    component: ContentLayoutComponent,
    canActivateChild: [AuthGuardService],
    children: [
      {
        path: 'management',
        canActivate: [AdminGuardService],
        loadChildren: () =>
          import('./modules/management/management.module').then(m => m.ManagementModule)
      },
      {
        path: 'student',
        loadChildren: () =>
          import('./modules/student/student.module').then(m => m.StudentModule)
      },
      {
        path:'user',
        loadChildren: () =>
          import('./modules/user/user.module').then(m => m.UserModule)
      }

    ]
  },
  {
    path: 'auth',
    component: ContentLayoutComponent,
    canActivate: [AuthGuardService],
    loadChildren: () =>
      import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  { path: '**', redirectTo: '/auth/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
