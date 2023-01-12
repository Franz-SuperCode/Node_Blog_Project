import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Beitrag from "../components/beitrag/Beitrag.jsx"
import Formular from "../components/beitrag/Formular.jsx";
import Navbar from "../components/navbar/Navbar.jsx";
// import Adminseite from "./Adminseite.jsx";


function Adminseite() {



    return (
        <>
            <Link to="/"><p>Zur Startseite</p></Link>
            <Formular />
        </>

    )
}

export default Adminseite