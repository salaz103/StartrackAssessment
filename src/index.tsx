import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { heroesReducer } from "./reducers/heroesReducer";
import HeroeService from './services/heroeService';
import { setHeroes } from './actions/heroes';
import thunk from 'redux-thunk';
import { favoritesReducer } from './reducers/favoritesReducer';
import { rootReducer } from './store/store';

export const store = createStore(rootReducer,applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);



HeroeService.getAll().then((response: any) => {
  store.dispatch(setHeroes(response.data))
})


reportWebVitals();