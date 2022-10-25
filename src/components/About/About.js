import React from 'react'

import './About.css'
import { Container, ListGroup } from 'react-bootstrap'

export default function About() {
  return (
    <Container fluid className="About px-5">
      <h1 className="text-center display-1 text-light">About</h1>
      <ListGroup as="ol">
        <ListGroup.Item as="li">
          <div className="ms-2 me-auto text-center">
            <div className="fw-bold">Created By</div>
            <a href="https://www.linkedin.com/in/marcobuontempo/">Marco Buontempo <i>(2022)</i></a>
          </div>
        </ListGroup.Item>
        <ListGroup.Item as="li">
          <div className="ms-2 me-auto text-center">
            <div className="fw-bold">API Data</div>
            <a href="https://pokeapi.co/">PokeAPI</a>
          </div>
        </ListGroup.Item>
        <ListGroup.Item as="li">
          <div className="ms-2 me-auto text-center">
            <div className="fw-bold">Source Code</div>
            <a href="https://github.com/marcobuontempo/react-pokedex">GitHub</a>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </Container>
  )
}
