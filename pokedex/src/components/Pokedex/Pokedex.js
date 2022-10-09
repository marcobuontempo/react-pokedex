import './Pokedex.css'
import React from 'react'
import PokemonDisplay from '../PokemonDisplay.js/PokemonDisplay'

export default function Pokedex() {
  return (
    <div className='Pokedex d-flex'>
        <div className='col-4' style={{display:"None"}}>MenuPlaceholder</div>
        <PokemonDisplay></PokemonDisplay>
    </div>
  )
}
