import React from 'react';

import Form from 'react-bootstrap/Form';

import './Register.scss';

function Register() {

  return (
    <div className="Register container">
      <h2 className="text-center">Regístrate</h2>
      <div className="row">
        <div className="col-12 justify-space-between">
          <div className="form-group row justify-content-center">
            <div className="col-12 col-md-4 col-4 d-flex justify-content-center inputs-container">
              <div className="d-inline w-100">
                <label htmlFor="userName" className="d-block input-title">Nombre de usuario:</label>
                <input type="text" className="input-app" id="userName" />
              </div>
            </div>

            <div className="col-12 col-md-4 col-4 d-flex justify-content-center inputs-container">
              <div className="d-inline w-100">
                <label htmlFor="name" className="d-block input-title label-name">Nombre</label>
                <input type="text" className="input-app" id="name" />
              </div>
            </div>
          </div>
          <div className="form-group row justify-content-center">
            <div className="col-12 col-md-4 col-4 d-flex justify-content-center inputs-container">
              <div className="d-inline w-100">
                <label htmlFor="apellido" className="mt-5 d-block input-title">Apellido</label>
                <input type="text" className="input-app" id="apellido" />
              </div>
            </div>
            <div className="col-12 col-md-4 col-4 d-flex justify-content-center inputs-container">
              <div className="d-inline w-100">
                <label htmlFor="refered-code" className="mt-5 d-block input-title">Código de referido</label>
                <input type="text" className="input-app" id="refered-code" />
              </div>
            </div>
          </div>

          <div className="form-group row justify-content-center">
            <div className="col-12 col-md-4 col-4 d-flex justify-content-center inputs-container">
              <div className="d-inline w-100">
                <label htmlFor="direccion" className="mt-5 d-block input-title">Dirección</label>
                <input type="text" className="input-app" id="direccion" />
              </div>
            </div>
            <div className="col-12 col-md-4 col-4 d-flex justify-content-center inputs-container">
              <div className="d-inline w-100">
                <label htmlFor="email" className="mt-5 d-block input-title">Email</label>
                <input type="text" className="input-app" id="email" />
              </div>
            </div>
          </div>

          <div className="form-group row justify-content-center">
            <div className="col-12 col-md-4 col-4 d-flex justify-content-center inputs-container">
              <div className="d-inline w-100">
                <label htmlFor="postal-code" className="mt-5 d-block input-title">Código postal</label>
                <input type="number" className="input-app" id="postal-code" />
              </div>
            </div>
            <div className="col-12 col-md-4 col-4 d-flex justify-content-center inputs-container">
              <div className="d-inline w-100">
                <label htmlFor="password" className="mt-5 d-block input-title">contraseña</label>
                <input type="password" className="input-app" id="password" />
              </div>
            </div>
          </div>

          <div className="from-group row justify-content-center">
            <div className="col-12 col-md-4 col-4 d-flex justify-content-center inputs-container">
              <div className="d-inline w-100">
                <label htmlFor="repeat-password" className="mt-5 d-block input-title">Repetir contraseña</label>
                <input type="password" className="input-app" id="repeat-password" />
              </div>
            </div>
            <div className="col-12 col-md-4 col-4 d-flex justify-content-center inputs-container">
              <div className="d-inline w-100">
                <label htmlFor="repeat-email" className="mt-5 d-block input-title">Repetir correo</label>
                <input type="text" className="input-app" id="repeat-email" />
              </div>
            </div>
          </div>

          <div className="from-group row justify-content-center">
            <div className="col-12 col-md-4 col-4 d-flex justify-content-center inputs-container">
              <div className="d-inline w-100">
                <label htmlFor="phone" className="mt-5 d-block input-title">Número de teléfono</label>
                <input type="number" className="input-app" id="phone" />
              </div>
            </div>
            <div className="col-12 col-md-4 d-none d-md-flex justify-content-center inputs-container invisible">
              <div className="d-inline w-100">
                <label htmlFor="relleno" className="mt-5 d-block input-title">relleno</label>
                <input type="text" className="input-app" id="Relleno" />
              </div>
            </div>
          </div>



          <div className="from-group row justify-content-center switch-container">
            <div className="col-6 col-md-4 d-flex justify-content-center inputs-container">
              <Form>
                <Form.Check
                  type="switch"
                  id="terms"
                  className="input-title"
                  label="Términos y condiciones"
                />

              </Form>

            </div>
            <div className="col-6 col-md-4 row justify-content-center">

              <Form>
                <Form.Check
                  type="switch"
                  id="accept-register"
                  className="input-title"
                  label="Acepto registrarme"
                />

              </Form>
            </div>
          </div>

          <div className="from-group row justify-content-center mt-5">
            <button className="app-btn">Registrarse</button>

          </div>
        </div>

      </div>
    </div>

  )

}

export default Register;