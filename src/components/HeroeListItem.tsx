import React from 'react';
import { Images, Powerstats } from '../HeroesData/Heroes';

interface HeroesProps {
  name: string;
  powerstats: Powerstats;
  images: Images;
}

const onclick=()=>{
  alert("click on heroe")
}

function HeroeListItem(Heroes: HeroesProps) {

  return (
    <div onClick={onclick}>
      <h3 >{Heroes.name}</h3>
      <img src={Heroes.images.xs} />
    </div>

  )
}


export default HeroeListItem;