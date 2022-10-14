import React from 'react'

import './PokemonListCard.css'

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function PokemonListCard(props) {

  const { pokemon, selectPokemon } = props

  const handleOnClick = () => {
    selectPokemon(pokemon)
  }

  return (
    <Card className='text-center px-0 poke-font' key={pokemon.name} style={{ maxWidth: '350px', background: `url(${pokemon.sprites.default}) no-repeat center`, backgroundSize: '12500px' }} onClick={handleOnClick}>
      <Card.Header style={{background: "rgba(0,0,0,0.25)"}}>#{("00" + pokemon.id).slice(-3)}</Card.Header>
      <Card.Body>
        <Container>
          <Row>
            <Col>
              <Card.Img src={pokemon.sprites.default} style={{ height: '100%', width: 'auto' }}></Card.Img>
            </Col>
            <Col>
              <Card.Text className='fw-bold'>
                {pokemon.name}
              </Card.Text>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  )
}
