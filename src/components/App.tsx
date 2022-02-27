import React from 'react';
import FavoriteHeroesList from './FavoriteHeroesList';
import HeroesList from './HeroesList';

function App() {
  return (
    <div>
      <h2>All Heroes</h2>
      <FavoriteHeroesList/>
      <HeroesList />
    </div>
  );
}

export default App;
