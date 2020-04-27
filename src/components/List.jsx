import React from 'react'

import PropTypes from 'prop-types';

import Gasto from './Gasto';

const List = ({ gastos }) => (
 <div className="gastos-realizados">
   <h2>Listado</h2>
   {gastos.map((gasto) => (
     <Gasto 
     key={gasto.id}
      {...gasto}
     />
   ))}

 </div>
)

List.propTypes = {
  name: PropTypes.array,
};
 
export default List;