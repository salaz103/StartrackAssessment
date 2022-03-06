import { Dispatch } from 'redux';
import HeroesData from "../HeroesData/Heroes";


type SetHeroesAction = {
    type:"SET_HEROES",
    heroes:HeroesData
}

type RemoveHeroesAction ={
    type:"REMOVE_HEROE",
    hero:HeroesData
}

type AddFavorite={
    type:"ADD_FAVORITE",
    favoriteHeroe:HeroesData
}

export const setHeroes=(Heroes:HeroesData):SetHeroesAction=>({
    type:"SET_HEROES",
    heroes:Heroes
})


export const removeHeroe=(HeroeId:HeroesData):RemoveHeroesAction=>({
    type:"REMOVE_HEROE",
    hero:HeroeId
})


export const addFavoriteHeroe=(Heroe:HeroesData):AddFavorite=>({
    type:"ADD_FAVORITE",
    favoriteHeroe:Heroe
})

export const StartremoveHeroe = (heroe:HeroesData) => {
    return (dispatch:Dispatch) => {
            dispatch(removeHeroe(heroe));
            dispatch(addFavoriteHeroe(heroe))
    };
};



