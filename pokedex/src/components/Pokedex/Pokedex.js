import './Pokedex.css'
import React, { useState, useEffect } from 'react'
import PokemonDisplay from '../PokemonDisplay/PokemonDisplay'
import PokemonList from '../PokemonList/PokemonList';

import Stack from 'react-bootstrap/Stack';
import NavBar from '../NavBar/NavBar';


export default function Pokedex() {

  /** TO-DO:
   * DONE 1. Migrate all Bootstrap5 to react-bootstrap
   * 2. Make basic menu design
   * 3. Populate menu with each pokemon.name
   * 4. Onclick menu, show the details of the selected Pokemon
   */


  return (
    <Stack className='Pokedex'>
        <NavBar></NavBar>
        <PokemonList></PokemonList>
        {/* <PokemonDisplay /*{pokemon={pokemon}} //></PokemonDisplay> */}
    </Stack>
  )
}
