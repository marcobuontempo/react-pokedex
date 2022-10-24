import './Pokedex.css'
import React, { useState } from 'react'
import PokemonList from '../PokemonList/PokemonList';

import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import NavBar from '../NavBar/NavBar';
import About from '../About/About';

import * as pokeapi from '../../helpers/pokeapi.js'
import Home from '../Home/Home';


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
   * 10. Add styling to components
   *     - DONE Padding around divs
   *     - DONE Nav Menu buttons
   *     - DONE Text display on cards
   *     - DONE Hover animation (scale/glow) on cards
   *     - Custom scroll bars
   *     - PokemonDisplay styling (font, navlist, etc...)
   *     - Breathing animation for pokemon sprite on displaycard
   * DONE 11. Add About section
   * DONE 12. Separate styling into .css sheets
   * DONE 13. Extract API calls into helper function at /helpers/api.js
   * DONE 15. Only set pokemonData after pokemon from list have been added
   * 14. Refactor code
   * DONE 15. Minimise navbar once selected
   * DONE 16. Get each PokemonListCard to have background colour matching the Pokemon's colour (background image size 9999..)
   * DONE 17. Show shiny sprite on mouse hover
   * DONE 18. Use correct Pokemon font
   * DONE (NR) 19. Capitalise the Pokemon names, moves, abilities when storing data. Remove any '-'
   * DONE 20. Navbar brand navigates to home page
   * DONE 21. Create home page 
   * DONE 22. Take only necessary information from API (e.g. moves -> only need moves.name)
   * 23. Convert custom CSS to bootstrap (height: 100% -> h-100)
   * DONE (NR) 24. NavBar Brand Logo: combine React and Pokeball
   * DONE 25. On API Error -> Show button 'Load Dummy Data' -> Shows dummy data
   * 26. Placeholder sprites if sprite is null (when cleaning data -> sprite ? sprite : ./localimg )
   * 27. BUG - resetting list of pokemon on reload of component (i.e. not saving state)
   * 28. Add Spinner when loading next pokemon on infinite scroll
   */

  const [menuSelected, setMenuSelected] = useState(null)

  const getDisplayContent = (displayType) => {
    switch (displayType) {
      case "Home":
        return <Home setMenuSelected={setMenuSelected} />
      case "PokemonList":
        return <PokemonList />
      case "About":
        return <About />
      default:
        return <Home setMenuSelected={setMenuSelected} />
    }
  }

  return (
    <Stack className='Pokedex'>
      <NavBar setMenuSelected={setMenuSelected}></NavBar>
      <Container fluid className="overflow-auto Pokedex-container p-0">
        {getDisplayContent(menuSelected)}
      </Container>
    </Stack>
  )
}
