import HeroesData from "../HeroesData/Heroes";

export interface favoritesState {
    favoriteHeroes: HeroesData[]
}


const defaultState = {
    favoriteHeroes:[]
}


export const favoritesReducer = (state:favoritesState = defaultState, action:any) => {
    switch (action.type) {
        case "ADD_FAVORITE_HEROE":
            return {...state, favoritesHeroes:[...state.favoriteHeroes, action.heroe]}
        default:
            return state;
    }

}