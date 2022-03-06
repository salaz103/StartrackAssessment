import HeroesData from "../HeroesData/Heroes";

export interface favoritesState {
    favoriteHeroes: HeroesData[]
}


const defaultState = {
    favoriteHeroes:[]
}


export const favoritesReducer = (state:favoritesState = defaultState, action:any) => {
    switch (action.type) {
        case "ADD_FAVORITE":
            return {...state, favoriteHeroes:[...state.favoriteHeroes, action.favoriteHeroe]}
        default:
            return state;
    }

}