import React, { useState } from 'react';
import './NavBar.scss';
import { BrowserRouter as Router, Link } from "react-router-dom";

const NavBar = (props) => {

  const [toggle, setToggle] = useState(props.toggleMenu);

  const validateToggle = (toggle) => {
    if (toggle == null) {
      setToggle('nav-active')
    } else {
      setToggle(null)
    }
  }

  return (
    <div className="NavBar">
      <div className="container-fluid app-bg">
        <div className="container container-nav p-0 d-flex justify-content-between align-items-center">
          <div className="logo-container">Hola</div>
          <nav className={'navbar navbar-light bg-light justify-content-between w-50 app-bg ' + toggle}>
            <Link to="/" className="navbar-brand text-white">Inicio</Link>
            <Link to="/login" className="navbar-brand text-white">Inicia sesión</Link>
            <Link to="/register" className="navbar-brand text-white">Registrarse</Link>
            <Link to="#" className="navbar-brand text-white">Lorem Ipsum</Link>

            {props.isLoged ? <Link to="#" className="navbar-brand text-white">Icono</Link> : <></>}

          </nav>
          <span class="d-block d-md-none toggle-nav" onClick={() => { setToggle(toggle => validateToggle(toggle)) }}>---</span>

        </div>
      </div>
    </div >
  )

}

export default NavBar;