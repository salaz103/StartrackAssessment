import React, { useState } from 'react';
import { connect, useSelector, RootStateOrAny, useDispatch } from 'react-redux';
import { FixedSizeList as List } from 'react-window';
import { setText } from '../actions/filters';
import HeroeListItem from './HeroeListItem';
import '../styles.css'
import { rootReducer, RootState } from '../store/store';
import getVisibleHeroes from '../selector/heroes';
import HeroesData from '../HeroesData/Heroes';

function HeroesList() {
    const heroes:HeroesData[] = useSelector((state: RootState) => state.heroes.heroes);
    const searchText:string= useSelector((state:RootState)=>state.filters.searchText);
    const finalHeroes = getVisibleHeroes(heroes,searchText);

    return (
        <div className='list-grid'>
            {
                finalHeroes.map((heroe) => {
                    return <HeroeListItem key={heroe.id} {...heroe} />
                })
            }
        </div>
    )
}


export default HeroesList;