import React from 'react';

import './Footer.scss';

function Footer() {

    return (
        <>
            <div className="Footer mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-md-2 col-lg-2 col-xl-2">
                            <ul className="list-group">
                                <li className="list-group-item font-weight-bold">Lorem Ipsum</li>
                                <li className="list-group-item">Lorem Ipsum</li>
                                <li className="list-group-item">Lorem Ipsum</li>
                            </ul>

                        </div>
                        <div className="col-xs-12 col-md-2 col-lg-2 col-xl-2">
                            <ul className="list-group">
                                <li className="list-group-item">Lorem Ipsum</li>
                                <li className="list-group-item">Lorem Ipsum</li>
                                <li className="list-group-item">Lorem Ipsum</li>
                            </ul>
                        </div>
                        <div className="col-md-5 col-lg-5 col-xl-5">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <div className="send-footer">
                                <input type="text" className="w-100" name="message" id="message" />
                                <button className="btn app-btn" type="button">Enviar</button>
                            </div>

                            <div className="social-footer-bar">
                                <span>Inst</span>
                                <span>Facebook</span>
                                <span>YT</span>

                            </div>

                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-3">
                            Logo de la pagina
                    </div>
                    </div>
                </div>


            </div>
            <div className="footer-bar app-bg d-flex justify-content-center align-items-center">Logo en Blanco</div>
        </>
    );

}

export default Footer;