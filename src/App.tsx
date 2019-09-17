import * as React from 'react';
import AppNavbar from './components/navbar/AppNavbar';
import Header from './components/header/Header';
import Contact from './components/contact/Contact';

const App: React.FC = () => {
    return (
        <div className="container-flex">
            <AppNavbar />
            <Header />
            <Contact />
        </div>
    );
};

export default App;
