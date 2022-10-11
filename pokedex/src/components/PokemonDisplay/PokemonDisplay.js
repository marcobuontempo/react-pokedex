import React from 'react'
import { useState } from 'react'

import './PokemonDisplay.css'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Nav from 'react-bootstrap/Nav';
import Stack from 'react-bootstrap/Stack';


export default function PokemonDisplay() {

	const [displayType, setDisplayType] = useState("overview")

	const changeDisplay = (key) => {
		setDisplayType(key)
	}

	const navItems = ["Overview", "Stats", "Moves", "Physical"]
	const getNavbar = (navItems) => {
		return (
			<Nav variant="tabs" defaultActiveKey={navItems[0].toLowerCase()} onSelect={changeDisplay}>
				{ navItems.map(e => <Nav.Item key={e.toLowerCase()}><Nav.Link as="button" href={e.toLowerCase()}>{e}</Nav.Link></Nav.Item>)}
			</Nav>
		)
	}

	const getDisplayContent = (displayType) => {
		switch (displayType) {
			case "overview":
				return (<>
					<ListGroup>
						<ListGroup.Item className='fw-bold'>Type:</ListGroup.Item>
						{pokemonType.map(e => <ListGroup.Item key={e.type.name}>{e.type.name}</ListGroup.Item>)}
					</ListGroup>
					<ListGroup>
						<ListGroup.Item className='fw-bold'>Abilities:</ListGroup.Item>
						{pokemonAbilities.map(e => <ListGroup.Item key={e.ability.name}>{e.ability.name}</ListGroup.Item>)}
					</ListGroup>
				</>)
			case "stats":
				return (
					<ListGroup>
						{pokemonStats.map(e => <ListGroup.Item className='fw-bold' key={e.stat.name}>{e.stat.name.replace("-", " ").toUpperCase()}: <span className='fw-normal'>{e.base_stat}</span></ListGroup.Item>)}
					</ListGroup>
				)
			case "moves":
				return (
					<ListGroup>
						<li className="list-group-item fw-bold">Moves:</li>
						{pokemonMoves.map(e => <ListGroup.Item className="fw-bold" key={e.move.name}><span className='fw-normal'>{e.move.name}</span></ListGroup.Item>)}
					</ListGroup>)
			case "physical":
				return (
					<ListGroup>
						<ListGroup.Item className="fw-bold">Height: <span className="fw-normal">{pokemonHeight} metres</span></ListGroup.Item>
						<ListGroup.Item className="fw-bold">Weight: <span className="fw-normal">{pokemonWeight} kilograms</span></ListGroup.Item>
					</ListGroup>)
			default:
				return <p className='text-center text-error'>ERROR</p>
		}
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


	return (
		<Card bg='light' className='PokemonDisplay'>
			<Card.Title as='h1' className="text-center">{pokemonName}</Card.Title>
			<Card.Img variant="top" src={imgurl} style={{ maxHeight: "30%", objectFit: "contain" }} />

			<Card.Body className='overflow-scroll'>
				<Stack gap={3}>
					{getDisplayContent(displayType)}
				</Stack>
			</Card.Body>

			<Card.Footer>
				{getNavbar(navItems)}
			</Card.Footer>
		</Card >
	)
}
