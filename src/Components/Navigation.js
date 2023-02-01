import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='Navigation'>
            <ul>
                <NavLink to='/'>
                    <li>Accueil</li>
                </NavLink>
                <NavLink to='/About'>
                    <li>About</li>
                </NavLink>
            </ul>
            
        </div>
    );
};

export default Navigation;