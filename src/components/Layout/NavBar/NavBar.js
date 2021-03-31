import React, { useState } from 'react';
import './NavBar.scss';
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown'
const NavBar = (props) => {

  const [toggle, setToggle] = useState(props.toggleMenu);
  const user = JSON.parse(props.user);
  const validateToggle = (toggle) => {
    if (toggle == null) {
      setToggle('nav-active')
    } else {
      setToggle(null)
    }
  }

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    window.location.reload();

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

            {props.isLoged ?
              <Dropdown className="navbar-brand text-white d-inline">
                <Dropdown.Toggle id="dropdown-basic">
                  Bienvenido {user.userName}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Link to="/my-config">
                    Configuración
                  </Link>

                  <Dropdown.Item onClick={logout}>Desconectar</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              :
              <Link to="#" className="navbar-brand text-white">Lorem Ipsum</Link>
            }

          </nav>
          <span className="d-block d-md-none toggle-nav" onClick={() => { setToggle(toggle => validateToggle(toggle)) }}>---</span>

        </div>
      </div>
    </div >
  )

}

export default NavBar;