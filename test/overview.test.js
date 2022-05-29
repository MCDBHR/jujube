import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import Overview from 'components/Overview/index';

afterEach(cleanup);

describe('Overview', () => {
  it('renders the product overview', () => {
    const { getByTestId } = render(<ProductOverview productID={65631} />);

    expect(getByTestId('Overview')).toBeInTheDocument();
  });
});