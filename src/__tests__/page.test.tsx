import { render, screen, fireEvent } from '@testing-library/react';
import Page from '../app/page'
import { games } from '@/app/data';
import '@testing-library/jest-dom';


describe('Test on Page', () => {
  test('renders correctly and filters games based on search input', () => {
    render(<Page />);

    const homePage = screen.getByTestId('home-page');
    expect(homePage).toBeInTheDocument();

    const searchInput = screen.getByRole('textbox');
    expect(searchInput).toBeInTheDocument();

    games.forEach((game) => {
      expect(screen.getByTestId(`game-${game.id}`)).toBeInTheDocument();
    });

    fireEvent.change(searchInput, { target: { value: 'viking' } });

    const filteredGames = games.filter((game) =>
      game.name.toLowerCase().includes('viking'.toLowerCase())
    );

    filteredGames.forEach((game) => {
      expect(screen.getByTestId(`game-${game.id}`)).toBeInTheDocument();
    });
  });
});
