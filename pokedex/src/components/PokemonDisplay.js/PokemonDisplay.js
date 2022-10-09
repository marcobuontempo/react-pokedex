import React from 'react'
import { useState } from 'react'

export default function PokemonDisplay() {

	const [displayType, setDisplayType] = useState("overview")

	const changeDisplay = (e) => {
		setDisplayType(e.target.value)
	}

	const imgurl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
	const pokemonName = "ditto"
	const pokemonHeight = 3 / 10
	const pokemonWeight = 40 / 10
	const pokemonType = [
		{
			"slot": 1,
			"type": {
				"name": "normal",
				"url": "https://pokeapi.co/api/v2/type/1/"
			}
		}
	]
	const pokemonStats = [
		{
			"base_stat": 48,
			"effort": 1,
			"stat": {
				"name": "hp",
				"url": "https://pokeapi.co/api/v2/stat/1/"
			}
		},
		{
			"base_stat": 48,
			"effort": 0,
			"stat": {
				"name": "attack",
				"url": "https://pokeapi.co/api/v2/stat/2/"
			}
		},
		{
			"base_stat": 48,
			"effort": 0,
			"stat": {
				"name": "defense",
				"url": "https://pokeapi.co/api/v2/stat/3/"
			}
		},
		{
			"base_stat": 48,
			"effort": 0,
			"stat": {
				"name": "special-attack",
				"url": "https://pokeapi.co/api/v2/stat/4/"
			}
		},
		{
			"base_stat": 48,
			"effort": 0,
			"stat": {
				"name": "special-defense",
				"url": "https://pokeapi.co/api/v2/stat/5/"
			}
		},
		{
			"base_stat": 48,
			"effort": 0,
			"stat": {
				"name": "speed",
				"url": "https://pokeapi.co/api/v2/stat/6/"
			}
		}
	]
	const pokemonAbilities = [
		{
			"ability": {
				"name": "limber",
				"url": "https://pokeapi.co/api/v2/ability/7/"
			},
			"is_hidden": false,
			"slot": 1
		},
		{
			"ability": {
				"name": "imposter",
				"url": "https://pokeapi.co/api/v2/ability/150/"
			},
			"is_hidden": true,
			"slot": 3
		}
	]
	const pokemonMoves = [
		{
			"move": {
				"name": "transform",
				"url": "https://pokeapi.co/api/v2/move/144/"
			},
			"version_group_details": [
				{
					"level_learned_at": 1,
					"move_learn_method": {
						"name": "level-up",
						"url": "https://pokeapi.co/api/v2/move-learn-method/1/"
					},
					"version_group": {
						"name": "red-blue",
						"url": "https://pokeapi.co/api/v2/version-group/1/"
					}
				},
				{
					"level_learned_at": 1,
					"move_learn_method": {
						"name": "level-up",
						"url": "https://pokeapi.co/api/v2/move-learn-method/1/"
					},
					"version_group": {
						"name": "yellow",
						"url": "https://pokeapi.co/api/v2/version-group/2/"
					}
				},
				{
					"level_learned_at": 1,
					"move_learn_method": {
						"name": "level-up",
						"url": "https://pokeapi.co/api/v2/move-learn-method/1/"
					},
					"version_group": {
						"name": "gold-silver",
						"url": "https://pokeapi.co/api/v2/version-group/3/"
					}
				},
				{
					"level_learned_at": 1,
					"move_learn_method": {
						"name": "level-up",
						"url": "https://pokeapi.co/api/v2/move-learn-method/1/"
					},
					"version_group": {
						"name": "crystal",
						"url": "https://pokeapi.co/api/v2/version-group/4/"
					}
				},
				{
					"level_learned_at": 1,
					"move_learn_method": {
						"name": "level-up",
						"url": "https://pokeapi.co/api/v2/move-learn-method/1/"
					},
					"version_group": {
						"name": "ruby-sapphire",
						"url": "https://pokeapi.co/api/v2/version-group/5/"
					}
				},
				{
					"level_learned_at": 1,
					"move_learn_method": {
						"name": "level-up",
						"url": "https://pokeapi.co/api/v2/move-learn-method/1/"
					},
					"version_group": {
						"name": "emerald",
						"url": "https://pokeapi.co/api/v2/version-group/6/"
					}
				},
				{
					"level_learned_at": 1,
					"move_learn_method": {
						"name": "level-up",
						"url": "https://pokeapi.co/api/v2/move-learn-method/1/"
					},
					"version_group": {
						"name": "firered-leafgreen",
						"url": "https://pokeapi.co/api/v2/version-group/7/"
					}
				},
				{
					"level_learned_at": 1,
					"move_learn_method": {
						"name": "level-up",
						"url": "https://pokeapi.co/api/v2/move-learn-method/1/"
					},
					"version_group": {
						"name": "diamond-pearl",
						"url": "https://pokeapi.co/api/v2/version-group/8/"
					}
				},
				{
					"level_learned_at": 1,
					"move_learn_method": {
						"name": "level-up",
						"url": "https://pokeapi.co/api/v2/move-learn-method/1/"
					},
					"version_group": {
						"name": "platinum",
						"url": "https://pokeapi.co/api/v2/version-group/9/"
					}
				},
				{
					"level_learned_at": 1,
					"move_learn_method": {
						"name": "level-up",
						"url": "https://pokeapi.co/api/v2/move-learn-method/1/"
					},
					"version_group": {
						"name": "heartgold-soulsilver",
						"url": "https://pokeapi.co/api/v2/version-group/10/"
					}
				},
				{
					"level_learned_at": 1,
					"move_learn_method": {
						"name": "level-up",
						"url": "https://pokeapi.co/api/v2/move-learn-method/1/"
					},
					"version_group": {
						"name": "black-white",
						"url": "https://pokeapi.co/api/v2/version-group/11/"
					}
				},
				{
					"level_learned_at": 1,
					"move_learn_method": {
						"name": "level-up",
						"url": "https://pokeapi.co/api/v2/move-learn-method/1/"
					},
					"version_group": {
						"name": "colosseum",
						"url": "https://pokeapi.co/api/v2/version-group/12/"
					}
				},
				{
					"level_learned_at": 1,
					"move_learn_method": {
						"name": "level-up",
						"url": "https://pokeapi.co/api/v2/move-learn-method/1/"
					},
					"version_group": {
						"name": "xd",
						"url": "https://pokeapi.co/api/v2/version-group/13/"
					}
				},
				{
					"level_learned_at": 1,
					"move_learn_method": {
						"name": "level-up",
						"url": "https://pokeapi.co/api/v2/move-learn-method/1/"
					},
					"version_group": {
						"name": "black-2-white-2",
						"url": "https://pokeapi.co/api/v2/version-group/14/"
					}
				},
				{
					"level_learned_at": 1,
					"move_learn_method": {
						"name": "level-up",
						"url": "https://pokeapi.co/api/v2/move-learn-method/1/"
					},
					"version_group": {
						"name": "x-y",
						"url": "https://pokeapi.co/api/v2/version-group/15/"
					}
				},
				{
					"level_learned_at": 1,
					"move_learn_method": {
						"name": "level-up",
						"url": "https://pokeapi.co/api/v2/move-learn-method/1/"
					},
					"version_group": {
						"name": "omega-ruby-alpha-sapphire",
						"url": "https://pokeapi.co/api/v2/version-group/16/"
					}
				},
				{
					"level_learned_at": 1,
					"move_learn_method": {
						"name": "level-up",
						"url": "https://pokeapi.co/api/v2/move-learn-method/1/"
					},
					"version_group": {
						"name": "sun-moon",
						"url": "https://pokeapi.co/api/v2/version-group/17/"
					}
				},
				{
					"level_learned_at": 1,
					"move_learn_method": {
						"name": "level-up",
						"url": "https://pokeapi.co/api/v2/move-learn-method/1/"
					},
					"version_group": {
						"name": "ultra-sun-ultra-moon",
						"url": "https://pokeapi.co/api/v2/version-group/18/"
					}
				},
				{
					"level_learned_at": 1,
					"move_learn_method": {
						"name": "level-up",
						"url": "https://pokeapi.co/api/v2/move-learn-method/1/"
					},
					"version_group": {
						"name": "lets-go-pikachu-lets-go-eevee",
						"url": "https://pokeapi.co/api/v2/version-group/19/"
					}
				},
				{
					"level_learned_at": 1,
					"move_learn_method": {
						"name": "level-up",
						"url": "https://pokeapi.co/api/v2/move-learn-method/1/"
					},
					"version_group": {
						"name": "sword-shield",
						"url": "https://pokeapi.co/api/v2/version-group/20/"
					}
				}
			]
		}
	]



	let displayJSX;
	switch (displayType) {
		case "overview":
			displayJSX = (<>
				<ul className='list-group py-2'>
					<li className="list-group-item fw-bold">Type:</li>
					{pokemonType.map(e => <li className="list-group-item" key={e.type.name}>{e.type.name}</li>)}
				</ul>
				<ul className='list-group py-2'>
					<li className="list-group-item fw-bold">Abilities:</li>
					{pokemonAbilities.map(e => <li className="list-group-item" key={e.ability.name}>{e.ability.name}</li>)}
				</ul>
			</>)
			break;
		case "stats":
			displayJSX = (<>
				{pokemonStats.map(e => <li className="list-group-item fw-bold" key={e.stat.name}>{e.stat.name.replace("-", " ").toUpperCase()}: <span className='fw-normal'>{e.base_stat}</span></li>)}
			</>)
			break;
		case "moves":
			displayJSX = (<>
				<li className="list-group-item fw-bold">Moves:</li>
				{pokemonMoves.map(e => <li className="list-group-item fw-bold" key={e.move.name}><span className='fw-normal'>{e.move.name}</span></li>)}
			</>)
			break;
		case "physical":
			displayJSX = (<>
				<li className="list-group-item fw-bold">Height: <span className="fw-normal">{pokemonHeight} metres</span></li>
				<li className="list-group-item fw-bold">Weight: <span className="fw-normal">{pokemonWeight} kilograms</span></li>
			</>)
			break;
		default:
			displayJSX = <p className='text-center text-warning'>Loading...</p>
			break;
	}

	return (
		<div className='card bg-light' style={{ width: "100%" }}>
			<h1 className="card-title text-center">{pokemonName}</h1>
			<img src={imgurl} alt="POKEMON NAME" style={{maxHeight: "50%", objectFit: "contain"}}/>
			<div className="card-body overflow-scroll">
				<ul className="list-group list-group-flush">
					{displayJSX}
				</ul>
			</div>

			<div className="card-footer">
				<ul className="nav nav-tabs card-header-tabs">
					<li className="nav-item">
						<button className={"nav-link " + (displayType === "overview" ? "active" : "")} aria-current={displayType === "overview" ? "true" : "false"} value="overview" onClick={changeDisplay}>Overview</button>
					</li>
					<li className="nav-item">
						<button className={"nav-link " + (displayType === "stats" ? "active" : "")} aria-current={displayType === "stats" ? "true" : "false"} value="stats" onClick={changeDisplay}>Stats</button>
					</li>
					<li className="nav-item">
						<button className={"nav-link " + (displayType === "moves" ? "active" : "")} aria-current={displayType === "moves" ? "true" : "false"} value="moves" onClick={changeDisplay}>Moves</button>
					</li>
					<li className="nav-item">
						<button className={"nav-link " + (displayType === "physical" ? "active" : "")} aria-current={displayType === "physical" ? "true" : "false"} value="physical" onClick={changeDisplay}>Physical</button>
					</li>
				</ul>
			</div>
		</div>
	)
}
