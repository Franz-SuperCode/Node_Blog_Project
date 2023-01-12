import "./Navbar.css"
import React, { useState } from 'react';
import { Link } from "react-router-dom";



function Navbar() {

    {/* <Link to="/">Home</Link> */ }

    return (
        <nav className="navbar">
            <img src="./foto_franz.jpeg" alt="franz_img"></img>
            <p>My Blog</p>

        </nav>
    )
}


export default Navbar;
