import React from 'react';
import boy from '../../assets/img/Group.png';
import '../../styles/card.scss';

export const Card2 = () => {

  return (
    <div className="card">
      <div className="textCard">
        <div className="text-placa">Placa: C2U-114</div>
        <div className="text-car">Wolkswagen 2019</div>
        <div className="text-car">Golf</div >
      </div>
        <img src={boy} alt="boy"  className="imageBoy"/>
    </div>);
}
