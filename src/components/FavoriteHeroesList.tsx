import React, { useEffect, useState } from 'react';
import { connect, useSelector, RootStateOrAny, useDispatch } from 'react-redux';
import { FixedSizeList as List } from 'react-window';
import HeroeListItem from './HeroeListItem';
import '../styles.css'
import { rootReducer, RootState } from '../store/store';
import useCollapse from "react-collapsed";
import HeroesData from '../HeroesData/Heroes';

function FavoriteHeroesList() {
    const heroes: HeroesData[] = useSelector((state: RootState) => state.favorites.favoriteHeroes);
    const [ isExpanded, setExpanded ] = useState(false);
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

    function handleOnClick() {
        setExpanded(!isExpanded);
    }

    const Row = () => (

        <div className='list-grid'>
            {
                heroes.map((heroe) => {
                    return <HeroeListItem key={heroe.id} {...heroe} />
                })
            }
        </div>

    );

    return (
        /* <div className='list-grid'>
           <h1>Favorites heroes</h1>
             {
                 heroes.map((heroe) => {
                     return <HeroeListItem key={heroe.id} {...heroe} />
                 })
             }
         </div>*/
        <div className='content-container' >
            <div className='list-header'>
                <img src="/assets/small-heart/small-heart.svg" />
                <div>Liked</div>
                <img src='/assets/arrow-up/arrow-up.svg' {...getToggleProps({onClick: handleOnClick})} ></img>
            </div>
            <div className='list-body' {...getCollapseProps()} >
                <List
                    height={300}
                    itemCount={1}
                    itemSize={35}
                    width={800}
                >
                    {Row}

                </List>
            </div>
        </div>
    )
}


export default FavoriteHeroesList;