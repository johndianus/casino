'use client';

import GameComponent from '@/components/Game';
import SearchComponent from '@/components/Search';
import { useState } from 'react';
import { games } from './data';
import { Game } from '@/app/models/game';

const Home = () => {
  const [searchValue, setSearchValue] = useState<string>('');

  // Filter the Games bases on the Search Value
  const filteredGames: Game[] = games.filter((game: Game) =>
    game.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <main style={{ padding: '20px' }} data-testid="home-page">
      <SearchComponent
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <GameComponent games={filteredGames} />
    </main>
  );
};

export default Home;
