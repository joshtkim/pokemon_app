import React, { useState, useEffect } from 'react';
import PokemonList from './Components/PokemonList'
import axios from 'axios'
import PokePage from './Components/PokePage';

function App() {
  const [pokemon, setPokemon] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setprevPageUrl] = useState()
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    setLoading(true)
    let cancel
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(r => {
      setLoading(false)
      setNextPageUrl(r.data.next)
      setprevPageUrl(r.data.previous)
      setPokemon(r.data.results.map(p => p.name))
    })

    return () => cancel()
  }, [currentPageUrl])

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl)
  }

  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl)
  }

  if (loading) return "Loading..."

  return (
    <>
      <PokemonList pokemon={pokemon} />
      <PokePage
      gotoNextPage={nextPageUrl ? gotoNextPage : null}
      gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
      />
   </>
  );
}

export default App;
