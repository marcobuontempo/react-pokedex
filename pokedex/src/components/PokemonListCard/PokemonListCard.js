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
    <Card className='text-center px-0' key={pokemon.name} style={{ maxWidth: '350px' }} value={pokemon} onClick={handleOnClick}>
      <Card.Header>#{("00" + pokemon.id).slice(-3)}</Card.Header>
      <Card.Body>
        <Container>
          <Row>
            <Col>
              <Card.Img src={pokemon.sprites.front_default} style={{ height: '100%', width: 'auto' }}></Card.Img>
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