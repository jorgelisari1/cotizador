import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import ArrowBackIos from '@mui/icons-material/ArrowBackIos';
import CheckIcon from '@mui/icons-material/Check';
import { Header } from '../Components/Header';
import { Step2 } from '../Components/Continuar/Step2';
import { Card2 } from '../Components/Continuar/Card2';
import { Suma } from '../Components/Suma';
import { TabsCoberturas } from '../Components/Continuar/TabsCoberturas';

import '../styles/continuar.scss';

export const Continuar = () => {
  const history = useHistory();
  const location = useLocation();
  const placa = location.state.placa || '';
  const [count, setCount] = useState(14300);
  const [monto, setMonto] = useState(20.00);
  const volver = (e) => {
    e.preventDefault();
    history.push('/cotizador')
  }

  const continuar = (e) => {
    e.preventDefault();
    history.replace({
      pathname: `/cotizador/gracias`,
      state: { monto: monto }
    });
  }

  return (
    <div className="home">
      <Header />
      <div className="medio">
        <Step2 className="progress" />
        <div className="mobile-center">
          <div className="saludo-suma-tabs">
            <div className="div-content">
              <div className="saludo">
                <div className="icon-back-father">
                  <div className="icon-back1">
                    <ArrowBackIos style={{ fontSize: '13px', fontWeight: '100', paddingLeft: '3px' }} onClick={(e) => volver(e)}></ArrowBackIos>
                  </div>
                  <p className="text-volver"> VOLVER</p>
                </div>
                <p className="text_saludo1"> ¡Hola,<span style={{ color: '#EF3340' }}> Juan! </span></p>
                <p className="text_saludo"> Mira las coberturas </p>
                <p className="text_saludo2"> Conoce las coberturas para tu plan</p>
              </div>
              <Card2 placa={placa} />
            </div>
            <Suma count={count} setCount={setCount} />
            <TabsCoberturas count={count} monto={monto} setMonto={setMonto} />
          </div>

          <div className="continuar">
            <div className="text-suma-total">
              <div className="text-suma-total-desk">MONTO</div>
              <div>${monto}</div>
              <div className="text-mensuales-desk">mensuales</div>
              <div className="text-incluye">
                El precio incluye:
                <div className="text-incluye2"><CheckIcon className="check-icon-color" /> Llanta de respuesto</div>
                <div className="text-incluye2"><CheckIcon className="check-icon-color" /> Análisis de motor</div>
                <div className="text-incluye2"><CheckIcon className="check-icon-color" /> Aros gratis</div>

              </div>
              <div className="text-suma-total-m">MENSUAL</div>
            </div>
            <button className="button-continuar" onClick={(e) => continuar(e)}>LO QUIERO </button>
          </div>
        </div>
      </div>
    </div>
  );
};
