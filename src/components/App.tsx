import React from 'react';
import FavoriteHeroesList from './FavoriteHeroesList';
import Header from './Header';
import HeroesFilter from './HeroesFilter';
import HeroesList from './HeroesList';

function App() {
  return (
    <div>
      <Header/>
      <FavoriteHeroesList/>
      <HeroesFilter/>
      <HeroesList />
    </div>
  );
}

export default App;
