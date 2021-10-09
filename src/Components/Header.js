import React from 'react';
import logo from '../assets/img/logo.png';
import phone from '../assets/img/phone.png';
import '../styles/header.scss';
export const Header = () =>
    <div className="header" >
        <div >
            <img className="logo" src={logo} alt="logo" />
        </div>
        <div className="imagenPhone" >
            <div className="Roboto text-duda">¿Tienes alguna duda?</div>
            <img className="phone" src={phone} alt="phone" />
            <div className="Roboto mobile-login">Llámanos</div>
            <div className="Roboto mobile-login2">(01) 411 6001</div>
        </div>
    </div>
    ;