import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardRoutingModule } from './board-routing.module';
import { BoardComponent } from './board.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [BoardComponent, HeaderComponent],
  imports: [CommonModule, BoardRoutingModule],
})
export class BoardModule {}
