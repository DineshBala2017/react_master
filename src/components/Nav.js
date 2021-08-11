import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

const Nav = ({ setlibraryState,libraraystate }) =>{

    return(
        <nav className="nav-bar">
            <h1>Waves-Diya</h1>
            <button onClick={()=>setlibraryState(!libraraystate)}>
                 Library 
            <FontAwesomeIcon icon={faMusic}/>
            </button>
        </nav>
    )
}

export default Nav;