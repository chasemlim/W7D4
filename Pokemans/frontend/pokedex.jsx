import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
import { HashRouter, Route } from 'react-router-dom';


// import { fetchAllPokemon } from './util/api_util';
// import { receiveAllPokemon, requestAllPokemon, requestSinglePokemon, receiveSinglePokemon } from './actions/pokemon_actions';
// import { selectAllPokemon } from "./reducers/selectors";


document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  const rootEl = document.getElementById('root');
  // window.receiveAllPokemon = receiveAllPokemon;
  // window.fetchAllPokemon = fetchAllPokemon;
  // window.requestAllPokemon = requestAllPokemon;
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  // window.selectAllPokemon = selectAllPokemon;
  // window.x = 5;
  // window.requestSinglePokemon = requestSinglePokemon;
  // window.receiveSinglePokemon = receiveSinglePokemon;
  ReactDOM.render(<Root store={store}/>, rootEl);
});