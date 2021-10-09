import React from 'react';
import PropTypes from 'prop-types';
import '../styles/suma.scss';

export const Suma = ({count, setCount}) => {

  return (
    <div className="suma">
      <div className="div1">
        <p className="sumaAsegurada" >Indica la suma asegurada</p>
        <div className="valorSuma">
          <div className="min"> MIN $12.500</div>
          <div className="max"> MAX $16.500</div>
        </div>
      </div>
      <div className="div2">
        <button
          className="button-menos"
          onClick={() => {
            if (count > 12500) {
              setCount(count - 100);
            }
          }}
        >-</button>
        <div className="cantidad">${count}</div>
        <button
          className="button-mas"
          onClick={() => {
            if (count < 16500) {
              setCount(count + 100);
            }

          }}
        >+</button>
      </div>
    </div>
  );
}

Suma.propTypes = {
  count: PropTypes.number,
  setCount :  PropTypes.func
};