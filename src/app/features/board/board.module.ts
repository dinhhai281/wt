import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';

import { BoardRoutingModule } from './board-routing.module';
import { BoardComponent } from './board.component';
import { HeaderComponent } from './header/header.component';
import { UserAvatarPipe } from './pipes/user-avatar.pipe';

@NgModule({
  declarations: [BoardComponent, HeaderComponent, UserAvatarPipe],
  imports: [CommonModule, BoardRoutingModule, MatBadgeModule, MatIconModule, OverlayModule],
})
export class BoardModule {}
