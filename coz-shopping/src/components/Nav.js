import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import NavModal from './NavModal';


function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="Nav">
            <div className='title-container'>
                <div className='title-logo'>
                    <img className='logo' src={process.env.PUBLIC_URL + 'logo.png'} alt="Logo" />
                    <h2>COZ Shopping</h2>
                </div>
                <div className='hamburger-logo' onClick={() => setIsOpen(!isOpen)}>
                    <img className='hamburger' src={process.env.PUBLIC_URL + 'hamburger.png'} alt="Hamburger" />
                </div>
            </div>
            {isOpen ? <NavModal /> : null}
        </div>
    );
}

export default Nav;


