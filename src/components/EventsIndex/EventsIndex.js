import React from 'react';
import './EventsIndex.scss';

import NavSections from '../MyAccount/NavSections/NavSections';

const EventsIndex = () => {

  return (
    <div className="EventsIndex container">
      <NavSections />
      <div className="row justify-content-center">
        <div className="col-12 col-md-7 events-intro">
          <p className="app-bg p-1 text-center mb-5">Eventos</p>
        </div>
      </div>

      <div className="row">
        <div className="col-xs-12 col-md-4 col-lg-4 col-xl-4 px-4">
          <img src="https://picsum.photos/450/200" alt="" className="img-fluid d-block" />
        </div>
        <div className="col-xs-12 col-md-4 col-lg-4 col-xl-4 px-4">
          <img src="https://picsum.photos/450/200" alt="" className="img-fluid d-block" />
        </div>
        <div className="col-xs-12 col-md-4 col-lg-4 col-xl-4 px-4">
          <img src="https://picsum.photos/450/200" alt="" className="img-fluid d-block" />
        </div>

      </div>
      <div className="row mt-4">
        <div className="col-xs-12 col-md-4 col-lg-4 col-xl-4 px-4">
          <img src="https://picsum.photos/450/200" alt="" className="img-fluid d-block" />
        </div>
        <div className="col-xs-12 col-md-4 col-lg-4 col-xl-4 px-4">
          <img src="https://picsum.photos/450/200" alt="" className="img-fluid d-block" />
        </div>
        <div className="col-xs-12 col-md-4 col-lg-4 col-xl-4 px-4">
          <img src="https://picsum.photos/450/200" alt="" className="img-fluid d-block" />
        </div>

      </div>

    </div>
  )

}
EventsIndex.propTypes = {
}

export default EventsIndex;