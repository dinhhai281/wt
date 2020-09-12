import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: 'gretting',
    loadChildren: () => import('./features/gretting').then(m => m.GrettingModule),
  },
  {
    path: 'posts',
    loadChildren: () => import('./features/posts').then(m => m.PostsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
