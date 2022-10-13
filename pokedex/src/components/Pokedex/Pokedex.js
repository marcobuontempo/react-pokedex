import './Pokedex.css'
import React, { useState } from 'react'
import PokemonList from '../PokemonList/PokemonList';

import Stack from 'react-bootstrap/Stack';
import NavBar from '../NavBar/NavBar';
import About from '../About/About';

import * as pokeapi from '../../helpers/pokeapi.js'


export default function Pokedex() {

  /** TO-DO:
   * DONE 1. Migrate all Bootstrap5 to react-bootstrap
   * DONE 2. Make basic menu design
   * DONE 3. Populate menu with each pokemon.name
   * DONE 4. Onclick menu, show the details of the selected Pokemon
   * DONE 5. Fix PokemonDisplay to only be 100% height and not require extra scrolling
   * DONE 6. Add backbutton for PokemonDisplay to go back to Pokemon list
   * DONE 7. Link the menu and display components
   * 8. Lazy load the other Pokemon list
   * DONE 9. Add Spinners while waiting for loading
   * 10. Add styling to components. Use correct Pokemon font
   * 11. Add About section
   * 12. Separate styling into .css sheets
   * DONE 13. Extract API calls into helper function at /helpers/api.js
   * DONE 15. Only set pokemonData after pokemon from list have been added
   * 14. Refactor code
   * DONE 15. Minimise navbar once selected
   * 16. Get each PokemonListCard to have background colour matching the Pokemon's colour (background image size 9999..)
   * 17. Show shiny sprite on mouse hover
   */

  const [menuSelected, setMenuSelected] = useState(null)

  const getDisplayContent = (displayType) => {
    switch(displayType) {
      case "PokemonList":
        return <PokemonList></PokemonList>
      case "About":
        return <About></About>
      default:
        return
    }
  }

  const test = async () => {
    const abc = await pokeapi.fetchAllPokemonData(pokeapi.pokemonURL)
    console.log(abc)
  }

  return (
    <Stack className='Pokedex'>
      <NavBar setMenuSelected={setMenuSelected}></NavBar>
      <button type="button" onClick={test}>Test</button>
      {getDisplayContent(menuSelected)}
    </Stack>
  )
}
