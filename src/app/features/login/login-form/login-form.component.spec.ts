import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { render, RenderResult } from '@testing-library/angular';

import { LoginFormComponent } from './login-form.component';

describe('LoginFormComponent', () => {
  let component: RenderResult<LoginFormComponent>;

  beforeEach(async () => {
    component = await render(LoginFormComponent, {
      imports: [ReactiveFormsModule],
    });
  });

  it('should match snapshot', () => {
    expect(component.container).toMatchSnapshot();
  });
});
