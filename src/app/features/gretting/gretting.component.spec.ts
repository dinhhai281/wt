import { render, RenderResult } from '@testing-library/angular';

import { GrettingComponent } from './gretting.component';

describe('GrettingComponent', () => {
  let component: RenderResult<GrettingComponent>;

  beforeEach(async () => {
    component = await render(GrettingComponent);
  });

  it('should match snapshot', () => {
    expect(component.container).toMatchSnapshot();
  });
});
