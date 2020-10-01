import { User } from '@app/models';
import { Action, createReducer, on } from '@ngrx/store';

import { login, loginFailure, loginSuccess } from './auth.action';

export const AUTH_FEATURE_KEY = 'auth';

export interface AuthState {
  me: User;
  token: string;
  loading: boolean;
  error: string;
}

const initialState: AuthState = {
  me: undefined,
  token: undefined,
  loading: false,
  error: undefined,
};

const _authReducer = createReducer(
  initialState,
  on(login, state => ({ ...state, loading: true })),
  on(loginSuccess, (state, { user, token }) => ({ ...state, loading: false, user, token })),
  on(loginFailure, (state, { error }) => ({ ...state, loading: false, error })),
);

export function reducer(state: AuthState | undefined, action: Action) {
  return _authReducer(state, action);
}
