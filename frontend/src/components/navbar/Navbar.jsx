import "./Navbar.css"
import React, { useState } from 'react';
import { Link } from "react-router-dom";


function Navbar() {

    {/* <Link to="/">Home</Link> */ }

    return (
        <nav>
            <p><Link to="/">Home</Link></p>
            {/* <p><Link to="/kontakt">Kontakt</Link></p>
            <p><Link to="/speisekarte">Speisekarte</Link></p>
            <p><Link to="/oeffnungszeiten">Oeffnungszeiten</Link></p>
            <p><Link to="/galerie">Galerie</Link></p> */}

        </nav>
    )
}


export default Navbar;
