import React from 'react';

import girlMobile from '../../assets/img/mobile-girl.png';
import girl from '../../assets/img/girl-desktop.png';

import '../../style/sectionMessage.scss';

export const SectionMessage =()=>{
    return<div>
         <section className="viewMobileOcult">
                    <div className="text-mobile">
                        <p className="nuevoFont">!NUEVO¡</p>
                        <p className="seguroFont">Seguro Vehicular</p>
                        <p className="textRed">Tracking</p>
                        <p className="cuentanosFont">Cuentanos donde le haras seguimiento a tu seguro</p>
                    </div>
                    <div className="viewMobileOcult--ImageGirl">
                    <img src={girlMobile} alt="girl" />
                    </div>
                </section>
                <section>
                    <div className="loginDesktop">
                        <div> <img className="girl" src={girl} alt="girl" />
                        </div>
                        <div className="viewDesktop__lateral">
                            <p className="nuevoFont">!NUEVO¡</p>
                            <div className="div_p_viewDesktop">
                                <p className="seguroDesktopfont">Seguro </p>
                                <p className="textRed">Vehicular</p>
                            </div>
                            <p className="textRed">Tracking</p>
                            <p className="cuentanosFont">Cuentanos donde le haras seguimiento a tu seguro</p>
                        </div>
                    </div>
                    <p className="footer"> © 2020 RIMAC Seguros y Reaseguros.</p>
                </section>
    </div>
}