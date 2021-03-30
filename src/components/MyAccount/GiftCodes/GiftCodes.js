import React from 'react';
import LateralMenu from "../LateralMenu/LateralMenu";
import './GiftCodes.scss';
const GiftCodes = () => {

  return (
    <div className="GiftCodes container mt-5">
      <div className="row text-center justify-content-center">
        <div className="col-12 col-md-6 app-bg text-white mb-4 p-1">Códigos de regalo</div>
      </div>

      <div className="row">
        <LateralMenu />
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <section className="resumen-lection app-frame px-4 py-3">
            <div className="row text-center justify-content-center">
              <div className="col-12 app-bg text-white mb-4 p-1">Comprar Códigos</div>
            </div>

            <div>
              <div className="form-group text-center">
                <input type="radio" name="points" id="500-points" className="mr-4 gift-code-marker" />
                <label htmlFor="500-points" className="app-title">500 Puntos</label>
              </div>
              <div className="form-group text-center">
                <input type="radio" name="points" id="900-points" className="mr-4 gift-code-marker" />
                <label htmlFor="900-points" className="app-title">900 Puntos</label>
              </div>
              <div className="form-group text-center">
                <input type="radio" name="points" id="1000-points" className="mr-4 gift-code-marker" />
                <label htmlFor="1000-points" className="app-title">1000 Puntos</label>
              </div>
              <div className="form-group text-center">
                <input type="radio" name="points" id="1300-points" className="mr-4 gift-code-marker" />
                <label htmlFor="1300-points" className="app-title">1300 Puntos</label>
              </div>
              <div className="form-group text-center">
                <input type="radio" name="points" id="1500-points" className="mr-4 gift-code-marker" />
                <label htmlFor="1500-points" className="app-title">1500 Puntos</label>
              </div>
              <div className="form-group text-center">
                <input type="radio" name="points" id="2000-points" className="mr-4 gift-code-marker" />
                <label htmlFor="2000-points" className="app-title">2000 Puntos</label>
              </div>
            </div>

            <section className="next-lection text-center">
              <button className="btn app-btn">Comprar código</button>
            </section>


          </section>


        </div>

        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 px-0 bg-simple d-flex align-items-center justify-content-center my-refer-code-container">
          <section className="">
            <p className="app-title">Mi código de regalo</p>
            <p className="app-frame app-title">
              as45fc1 sac59sa
            </p>
          </section>
        </div>


      </div>
    </div >
  )

}

export default GiftCodes;