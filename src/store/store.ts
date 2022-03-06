import { combineReducers } from '@reduxjs/toolkit'
import { favoritesReducer } from "../reducers/favoritesReducer";
import { filterReducer } from '../reducers/filterReducer';
import { heroesReducer } from "../reducers/heroesReducer";

export const rootReducer = combineReducers({
  heroes:heroesReducer,
  favorites:favoritesReducer,
  filters:filterReducer
});

export type RootState = ReturnType<typeof rootReducer>