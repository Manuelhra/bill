import React, { useState } from 'react'
import PropTypes from 'prop-types';
import shortid from 'shortid'

import Error from './Error';

const Form = ({ guardarGasto, guardarCrearGasto }) => {
const [state, setState] = useState({
  name: '',
  quantity: 0
});

const [error, setError] = useState(false);

const handleSubmit = (event) => {
  event.preventDefault();

  // Validar

  if (state.name.trim() === '' || state.quantity < 1 || isNaN(state.quantity)) {
    setError(true);
    return;
  };

  setError(false);

  // COnstruir el gasto
  const gasto = {
    name: state.name,
    quantity: state.quantity,
    id: shortid.generate(),
  };


  // pasar el gasto al componente principal
  guardarGasto(gasto);
  guardarCrearGasto(true);

  // resetear el form

  setState({
    name: '',
    quantity: 0,
  });
}

  return ( 
    <form onSubmit={handleSubmit}>
      <h2>Agrega tus gasto</h2>

      {error && <Error message="Ambos campos son obligatorios o presupuesto incorrecto" />}

      <div className="campo">
        <label>Nombre Gasto</label>
        <input 
        type="text"
        className="u-full-width"
        placeholder="Ej. Transporte"
        onChange={(event) => setState({
          ...state,
          name: event.target.value,
        })}
        value={state.name}
        
        />
      </div>
      <div className="campo">
      <label>Cantidad gasto</label>
        <input 
        type="number"
        className="u-full-width"
        placeholder="Ej. 300"
        onChange={(event) => setState({
          ...state,
          quantity: !event.target.value ? '' : parseInt(event.target.value),
        })}
        value={state.quantity}
        
        />
      </div>

      <input 
      type="submit"
      className="button-primary u-full-width"
      value="Agregar gasto"
      />
    </form>
   );
}

Form.propTypes = {
  guardarGasto: PropTypes.func,
  guardarCrearGasto: PropTypes.func,
};
 
export default Form;