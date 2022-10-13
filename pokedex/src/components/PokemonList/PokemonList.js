import React, { useState, useEffect } from 'react'

import './PokemonList.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
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
		<Container fluid className="overflow-auto PokemonList">
			<Container className='overflow-auto' fluid style={{ height: "100%" }}>
				<Row className='justify-content-center gap-2'>
					{pokemonData.map(pokemon => <PokemonListCard key={pokemon.id} pokemon={pokemon} selectPokemon={selectPokemon}></PokemonListCard>)}
				</Row>
			</Container>
			{selectedPokemon ? <PokemonDisplay pokemon={selectedPokemon} selectPokemon={selectPokemon}></PokemonDisplay> : null}
		</Container>
	)
}
