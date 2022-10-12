import React from 'react'
import './NavBar.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';


export default function NavBar() {

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
						<Nav className="justify-content-end flex-grow-1 pe-3">
							<Nav.Link href="#action1">Pokemon</Nav.Link>
							<Nav.Link href="#action2">About</Nav.Link>
						</Nav>
					</Offcanvas.Body>
				</Navbar.Offcanvas>
				<Navbar.Brand href="#">Pokedex</Navbar.Brand>
			</Container>
		</Navbar>
		)
}
