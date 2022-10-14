import React, { useState, useEffect } from 'react'

import './PokemonList.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';

import PokemonListCard from '../PokemonListCard/PokemonListCard';
import PokemonDisplay from '../PokemonDisplay/PokemonDisplay';

import * as pokeapi from '../../helpers/pokeapi'

export default function PokemonList() {
	const [selectedPokemon, setSelectedPokemon] = useState(null);
	const [pokemonData, setPokemonData] = useState([]);

	useEffect(() => {
		async function getPokemonData() {
			const pokemonArr = await pokeapi.fetchAllPokemonData(pokeapi.pokemonURL)
			setPokemonData([...pokemonData, ...pokemonArr])

			const storageData = {
				date_set: new Date(),
				pokemon_data: pokemonData
			}

			localStorage.setItem("pokemon_data", JSON.stringify(storageData))
		}
		getPokemonData()
	}, [])

	const selectPokemon = (pokemon) => {
		setSelectedPokemon(pokemon)
	}

	return (
		<>
			<Container className='overflow-auto py-3 PokemonList-container' fluid>
				{/* Loading "spinner" when pokemonData is empty */}
				{pokemonData.length === 0 ? (
					<div className='PokemonList-spinner'>
						<Spinner animation="border" role="status" variant="danger">
							<span className="visually-hidden">Loading...</span>
						</Spinner>
					</div>)
					: null}

				{/* Display each pokemon in the list */}
				<Row className='justify-content-evenly gap-2'>
					{pokemonData.map(pokemon => <PokemonListCard key={pokemon.id} pokemon={pokemon} selectPokemon={selectPokemon}></PokemonListCard>)}
				</Row>
			</Container>

			{/* Display the overlay card when pokemon selected */}
			{selectedPokemon ? <PokemonDisplay pokemon={selectedPokemon} selectPokemon={selectPokemon}></PokemonDisplay> : null}
		</>
	)
}
