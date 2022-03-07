import React, { useState } from 'react';
import { connect, useSelector, RootStateOrAny, useDispatch } from 'react-redux';
import { setText } from '../actions/filters';
import '../styles.css'
import { rootReducer, RootState } from '../store/store';



function HeroesFilter() {
  const searchText: string = useSelector((state: RootState) => state.filters.searchText);
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setText(e.target.value))
  }


  return (
    <div className='content-container-filter'>
      <div className='input-group'>
        <div className="input-group__item">
          <h1>All superheroes</h1>
        </div>

        <div className="input-group__item">
          <input
            className='text-input'
            type="text"
            placeholder='Search'
            autoFocus
            value={searchText}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  )
}


export default HeroesFilter;