import { RECEIVE_ALL_POKEMON, RECEIVE_SINGLE_POKEMON } from "../actions/pokemon_actions";

export default (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ALL_POKEMON:
      return action.pokemon;
    case RECEIVE_SINGLE_POKEMON:
      return Object.assign({}, state, action.pokemon.pokemon);
    default:
      return state;
  }
};