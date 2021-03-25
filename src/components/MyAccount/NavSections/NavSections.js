import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavSections.scss';

function NavSections() {

  return (
    <div className="NavSections">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto w-100">
            <NavLink className="nav-link text-white p-0 nav-link app-btn" activeClassName="selected" to="/my-account">
              <li className="nav-item first-nav">
                Inicio
              </li>
            </NavLink>
            <NavLink className="nav-link text-white p-0 nav-link app-btn" activeClassName="selected" exact to="/my-profile">
              <li className="nav-item">
                Mi perfil
              </li>
            </NavLink>
            <NavLink className="nav-link text-white p-0 nav-link app-btn" activeClassName="selected" to="/events">
              <li className="nav-item">
                Eventos
              </li>
            </NavLink>
            <NavLink className="nav-link text-white p-0 nav-link app-btn" activeClassName="selected" to="/my-refers">
              <li className="nav-item">
                Red de referidos
              </li>
            </NavLink>
            <NavLink className="nav-link text-white p-0 nav-link app-btn" activeClassName="selected" to="/my-classroom">
              <li className="nav-item last-nav">
                Salón de clases
              </li>
            </NavLink>
          </ul>
        </div>
      </nav>

    </div>
  )

}


export default NavSections;