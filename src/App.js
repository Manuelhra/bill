import React, { useState, useEffect } from 'react';

import Question from './components/Question';
import Form from './components/Form';
import List from './components/List';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {

  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [mostrarPregunta, setMostrarPregunta] = useState(true);
  const [gastos, guardarGastos] = useState([]);
  const [gasto, guardarGasto] = useState({});
  const [crearGasto, guardarCrearGasto] = useState(false);
  // useEffect que actualiza el restante
  useEffect(() => {

    // agrega el nuevo presupuesto
    if (crearGasto) {
      guardarGastos([
        ...gastos,
        gasto
      ]);

      // restar del presupuesto actual

      const presupuesto = restante - gasto.quantity
      setRestante(presupuesto);
      // Resetear a false
      guardarCrearGasto(false);
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gasto])


  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>
        
        <div className="contenido-principal contenido">
          {
            mostrarPregunta
            ? (
            <Question 
                setPresupuesto={setPresupuesto}
                setRestante={setRestante}
                setMostrarPregunta={setMostrarPregunta}
            />
              )
            
            : (
            <div className="row">
                <div className="one-half column">
                  <Form 
                  guardarGasto={guardarGasto}
                  guardarCrearGasto={guardarCrearGasto}
                  />
                </div>

                <div className="one-half column">
                  <List 
                  gastos={gastos}
                  />

                  <ControlPresupuesto
                    presupuesto={presupuesto}
                    restante={restante}
                  />
                </div>
              
            </div>
              )
          }

        </div>
      </header>
    </div>
  );
}

export default App;
