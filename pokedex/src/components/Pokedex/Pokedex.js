import './Pokedex.css'
import React, { useState } from 'react'
import PokemonList from '../PokemonList/PokemonList';

import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import NavBar from '../NavBar/NavBar';
import About from '../About/About';
import Home from '../Home/Home';


export default function Pokedex() {

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
