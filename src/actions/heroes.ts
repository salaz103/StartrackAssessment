import HeroesData from "../HeroesData/Heroes";

type SetHeroesAction = {
    type:"SET_HEROES",
    heroes:HeroesData
}

type RemoveHeroesAction ={
    type:"REMOVE_HEROE",
    hero:HeroesData
}

export const setHeroes=(Heroes:HeroesData):SetHeroesAction=>({
    type:"SET_HEROES",
    heroes:Heroes
})


export const removeHeroe=(Heroe:HeroesData):RemoveHeroesAction=>({
    type:"REMOVE_HEROE",
    hero:Heroe
})
