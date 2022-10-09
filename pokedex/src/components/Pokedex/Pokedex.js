import './Pokedex.css'
import React, { useState, useEffect } from 'react'
import PokemonDisplay from '../PokemonDisplay.js/PokemonDisplay'
import axios from 'axios';

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


  return (
    <div className='Pokedex d-flex'>
        <div className='col-4' style={{display:"None"}} onClick={logPoke}>MenuPlaceholder</div>
        <PokemonDisplay></PokemonDisplay>
    </div>
  )
}
