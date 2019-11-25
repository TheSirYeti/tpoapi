import React from 'react';
import './bootstrap.css';
import './App.css'
import logo from './logo.png';
import PasarALogIn from './LogIn'
function App() {
  return (
    <div className="main-container text-light">
      
      <img src={logo} className="App-logo h-50" alt="logo"/>
      <h2>Trabajo Práctico Obligatorio</h2>
      <h4 className="text-center">
        <i>Aplicaciones Interactivas</i>
        <ul>Grupo 2
          <p>Integrantes:
            <li>Masseroni, Ramiro</li>
            <li>Rshaid, Juan Pablo</li>
          </p>
        </ul>
      </h4>
      <button id="boton" onClick={PasarALogIn}>Iniciar</button>

    </div>
  );
}

export default App;
