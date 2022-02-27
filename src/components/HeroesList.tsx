import React, { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { HeroesState } from '../reducers/heroesReducer';
import getVisibleHeroes from '../selector/heroes';
import HeroeListItem from './HeroeListItem';


function HeroesList() {
    const [searchTerm,setSearchTerm]= useState("");
    const heroes = useSelector<HeroesState, HeroesState["heroes"]>((state) => state.heroes)
    //const finalHeroes= getVisibleHeroes(heroes,filter);

    return (
        <div>
            <input
            type="text"
            placeholder='Look for more Heroes'
            onChange={(event)=>{
                setSearchTerm(event.target.value)
            }}
            />
            <ul>
                {

                    heroes.filter((val)=>{
                        if(searchTerm==""){
                            return val
                        }else if(val.name.toLocaleLowerCase().includes(searchTerm.toLowerCase())){
                            return val
                        }
                    }).map((heroe) => {
                        return <HeroeListItem key={heroe.id} {...heroe} />
                    })
                }
            </ul>
        </div>
    )
}


export default HeroesList;