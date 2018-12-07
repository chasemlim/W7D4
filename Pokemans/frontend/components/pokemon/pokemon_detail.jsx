import React from "react";

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this.props.requestSinglePokemon(this.props.match.params.pokemonId);
  }
  
  componentDidUpdate(prevProps) {
  
    if (prevProps.match.params.pokemonId !== this.props.match.params.pokemonId) {
      this.props.requestSinglePokemon(this.props.match.params.pokemonId);
    }
  }
  
  render() {
    // 
    // const { pokemon, items, loading } = this.props;
    // 
    //     if (loading) {
    //       return <section className="pokemon-detail"><LoadingIcon /></section>;
    //     }

        if (!this.props.pokemon || !this.props.pokemon.moves) return null;

        return (
          <section className="pokemon-detail">
            <figure>
              <img src={this.props.pokemon.image_url} alt={this.props.pokemon.name} />
            </figure>
            <ul>
              <li>
                <h2>{this.props.pokemon.name}</h2>
              </li>
              <li>Type: {this.props.pokemon.poke_type}</li>
              <li>Attack: {this.props.pokemon.attack}</li>
              <li>Defense: {this.props.pokemon.defense}</li>
              <li>Moves: {this.props.pokemon.moves.join(', ')}</li>
            </ul>
          

            
          </section>
        );
      }
}

export default PokemonDetail;