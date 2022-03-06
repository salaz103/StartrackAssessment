import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavoriteHeroe, removeHeroe, StartremoveHeroe } from '../actions/heroes';
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


  const onclick=()=>{
    dispatch(StartremoveHeroe(heroObject))
    //dispatch(addFavoriteHeroe(heroObject))
    //dispatch(removeHeroe(heroObject))
  }

  return (
    <div className='list-item' onClick={onclick}>
      <h3 >{Heroes.name}</h3>
      <img src={Heroes.images.xs} />
    </div>

  )
}


export default HeroeListItem;


