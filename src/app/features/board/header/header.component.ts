import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { User } from '@app/models';
import { HeaderStore } from './header.store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [HeaderStore],
})
export class HeaderComponent implements OnInit {
  @Input()
  set me(value: User) {
    this.state.setMe(value);
  }

  ngOnInit() {}

  constructor(public readonly state: HeaderStore) {}
}
