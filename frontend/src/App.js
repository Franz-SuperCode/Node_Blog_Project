// In diese App Datei kommen alle Komponenten. Und diese App Datei wird bei der index.js verlinkt

import "./App.css";
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Formular from "./components/Formular";
import Adminseite from "./pages/Adminseite";
import Detailseite from "./pages/Detailseite";





function App() {

  return (
    <div>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/admin" element={<Adminseite />}></Route>
          <Route path="/detail/:id" element={<Detailseite />}></Route>
        </Routes>
      </Router>
    </div>



  );

}
export default App;
