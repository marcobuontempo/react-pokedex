import axios from "axios"
const placeholder_sprite = "%PUBLIC_URL%/images/placeholder_sprite.png"

const POKEAPI_URL = "https://pokeapi.co/api/v2/"
let pokemonURL = POKEAPI_URL + "pokemon"

const resetURL = () => {
  pokemonURL = POKEAPI_URL + "pokemon"
}

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
        sprites: { default: pokemonInfo.sprites.front_default || placeholder_sprite, shiny: pokemonInfo.sprites.front_shiny || placeholder_sprite }
      }
    })
  return pokemonData
}

const fetchAllPokemonData = async (url) => {
  const allPokemonData = await axios
    .get(url)
    .then(res => {
      return res.data;
    })
    .then(data => {
      pokemonURL = data.next
      return data.results
    })
    .then(pokemonList => {
      return Promise.all(pokemonList.map(pokemon => {
        return fetchOnePokemonData(pokemon)
      }))
    })
    .catch(err => {
      return err
    })

  return allPokemonData
}

export { pokemonURL, resetURL, fetchAllPokemonData }