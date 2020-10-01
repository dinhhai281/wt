import { Injectable } from '@angular/core';
import { User } from '@app/models';
import { ComponentStore } from '@ngrx/component-store';

export interface HeaderState {
  me: User;
  isOpenUserMenu: boolean;
}

@Injectable()
export class HeaderStore extends ComponentStore<HeaderState> {
  constructor() {
    super({ me: null, isOpenUserMenu: false });
  }

  readonly me$ = this.select(state => state.me);
  readonly isOpenUserMenu$ = this.select(state => state.isOpenUserMenu);
  readonly vm$ = this.select(this.me$, this.isOpenUserMenu$, (me, isOpenUserMenu) => ({
    me,
    isOpenUserMenu,
  }));

  readonly setMe = this.updater<User>((state, me) => ({
    ...state,
    me,
  }));
  readonly toggleUserMenu = this.updater<boolean>(state => ({
    ...state,
    isOpenUserMenu: !state.isOpenUserMenu,
  }));
}
