import React from 'react';

import './Register.scss';

function Register() {

  return (
    <div className="Register container">
      <h2 className="text-center">Regístrate</h2>

      <div className="row justify-content-center">
        <div className="col-xs-12 col-md-4 col-lg-4 col-xl-4">
          <div className="form-group">
            <label htmlFor="userName d-block">Nombre de usuario:</label>
            <input type="text" className="input-app" id="userName" />

            <label htmlFor="apellido d-block" className="mt-5">Apellido</label>
            <input type="text" className="input-app" id="apellido" />

            <label htmlFor="direccion d-block" className="mt-5">Dirección</label>
            <input type="text" className="input-app" id="direccion" />

            <label htmlFor="email d-block" className="mt-5">Email</label>
            <input type="text" className="input-app" id="email" />

            <label htmlFor="password d-block" className="mt-5">contraseña</label>
            <input type="password" className="input-app" id="password" />

            <label htmlFor="phone d-block" className="mt-5">Número de teléfono</label>
            <input type="number" className="input-app" id="phone" />



          </div>
        </div>
        <div className="col-md-4 col-lg-4 col-xl-4">

          <label htmlFor="name d-block">Nombre</label>
          <input type="text" className="input-app" id="name" />

          <label htmlFor="refered-code d-block" className="mt-5">Código de referido</label>
          <input type="text" className="input-app" id="refered-code" />

          <label htmlFor="postal-code d-block" className="mt-5">Código postal</label>
          <input type="number" className="input-app" id="postal-code" />

          <label htmlFor="repeat-email d-block" className="mt-5">Repetir correo</label>
          <input type="text" className="input-app" id="repeat-email" />

          <label htmlFor="repeat-password d-block" className="mt-5">Repetir contraseña</label>
          <input type="password" className="input-app" id="repeat-password" />


        </div>
        <div className="container d-flex justify-content-around">
          <div>
            <input type="radio" className="d-none" name="accept-terms" id="accept-terms" />
            <label htmlFor="accept-terms" className="label-radio">Términos y condiciones</label>
          </div>

          <div>
            {/*proponer un captcha*/}
            <input type="radio" className="d-none" name="accept-register" id="accept-register" />
            <label htmlFor="accept-register p-3" className="label-radio">
              <i className="radio-button"></i>
              Acepto registrarme

              </label>
          </div>
        </div>

      </div>


    </div >
  )

}

export default Register;