import React, { useState } from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';

function AttemptLogin() {

  //Validar campos de formulario
  //hacer peticion API para autenticarse

  const [email, setEmail] = useState(null);

  let response = true
  console.log(email);

  if (response) {
    localStorage.setItem('token', 2);
    console.log(localStorage.getItem('token'));
  } else {
    console.log('algo ha fallado');
  }

}

function Login() {

  return (
    <div className="Login container">
      <h2 className="text-center">Inicia sesión</h2>
      <div className="row justify-content-center">
        <div className="col-xs-12 col-md-4 col-lg-4 col-xl-4">

          <div className="form-group">
            <label htmlFor="userName" className="d-block">Nombre de usuario</label>
            <input type="text" className="input-app w-100" id="user" onChange={() => console.log(this)} />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="d-block">Contraseña</label>
            <input type="password" className="input-app w-100" id="password" />
          </div>
          <div className="form-group text-center pt-4">
            <p className="forgot-password">Olvidaste tu contraseña? <Link to="/forgot-password" className="click-here">Haz click aquí</Link></p>
          </div>

          <div className="form-group text-center pt-4 mb-5 pb-4">
            <button className="btn app-btn" type="button" onClick={event => { console.log(event) }}>Inicia sesión</button>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Login;