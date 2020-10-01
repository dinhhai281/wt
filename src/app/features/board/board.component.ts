import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { fromAuth } from '@store/reducers';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardComponent implements OnInit {
  me$ = this.store.pipe(select(fromAuth.selectMe));

  ngOnInit(): void {}

  constructor(private store: Store) {}
}
