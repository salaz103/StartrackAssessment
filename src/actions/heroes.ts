import {Heroe} from '../reducers/heroesReducer';

type SetHeroesAction = {
    type:"SET_HEROES",
    heroes:Heroe
}

const setHeroes=(Heroes:Heroe):SetHeroesAction=>({
    type:"SET_HEROES",
    heroes:Heroes
})