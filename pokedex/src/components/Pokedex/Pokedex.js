import './Pokedex.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import PokemonDisplay from '../PokemonDisplay.js/PokemonDisplay'

import Stack from 'react-bootstrap/Stack';


const POKEAPI_URL = "https://pokeapi.co/api/v2/"

export default function Pokedex() {

  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonURL, setPokemonURL] = useState(POKEAPI_URL+"pokemon");


  const addPokemonData = (pokemon) => {
    axios
      .get(pokemon.url)
      .then(res => {
        setPokemonData(pokemonData => [...pokemonData, res.data])
      })
  }

  const getPokemonData = () => {
    axios
      .get(pokemonURL)
      .then(res => {
        console.log(res);
        return res.data;
      })
      .then(data => {
        data.results.forEach(pokemon => {
          addPokemonData(pokemon)
        })
        setPokemonURL(data.next)
      })
  }

  useEffect(() => {
    getPokemonData()
  }, [])
  
  const logPoke = () => {
    console.log(pokemonData)
  }

  /** TO-DO:
   * DONE 1. Migrate all Bootstrap5 to react-bootstrap
   * 2. Make basic menu design
   * 3. Populate menu with each pokemon.name
   * 4. Onclick menu, show the details of the selected Pokemon
   */


  return (
    <Stack className='Pokedex'>
        {/* <div className='col-4' style={{display:"None"}} onClick={logPoke}>MenuPlaceholder</div> */}
        <PokemonDisplay /*{pokemon={pokemon}}*/></PokemonDisplay>
    </Stack>
  )
}
