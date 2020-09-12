import { ActionReducerMap } from '@ngrx/store';
import * as fromPost from '@store/entities/post';
import * as fromAuth from '@store/application/auth';

export interface State {
  [fromPost.POST_FEATURE_KEY]: fromPost.PostEntityState;
  [fromAuth.AUTH_FEATURE_KEY]: fromAuth.AuthState;
}

export { fromPost, fromAuth };
