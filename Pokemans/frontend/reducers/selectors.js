export const selectAllPokemon = (state) => {
  return Object.values(state.entities.pokemon);
};

// this method was only useful before wrapping everything in router
// we used it in Pokemon Detail Container with mapDispatchToProps
// it is not longer being used anywhere
export const selectSinglePokemon = (state) => {
  return Object.values(state.entities.pokemon);
};