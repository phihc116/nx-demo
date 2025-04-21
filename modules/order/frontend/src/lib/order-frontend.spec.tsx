import { render } from '@testing-library/react';

import OrderFrontend from './order-frontend';

describe('OrderFrontend', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OrderFrontend />);
    expect(baseElement).toBeTruthy();
  });
});
