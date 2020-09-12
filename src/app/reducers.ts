import { ActionReducerMap } from '@ngrx/store';
import * as fromPost from '@entity/post';

export interface State {
  posts: fromPost.PostEntityState;
}

export const reducers: ActionReducerMap<State> = {
  posts: fromPost.reducer,
};
