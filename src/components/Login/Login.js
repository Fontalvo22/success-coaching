import React, { useState } from 'react';
import './Login.scss';
import { AttemptLogin } from './LoginHelper/LoginHelper';
import { Link, Redirect } from 'react-router-dom';

function Login(props) {
  const [email, setEmail] = useState(null);

  return (
    <div className="Login container">
      <h2 className="text-center">Inicia sesión</h2>
      <div className="row justify-content-center">
        <div className="col-xs-12 col-md-4 col-lg-4 col-xl-4">

          <div className="form-group">
            <label htmlFor="userName" className="d-block input-title">Nombre de usuario</label>
            <input type="text" className="input-app w-100" id="user" onChange={event => { setEmail(event.target.value); }} />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="d-block input-title">Contraseña</label>
            <input type="password" className="input-app w-100" id="password" />
          </div>
          <div className="form-group text-center pt-4">
            <p className="forgot-password input-title">Olvidaste tu contraseña? <Link to="/forgot-password" className="click-here">Haz click aquí</Link></p>
          </div>

          <div className="form-group text-center pt-4 mb-5 pb-4">
            <button className="btn app-btn" type="button" onClick={() => {
              const validate = AttemptLogin(email, '12345678', props.setter);

              if (validate) {
                window.location = "/my-account";
              }
            }
            }>Inicia sesión</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;