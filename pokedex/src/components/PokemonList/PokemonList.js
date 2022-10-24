import React, { useState, useEffect } from 'react'
import './PokemonList.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';

import PokemonListCard from '../PokemonListCard/PokemonListCard';
import PokemonDisplay from '../PokemonDisplay/PokemonDisplay';

import axios from 'axios';

import * as pokeapi from '../../helpers/pokeapi'

export default function PokemonList() {
	const [selectedPokemon, setSelectedPokemon] = useState(null);
	const [pokemonData, setPokemonData] = useState([]);
	const [isFetching, setIsFetching] = useState(true);
	const [APIError, setAPIError] = useState(false);

	const infiniteScroll = (e) => {
		e.preventDefault()
		if (!APIError && (e.target.scrollTop + e.target.offsetHeight >= e.target.scrollHeight)) {
			setIsFetching(true)
			getPokemonData()
		}
	}

	const getPokemonData = async () => {
		try {
			const pokemonArr = await pokeapi.fetchAllPokemonData(pokeapi.pokemonURL)
			setPokemonData([...pokemonData, ...pokemonArr])
			setIsFetching(false)
		}
		catch (err) {
			setAPIError(true)
		}
	}

	const loadDummyData = async () => {
		const { data } = await axios.get("dummy_data/pokemon_list_dummy.json")
		setPokemonData(data)
		setIsFetching(false)
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
				{/* Display if API Error */}
				{isFetching && APIError &&
					(
						<div className='text-center p-5'>
							<h1 className="display-4">API ERROR</h1>
							<Button variant="outline-warning" className="px-5" onClick={loadDummyData}>Load Dummy Data...</Button>
						</div>
					)
				}

				{/* Display each pokemon card in the list */}
				<Row className='justify-content-evenly gap-2' >
					{pokemonData.map(pokemon => <PokemonListCard key={pokemon.id} pokemon={pokemon} selectPokemon={selectPokemon}></PokemonListCard>)}
				</Row>


				{/* Loading "spinner" when fetching data */}
				{isFetching && !APIError &&
					(
						<div className={"PokemonList-spinner p-3" + (pokemonData.length === 0 ? " PokemonList-unloaded" : " ")}>
							<Spinner animation="border" role="status" variant="danger">
								<span className="visually-hidden">Loading...</span>
							</Spinner>
						</div>
					)
				}

			</Container>

			{/* Display the overlay card when pokemon selected */}
			{selectedPokemon ? <PokemonDisplay pokemon={selectedPokemon} selectPokemon={selectPokemon}></PokemonDisplay> : null}
		</>
	)
}
