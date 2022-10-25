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
    <Card className='text-center px-0 poke-font PokemonListCard' key={pokemon.name} style={{background: `url(${pokemon.sprites.default}) no-repeat center/12500px`}} onClick={handleOnClick}>
      <Card.Header className="PokemonListCard-header">#{("00" + pokemon.id).slice(-3)}</Card.Header>
      <Card.Body>
        <Container>
          <Row>
            <Col>
              <Card.Img src={pokemon.sprites.default} className="PokemonListCard-img"></Card.Img>
            </Col>
            <Col>
              <Card.Text className='PokemonListCard-text fw-bold fs-4'>
                {pokemon.name}
              </Card.Text>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  )
}
