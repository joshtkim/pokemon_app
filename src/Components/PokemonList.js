import React from 'react'

let PokemonList = ({ pokemon}) => {
    return (
        <div>
            {pokemon.map(p => (
                <div key={p}>
                    {p}
                </div>
            ))}
        </div>
    )
}

export default PokemonList
