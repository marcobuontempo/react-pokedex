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

	const togglePokemonImage = (e) => {
		e.target.src = e.target.src === pokemon.sprites.default ? pokemon.sprites.shiny : pokemon.sprites.default;
	}

	const changeDisplay = (key) => {
		setDisplayType(key)
	}

	const navItems = ["Overview", "Stats", "Moves", "Physical"]
	const getNavbar = (navItems) => {
		return (
			<Nav variant="tabs" defaultActiveKey={navItems[0].toLowerCase()} onSelect={changeDisplay} className="justify-content-center">
				{navItems.map(e => <Nav.Item key={e.toLowerCase()}><Nav.Link as="button" href={e.toLowerCase()} className="PokemonDisplay-nav-link">{e}</Nav.Link></Nav.Item>)}
			</Nav>
		)
	}

	const getDisplayContent = (displayType) => {
		switch (displayType) {
			case "overview":
				return (<>
					<ListGroup>
						<ListGroup.Item className='fw-bold'>TYPE:</ListGroup.Item>
						{pokemon.types.map(type => <ListGroup.Item key={type}>{type}</ListGroup.Item>)}
					</ListGroup>
					<ListGroup>
						<ListGroup.Item className='fw-bold'>ABILITIES:</ListGroup.Item>
						{pokemon.abilities.map(ability => <ListGroup.Item key={ability}>{ability}</ListGroup.Item>)}
					</ListGroup>
				</>)
			case "stats":
				return (
					<ListGroup>
						{pokemon.stats.map(stat => <ListGroup.Item className='fw-bold' key={stat.name}>{stat.name.replace("-", " ").toUpperCase()}: <span className='fw-normal'>{stat.base_stat}</span></ListGroup.Item>)}
					</ListGroup>
				)
			case "moves":
				return (
					<ListGroup>
						<li className="list-group-item fw-bold">MOVES:</li>
						{pokemon.moves.map(move => <ListGroup.Item className="fw-bold" key={move}><span className='fw-normal'>{move}</span></ListGroup.Item>)}
					</ListGroup>)
			case "physical":
				return (
					<ListGroup>
						<ListGroup.Item className="fw-bold">HEIGHT: <span className="fw-normal">{pokemon.height} metres</span></ListGroup.Item>
						<ListGroup.Item className="fw-bold">WEIGHT: <span className="fw-normal">{pokemon.weight} kilograms</span></ListGroup.Item>
					</ListGroup>)
			default:
				return <p className='text-center text-error'>ERROR</p>
		}
	}

	return (
		<Card bg='light' className='PokemonDisplay'>
			<Button variant="outline-danger" size="sm" className='PokemonDisplay-back-button' onClick={goBack}>Back</Button>

			<Card.Title as='h1' className="text-center pt-2">{pokemon.name.toUpperCase()}</Card.Title>
			<Stack direction='horizontal' className='PokemonDisplay-img-container justify-content-center'>
				<Card.Img variant="top" src={pokemon.sprites.default} className='PokemonDisplay-img' onMouseEnter={togglePokemonImage} onMouseLeave={togglePokemonImage} />
			</Stack>
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
