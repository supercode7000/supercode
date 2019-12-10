import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import './navigation.css';


const Navigation = () => {
    return (

        <header className="headerNavigation">
            <Navbar bg="light" expand="lg">
                <Navbar.Brand className="imageNavigationNormal" href="/"><img src="./img/supercode_logo.png" alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="kurse">Kurse</Nav.Link>
                        <Nav.Link href="finanzierung">Finanzierung</Nav.Link>
                        <Nav.Link href="events">Events</Nav.Link>
                        <Nav.Link className="navigationAnmeldung" href="anmeldung">Jetzt anmelden</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>


        </header>

    );
}

export default Navigation;