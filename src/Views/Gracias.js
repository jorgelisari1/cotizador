import React from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from '../Components/Header';
import manHappy from '../assets/img/man-happy.png';
import manHappyMobile from '../assets/img/mobile-man-happy.png';

import '../styles/gracias.scss';

export const Gracias = () => {
  const location = useLocation();
  const monto = location.state.monto;
  console.log(monto, 'monto para ser usado en la pagina');
  return (
    <div>
      <Header />
      <div className="two-Colunm">
        <div className="one">
          <img src={manHappyMobile} alt="man Happy" className="img-man-mobile" />
          <img src={manHappy} alt="man Happy" className="img-man" />
        </div>
        <div className="two">
          <div className="text-red">¡Te damos la bienvenida!</div>
          <div className="text-gray">Cuenta con nosotros para proteger tu vehículo</div>
          <div className="text-p">Enviaremos la confirmación de compra de tu Plan Vehícular Tracking a tu correo:
          </div>
          <div className="text-spand"> joel.sanchez@gmail.com</div>
          <button className="btn-gracias" type="button"> CÓMO USAR MI SEGURO </button>
        </div>

      </div>
      <div className="footer-mobile"> © 2021 RIMAC Seguros y Reaseguros.</div>
    </div>
  );
};
