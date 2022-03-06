import React from 'react';
import FavoriteHeroesList from './FavoriteHeroesList';
import HeroesFilter from './HeroesFilter';
import HeroesList from './HeroesList';

function App() {
  return (
    <div>
      <h2>All Heroes</h2>
      <FavoriteHeroesList/>
      <HeroesFilter/>
      <HeroesList />
    </div>
  );
}

export default App;
