// import axios from 'axios'
import axios from "axios"

const POKEAPI_URL = "https://pokeapi.co/api/v2/"

let pokemonURL = POKEAPI_URL + "pokemon"

const fetchOnePokemonData = async (pokemon) => {
  const pokemonData = await axios
    .get(pokemon.url)
    .then(res => {
      return res.data
    })
    .then(pokemonInfo => {
      return {
        id: pokemonInfo.id,
        weight: pokemonInfo.weight,
        height: pokemonInfo.height,
        name: pokemonInfo.name,
        types: pokemonInfo.types.map(el => el.type.name),
        abilities: pokemonInfo.abilities.map(el => el.ability.name),
        stats: pokemonInfo.stats.map(el => { return {name: el.stat.name, base_stat: el.base_stat}}),
        moves: pokemonInfo.moves.map(el => el.move.name),
        sprites: { default: pokemonInfo.sprites.front_default, shiny: pokemonInfo.sprites.front_shiny }
      }
    })
  return pokemonData
}

const fetchAllPokemonData = async (url) => {
  const pokemonList = await axios
    .get(url)
    .then(res => {
      // console.log(res);
      return res.data;
    })
    .then(data => {
      pokemonURL = data.next
      return data.results
    })
    .catch(err => {
      return err
    })

  const allPokemonData = await Promise.all(pokemonList.map(pokemon => {
    return fetchOnePokemonData(pokemon)
  }))

  console.log(allPokemonData)

  return allPokemonData
}

// get 20 Pokemon {name,url} 
// -> put into array 
// -> foreach pokemon, use url to request pokemon data 
// -> push each pokemondata into obj arr {timeupdate:xx, pokemon:[]}
// -> load array from objarr
// -> when bottom scroll reached, recall initial function ^

// onload -> check objarr in localStorage: if timeupdate>30days or empty: recall function
// pull localStorage info and assign to local obh arr

export { pokemonURL, fetchAllPokemonData }