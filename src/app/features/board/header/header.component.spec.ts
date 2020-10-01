import { OverlayModule } from '@angular/cdk/overlay';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { FakeMatIconRegistry } from '@angular/material/icon/testing';
import { render, RenderResult } from '@testing-library/angular';

import { UserAvatarPipe } from '../pipes/user-avatar.pipe';
import { HeaderComponent } from './header.component';
import { HeaderStore } from './header.store';

describe('HeaderComponent', () => {
  let component: RenderResult<HeaderComponent>;

  beforeEach(async () => {
    component = await render(HeaderComponent, {
      declarations: [UserAvatarPipe],
      imports: [MatIconModule, OverlayModule],
      providers: [{ provide: MatIconRegistry, useClass: FakeMatIconRegistry }, HeaderStore],
    });
  });

  it('should match snapshot', () => {
    expect(component.container).toMatchSnapshot();
  });
});
