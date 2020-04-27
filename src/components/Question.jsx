import React, { useState } from 'react'

import Error from './Error';

const Question = ({ setPresupuesto, setRestante, setMostrarPregunta }) => {
  const [quantity, setQuantity] = useState(0);
  const [error, setError] = useState(false);
  // Función que lee el presupuesto

  const handleChange = (event) => {
    setQuantity(parseInt(event.target.value, 10));
  }

  // Submit para definir el presupuesto

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validar, el método isNan() nos permite sabes si algo es nulo.

    if (quantity < 1 || isNaN(quantity)) {
      setError(true);
      return;
    }

    // Si se pasa la validación
    setError(false);
    setPresupuesto(quantity);
    setRestante(quantity);
    setMostrarPregunta(false);
  }
  return (  
    <>
    <h2>Coloca tu presupuesto</h2>

    {error && <Error message="El presupuesto es incorrecto" />}

    <form onSubmit={handleSubmit}>
      <input 
      type="number"
      className="u-full-width"
      placeholder="Coloca tu presupuesto"
      onChange={handleChange}
      />
      <input
       type="submit"
        value="Definir presupuesto"
        className="button-primary u-full-width"
       />
      </form>
    </>
  );
}
 
export default Question;