import React, { useState, useEffect } from 'react'

import './PokemonList.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';

import PokemonListCard from '../PokemonListCard/PokemonListCard';
import PokemonDisplay from '../PokemonDisplay/PokemonDisplay';

import * as pokeapi from '../../helpers/pokeapi'

export default function PokemonList() {
	const [selectedPokemon, setSelectedPokemon] = useState(null);
	const [pokemonData, setPokemonData] = useState([]);
	const [APIError, setAPIError] = useState(false);

	const infiniteScroll = (e) => {
		e.preventDefault()
		if (!APIError && (e.target.scrollTop + e.target.offsetHeight >= e.target.scrollHeight)) {
			getPokemonData()
		}
	}

	const getPokemonData = async () => {
		try {
			const pokemonArr = await pokeapi.fetchAllPokemonData(pokeapi.pokemonURL)
			setPokemonData([...pokemonData, ...pokemonArr])
		}
		catch (err) {
			setAPIError(true)
		}

		// const storageData = {
		// 	date_set: new Date(),
		// 	pokemon_data: pokemonData
		// }

		// localStorage.setItem("pokemon_data", JSON.stringify(storageData))
	}

	const loadDummyData = () => {
		const dummyData = require("../../dummy_data/pokemon_list_dummy.json")
		setPokemonData(dummyData)
	}

	useEffect(() => {
		//on component mount
		getPokemonData()

		//on component un-mount
		return () => {
			pokeapi.resetURL()
		}
	}, [])

	const selectPokemon = (pokemon) => {
		setSelectedPokemon(pokemon)
	}

	return (
		<>
			<Container className='overflow-auto py-3 PokemonList-container' fluid onScroll={infiniteScroll}>
				{/* Loading "spinner" when pokemonData is empty */}
				{pokemonData.length === 0 && !APIError &&
					(
						<div className='PokemonList-spinner'>
							<Spinner animation="border" role="status" variant="danger">
								<span className="visually-hidden">Loading...</span>
							</Spinner>
						</div>
					)
				}

				{/* API Error */}
				{pokemonData.length === 0 && APIError &&
					(
						<div className='text-center p-5'>
							<h1 className="display-4">API ERROR</h1>
							<Button variant="outline-warning" className="px-5" onClick={loadDummyData}>Load Dummy Data...</Button>
						</div>
					)
				}
				{/* Render contents in separate function */}

				{/* Display each pokemon in the list */}
				<Row className='justify-content-evenly gap-2' >
					{pokemonData.map(pokemon => <PokemonListCard key={pokemon.id} pokemon={pokemon} selectPokemon={selectPokemon}></PokemonListCard>)}
				</Row>
			</Container>

			{/* Display the overlay card when pokemon selected */}
			{selectedPokemon ? <PokemonDisplay pokemon={selectedPokemon} selectPokemon={selectPokemon}></PokemonDisplay> : null}
		</>
	)
}
