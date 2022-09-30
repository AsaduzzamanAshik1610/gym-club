import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div>
            <nav className='nav-container'>
                <div>
                <FontAwesomeIcon icon={faCoffee} />
                </div>
                <div>
                    <h1>GYM-CLUB</h1>
                </div>
            </nav>
        </div>
    );
};

export default Header;