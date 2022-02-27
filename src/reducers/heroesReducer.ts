import HeroesData from "../HeroesData/Heroes";

export interface HeroesState {
    heroes: HeroesData[]
}


const defaultState = {
    heroes:[],
    favoriteHeroes:[],
}


export const heroesReducer = (state:HeroesState = defaultState, action:any) => {
    switch (action.type) {
        case "ADD_HEROE":
            return {...state, heroes:[...state.heroes, action.heroes]}
        case "SET_HEROES":
            return {heroes:action.heroes}
        case "SET_TEXT_FILTER":
            return {...state,texto:action.filtert}
        default:
            return state;
    }

}