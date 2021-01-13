import React, { useState, useEffect } from 'react';
import PokemonList from './Components/PokemonList'
import axios from 'axios'

function App() {
  const [pokemon, setPokemon] = useState([])
  
  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then(r => {
      setPokemon(r.data.results.map(p => p.name))
    })
  }, [])

  return (
   <PokemonList pokemon={pokemon} />
  );
}

export default App;
