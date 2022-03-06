import React, { useEffect, useState } from 'react';
import { connect, useSelector, RootStateOrAny, useDispatch } from 'react-redux';
import { FixedSizeList as List } from 'react-window';
import HeroeListItem from './HeroeListItem';
import '../styles.css'
import { rootReducer, RootState } from '../store/store';
import HeroesData from '../HeroesData/Heroes';

function FavoriteHeroesList() {

    const heroes:HeroesData[] = useSelector((state: RootState) => state.favorites.favoriteHeroes);

    return (
        <div className='list-grid'>
          <h1>Favorites heroes</h1>
            {
                heroes.map((heroe) => {
                    return <HeroeListItem key={heroe.id} {...heroe} />
                })
            }
        </div>
    )
}


export default FavoriteHeroesList;