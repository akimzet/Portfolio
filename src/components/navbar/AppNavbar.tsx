import * as React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const AppNavbar: React.FC = () => {
    return (
        <Navbar className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav" expand="lg">
            <div className="container">
                <Navbar.Brand href="#home" className="navbar-brand">
                    Andrew Kim
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler navbar-toggler-right">
                    Menu
                    <i className="fas-fa-bar" />
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link className="nav-link" href="#about">
                            About
                        </Nav.Link>
                        <Nav.Link className="nav-link" href="#project">
                            Projects
                        </Nav.Link>
                        <Nav.Link className="nav-link" href="#contact">
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default AppNavbar;
