import './Pokedex.css'
import React from 'react'
import PokemonList from '../PokemonList/PokemonList';

import Stack from 'react-bootstrap/Stack';
import NavBar from '../NavBar/NavBar';


export default function Pokedex() {

  /** TO-DO:
   * DONE 1. Migrate all Bootstrap5 to react-bootstrap
   * DONE 2. Make basic menu design
   * DONE 3. Populate menu with each pokemon.name
   * DONE 4. Onclick menu, show the details of the selected Pokemon
   * 5. Fix PokemonDisplay to only be 100% height and not require extra scrolling
   * DONE 6. Add backbutton for PokemonDisplay to go back to Pokemon list
   * 7. Link the menu and display components
   * 8. Lazy load the other Pokemon list
   * 9. Add Spinners while waiting for loading
   * 10. Add styling to components. Use correct Pokemon font
   * 11. Add About section
   * 12. Separate styling into .css sheets
   * 13. Extract API calls into helper function at /helpers/api.js
   * 14. Refactor code
   */


  return (
    <Stack className='Pokedex'>
        <NavBar></NavBar>
        <PokemonList></PokemonList>
    </Stack>
  )
}
