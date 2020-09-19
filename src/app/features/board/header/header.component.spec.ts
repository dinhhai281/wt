import { ComponentFixture, TestBed } from '@angular/core/testing';
import { render, RenderResult } from '@testing-library/angular';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: RenderResult<HeaderComponent>;

  beforeEach(async () => {
    component = await render(HeaderComponent);
  });

  it('should match snapshot', () => {
    expect(component.container).toMatchSnapshot();
  });
});
