import * as React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { Navbar, Nav } from 'react-bootstrap';

interface State {
    activeClass: string;
}

const scrollToTop = () => {
    scroll.scrollToTop();
};

export default class AppNavbar extends React.Component<{}, State> {
    constructor(props) {
        super(props);
        this.state = {
            activeClass: '',
        };
    }
    componentDidMount() {
        window.addEventListener('scroll', () => {
            let activeClass = 'navbar-shrink';
            if (window.scrollY === 0) {
                activeClass = '';
            }
            this.setState({ activeClass });
        });
    }
    render() {
        return (
            <Navbar
                className={`navbar navbar-expand-lg navbar-light fixed-top ${this.state.activeClass}`}
                id="mainNav"
                expand="lg"
            >
                <div className="container">
                    <Navbar.Brand className="navbar-brand" onClick={scrollToTop}>
                        Andrew Kim
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler navbar-toggler-right">
                        Menu
                        <i className="fas-fa-bar" />
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Link
                                className="nav-link"
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                About
                            </Link>
                            <Link
                                className="nav-link"
                                activeClass="active"
                                to="project"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Project
                            </Link>
                            <Link
                                className="nav-link"
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-560}
                                duration={500}
                            >
                                Contact
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        );
    }
}
