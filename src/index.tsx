import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { heroesReducer } from "./reducers/heroesReducer";
import HeroeService from './services/heroeService';
import { setHeroes } from './actions/heroes';

export const store = createStore(heroesReducer);

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
