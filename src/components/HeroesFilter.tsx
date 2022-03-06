import React, { useState } from 'react';
import { connect, useSelector, RootStateOrAny, useDispatch } from 'react-redux';
import { setText } from '../actions/filters';
import '../styles.css'
import { rootReducer, RootState } from '../store/store';



function HeroesFilter() {
    const searchText:string= useSelector((state:RootState)=>state.filters.searchText);
    const dispatch= useDispatch();

      const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        dispatch(setText(e.target.value))
      }


    return (
        <div>
            <input
                type="text"
                placeholder='Look for more Heroes'
                autoFocus
                value={searchText}
                onChange={handleChange}
            />

        </div>




    )
}


export default HeroesFilter;