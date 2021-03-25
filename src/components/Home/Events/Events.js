import React from 'react';
import './Events.scss';

function Events() {

  return (
    <div className="Events mb-5">
      <div className="row">
        <div className="col-xs-12 col-md-4 col-lg-4 col-xl-4">
          <img src="https://picsum.photos/450/200" alt="" className="img-fluid" />
        </div>
        <div className="col-xs-12 col-md-4 col-lg-4 col-xl-4">
          <img src="https://picsum.photos/450/200" alt="" className="img-fluid" />
        </div>
        <div className="col-xs-12 col-md-4 col-lg-4 col-xl-4">
          <img src="https://picsum.photos/450/200" alt="" className="img-fluid" />
        </div>
      </div>
    </div>
  )

}

Events.propTypes = {
}

export default Events;