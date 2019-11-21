import React from 'react';
import './bootstrap.css';
import './App.css'
import logo from './logo.png';
import PasarALogIn from './LogIn'
function App() {
  return (
    <div className="main-container text-light">
      
      <img src={logo} className="App-logo h-50" alt="logo"/>
      <h2 >Trabajo Práctico Obligatorio</h2>
      <h4>
        <i>Aplicaciones Interactivas</i>
      </h4>
      <button id="boton" onClick={PasarALogIn}>Iniciar</button>

    </div>
  );
}

export default App;
