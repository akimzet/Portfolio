import * as React from 'react';
import { Button } from 'react-bootstrap';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="container d-flex h-100 align-items-center">
                <div className="mx-auto text-center">
                    <h1 className="mx-auto my-0 text-uppercase">Software Developer</h1>
                    <h2 className="text-white-50 mx-auto mt-2 mb-5">
                        Hi, I'm Andrew. I design and develop user interfaces and backend services.
                    </h2>
                    <Button href="#about" id="header-btn-primary">
                        Get Started
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Header;
