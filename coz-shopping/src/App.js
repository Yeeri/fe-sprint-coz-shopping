import React, { } from 'react';
import Nav from './components/Nav';
import Footer from "./components/Footer";
import Main from "./pages/Main";
import "./App.css";
import { Router } from 'react-router-dom';

function App() {
    return (
      <Router>
        <div>
            <Nav />

            <Main />

            <Footer />
        </div>
      </Router>  
    );
}

export default App;

