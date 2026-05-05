import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders the shopping app title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Shopping App/i);
  expect(linkElement).toBeInTheDocument();
});