import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

function NavbarComponent() {
    return(
        <Navbar expand="lg" variant="dark" className="text-white fixed-top rounded">
            <Container fluid className="p-3 m-2 mx-3 rounded" style={{
                background: 'rgba(0, 0, 0, 0.8)',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(5px)',
                border: '1px solid rgba(0, 0, 0, 0.3)',
                color: '#fff'
            }}>
                <Navbar.Brand href="#top" className="d-flex align-items-center">
                    <img
                    alt=""
                    src="./kernel.svg"
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