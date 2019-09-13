import * as React from 'react';
import AppNavbar from './components/navbar/AppNavbar';
import Header from './components/header/Header';

const App: React.FC = () => {
    return (
        <div className="container-flex">
            <AppNavbar />
            <Header />
        </div>
    );
};

export default App;
