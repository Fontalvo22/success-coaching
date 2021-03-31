import React from 'react';
import NavSections from '../NavSections/NavSections';

import './MyProfile.scss';
const MyAccountProfile = (props) => {

  const user = JSON.parse(props.user);

  return (
    <div className="MyAccountProfile container">
      <NavSections />

      <div className="row info-container">
        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 left-side">

          <div className="row justify-content-center px-4">
            <div className="user-icon text-center">
              <img src="https://picsum.photos/80/80" className="img-fluid" alt="" />
            </div>

            <div className="text-center mt-3 col-12 frame-btn p-2">
              <p className="d-inline py-1">{user.userName}</p>
            </div>
          </div>


          <div className="edit-profile mt-5 col-12 input-title">
            Editar perfil
          </div>
          <div className="edit-profile mt-5 col-12 input-title">
            Puntos
          </div>
        </div>


        <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-9">
          <section className="user-info">
            <p className="py-2 bg-simple app-title text-center">Datos personales</p>
            <div className="row mt-5">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div className="form-group">
                  <label htmlFor="username" className="my-3 input-title d-block">Nombre de usuario:</label>
                  <input type="text" className="input-app d-block" id="username" />
                </div>

                <div className="form-group">
                  <label htmlFor="lastname" className="my-3 input-title d-block">Apellido:</label>
                  <input type="text" className="input-app" id="lastname" />
                </div>

                <div className="form-group">
                  <label htmlFor="direction" className="my-3 d-block input-title">Dirección:</label>
                  <input type="text" className="input-app" id="direction" />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="d-block my-3 input-title">Email:</label>
                  <input type="text" className="input-app" id="email" />
                </div>


              </div>

              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div className="form-group">
                  <label htmlFor="name" className="my-3 input-title d-block">Nombre:</label>
                  <input type="text" className="input-app" id="name" />
                </div>

                <div className="form-group">
                  <label htmlFor="refercode" className="my-3 input-title d-block">Código de referido:</label>
                  <input type="text" className="input-app" id="refercode" />
                </div>

                <div className="form-group">
                  <label htmlFor="postalcode" className="my-3 input-title d-block">Código Postal:</label>
                  <input type="text" className="input-app" id="postalcode" />
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="d-block my-3 input-title">Número de teléfono:</label>
                  <input type="text" className="input-app" id="phone" />
                </div>


              </div>

            </div>

          </section>
        </div>

      </div>

    </div>
  )

}
export default MyAccountProfile;