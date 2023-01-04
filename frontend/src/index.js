// library import
// import yourName from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';

// file import

// bei css import benötigen wir keinen extra namen
import './index.css';

// lokaler import einer Component
import App from './App';

// Diese Zeile müssen wir jetzt nicht unbedingt verstehen
// Hier wird das Root Element erstellt
const root = ReactDOM.createRoot(document.getElementById('root'));


// Hier wird eine React Komponente an die render funktion übergeben
root.render(
  <App />
);