import React from 'react'
import { useState } from 'react'

import './PokemonDisplay.css'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Nav from 'react-bootstrap/Nav';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';


export default function PokemonDisplay(props) {

	const pokemon = props.pokemon

	const [displayType, setDisplayType] = useState("overview")

	const goBack = () => {
		props.selectPokemon(null)
	}

	const changeDisplay = (key) => {
		setDisplayType(key)
	}

	const navItems = ["Overview", "Stats", "Moves", "Physical"]
	const getNavbar = (navItems) => {
		return (
			<Nav variant="tabs" defaultActiveKey={navItems[0].toLowerCase()} onSelect={changeDisplay}>
				{navItems.map(e => <Nav.Item key={e.toLowerCase()}><Nav.Link as="button" href={e.toLowerCase()}>{e}</Nav.Link></Nav.Item>)}
			</Nav>
		)
	}

	const getDisplayContent = (displayType) => {
		switch (displayType) {
			case "overview":
				return (<>
					<ListGroup>
						<ListGroup.Item className='fw-bold'>Type:</ListGroup.Item>
						{pokemon.types.map(e => <ListGroup.Item key={e.type.name}>{e.type.name}</ListGroup.Item>)}
					</ListGroup>
					<ListGroup>
						<ListGroup.Item className='fw-bold'>Abilities:</ListGroup.Item>
						{pokemon.abilities.map(e => <ListGroup.Item key={e.ability.name}>{e.ability.name}</ListGroup.Item>)}
					</ListGroup>
				</>)
			case "stats":
				return (
					<ListGroup>
						{pokemon.stats.map(e => <ListGroup.Item className='fw-bold' key={e.stat.name}>{e.stat.name.replace("-", " ").toUpperCase()}: <span className='fw-normal'>{e.base_stat}</span></ListGroup.Item>)}
					</ListGroup>
				)
			case "moves":
				return (
					<ListGroup>
						<li className="list-group-item fw-bold">Moves:</li>
						{pokemon.moves.map(e => <ListGroup.Item className="fw-bold" key={e.move.name}><span className='fw-normal'>{e.move.name}</span></ListGroup.Item>)}
					</ListGroup>)
			case "physical":
				return (
					<ListGroup>
						<ListGroup.Item className="fw-bold">Height: <span className="fw-normal">{pokemon.height} metres</span></ListGroup.Item>
						<ListGroup.Item className="fw-bold">Weight: <span className="fw-normal">{pokemon.weight} kilograms</span></ListGroup.Item>
					</ListGroup>)
			default:
				return <p className='text-center text-error'>ERROR</p>
		}
	}

	return (
		<Card bg='light' className='PokemonDisplay'>
			<Button variant="outline-danger" size="sm" style={{width:"auto", position: 'absolute', margin: '0.5em', padding: '0.5em 1em', fontWeight: 'bold'}} onClick={goBack}>Back</Button>

			<Card.Title as='h1' className="text-center">{pokemon.name}</Card.Title>
			<Card.Img variant="top" src={pokemon.sprites.default} style={{ maxHeight: "10%", objectFit: "contain" }} />

			<Card.Body className='overflow-scroll'>
				<Stack gap={3}>
					{getDisplayContent(displayType)}
				</Stack>
			</Card.Body>

			<Card.Footer>
				{getNavbar(navItems)}
			</Card.Footer>
		</Card >
	)
}
