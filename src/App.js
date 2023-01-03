import "./App.css";
import freeCodeCampLogo from "./imagenes/freecodecamp-logo.png";
import Boton from "./componentes/Boton";
import Pantalla from "./componentes/Pantalla";
import BotonClear from "./componentes/BotonClear";
import { useState } from 'react'; //Importando el hook useState

function App() {

  const [input, setInput] = useState('');

  const addToChain = num => {
    setInput(input + num);
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          src={freeCodeCampLogo}
          className="freecodecamp-logo"
          alt="Logo de freeCodeCamp"
        />
      </div>
      <div className="contenedor-calculadora">
        <Pantalla input={input} />
        <div className="fila">
          <Boton manejarClic = {addToChain}>1</Boton>
          <Boton manejarClic = {addToChain}>2</Boton>
          <Boton manejarClic = {addToChain}>3</Boton>
          <Boton manejarClic = {addToChain}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic = {addToChain}>4</Boton>
          <Boton manejarClic = {addToChain}>5</Boton>
          <Boton manejarClic = {addToChain}>6</Boton>
          <Boton manejarClic = {addToChain}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic = {addToChain}>7</Boton>
          <Boton manejarClic = {addToChain}>8</Boton>
          <Boton manejarClic = {addToChain}>9</Boton>
          <Boton manejarClic = {addToChain}>x</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic = {addToChain}>=</Boton>
          <Boton manejarClic = {addToChain}>0</Boton>
          <Boton manejarClic = {addToChain}>.</Boton>
          <Boton manejarClic = {addToChain}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
