import { render } from '@testing-library/react';

import TestCore from './test-core';

describe('TestCore', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TestCore />);
    expect(baseElement).toBeTruthy();
  });
});
