import React from 'react';
import './NavBar.scss';
import { BrowserRouter as Router, Link } from "react-router-dom";

function NavBar(props) {



  return (
    <div className="NavBar">
      <div className="container-fluid app-bg">
        <div className="container container-nav p-0 d-flex justify-content-between align-items-center">
          <div className="logo-container">Hola</div>
          <nav className="navbar navbar-light bg-light justify-content-between w-50 app-bg">
            <Link to="/" className="navbar-brand text-white">Inicio</Link>
            <Link to="#" className="navbar-brand text-white">Lorem Ipsum</Link>
            <Link to="/login" className="navbar-brand text-white">Inicia sesión</Link>

            <Link to="/register" className="navbar-brand text-white">Registrarse</Link>

            {props.isLoged ? <Link to="#" className="navbar-brand text-white">Icono</Link> : <></>}

          </nav>

        </div>
      </div>
    </div>
  )

}

export default NavBar;