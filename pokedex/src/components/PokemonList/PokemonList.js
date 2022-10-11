import React, { useState, useEffect } from 'react'
import axios from 'axios';

import './PokemonList.css'

import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function PokemonList() {
	const POKEAPI_URL = "https://pokeapi.co/api/v2/"

	const [pokemonData, setPokemonData] = useState([]);
	const [pokemonURL, setPokemonURL] = useState(POKEAPI_URL + "pokemon");


	const addPokemonData = (pokemon) => {
		axios
			.get(pokemon.url)
			.then(res => {
				setPokemonData(pokemonData => [...pokemonData, res.data])
			})
	}

	const getPokemonData = () => {
		axios
			.get(pokemonURL)
			.then(res => {
				console.log(res);
				return res.data;
			})
			.then(data => {
				data.results.forEach(pokemon => {
					addPokemonData(pokemon)
				})
				setPokemonURL(data.next)
			})
	}

	useEffect(() => {
		getPokemonData()
	}, [])

	const logPoke = () => {
		console.log(pokemonData)
	}


	const createPokemonCard = (pokemon) => {
		return (
			<Card className='text-center px-0' key={pokemon.name} style={{ maxWidth: '350px' }}>
				<Card.Header>#{("00" + pokemon.id).slice(-3)}</Card.Header>
				{/* <Card.Body style={{background: `white url(${pokemon.sprites.front_default}) center no-repeat`, backgroundSize: 'contain'}}> */}
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


	return (
		<Container fluid className="overflow-scroll">
			<Row className='justify-content-center gap-2'>
					{pokemonData.map(pokemon => createPokemonCard(pokemon))}
			</Row>
		</Container>
	)
}
