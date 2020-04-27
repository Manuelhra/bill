import React from 'react'

import PropTypes from 'prop-types';

const Gasto = ({ name, quantity }) => (
  <li className="gastos">
    <p>
      {name}
      {' '}
      <span className="gasto">
        $
        {' '}
        {quantity}
      </span>
    </p>
  </li>
)

Gasto.propTypes = {
  name: PropTypes.string,
  quantity: PropTypes.number,
};
 
export default Gasto;