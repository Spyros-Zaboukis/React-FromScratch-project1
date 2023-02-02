import React from 'react';

const Logo = () => {
    return (
        <div className='logo'>
            {/* Les images importés depuis img sont disponibles dans public */}
            <img src="./logo192.png" alt='Logo du site'/>
            <h3>React World</h3>
        </div>
    );
};

export default Logo;