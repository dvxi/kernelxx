import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

function NavbarComponent() {
    return(
        <Navbar bg="black" variant="dark" expand="lg" className="sticky-top">
        <Container className="py-3">
            <Navbar.Brand href="#top" className="d-flex align-items-center">
                <img
                alt=""
                src="/kernel.svg"
                width="40"
                height="40"
                className="d-inline-block align-top me-2"
                />
                KERNEL
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#top">Strona Główna</Nav.Link>
                    <Nav.Link href="#info">Opis</Nav.Link>
                    <Nav.Link href="#agenda">Agenda</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default NavbarComponent;