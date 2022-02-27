export interface Powerstats{
      intelligence: number,
      strength: number,
      speed: number,
      durability: number,
      power: number,
      combat: number
}

export interface Images{
      xs: string,
      sm: string,
      md: string,
      lg: string
}


export default interface HeroesData {
    id:number,
    name:string,
    slug:string,
    powerstats:Powerstats,
    appearence:object,
    weight:object,
    eyeColor:string,
    hairColor:string,
    biography:object,
    placeOfBirth: string,
    firstAppearance: string,
    publisher: string,
    alignment: string,
    work:object,
    connections:object,
    images:Images
  }
  