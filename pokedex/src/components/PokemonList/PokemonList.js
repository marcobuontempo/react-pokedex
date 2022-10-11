import React, { useState, useEffect } from 'react'
import axios from 'axios';

import './PokemonList.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import PokemonListCard from '../PokemonListCard/PokemonListCard';
import PokemonDisplay from '../PokemonDisplay/PokemonDisplay';


export default function PokemonList() {
	const POKEAPI_URL = "https://pokeapi.co/api/v2/"

	const [pokemonData, setPokemonData] = useState([]);
	const [pokemonURL, setPokemonURL] = useState(POKEAPI_URL + "pokemon");
	const [selectedPokemon, setSelectedPokemon] = useState(null);


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

	const selectPokemon = (pokemon) => {
		setSelectedPokemon(pokemon)
	}

	return (
		<>
			<Container fluid className="overflow-scroll">
				<Row className='justify-content-center gap-2'>
					{pokemonData.map(pokemon => <PokemonListCard key={pokemon.id} pokemon={pokemon} selectPokemon={selectPokemon}></PokemonListCard>)}
				</Row>
			</Container>

			{selectedPokemon ? <PokemonDisplay pokemon={selectedPokemon} selectPokemon={selectPokemon}></PokemonDisplay> : null}
		</>
	)
}
