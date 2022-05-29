import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

// import Overview from '../client/src/components/Overview/index';
import App from '../client/src/components/App.jsx'



test('test render', () => {
  const { getByText } = render(<App />);
  expect(getByText('The Jonas Brothers')).toBeTruthy();
});