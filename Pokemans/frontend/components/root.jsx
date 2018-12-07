import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from "./pokemon/pokemon_index_container";
import PokemonDetailContainer from "./pokemon/pokemon_detail_container";
import { HashRouter, Route, Switch } from 'react-router-dom';

const Root = ({ store }) => {
  return (
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
)};

export default Root;

const App = () => {
  return (
    <div>
      <Switch>
        <Route 
          component={PokemonDetailContainer} 
          exact path="/pokemon/:pokemonId" />
      </Switch>
      <PokemonIndexContainer />
      
    </div>
  )
}