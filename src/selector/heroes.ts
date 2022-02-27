import HeroesData from "../HeroesData/Heroes";


const getVisibleHeroes=(heroes:HeroesData[],text:string)=>{

    return heroes.filter((heroe)=>{
        //FIRST WE'LL CONVERT THE NAME OF THE HEROE TO LOWER CASE 
        const match1= heroe.name.toLowerCase();
        //THEN WE'LL CONVERT THE INCOMING TEXT ALSO TO LOWER CASE
        const match2= text.toLowerCase();
        const textMatch= match1.includes(match2);

        return textMatch;

    })

}


export default getVisibleHeroes;