import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

// import Overview from '../client/src/components/Overview/index';
// import App from 'client/src/components/App.jsx'


// describe('Overview', () => {
//   it('renders the product overview', () => {
//     const { getByTestId } = render(<ProductOverview productID={65631} />);

//     expect(getByTestId('Overview')).toBeInTheDocument();
//   });
// });

// test('main app renders', () => {
//   render(<App />);
// })

test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});