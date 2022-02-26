
export interface Heroe {
      id:number;
      name:string;
      intelligence: number;
      strength: number;
      speed: number;
      durability: number;
      power: number;
      combat: number;
      xs:string;
}

const defaultState: Heroe []= [];

//ACTIONS
type Action = {
    type:"ADD_HEROE",
    heroe:Heroe
}

export const heroesReducer = (state = defaultState, action:any) => {
    switch (action.type) {
        case "ADD_HEROE":
            return [...state,action.heroe]
        case "SET_HEROES":
            return action.heroes
        default:
            return state;
    }

}