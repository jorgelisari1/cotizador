import React from 'react';
import PropTypes from 'prop-types';
import boy from '../../assets/img/Group.png';
import '../../styles/card.scss';

export const Card2 = ({ placa }) => {

  return (
    <div className="card">
      <div className="textCard">
        <div className="text-placa">Placa: {placa}</div>
        <div className="text-car">Wolkswagen 2019</div>
        <div className="text-car">Golf</div >
      </div>
      <img src={boy} alt="boy" className="imageBoy" />
    </div>);
}

Card2.propTypes = {
  placa: PropTypes.string,
};