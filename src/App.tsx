import * as React from 'react';
import AppNavbar from './components/navbar/AppNavbar';
import Header from './components/header/Header';
import Project from './components/project/Project';
import Contact from './components/contact/Contact';

const App: React.FC = () => {
    return (
        <div className="container-flex">
            <AppNavbar />
            <Header />
            <Project />
            <Contact />
            <footer className="bg-black small text-center text-white-50"></footer>
        </div>
    );
};

export default App;
