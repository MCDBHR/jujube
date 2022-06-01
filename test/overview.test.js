import React from 'react';
<<<<<<< HEAD
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

// import Overview from '../client/src/components/Overview/index';
import App from '../client/src/components/App.jsx'



test('test render', () => {
  const { getByText } = render(<App />);
  expect(getByText('The Jonas Brothers')).toBeTruthy();
=======
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import Overview from 'components/Overview/index';

afterEach(cleanup);

describe('Overview', () => {
  it('renders the product overview', () => {
    const { getByTestId } = render(<ProductOverview productID={65631} />);

    expect(getByTestId('Overview')).toBeInTheDocument();
  });
>>>>>>> main
});