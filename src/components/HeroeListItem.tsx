import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeHeroe } from '../actions/heroes';
import HeroesData, { Images, Powerstats } from '../HeroesData/Heroes';
import { RootState } from '../store/store';

interface HeroesProps {
  name: string;
  powerstats: Powerstats;
  images: Images;
  id:number;
}



function HeroeListItem(Heroes: HeroesProps) {
  const dispatch= useDispatch();
  const heroObject = useSelector((state:RootState)=>state.heroes.heroes.find((heroe:HeroesData)=>{
    return heroe.id === Heroes.id;
  }))

  console.log(heroObject);


  const onclick=()=>{
    dispatch(removeHeroe(heroObject))
  }

  return (
    <div onClick={onclick}>
      <h3 >{Heroes.name}</h3>
      <img src={Heroes.images.xs} />
    </div>

  )
}


export default HeroeListItem;