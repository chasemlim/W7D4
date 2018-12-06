import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this.props.requestAllPokemon();
  }
  
  render() {
    const pokeArr = this.props.pokemon.map( poke => (
        <PokemonIndexItem key={poke.id} poke={poke} />
      ));
    
    
    return (
      <section className="pokedex">
        <ul>
          {pokeArr}
        </ul>
      </section>
    );
  }
}

export default PokemonIndex;