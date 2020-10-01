import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    loadChildren: () => import('./features/login').then(m => m.LoginModule),
    canActivate: [LoginGuard],
  },
  {
    path: 'posts',
    loadChildren: () => import('./features/posts').then(m => m.PostsModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'board',
    loadChildren: () => import('./features/board').then(m => m.BoardModule),
    // canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
