import React, {useState} from 'react'
import axios from 'axios'

const PokemonAxios = () => {

    const [pokemons, setPokemons] = useState();

    const fetchPokemonAxios = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=807`)
            .then(response => {
                console.log(response.data.results)
                setPokemons(response.data.results)
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <div>
                <h1>Who's That Pokemon?</h1>
                <button onClick={fetchPokemonAxios}>Fetch Pokemon!</button>
            </div>
            <div>
                <ul>
                    {pokemons && pokemons.map((pokemon, i) => {
                        return (
                            <li key={i}>{pokemon.name}</li>
                        )
                    })
                    }
                </ul>
            </div>
        </>
    )
}

export default PokemonAxios