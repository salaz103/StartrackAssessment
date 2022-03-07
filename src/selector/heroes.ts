import HeroesData from "../HeroesData/Heroes";


const getVisibleHeroes=(heroes:HeroesData[],text:string)=>{

    return heroes.filter((heroe)=>{
        //FIRST WE'LL CONVERT THE NAME OF THE HEROE TO LOWER CASE 
        const match1:string = heroe.name.toLowerCase();
        const match2:string = heroe.biography.fullName.toLowerCase();
        //THEN WE'LL CONVERT THE INCOMING TEXT ALSO TO LOWER CASE
        const match3:string = text.toLowerCase();
        const textMatch= match1.includes(match3) || match2.includes(match3);

        return textMatch;

    })

}


export default getVisibleHeroes;