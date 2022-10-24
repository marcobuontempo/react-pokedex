import React from 'react'
import './NavBar.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';


export default function NavBar(props) {

	const selectMenuItem = (key) => {
		props.setMenuSelected(key)
	}

	const expand = 'xxl'
	return (
		<Navbar bg="light" expand={expand} collapseOnSelect={true}>
			<Container fluid>
				<Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
				<Navbar.Offcanvas
					id={`offcanvasNavbar-expand-${expand}`}
					aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
					placement="start"
				>
					<Offcanvas.Header closeButton>
						<Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
							Menu
						</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body>
						<Nav className="justify-content-end flex-grow-1 pe-3 gap-2" onSelect={selectMenuItem}>
							<Nav.Item key='Home'><Nav.Link as="button" href='Home' className='w-100 btn btn-dark text-light'>Home</Nav.Link></Nav.Item>
							<Nav.Item key='PokemonList'><Nav.Link as="button" href='PokemonList' className='w-100 btn btn-danger text-light'>Pokemon</Nav.Link></Nav.Item>
							<Nav.Item key='About'><Nav.Link as="button" href='About' className='w-100 btn btn-primary text-light'>About</Nav.Link></Nav.Item>
						</Nav>
					</Offcanvas.Body>
				</Navbar.Offcanvas>
				<Navbar.Brand className="poke-font NavBar-logo" onClick={() => selectMenuItem("Home")}>Pokedex</Navbar.Brand>
			</Container>
		</Navbar>
		)
}
