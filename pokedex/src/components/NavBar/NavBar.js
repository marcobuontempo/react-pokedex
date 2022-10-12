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
		<Navbar bg="light" expand={expand}>
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
						<Nav className="justify-content-end flex-grow-1 pe-3" onSelect={selectMenuItem}>
							<Nav.Item key='PokemonList'><Nav.Link as="button" href='PokemonList'>Pokemon</Nav.Link></Nav.Item>
							<Nav.Item key='About'><Nav.Link as="button" href='About'>About</Nav.Link></Nav.Item>
						</Nav>
					</Offcanvas.Body>
				</Navbar.Offcanvas>
				<Navbar.Brand href="#">Pokedex</Navbar.Brand>
			</Container>
		</Navbar>
		)
}
