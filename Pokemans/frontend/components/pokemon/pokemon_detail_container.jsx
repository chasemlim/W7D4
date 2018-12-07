import PokemonDetail from "./pokemon_detail";

import { connect } from "react-redux";
import { requestSinglePokemon } from "../../actions/pokemon_actions";
import { selectSinglePokemon } from "../../reducers/selectors";

const mapStateToProps = (state, ownProps) => {
  // return { pokemon: selectSinglePokemon(state) };
  return { pokemon: state.entities.pokemon[ownProps.match.params.pokemonId] };
};

const mapDispatchToProps = dispatch => ({
  requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);