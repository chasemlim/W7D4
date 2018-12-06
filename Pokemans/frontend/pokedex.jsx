import React from "react";
import ReactDOM from "react-dom";
import { fetchAllPokemon } from './util/api_util';
import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions';
import configureStore from "./store/store";
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  const rootEl = document.getElementById('root');
  // window.receiveAllPokemon = receiveAllPokemon;
  // window.fetchAllPokemon = fetchAllPokemon;
  // window.requestAllPokemon = requestAllPokemon;
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  ReactDOM.render(<Root store={store}/>, rootEl);
});