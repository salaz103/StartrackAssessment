import HeroesData from "../HeroesData/Heroes";

type SetHeroesAction = {
    type:"SET_HEROES",
    heroes:HeroesData
}


export const setHeroes=(Heroes:HeroesData):SetHeroesAction=>({
    type:"SET_HEROES",
    heroes:Heroes
})


export const removeHeroe=(Heroe:HeroesData):SetHeroesAction=>({
    type:"SET_HEROES",
    heroes:Heroe
})
