import React from 'react';
import { NavLink } from 'react-router-dom';
import './LateralMenu.scss';
const LateralMenu = () => {

  return (
    <div className="LateralMenu col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 px-0 lections-container">
      <div className="navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto w-100">
          <NavLink className="nav-link text-white p-0 nav-link bg-simple text-dark my-2 p-3 text-center" activeClassName="app-title" to="/my-config">
            <li className="nav-item first-nav">
              KYC 1
              </li>
          </NavLink>
          <NavLink className="nav-link text-white p-0 nav-link bg-simple text-dark my-2 p-3 text-center" activeClassName="app-title" to="/gift-codes">
            <li className="nav-item">
              Códigos de regalo
              </li>
          </NavLink>
          <NavLink className="nav-link text-white p-0 nav-link bg-simple text-dark my-2 p-3 text-center" activeClassName="app-title" to="bank-accounts">
            <li className="nav-item">
              Cuentas de banco
              </li>
          </NavLink>
          <NavLink className="nav-link text-white p-0 nav-link bg-simple text-dark my-2 p-3 text-center" activeClassName="app-title" to="/support">
            <li className="nav-item">
              Soporte
              </li>
          </NavLink>
        </ul>
      </div>

    </div>
  )

}


export default LateralMenu;