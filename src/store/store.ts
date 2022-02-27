import { combineReducers } from '@reduxjs/toolkit'
import { store } from '..';
import { favoritesReducer } from "../reducers/favoritesReducer";
import { heroesReducer } from "../reducers/heroesReducer";

export const rootReducer = combineReducers({
  heroes:heroesReducer,
  favorites:favoritesReducer
});

export type RootState = ReturnType<typeof rootReducer>