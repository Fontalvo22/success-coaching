import React from 'react';
import LateralMenu from '../LateralMenu/LateralMenu';

import './MyBanks.scss';
const MyBanks = () => {

  return (
    <div className="MyBanks container mt-5 mb-4">
      <div className="row text-center justify-content-center">
        <div className="col-12 col-md-6 app-bg text-white mb-5 p-1">Configuración</div>
      </div>

      <div className="row">
        <LateralMenu />
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <section className="resumen-lection app-frame px-4 py-5">
            <div className="row text-center justify-content-center border-bottom pb-4">
              <button className="col-10 app-btn text-white mb-4 p-2 btn-bank-info">Información bancaria para descuento de comisión</button>
            </div>

            <div className="row text-center justify-content-center border-top pt-5">
              <button className="col-4 app-btn text-white mb-4 p-2 btn-bank-info">Paypal</button>
            </div>


          </section>
        </div>
      </div>
    </div>
  )

}


export default MyBanks;