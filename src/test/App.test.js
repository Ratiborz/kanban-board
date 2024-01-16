import { render, screen } from '@testing-library/react';
import Header from '../components/Header/Header.tsx';

test('renders learn react link', () => {
  render(<Header />);
  const linkElement = screen.getByTitle(/ Awesome Kanban Board/i);
  expect(linkElement).toBeInTheDocument();
});
