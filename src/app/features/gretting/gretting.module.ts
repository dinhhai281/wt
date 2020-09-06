import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GrettingRoutingModule } from './gretting-routing.module';

import { GrettingComponent } from './gretting.component';

@NgModule({
  declarations: [...GrettingRoutingModule.components],
  imports: [CommonModule, GrettingRoutingModule],
})
export class GrettingModule {}
