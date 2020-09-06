import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GrettingComponent } from './gretting.component';

const routes: Routes = [{ path: '', component: GrettingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GrettingRoutingModule {
  static components = [GrettingComponent];
}
