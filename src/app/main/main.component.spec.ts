import { render, RenderResult } from '@testing-library/angular';

import { MainComponent } from './main.component';

describe('MainComponent', () => {
  let component: RenderResult<MainComponent>;

  beforeEach(async () => {
    component = await render(MainComponent);
  });

  it('should match snapshot', () => {
    const { container } = component;
    expect(container).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { getByTestId } = component;
    expect(getByTestId('test-hello').textContent).toEqual('Hello World');
  });
});
