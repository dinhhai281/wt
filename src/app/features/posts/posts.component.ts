import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { State } from '@app/reducers';
import { fetchPosts, PostEntitySelector, selectPost } from '@entity/post';
import { select, Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsComponent implements OnInit {
  posts$ = this.store.pipe(select(PostEntitySelector.selectAllPosts));
  selectedPost$ = this.store.pipe(select(PostEntitySelector.selectCurrentPost));

  vm$ = combineLatest([this.posts$, this.selectedPost$]).pipe(
    map(([posts, selectedPost]) => ({ posts, selectedPost })),
  );

  ngOnInit() {
    this.store.dispatch(fetchPosts());
  }

  onSelectPost = (postId: number) => {
    this.store.dispatch(selectPost({ id: postId }));
  };

  constructor(private store: Store<State>) {}
}
