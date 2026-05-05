import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders the shopping app title', () => {
  // Using createElement instead of <App /> prevents the token error
  render(React.createElement(App));
  
  const linkElement = screen.getByText(/Shopping App/i);
  expect(linkElement).toBeInTheDocument();
});