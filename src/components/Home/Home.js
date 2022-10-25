import React from 'react'

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

export default function Home(props) {

  const handleClick = () => {
    props.setMenuSelected("PokemonList")
  }

  return (
    <Container className='overflow-auto p-5 text-center' fluid>
      <h1 className="display-1 poke-font">Welcome to the Pokedex!</h1>
      <Button variant="dark" size="lg" className="px-5" onClick={handleClick}>Explore Pokemon</Button>
    </Container>
    )
}
