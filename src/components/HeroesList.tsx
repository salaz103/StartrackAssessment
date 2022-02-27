import React from 'react';
import { connect, useSelector } from 'react-redux';
import HeroesData from '../HeroesData/Heroes';
import { HeroesState } from '../reducers/heroesReducer';
import HeroeListItem from './HeroeListItem';


function HeroesList(){
   const heroes = useSelector<HeroesState, HeroesState["heroes"]>((state)=> state.heroes)
   console.log(heroes);

    return(
        <div>
            <ul>
                {
                   heroes.map((heroe)=>{
                       return <img src={heroe.images.xs}></img>
                   })
                }
            </ul>
        </div>
    )
}


export default HeroesList;