import React from 'react';
import ArrowBackIos from '@mui/icons-material/ArrowBackIos'
import '../../styles/progress.scss';

export const Step2 = () => {

    return (
        <div className="progress" >
            <div className="icon-back">
                <ArrowBackIos style={{ color: '#E4E8F7', fontSize: '13px', fontWeight: '100', paddingLeft: '3px' }}></ArrowBackIos>
            </div>
            <div className="text-step-1">PASO 2 DE 2</div>
            <div className="linear2"></div>
            <div className="ocultar">
                <div className="horizontal">
                    <div className="circulo2">1</div>
                    <div className="plan">Datos del auto</div>
                </div>
                <div className="borde_discontinuo">
                </div>
                <div className="horizontal">
                    <div className="circulo">2</div>
                    <div className="datos">Arma tu plan</div>
                </div>
            </div>
        </div>
    );
};