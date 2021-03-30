import React from 'react';
import NavSections from '../NavSections/NavSections';
import { NavLink } from 'react-router-dom';
import { Player, CurrentTimeDisplay, TimeDivider, ControlBar, PlaybackRateMenuButton, ReplayControl, ForwardControl } from 'video-react';


import {Accordion, Button} from 'react-bootstrap';
import './MyAccountClassRoom.scss';

const MyAccountClassRoom = () => {
  let width = window.innerWidth;
  let active = null;

  if (width >= 768) {
    active = '0';
  }

  return (
    <div className="MyAccountClassRoom container">
      <NavSections />

      <div className="row text-center justify-content-center">
        <div className="col-12 col-md-6 app-bg text-white mb-5 p-1">Clase 1</div>
      </div>

      <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 px-0 lections-container">

      <Accordion defaultActiveKey={active}>

      <Accordion.Toggle as={Button} variant="link" eventKey="0" className="d-block d-md-none">
       
        <span className="toggle-nav">- - -</span>

      </Accordion.Toggle>

      <Accordion.Collapse eventKey="0">
        <div className="navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto w-100">
            <NavLink className="nav-link text-white p-0 nav-link bg-simple text-dark my-2 p-3 text-center app-title" activeClassName="selected" to="/my-account">
              <li className="nav-item first-nav">
                Clase 1
            </li>
            </NavLink>
            <NavLink className="nav-link text-white p-0 nav-link bg-simple text-dark my-2 p-3 text-center" activeClassName="selected" exact to="/my-profile">
              <li className="nav-item">
                Clase 2
            </li>
            </NavLink>
            <NavLink className="nav-link text-white p-0 nav-link bg-simple text-dark my-2 p-3 text-center" activeClassName="selected" to="/events">
              <li className="nav-item">
                Clase 3
            </li>
            </NavLink>
            <NavLink className="nav-link text-white p-0 nav-link bg-simple text-dark my-2 p-3 text-center" activeClassName="selected" to="/my-refers">
              <li className="nav-item">
                Clase 4
            </li>
            </NavLink>
            <NavLink className="nav-link text-white p-0 nav-link bg-simple text-dark my-2 p-3 text-center" activeClassName="selected" to="/my-classroom">
              <li className="nav-item last-nav">
                Clase 5
            </li>
            </NavLink>
          </ul>
        </div>

      </Accordion.Collapse>
      </Accordion>
      </div>


        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <Player className="video" playsInline poster="https://picsum.photos/600/360" src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
            <ControlBar>
              <CurrentTimeDisplay disabled />
              <TimeDivider disabled />
              <ForwardControl disabled />
              <PlaybackRateMenuButton disabled />

              <ReplayControl disabled />

            </ControlBar>
          </Player>
          <section className="resumen-lection mt-3">
            <p>Este es un resumen de la clase.
              
              <br/> 
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </section>
          <section className="next-lection text-right">
            <button className="btn app-btn">Siguiente clase</button>
          </section>


        </div>


        <div class="col-md-3 col-lg-3 col-xl-3 text-center p-3 lections-container ">
          <div>
            <p className="frame-btn p-2">Plan</p>
          </div>

          <div className="my-5">
            <p><span>C </span>Certificado</p>
          </div>

          <div className="my-5">
            <p><span>L </span>Libros</p>
          </div>
          <div className="my-5">
            <p><span>E </span>Examen</p>
          </div>


        </div>
      </div>
    </div>
  )

}

export default MyAccountClassRoom;