import { render } from '@testing-library/react';

import TestIcons from './test-icons';

describe('TestIcons', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TestIcons />);
    expect(baseElement).toBeTruthy();
  });
});
