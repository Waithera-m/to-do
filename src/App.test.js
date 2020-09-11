import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders welcome message', () => {
  const { getByText } = render(<App />);
  const welcomeMessage = getByText(/Welcome to the Listify, the site that simplifies to do lists/i);
  expect(welcomeMessage).toBeInTheDocument();
});


test('component renders without crashing', () => {
  const div = document.createElement('div');
  render(<App />, div);
});
